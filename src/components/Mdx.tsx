"use client";

import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { type BlogPostSource } from "~/utils/blogPostParser";

import {
  FramerMotionDemo1,
  FramerMotionDemo2,
  FramerMotionDemo3,
  FramerMotionDemo4,
  StarsDemo1,
  StarsDemo2,
  StarsDemo3,
} from "./blog/demos";

const Mdx = (props: BlogPostSource) => {
  return (
    <div className="flex flex-col">
      <MDXRemote
        {...props}
        components={{
          h1: () => null,
          h2: (props) => (
            <h2
              className="mb-4 mt-6 text-3xl font-semibold first-of-type:mt-0"
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className="mb-4 mt-2 text-2xl font-semibold first-of-type:mt-0"
              {...props}
            />
          ),
          h4: (props) => (
            <h4 className="mb-4 text-xl font-semibold" {...props} />
          ),
          h5: (props) => (
            <h5 className="mb-4 text-lg font-semibold" {...props} />
          ),
          h6: (props) => (
            <h6 className="mb-4 text-base font-semibold" {...props} />
          ),
          p: (props) => <p className="mb-4 last-of-type:mb-0" {...props} />,
          a: (props) => (
            <Link
              href={props.href as unknown as string}
              className="text-blue-500 underline hover:text-blue-700"
              {...props}
              ref={null}
            />
          ),
          ul: (props) => (
            <ul className="mb-4 list-inside list-disc" {...props} />
          ),
          ol: (props) => (
            <ol className="mb-4 list-inside list-decimal" {...props} />
          ),
          li: (props) => <li className="mb-2" {...props} />,
          blockquote: (props) => (
            <blockquote
              className="mb-4 rounded-md border-l-4 border-yellow-500 bg-gray-100 p-2 italic"
              {...props}
            />
          ),
          pre: (props) => (
            <pre className="mb-4 overflow-x-auto rounded-md" {...props} />
          ),
          code: (props) => (
            <code
              className="rounded-md bg-gray-100 p-1 font-mono text-sm"
              {...props}
            />
          ),
          FramerMotionDemo1,
          FramerMotionDemo2,
          FramerMotionDemo3,
          FramerMotionDemo4,
          StarsDemo1,
          StarsDemo2,
          StarsDemo3,
        }}
      />
    </div>
  );
};

export default Mdx;
