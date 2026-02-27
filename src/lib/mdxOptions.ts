import type { PluggableList } from 'unified';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

export const rehypeOptions = {
  theme: {
    dark: 'houston',
    light: 'catppuccin-latte',
  },
  keepBackground: true,
};

export const remarkPlugins: PluggableList = [remarkGfm];

export const rehypePlugins: PluggableList = [
  [rehypePrettyCode, rehypeOptions],
];

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
};

