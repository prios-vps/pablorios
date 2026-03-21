import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const rehypeOptions: Object = {
  theme: {
    dark: 'houston',
    light: 'catppuccin-latte',
  },
  keepBackground: true,
};

export const mdxOptions: Object = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
};
