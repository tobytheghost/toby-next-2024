import { H2 } from "../typography";
import { type AllPosts } from "~/contexts/blog/getAllPosts.query";
import { YellowButton } from "../Button";
import BlogPosts from "../BlogPosts";

export const BlogSection = async ({ posts }: { posts: AllPosts }) => {
  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="container flex flex-col items-center">
        <H2>Latest Articles</H2>
        <BlogPosts posts={posts} />
        <YellowButton href="/web-development-blog">
          View more articles
        </YellowButton>
      </div>
    </section>
  );
};
