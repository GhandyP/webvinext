import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_OG_IMAGE_PATH } from "./site-config";

export interface PageMetadataInput {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    type: "website" | "article";
    locale: string;
    images: Array<{ url: string; alt: string }>;
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
  };
  twitter: {
    card: "summary" | "summary_large_image";
    title: string;
    description: string;
    images?: string[];
  };
}

export function buildCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

function resolveMetadataImageUrl(urlOrPath: string): string {
  if (/^https?:\/\//.test(urlOrPath)) {
    return urlOrPath;
  }

  return buildCanonicalUrl(urlOrPath);
}

export function buildMetadata(input: PageMetadataInput): PageMetadata {
  const fullTitle = input.title === SITE_NAME
    ? input.title
    : `${input.title} — ${SITE_NAME}`;

  const description = input.description ?? SITE_DESCRIPTION;
  const canonical = buildCanonicalUrl(input.path);
  const ogType = input.ogType ?? "website";

  const ogImage = resolveMetadataImageUrl(input.ogImage ?? SITE_OG_IMAGE_PATH);
  const images = [{ url: ogImage, alt: fullTitle }];

  const openGraph: PageMetadata["openGraph"] = {
    title: fullTitle,
    description,
    url: canonical,
    siteName: SITE_NAME,
    type: ogType,
    locale: "en_US",
    images,
    ...(input.publishedTime !== undefined && { publishedTime: input.publishedTime }),
    ...(input.modifiedTime !== undefined && { modifiedTime: input.modifiedTime }),
    ...(input.tags !== undefined && { tags: input.tags }),
  };

  const twitter: PageMetadata["twitter"] = {
    card: images.length > 0 ? "summary_large_image" : "summary",
    title: fullTitle,
    description,
    images: [ogImage],
  };

  return {
    title: fullTitle,
    description,
    canonical,
    openGraph,
    twitter,
  };
}
