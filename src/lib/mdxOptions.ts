import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

export const rehypeOptions = {
  theme: {
    dark: 'houston',
    light: 'catppuccin-latte',
  },
  keepBackground: true,
};

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
};

