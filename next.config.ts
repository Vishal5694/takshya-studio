import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/takshya-studio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
