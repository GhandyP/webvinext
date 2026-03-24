export const SITE_URL = "https://webvinext.dev"; // TODO: replace with real domain before deploy

export const SITE_NAME = "GhandyIT";

export const SITE_DESCRIPTION =
  "Full-stack engineer building high-performance web systems, edge platforms, and AI-assisted workflows.";

export const SITE_OG_IMAGE_PATH = "/og-default.svg";

export const SITE_LOCALE = "en-US";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
] as const;

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/GhandyP",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-prieto-564253a9/",
    icon: "linkedin",
  },
] as const;

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`;

export const SITE_CONFIG = {
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  ogImage: SITE_OG_IMAGE_PATH,
  locale: SITE_LOCALE,
  nav: NAV_ITEMS,
  social: SOCIAL_LINKS,
  footer: {
    copyright: FOOTER_COPYRIGHT,
  },
} as const;
