import { BlogCard } from "../../components/blog-card";
import { PageShell } from "../../components/page-shell";
import { loadBlogPosts } from "../../lib/content";
import { buildMetadata } from "../../lib/seo";

const seoData = buildMetadata({
  title: "Blog",
  description: "Essays on engineering, edge systems, platform decisions, and AI-assisted workflows.",
  path: "/blog",
});

export const metadata = {
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
  openGraph: seoData.openGraph,
  twitter: seoData.twitter,
};

export default function BlogIndexPage() {
  const posts = loadBlogPosts();

  return (
    <PageShell
      currentPath="/blog"
      eyebrow="Writing"
      title="Blog"
      description="Writing that connects platform decisions, delivery habits, edge tooling, and the lessons behind real builds."
    >
      {posts.length > 0 ? (
        <section className="section-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <section className="surface-raised empty-state muted">No posts published yet.</section>
      )}
    </PageShell>
  );
}
