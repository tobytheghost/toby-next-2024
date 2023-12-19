"use client";

import { Suspense, useState } from "react";
import { WhiteButton, YellowButton } from "../Button";
import { Stars } from "../Stars";
import { useTypewriter } from "~/hooks/useTypewriter";

export const HeroSection = () => {
  const [orbit, setOrbit] = useState(false);
  const toggleOrbit = () => setOrbit((orbit) => !orbit);

  const typewriter = useTypewriter([
    "a Full-Stack Engineer.",
    "a problem solver.",
    "an out-of-the-box thinker.",
    "a board game geek.",
    "a food lover.",
  ]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-4 py-12"
    >
      <div
        className={`container z-10 flex flex-col items-center text-white ${
          orbit ? "pointer-events-none" : ""
        }`}
      >
        {!orbit && (
          <>
            <h1 className="pointer-events-none mb-4 text-center text-4xl font-semibold md:text-6xl">
              Hi, i'm <span className="text-yellow-500">Toby Gates</span>.
            </h1>
            <h2 className="pointer-events-none mb-8 text-center text-2xl font-semibold md:text-3xl">
              I'm <span ref={typewriter}>full stack web developer.</span>
            </h2>
            <div className="flex gap-4">
              <YellowButton href="/contact">Contact Me</YellowButton>
              <WhiteButton href="/web-development-blog">Web Blog</WhiteButton>
            </div>
          </>
        )}
        {orbit && (
          <>
            <h2 className="pointer-events-none mb-8 cursor-none text-3xl font-semibold">
              Drag to explore space!
            </h2>
          </>
        )}
      </div>
      <div className={!orbit ? "pointer-events-none" : ""}>
        <Suspense fallback={null}>
          <Stars orbit={orbit} />
        </Suspense>
      </div>
      <div className="absolute bottom-4 left-4 hidden md:block">
        <YellowButton
          onClick={toggleOrbit}
          aria-label={!orbit ? "Explore Space!" : "Back to Earth"}
        >
          {!orbit ? "Explore Space!" : "Back to Earth"}
        </YellowButton>{" "}
      </div>
    </section>
  );
};
