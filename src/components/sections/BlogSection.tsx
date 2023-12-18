import { H2 } from "../typography";
import { type AllPosts } from "~/contexts/blog/getAllPosts.query";
import { YellowClickyLink } from "../buttons";
import BlogPosts from "../BlogPosts";

export const BlogSection = async ({ posts }: { posts: AllPosts }) => {
  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center  px-4 py-12"
    >
      <div className="container flex flex-col items-center">
        <H2>Latest Articles</H2>
        <BlogPosts posts={posts} />
        <YellowClickyLink href="/blog">View All Articles</YellowClickyLink>
      </div>
    </section>
  );
};
