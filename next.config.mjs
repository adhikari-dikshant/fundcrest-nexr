/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
    reactCompiler: true,
    output: "export",
    ...(basePath ? { basePath, assetPrefix: basePath } : {}),
    sassOptions: {
        additionalData: `$base-path: "${basePath}";`,
    },
};

export default nextConfig;
