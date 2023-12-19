import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { parseBlogPost } from "~/utils/blogPostParser";
import Mdx from "~/components/Mdx";
import { BlogPageTitleSection } from "~/components/sections/BlogPageTitleSection";
import { getPostBySlugQuery } from "~/contexts/blog/getPostBySlug.query";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  const source = await getPostBySlugQuery(id);
  if (!source) return notFound();

  const post = parseBlogPost(source);

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      type: "article",
      authors: [post.frontmatter.author],
      images: [post.frontmatter.thumbnail],
    },
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const source = await getPostBySlugQuery(id);
  if (!source) return notFound();

  const post = parseBlogPost(source);

  return (
    <>
      <BlogPageTitleSection {...post.frontmatter} />
      <section className="container m-auto mb-8 flex max-w-7xl flex-col px-4">
        <Mdx {...post} />
      </section>
    </>
  );
}
