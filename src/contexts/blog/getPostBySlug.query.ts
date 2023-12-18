import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

export const getPostBySlugQuery = async (id: string) => {
  const postFile = fs.readFileSync(path.resolve(`src/content/blog/${id}.mdx`));
  if (!postFile) return;

  const postMeta = await serialize(postFile, {
    parseFrontmatter: true,
    mdxOptions: {
      // @ts-expect-error rehypeHighlight is not typed correctly
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    ...postMeta,
    id,
  };
};
