import Link from "next/link";
import NextImage from "next/image";

import { type AllPosts } from "~/contexts/blog/getAllPosts.query";

const BlogPosts = ({ posts }: { posts: AllPosts }) => {
  return (
    <div className="mb-8 grid w-full grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(({ title, thumbnail, author, date, snippet, id, tags }) => (
        <article key={id} className="group mb-4 w-full">
          <Link href={`/blog/${id}`}>
            <div className="relative w-full overflow-hidden rounded-md pb-[60%]">
              <NextImage
                className="absolute h-full w-full transform object-cover transition-all duration-200 ease-in-out group-hover:scale-[1.05]"
                alt={title}
                src={thumbnail}
                width={400}
                height={300}
              />
            </div>
            <h2 className="my-2 text-xl font-semibold">{title}</h2>
            <p className="mb-2 text-gray-500">
              By <span className="text-black">{author}</span> -{" "}
              {new Intl.DateTimeFormat("en-GB", {
                dateStyle: "long",
              }).format(date)}
            </p>
            <div className="mb-4 flex gap-2">
              {tags.map((tag) => (
                <span className="rounded-xl bg-yellow-500 px-2">{tag}</span>
              ))}
            </div>
            <p>{snippet}</p>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;
