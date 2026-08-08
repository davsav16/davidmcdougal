import { PortfolioLink, FooterHeader } from "@/types/general";

export const FOOTER_HEADER: FooterHeader = {
  header: "Let's build something that moves the numbers",
  subHeader:
    "Senior full-stack or frontend-leaning roles - startups or enterprise. I usually reply within a day.",
};

export const FOOTER_LINKS: PortfolioLink[] = [
  {
    href: "/contact",
    linkCopy: "Start a conversation",
    highlighted: true,
  },
  {
    href: "mailto:david@davidmcdougal.com",
    linkCopy: "david@davidmcdougal.com",
    highlighted: false,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/mcdougaldavid/",
    linkCopy: "LinkedIn",
    highlighted: false,
    external: true,
  },
  {
    href: "https://github.com/davsav16",
    linkCopy: "GitHub",
    highlighted: false,
    external: true,
  },
];
