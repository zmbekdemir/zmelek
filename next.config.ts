import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/zmelek",  // Your repository name
  assetPrefix: "/zmelek", // Ensures assets load correctly
  images: {
    unoptimized: true, // Required for static exports (GitHub Pages doesn't support Next.js Image Optimization)
  },
};

export default nextConfig;
