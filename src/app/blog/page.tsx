import NextImage from "next/image";
import Link from "next/link";
import { H1 } from "~/components/typography";
import { getAllPostsQuery } from "~/contexts/blog/getAllPosts.query";

export default async function BlogPage() {
  const posts = await getAllPostsQuery();
  return (
    <>
      <section className="container m-auto my-8 mb-8 flex max-w-7xl flex-col px-4">
        <H1 className="pb-2">Latest Articles</H1>
      </section>
      <section className="container m-auto my-8 mb-8 flex max-w-7xl flex-col px-4">
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
      </section>
    </>
  );
}
