import fs from "fs";
import path from "path";

import { getPostBySlugQuery } from "./getPostBySlug.query";
import { parseBlogPost } from "~/utils/blogPostParser";

export const getAllPostsQuery = async () => {
  const slugs = fs.readdirSync(path.resolve("src/content/blog"));
  const posts = (
    await Promise.all(
      slugs
        .map((slug) => {
          const realSlug = slug.replace(/\.mdx$/, "");
          return getPostBySlugQuery(realSlug);
        })
        .filter(Boolean),
    )
  ).map((post) => {
    const { frontmatter, id } = parseBlogPost(post);
    return {
      ...frontmatter,
      id,
    };
  });
  return posts;
};
