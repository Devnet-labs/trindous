/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "motionsites.ai" },
      { protocol: "https", hostname: "images.higgs.ai" },
      { protocol: "https", hostname: "shrug-person-78902957.figma.site" },
    ],
  },
};
module.exports = nextConfig;
