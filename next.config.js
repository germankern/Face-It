/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
