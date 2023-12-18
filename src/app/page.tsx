import { AboutSection } from "~/components/sections/AboutSection";
import { BlogSection } from "~/components/sections/BlogSection";
import { CtaSection } from "~/components/sections/CtaSection";
import { HeroSection } from "~/components/sections/HeroSection";
import { StackSection } from "~/components/sections/StackSection";
import { getAllPostsQuery } from "~/contexts/blog/getAllPosts.query";

export const metadata = {
  title: "Toby Gates | Senior Software Engineer",
  description:
    "Senior Software Engineer based in Bedfordshire, UK working on bespoke, fast, responsive and secure web applications.",
};

export default async function HomePage() {
  const posts = (await getAllPostsQuery()).slice(0, 3);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <CtaSection />
      <BlogSection posts={posts} />
    </>
  );
}
