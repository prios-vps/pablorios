import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactCompiler: true,
  trailingSlash: true,
  allowedDevOrigins: [
    '192.168.1.3',
    '192.168.1.5',
  ],
};

export default nextConfig;

