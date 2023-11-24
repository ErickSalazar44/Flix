/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
            },
        ],
        deviceSizes: [320, 420, 768, 1024, 1200, 1920],
        formats: ["image/avif", "image/webp"],
    },
};

module.exports = nextConfig;
