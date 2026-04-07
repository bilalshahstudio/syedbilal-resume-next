// next.config.js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignores ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // ignores TypeScript errors
  },
};

export default nextConfig;
