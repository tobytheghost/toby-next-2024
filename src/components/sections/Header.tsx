import Link from "next/link";
import { menuItems } from "~/contexts/navigation/menuItems";
import {
  type SocialLinkNames,
  socialLinks,
} from "~/contexts/navigation/socialLinks";
import { FacebookSvg, GithubSvg, LinkedInSvg } from "../svgs/headerSvgs";
import { assertUnreachable } from "~/utils/typescriptUtilities";
import { MenuSvg } from "../svgs";

const getSocialIcon = (name: SocialLinkNames) => {
  switch (name) {
    case "LinkedIn":
      return <LinkedInSvg color="black" />;
    case "Facebook":
      return <FacebookSvg color="black" />;
    case "Github":
      return <GithubSvg color="black" />;
    default:
      return assertUnreachable(name);
  }
};

export const Header = () => {
  return (
    <>
      <section className="fixed z-20 flex w-full items-center justify-between bg-white shadow-md">
        <Link className="p-4 text-[2rem] font-semibold" href="/">
          Toby Gates.
        </Link>
        <nav className="ml-auto">
          <ul className="flex items-center justify-between">
            {menuItems.map(({ name, url }) => (
              <li key={name}>
                <Link className="block p-4 text-2xl font-semibold" href={url}>
                  {name}
                </Link>
              </li>
            ))}
            <li className="text-2xl font-semibold">
              <ul className="flex">
                {socialLinks.map(({ name, url }) => (
                  <li key={name}>
                    <Link className="block p-4" href={url}>
                      {getSocialIcon(name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
        <button className="p-4 md:hidden">
          <MenuSvg />
        </button>
      </section>
      <div className="h-[80px]" />
    </>
  );
};
