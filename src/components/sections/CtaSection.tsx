import { P } from "../typography";
import { YellowClickyLink } from "../buttons";

export const CtaSection = () => {
  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center bg-gray-100 px-4 py-16"
    >
      <div className="container flex flex-col items-center ">
        <P>
          This website was built with Next, Typescript and Tailwind. Full
          details of how it works can by found on my GitHub profile.
        </P>
        <div>
          <YellowClickyLink href="https://github.com/tobytheghost/toby-next-2024">
            Check out how it works!
          </YellowClickyLink>
        </div>
      </div>
    </section>
  );
};
