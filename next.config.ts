import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["gsap"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
