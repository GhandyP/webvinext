import { marked } from 'marked'
import { getAllBlogPosts, getBlogPostBySlug, type BlogPost } from '../../lib/content'

type BlogPostProps = {
  post: BlogPost
}

export async function getStaticPaths() {
  const posts = await getAllBlogPosts()

  return {
    paths: posts.map((post) => ({ params: { slug: [post.slug] } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.join('/') ?? ''
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  }

  return { props: { post } }
}

export default function BlogPostPage({ post }: BlogPostProps) {
  return (
    <article className="page-stack prose-shell">
      <header className="page-stack small-gap">
        <a href="/blog">&larr; Volver al blog</a>
        <h1>{post.title}</h1>
        <p className="meta-text">{formatDate(post.pubDate)}</p>
      </header>
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) as string }} />
    </article>
  )
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
