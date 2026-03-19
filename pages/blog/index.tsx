import { getAllBlogPosts, type BlogPost } from '../../lib/content'

type BlogIndexProps = {
  posts: BlogPost[]
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllBlogPosts(),
    },
  }
}

export default function BlogIndexPage({ posts }: BlogIndexProps) {
  return (
    <div className="page-stack">
      <section>
        <h1>
          <span className="accent-text">&gt;</span> Blog
        </h1>
        <p className="muted-text">Articulos sobre desarrollo web, sistemas y mejores practicas.</p>
      </section>

      <section className="card-list">
        {posts.map((post) => (
          <article key={post.slug} className="card-shell">
            <div className="split-row align-start">
              <div>
                <a href={post.path} className="card-link-title">
                  {post.title}
                </a>
                <p className="muted-text">{post.description}</p>
              </div>
              <span className="meta-text">{formatDate(post.pubDate)}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
