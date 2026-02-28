import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import { rehypeOptions } from '@/lib/mdxOptions';

const nextConfig: NextConfig = {
	reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [['rehype-pretty-code', rehypeOptions]],
  },
});

export default withMDX(nextConfig);

