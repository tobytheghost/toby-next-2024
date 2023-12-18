import Link from "next/link";
import {
  type SocialLinkNames,
  socialLinks,
} from "~/contexts/navigation/socialLinks";
import { FacebookSvg, GithubSvg, LinkedInSvg } from "../svgs/headerSvgs";
import { assertUnreachable } from "~/utils/typescriptUtilities";
import { YellowClickyLink } from "../buttons";

const getIcon = (name: SocialLinkNames) => {
  switch (name) {
    case "LinkedIn":
      return <LinkedInSvg color="white" />;
    case "Facebook":
      return <FacebookSvg color="white" />;
    case "Github":
      return <GithubSvg color="white" />;
    default:
      return assertUnreachable(name);
  }
};

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-gray-950 py-8 text-white">
      <ul className="flex gap-4">
        {socialLinks.map(({ name, url }) => (
          <li key={name}>
            <YellowClickyLink href={url}>{getIcon(name)}</YellowClickyLink>
          </li>
        ))}
      </ul>
      <div>
        <p>Website Design & Build - Toby Gates - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
