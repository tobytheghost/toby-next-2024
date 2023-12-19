import { type MetadataRoute } from "next";
import { env } from "~/env";

import { getAllPostsQuery } from "~/contexts/blog/getAllPosts.query";

const WEBSITE_HOST_URL = env.SITE_URL;

const ROUTES = ["", "/contact", "/web-development-blog"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsQuery();
  const changeFrequency = "daily" as const;

  const routes = ROUTES.map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${WEBSITE_HOST_URL}/web-development-blog/${post.id}`,
    lastModified: post.lastModified.toISOString(),
    changeFrequency,
  }));

  return [...routes, ...postRoutes];
}
