import { buildCanonicalUrl } from "../lib/seo";
import { SITE_URL } from "../lib/site-config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: buildCanonicalUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
