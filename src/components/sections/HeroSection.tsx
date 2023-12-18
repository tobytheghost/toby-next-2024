import React from "react";
import { H1 } from "../typography";
import { BlackClickyLink, YellowClickyLink } from "../buttons";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex h-[50vh] flex-col items-center justify-center bg-gray-950 px-4 py-12"
    >
      <div className="container flex flex-col items-center text-white">
        <H1 className="after:hidden">
          Hi, i'm <span className="text-yellow-500">Toby Gates</span>.
        </H1>
        <h2 className="mb-4 text-3xl font-semibold">
          I'm a full stack web developer.
        </h2>
        <div className="flex gap-4">
          <YellowClickyLink href="#contact">Contact Me</YellowClickyLink>
          <BlackClickyLink href="/blog">Web Dev Blog</BlackClickyLink>
        </div>
      </div>
    </section>
  );
};
