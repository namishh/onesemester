import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },

};

export default nextConfig;
