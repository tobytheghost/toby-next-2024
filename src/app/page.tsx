import { AboutSection } from "~/components/sections/AboutSection";
import { BlogSection } from "~/components/sections/BlogSection";
import { HeroSection } from "~/components/sections/HeroSection";
import { StackSection } from "~/components/sections/StackSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <BlogSection />
    </>
  );
}
