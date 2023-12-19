import React from "react";
import { H2 } from "../typography";
import { StackCard } from "../StackCard";
import {
  ExpressIcon,
  JestIcon,
  PrismaIcon,
  ReactIcon,
  StorybookIcon,
  TailwindIcon,
  TypescriptIcon,
  VSCodeIcon,
  ZodIcon,
} from "../svgs/stackCardSvgs";

export const StackSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 px-4 pb-8 pt-16">
      <div className="container flex flex-col items-center ">
        <H2>My Stack</H2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StackCard
            name="Typescript"
            icon={<TypescriptIcon />}
            href="https://www.typescriptlang.org/"
          >
            TypeScript is an open-source high-level programming language
            developed by Microsoft that adds static typing with optional type
            annotations to JavaScript
          </StackCard>
          <StackCard
            name="Next / React"
            icon={<ReactIcon />}
            href="https://nextjs.org/"
          >
            Next.js is an open-source web development framework created by
            Vercel providing React-based web applications with server-side
            rendering and static generation.
          </StackCard>
          <StackCard
            name="Tailwind CSS"
            icon={<TailwindIcon />}
            href="https://tailwindcss.com/"
          >
            Tailwind CSS is an open source CSS framework. It is a utility-first
            CSS framework that is composed of more than 300 CSS utility classes
            to build custom user interfaces.
          </StackCard>
          <StackCard
            name="VS Code"
            icon={<VSCodeIcon />}
            href="https://code.visualstudio.com/"
          >
            Visual Studio Code, also commonly referred to as VS Code, is a
            source-code editor developed by Microsoft for Windows, Linux and
            macOS.
          </StackCard>
          <StackCard name="Jest" icon={<JestIcon />} href="https://jestjs.io/">
            Jest is a JavaScript testing framework designed to ensure
            correctness of any JavaScript codebase. It allows you to write tests
            with an approachable, familiar and feature-rich API that gives you
            results quickly.
          </StackCard>
          <StackCard
            name="Storybook"
            icon={<StorybookIcon />}
            href="https://storybook.js.org/"
          >
            Storybook is a frontend workshop for building UI components and
            pages in isolation. Thousands of teams use it for UI development,
            testing, and documentation.
          </StackCard>
          <StackCard name="Zod" href="https://zod.dev/" icon={<ZodIcon />}>
            Zod is a TypeScript-first schema declaration and validation library.
            It is designed to be fast, composable, performant and provide the
            best user experience.
          </StackCard>
          <StackCard
            name="Express"
            href="https://expressjs.com/"
            icon={<ExpressIcon />}
          >
            Express is a back end web application framework for building RESTful
            APIs with Node.js. It is excellent for building robust APIs quickly.
          </StackCard>
          <StackCard
            name="Prisma"
            icon={<PrismaIcon />}
            href="https://www.prisma.io/"
          >
            Prisma is a database toolkit. It replaces traditional ORMs and makes
            database access easy with an auto-generated query builder for
            TypeScript & Node.js.
          </StackCard>
        </div>
      </div>
    </section>
  );
};
