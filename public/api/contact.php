<?php
declare(strict_types=1);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$configFile = __DIR__ . '/brevo-config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'Email service is not configured.']);
    exit;
}
require $configFile;

if (!defined('BREVO_API_KEY') || !defined('BREVO_SENDER_EMAIL') || !defined('BREVO_RECIPIENT_EMAIL')) {
    http_response_code(500);
    echo json_encode(['error' => 'Email service is not configured.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body.']);
    exit;
}

function field(array $data, string $key): string
{
    return isset($data[$key]) ? trim((string) $data[$key]) : '';
}

$name = field($data, 'name');
$email = field($data, 'email');
$phone = field($data, 'phone');
$product = field($data, 'product');
$message = field($data, 'message');

$errors = [];
if ($name === '' || mb_strlen($name) < 2) {
    $errors['name'] = 'Please enter your name.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Enter a valid email address.';
}
if (!preg_match('/^\d{10}$/', $phone)) {
    $errors['phone'] = 'Enter exactly 10 digits.';
}
if ($product === '') {
    $errors['product'] = 'Please select a product.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => 'Validation failed.', 'fieldErrors' => $errors]);
    exit;
}

function esc(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$htmlContent = '<h2>New consultation request</h2>'
    . '<p><strong>Name:</strong> ' . esc($name) . '</p>'
    . '<p><strong>Email:</strong> ' . esc($email) . '</p>'
    . '<p><strong>Phone:</strong> ' . esc($phone) . '</p>'
    . '<p><strong>Product:</strong> ' . esc($product) . '</p>'
    . '<p><strong>Message:</strong><br>' . nl2br(esc($message !== '' ? $message : '-')) . '</p>';

$payload = json_encode([
    'sender' => ['name' => 'Fundcrest Website', 'email' => BREVO_SENDER_EMAIL],
    'to' => [['email' => BREVO_RECIPIENT_EMAIL]],
    'replyTo' => ['email' => $email, 'name' => $name],
    'subject' => 'New Consultation Request from ' . $name,
    'htmlContent' => $htmlContent,
]);

$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Accept: application/json',
        'api-key: ' . BREVO_API_KEY,
    ],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    error_log('Brevo API error: ' . $status . ' ' . $curlError . ' ' . $response);
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send email.']);
    exit;
}

echo json_encode(['success' => true]);
