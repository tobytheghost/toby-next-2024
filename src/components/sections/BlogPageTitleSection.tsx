import NextImage from "next/image";

type BlogPageTitleSectionProps = {
  title: string;
  author: string;
  date: Date;
  image: string;
};

export const BlogPageTitleSection = ({
  title,
  author,
  date,
  image,
}: BlogPageTitleSectionProps) => {
  return (
    <section className="container m-auto flex max-w-7xl flex-col items-center px-4">
      <NextImage
        priority
        src={image}
        alt={title}
        width={1920}
        height={400}
        className="mb-4 w-full"
      />
      <h1 className="my-4 text-4xl font-semibold">{title}</h1>
      <p className="mb-4 text-gray-500">
        By <span className="text-black">{author}</span> -{" "}
        {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date)}
      </p>
      <hr className="mb-4 w-1/2 border-gray-300" />
    </section>
  );
};
