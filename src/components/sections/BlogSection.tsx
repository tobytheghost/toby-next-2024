import Link from "next/link";
import NextImage from "next/image";

import { H2 } from "../typography";
import { getAllPostsQuery } from "~/contexts/blog/getAllPosts.query";

export const BlogSection = async () => {
  const posts = (await getAllPostsQuery()).slice(0, 3);
  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-center bg-gray-50 px-4 py-12"
    >
      <div className="container flex flex-col items-center ">
        <H2>Latest Articles</H2>
        {posts.map(({ title, thumbnail, author, date, snippet, id }) => (
          <article key={id}>
            <Link href={`/blog/${id}`}>
              <NextImage
                alt={title}
                src={thumbnail}
                width={400}
                height={300}
                className="rounded-md"
              />
              <h2 className="my-2 text-xl font-semibold">{title}</h2>
              <p className="mb-2 text-gray-500">
                By <span className="text-black">{author}</span> -{" "}
                {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(
                  date,
                )}
              </p>
              <p>{snippet}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
