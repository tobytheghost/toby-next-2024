export type SocialLinkNames = (typeof socialLinks)[number]["name"];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tobygates/",
  },
  {
    name: "Github",
    url: "https://github.com/tobytheghost/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tobytheghost",
  },
] as const satisfies {
  name: string;
  url: string;
}[];
