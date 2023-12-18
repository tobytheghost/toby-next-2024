import { z } from "zod";

export type BlogPostSource = z.infer<typeof blogPostSchema>;

const blogPostSchema = z.object({
  id: z.string(),
  compiledSource: z.string(),
  frontmatter: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    author: z.string(),
    image: z.string().url(),
    thumbnail: z.string().url(),
    description: z.string(),
    snippet: z.string(),
  }),
  scope: z.object({
    // ...
  }),
});

export const parseBlogPost = (blogPost: unknown) =>
  blogPostSchema.parse(blogPost);
