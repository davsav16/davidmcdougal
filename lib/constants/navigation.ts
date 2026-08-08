/**
 * The design's nav, in its order. The design links Work and Writing to
 * same-page anchors; here every entry is a real route.
 */
export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/stats", label: "Stats" },
  { href: "/writing", label: "Writing" },
  { href: "/journey", label: "Journey" },
  { href: "/about", label: "About" },
] as const;

export const CONTACT_HREF = "/contact";
