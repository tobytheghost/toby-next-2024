import React from "react";
import { H2 } from "../typography";

export const BlogSection = () => {
  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center bg-gray-50 px-4 py-12"
    >
      <div className="container flex flex-col items-center ">
        <H2>Blog</H2>
      </div>
    </section>
  );
};
