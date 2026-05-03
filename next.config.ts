const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Parent directory may contain package-lock.json (e.g. user home), which makes
  // Turbopack infer the wrong workspace root unless this is set explicitly.
  turbopack: {
    // Use cwd: compiled next.config.ts can leave __dirname outside the repo.
    root: path.resolve(process.cwd()),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
