import type { BlogPost } from "../lib/content";

interface BlogCardProps {
  post: BlogPost;
  href?: string;
}

export function BlogCard({ post, href = `/blog/${post.slug}` }: BlogCardProps) {
  return (
    <article className="surface-raised" style={{ display: "grid", gap: "0.85rem" }}>
      <time
        className="muted"
        dateTime={post.date}
        style={{ fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </time>

      <h2 style={{ fontSize: "1.2rem", lineHeight: 1.2 }}>
        <a href={href}>{post.title}</a>
      </h2>

      <p className="muted">{post.description}</p>

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
    </article>
  );
}
