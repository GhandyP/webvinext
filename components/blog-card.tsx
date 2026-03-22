import type { BlogPost } from "../lib/content";

interface BlogCardProps {
  post: BlogPost;
  href?: string;
}

export function BlogCard({ post, href = `/blog/${post.slug}` }: BlogCardProps) {
  return (
    <article className="card-panel blog-card">
      <div className="blog-card__top">
        <time className="blog-card__date" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>

      <h2 className="blog-card__title">
        <a href={href}>{post.title}</a>
      </h2>

      <p className="blog-card__description">{post.description}</p>

      {post.tags.length > 0 ? (
        <ul className="blog-card__tags">
          {post.tags.map((tag) => (
            <li className="tag tag--topic" key={tag}>
              #{tag}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="blog-card__footer">
        <a className="blog-card__link" href={href}>
          Open post
        </a>
      </div>
    </article>
  );
}
