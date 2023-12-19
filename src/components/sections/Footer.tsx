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
      return <LinkedInSvg className="fill-black" />;
    case "Facebook":
      return <FacebookSvg className="fill-black" />;
    case "Github":
      return <GithubSvg className="fill-black" />;
    default:
      return assertUnreachable(name);
  }
};

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-gray-950 py-12 text-white">
      <ul className="flex gap-4">
        {socialLinks.map(({ name, url }) => (
          <li key={name}>
            <YellowClickyLink href={url} aria-label={name}>
              {getIcon(name)}
            </YellowClickyLink>
          </li>
        ))}
      </ul>
      <div>
        <p>Website Design & Build - Toby Gates - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
