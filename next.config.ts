import type { NextConfig } from "next";
import createMDX from '@next/mdx';
import { mdxOptions } from './src/lib/mdxOptions';
//import rehypePrettyCode, { type Options } from "rehype-pretty-code";


/* @type {import('rehype-pretty-code').Options} */
/*const rehypeOptions = {
  theme: {
    dark: "houston",
    light: "catppuccin-latte",
  },
  keepBackground: true,
};*/

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

/*const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [['rehype-pretty-code', rehypeOptions]],
  },
});*/

const withMDX = createMDX({
  options: mdxOptions as any,
});

export default withMDX(nextConfig);

