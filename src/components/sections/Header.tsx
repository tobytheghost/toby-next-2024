"use client";

import Link from "next/link";
import { menuItems } from "~/contexts/navigation/menuItems";
import {
  type SocialLinkNames,
  socialLinks,
} from "~/contexts/navigation/socialLinks";
import { FacebookSvg, GithubSvg, LinkedInSvg } from "../svgs/headerSvgs";
import { assertUnreachable } from "~/utils/typescriptUtilities";
import { MenuSvg } from "../svgs/miscSvgs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const getSocialIcon = (name: SocialLinkNames) => {
  switch (name) {
    case "LinkedIn":
      return <LinkedInSvg className="fill-white md:fill-black" />;
    case "Facebook":
      return <FacebookSvg className="fill-white md:fill-black" />;
    case "Github":
      return <GithubSvg className="fill-white md:fill-black" />;
    default:
      return assertUnreachable(name);
  }
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the navigation panel
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <section className="fixed z-20 flex w-full items-center justify-between bg-white shadow-md">
        <Link className="p-4 text-[2rem] font-semibold" href="/">
          Toby Gates.
        </Link>
        <nav
          className={`ml-auto  ${
            menuOpen
              ? "fixed bottom-0 left-0 right-0 top-0 flex bg-gray-950 text-white"
              : "hidden md:flex"
          }`}
        >
          <ul className="m-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
            {menuItems.map(({ name, url }) => {
              if (url === pathname)
                return (
                  <li key={name}>
                    <button
                      className="relative block p-4 text-2xl font-semibold text-yellow-500"
                      onClick={() => setMenuOpen(false)}
                    >
                      {name}
                    </button>
                  </li>
                );
              return (
                <li key={name}>
                  <Link
                    className="relative block p-4 text-2xl font-semibold"
                    href={url}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
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
        <button
          className="z-20 p-4 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuSvg className={menuOpen ? "fill-white" : "fill-black"} />
        </button>
      </section>
      <div className="h-[80px]" />
    </>
  );
};
