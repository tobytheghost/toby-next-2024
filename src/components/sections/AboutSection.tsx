import Image from "next/image";
import { H2, H3, P } from "../typography";
import { TechCard } from "../TechCard";
import { FrontEndIcon, BackEndIcon, GitIcon, SupportIcon } from "../svgs";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="container flex flex-col items-center ">
        <H2>About Me</H2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col items-center">
            <H3>Who am I?</H3>
            <Image
              className="mb-4 rounded-full"
              src="/assets/img/toby-gates.jpg"
              alt="Toby Gates"
              width={150}
              height={150}
            />
            <P>
              I'm Toby, a Senior Software Engineer based in Bedfordshire, UK,
              with a passion for building things that live on the internet.
            </P>
            <P>
              I'm currently working on bespoke, fast, responsive and secure web
              applications and have experience in the Ecommerce, Travel, and
              Finance sectors.
            </P>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <H3>What do I do?</H3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
              <TechCard name="Front-end Development" icon={<FrontEndIcon />}>
                Create fast and dynamic web and mobile apps using modern
                Javascript frameworks.
              </TechCard>
              <TechCard name="Back-end Development" icon={<BackEndIcon />}>
                Build powerful domain-driven back-end API services and Node
                integrations.
              </TechCard>
              <TechCard name="Best Practices" icon={<GitIcon />}>
                Use top industry standards such as TDD, BDD, Git, CI/CD, Agile &
                Scrum.
              </TechCard>
              <TechCard name="Consultancy and Support" icon={<SupportIcon />}>
                Provide consultancy and support to clients with varying levels
                of technological expertise.
              </TechCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
