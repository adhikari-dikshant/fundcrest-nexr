"use client";

import { useState } from "react";
import Modal from "./modal";
import { asset } from "../lib/asset";

const products = [
    "Secured/Unsecured Loan",
    "MSME Loan",
    "Business Loan",
    "Personal Loan",
];

const STATUS = {
    IDLE: "idle",
    SENDING: "sending",
    SUCCESS: "success",
    ERROR: "error",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;

function validate(formEl) {
    const data = new FormData(formEl);
    const errors = {};

    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const product = (data.get("product") || "").toString().trim();

    if (!name) {
        errors.name = "Please enter your name.";
    } else if (name.length < 2) {
        errors.name = "Name looks too short.";
    }

    if (!email) {
        errors.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(email)) {
        errors.email = "Enter a valid email address.";
    }

    if (!phone) {
        errors.phone = "Please enter your phone number.";
    } else if (!PHONE_REGEX.test(phone)) {
        errors.phone = "Enter exactly 10 digits.";
    }

    if (!product) {
        errors.product = "Please select a product.";
    }

    return errors;
}

export default function ConnectForm() {
    const [status, setStatus] = useState(STATUS.IDLE);
    const [errors, setErrors] = useState({});
    const [modal, setModal] = useState(null);

    function clearFieldError(field) {
        setErrors((prev) => {
            if (!prev[field]) return prev;
            const next = { ...prev };
            delete next[field];
            return next;
        });
    }

    function handlePhoneChange(e) {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
        clearFieldError("phone");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;

        const validationErrors = validate(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setModal({ type: "error", message: "Please fix the highlighted fields and try again." });
            return;
        }

        setStatus(STATUS.SENDING);

        const data = new FormData(form);

        try {
            const res = await fetch(asset("/api/contact.php"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.get("name"),
                    email: data.get("email"),
                    phone: data.get("phone"),
                    product: data.get("product"),
                    message: data.get("message"),
                }),
            });

            if (!res.ok) {
                throw new Error("Request failed");
            }

            setStatus(STATUS.SUCCESS);
            setModal({ type: "success", message: "Thanks! We'll be in touch within one business day." });
            form.reset();
            setErrors({});
        } catch (err) {
            console.error("Failed to send consultation request", err);
            setStatus(STATUS.ERROR);
            setModal({ type: "error", message: "Something went wrong. Please try again or call us directly." });
        }
    }

    return (
        <>
            <form className="connect-form" onSubmit={handleSubmit} noValidate>
                <p className="pill mb-3">Schedule Consultation</p>

                <h2 className="connect-form__title">Let&apos;s Connect</h2>

                <p className="connect-form__desc">
                    Connect with our experts for a free consultation and tailored solutions.
                </p>

                <div className="connect-form__grid">
                    <div className="connect-form__field">
                        <label className="connect-form__label" htmlFor="name">
                            Your name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={`connect-form__input${errors.name ? " connect-form__input--error" : ""}`}
                            placeholder="e.g. Rakesh Kumar"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            onChange={() => clearFieldError("name")}
                        />
                        {errors.name && (
                            <p className="connect-form__error" id="name-error">{errors.name}</p>
                        )}
                    </div>

                    <div className="connect-form__field">
                        <label className="connect-form__label" htmlFor="email">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`connect-form__input${errors.email ? " connect-form__input--error" : ""}`}
                            placeholder="e.g. rakesh@email.com"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            onChange={() => clearFieldError("email")}
                        />
                        {errors.email && (
                            <p className="connect-form__error" id="email-error">{errors.email}</p>
                        )}
                    </div>

                    <div className="connect-form__field">
                        <label className="connect-form__label" htmlFor="phone">
                            Phone number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="numeric"
                            pattern="\d{10}"
                            minLength={10}
                            maxLength={10}
                            className={`connect-form__input${errors.phone ? " connect-form__input--error" : ""}`}
                            placeholder="e.g. 9876543210"
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            onChange={handlePhoneChange}
                        />
                        {errors.phone && (
                            <p className="connect-form__error" id="phone-error">{errors.phone}</p>
                        )}
                    </div>

                    <div className="connect-form__field">
                        <label className="connect-form__label" htmlFor="product">
                            Products
                        </label>
                        <div className="connect-form__select-wrap">
                            <select
                                id="product"
                                name="product"
                                className={`connect-form__select${errors.product ? " connect-form__input--error" : ""}`}
                                defaultValue=""
                                aria-invalid={Boolean(errors.product)}
                                aria-describedby={errors.product ? "product-error" : undefined}
                                onChange={() => clearFieldError("product")}
                            >
                                <option value="" disabled>
                                    Select Products
                                </option>
                                {products.map((product) => (
                                    <option key={product} value={product}>
                                        {product}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {errors.product && (
                            <p className="connect-form__error" id="product-error">{errors.product}</p>
                        )}
                    </div>
                </div>

                <div className="connect-form__field connect-form__field--full">
                    <label className="connect-form__label" htmlFor="message">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="connect-form__textarea"
                        placeholder="Type here ..."
                        rows={5}
                    />
                </div>

                <button
                    type="submit"
                    className="btn-main connect-form__submit"
                    disabled={status === STATUS.SENDING}
                >
                    {status === STATUS.SENDING ? "Sending..." : "Schedule a Free Consultation"}
                </button>
            </form>

            <Modal modal={modal} onClose={() => setModal(null)} />
        </>
    );
}
