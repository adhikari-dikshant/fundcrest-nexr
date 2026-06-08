/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    sassOptions: {
        additionalData: `
        @use "./scss/variable" as *;
        @use "./scss/mixin" as mix;
      `,
    },
};

export default nextConfig;
