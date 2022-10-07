/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  distDir: "build",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
