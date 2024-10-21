/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    typescript: {
        // Disable type checking since eslint handles this
        // we can check types in github actions & not have to block our builds
        ignoreBuildErrors: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        // we can check eslint errors in github actions & not have to block our builds - but if you want everything in one place and you are okay with this step, dont bother but i will show you how faster it is in a second
        ignoreDuringBuilds: true,
    },
    ignoreBuildErrors: true,
};

export default config;
