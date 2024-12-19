import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'app', 'styles')],
    prependData: `@use 'abstracts' as *;`,
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;