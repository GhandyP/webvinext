import { getAllBlogPosts, getAllProjects, type BlogPost, type Project } from '../lib/content'

type HomeProps = {
  featuredProjects: Project[]
  latestPosts: BlogPost[]
}

export async function getStaticProps() {
  const [projects, posts] = await Promise.all([getAllProjects(), getAllBlogPosts()])

  return {
    props: {
      featuredProjects: projects.filter((project) => project.featured).slice(0, 2),
      latestPosts: posts.slice(0, 3),
    },
  }
}

export default function HomePage({ featuredProjects, latestPosts }: HomeProps) {
  return (
    <div className="page-stack">
      <section className="hero-block center-block">
        <h1>
          <span className="accent-text">&gt;</span> Hola, soy desarrollador
        </h1>
        <p className="lede">
          Bienvenido a mi espacio digital. Aqui comparto mis proyectos, articulos y pensamientos sobre desarrollo web moderno.
        </p>
        <div className="action-row center-row">
          <a href="/blog" className="button-primary">
            Ver Blog
          </a>
          <a href="/contact" className="button-secondary">
            Contactar
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="card-grid two-up">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="card-shell">
              <h3>{project.title}</h3>
              <p className="muted-text">{project.summary}</p>
              <ul className="chip-list">
                {project.stack.map((tech) => (
                  <li key={tech} className="chip-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Ultimos Articulos</h2>
        <div className="card-list">
          {latestPosts.map((post) => (
            <article key={post.slug} className="card-shell compact-card split-row">
              <div>
                <a href={post.path} className="card-link-title">
                  {post.title}
                </a>
                <p className="muted-text">{post.description}</p>
              </div>
              <span className="meta-text">{formatDate(post.pubDate)}</span>
            </article>
          ))}
        </div>
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
