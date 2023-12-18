"use client";

import { useState, useRef, useEffect } from "react";
import { WhiteClickyLink, YellowClickyLink } from "../buttons";
import StarsCanvas from "../Stars";
import { ThreeDRotationIcon } from "../svgs";
import { useTypewriter } from "~/hooks/useTypewriter";

export const HeroSection = () => {
  const [orbit, setOrbit] = useState(false);
  const [displayHelper, setDisplayHelper] = useState(false);
  const toggleOrbit = () => setOrbit((orbit) => !orbit);

  useTypewriter([
    "a Full-Stack Engineer.",
    "a problem solver.",
    "an out-of-the-box thinker.",
    "a board game geek.",
    "a food lover.",
  ]);

  useEffect(() => {
    if (!orbit) return;
    setDisplayHelper(true);
    setTimeout(() => {
      setDisplayHelper(false);
    }, 2000);
  }, [orbit]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="container z-10 flex flex-col items-center text-white">
        {!orbit && (
          <>
            <h1 className="mb-4 text-center text-6xl font-semibold ">
              Hi, i'm <span className="text-yellow-500">Toby Gates</span>.
            </h1>
            <h2 className="mb-8 text-3xl font-semibold">
              I'm a full stack web developer.
            </h2>
            <div className="flex gap-4">
              <YellowClickyLink href="/contact">Contact Me</YellowClickyLink>
              <WhiteClickyLink href="/blog">Web Dev Blog</WhiteClickyLink>
            </div>
          </>
        )}
        {orbit && (
          <>
            <h2 className="mb-8 cursor-none text-3xl font-semibold">
              Drag to explore space!
            </h2>
          </>
        )}
      </div>
      <StarsCanvas orbit={orbit} />
      <button
        className="absolute bottom-4 right-4"
        onClick={toggleOrbit}
        aria-label="Orbit 3D Background"
      >
        <ThreeDRotationIcon />
      </button>
    </section>
  );
};
