import { PageShell } from "../../components/page-shell";
import { loadAbout, mdxComponents } from "../../lib/content";
import { buildMetadata } from "../../lib/seo";

const fallbackSeo = buildMetadata({
  title: "About",
  description: "About this site and the person behind it.",
  path: "/about",
});

export function generateMetadata() {
  const about = loadAbout();

  const seoData = about
    ? buildMetadata({
        title: about.title,
        description: about.description,
        path: "/about",
      })
    : fallbackSeo;

  return {
    title: seoData.title,
    description: seoData.description,
    alternates: {
      canonical: seoData.canonical,
    },
    openGraph: seoData.openGraph,
    twitter: seoData.twitter,
  };
}

export default function AboutPage() {
  const about = loadAbout();
  const Content = about?.Content;

  return (
    <PageShell
      currentPath="/about"
      eyebrow="Background"
      title={about?.title ?? "About"}
      description={about?.description ?? "This route is wired to the shared content layer, but no about entry is currently published."}
    >
      {about && Content ? (
        <section className="surface rich-copy">
          <Content components={mdxComponents} />
        </section>
      ) : (
        <section className="surface-raised empty-state muted">
          `content/about.mdx` is missing, so there is no published about entry to render yet.
        </section>
      )}
    </PageShell>
  );
}
