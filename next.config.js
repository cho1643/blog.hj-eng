/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;

    return {
        env: {
            BASE_URL: isDev
                ? "http://localhost:3000"
                : "https://blog.jangjong.in",
        },
        turbopack: {
            root: __dirname,
        },
    };
};

export default nextConfig;
