const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/zmelek" : "", // Use basePath only in production
  assetPrefix: isProd ? "/zmelek" : "",
  images: {
    unoptimized: true, // Needed for GitHub Pages
  },
};

export default nextConfig;
