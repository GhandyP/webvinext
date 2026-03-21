import { notFound } from "vinext/shims/navigation";

import { PageShell } from "../../../components/page-shell";
import { getBlogPostBySlug, loadBlogPosts, mdxComponents } from "../../../lib/content";
import { buildMetadata } from "../../../lib/seo";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return loadBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (post === null) {
    return {};
  }

  const seoData = buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedDate ?? post.date,
    tags: post.tags,
    ...(post.cover ? { ogImage: post.cover } : {}),
  });

  return {
    title: seoData.title,
    description: seoData.description,
    alternates: {
      canonical: seoData.canonical,
    },
    keywords: post.tags,
    openGraph: seoData.openGraph,
    twitter: seoData.twitter,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (post === null) {
    notFound();
  }

  const Content = post.Content;

  return (
    <PageShell
      currentPath="/blog"
      eyebrow="Blog entry"
      title={post.title}
      description={post.description}
    >
      <article className="surface" style={{ display: "grid", gap: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          <span className="muted" style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <time dateTime={post.date}>Published {formatDate(post.date)}</time>
          </span>

          {post.updatedDate ? (
            <span className="muted" style={{ fontSize: "0.82rem" }}>
              <time dateTime={post.updatedDate}>Updated {formatDate(post.updatedDate)}</time>
            </span>
          ) : null}
        </div>

        {post.tags.length > 0 ? (
          <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", gap: "0.5rem" }}>
            {post.tags.map((tag) => (
              <li
                key={tag}
                style={{
                  padding: "0.2rem 0.55rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "999px",
                  color: "var(--color-text-muted)",
                  fontSize: "0.82rem",
                }}
              >
                #{tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div style={{ display: "grid", gap: "1rem" }}>
          <Content components={mdxComponents} />
        </div>

        <a href="/blog">Back to blog</a>
      </article>
    </PageShell>
  );
}
