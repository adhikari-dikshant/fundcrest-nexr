/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
    reactCompiler: true,
    output: "export",
    // Export emits route/index.html; without it Apache hits the route's folder (prefetch .txt files), slash-redirects and 403s.
    trailingSlash: true,
    ...(basePath ? { basePath, assetPrefix: basePath } : {}),
    sassOptions: {
        additionalData: `$base-path: "${basePath}";`,
    },
};

export default nextConfig;
