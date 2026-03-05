import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Serve modern formats — browsers that support WebP/AVIF get much smaller files
    formats: ["image/avif", "image/webp"],
    // Only generate these widths (reduces build time and CDN variants)
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [32, 64, 128, 256, 384],
    // Cache optimized images for 1 year on Netlify CDN
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
