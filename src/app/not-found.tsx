import NextImage from "next/image";
import { YellowClickyLink } from "~/components/buttons";
import { P } from "~/components/typography";

export default function NotFoundPage() {
  return (
    <>
      <section className="container m-auto my-12 flex flex-col px-4">
        <div className="m-auto flex w-full max-w-3xl flex-col rounded-md bg-white p-4 py-8 shadow-md">
          <h1 className="flex flex-col items-center pb-4">
            <NextImage
              className="pb-8"
              src="/assets/img/ufo.png"
              width={200}
              height={200}
              alt="404 Page Not Found"
            />
            <span className="pb-4 text-6xl font-semibold text-yellow-500 [text-shadow:0_4px_0_rgb(161_98_7_/_var(--tw-bg-opacity))]">
              404
            </span>
            <span className="text-3xl font-semibold text-yellow-500 [text-shadow:0_2px_0_rgb(161_98_7_/_var(--tw-bg-opacity))]">
              Page not found
            </span>
          </h1>
          <P className="pb-2 text-center">
            Sorry, the page you are looking for cannot be found.
          </P>
          <div className="flex justify-center">
            <YellowClickyLink href="/">Return to home</YellowClickyLink>
          </div>
        </div>
      </section>
    </>
  );
}
