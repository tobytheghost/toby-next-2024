import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

export const getPostBySlugQuery = async (id: string) => {
  const filePath = path.resolve(`src/content/blog/${id}.mdx`);
  const postFile = fs.readFileSync(filePath);
  if (!postFile) return;

  const stats = fs.statSync(filePath);
  const { mtime } = stats || {};

  const postMeta = await serialize(postFile, {
    parseFrontmatter: true,
    mdxOptions: {
      // @ts-expect-error rehypeHighlight is not typed correctly
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    ...postMeta,
    frontmatter: {
      ...postMeta.frontmatter,
      lastModified: mtime,
    },
    id,
  };
};
