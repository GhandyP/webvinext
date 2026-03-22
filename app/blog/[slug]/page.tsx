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
      <article className="surface rich-copy">
        <div className="meta-row">
          <span className="meta-copy">
            <time dateTime={post.date}>Published {formatDate(post.date)}</time>
          </span>

          {post.updatedDate ? (
            <span className="meta-copy">
              <time dateTime={post.updatedDate}>Updated {formatDate(post.updatedDate)}</time>
            </span>
          ) : null}
        </div>

        {post.tags.length > 0 ? (
          <ul className="tag-list">
            {post.tags.map((tag) => (
              <li className="tag tag--topic" key={tag}>
                #{tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="rich-copy">
          <Content components={mdxComponents} />
        </div>

        <div className="link-row">
          <a href="/blog">Back to blog</a>
        </div>
      </article>
    </PageShell>
  );
}
