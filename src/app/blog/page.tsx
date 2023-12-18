import BlogPosts from "~/components/BlogPosts";
import { H1 } from "~/components/typography";
import { getAllPostsQuery } from "~/contexts/blog/getAllPosts.query";

export default async function BlogPage() {
  const posts = await getAllPostsQuery();
  return (
    <>
      <section className="container m-auto my-12 flex max-w-7xl flex-col px-4">
        <H1 className="pb-2">Web Development Blog</H1>
      </section>
      <section className="container m-auto mb-12 flex max-w-7xl flex-col px-4">
        <BlogPosts posts={posts} />
      </section>
    </>
  );
}
