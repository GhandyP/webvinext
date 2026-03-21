import { BlogCard } from "../../components/blog-card";
import { PageShell } from "../../components/page-shell";
import { loadBlogPosts } from "../../lib/content";
import { buildMetadata } from "../../lib/seo";

const seoData = buildMetadata({
  title: "Blog",
  description: "Notes, build logs, and implementation details from the site content layer.",
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
      description="Validated posts pulled from the shared MDX content layer. Drafts stay hidden, published entries stay sorted, and the route stays thin."
    >
      {posts.length > 0 ? (
        <section style={{ display: "grid", gap: "1rem" }}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <section className="surface-raised muted">No posts published yet.</section>
      )}
    </PageShell>
  );
}
