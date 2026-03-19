import { marked } from 'marked'
import { getAllProjects, getProjectBySlug, type Project } from '../../lib/content'

type ProjectPageProps = {
  project: Project
}

export async function getStaticPaths() {
  const projects = await getAllProjects()

  return {
    paths: projects.map((project) => ({ params: { slug: [project.slug] } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.join('/') ?? ''
  const project = await getProjectBySlug(slug)

  if (!project) {
    return { notFound: true }
  }

  return { props: { project } }
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <article className="page-stack prose-shell">
      <header className="page-stack small-gap">
        <a href="/projects">&larr; Volver a proyectos</a>
        <h1>{project.title}</h1>
        <p className="muted-text">{project.summary}</p>
        <p className="meta-text">{project.role} - {project.status}</p>
      </header>

      <section className="card-shell compact-card">
        <h2>Problema</h2>
        <p className="muted-text">{project.problem}</p>
        <h2>Resultado</h2>
        <p className="muted-text">{project.outcome}</p>
      </section>

      <section>
        <h2 className="section-title">Stack</h2>
        <ul className="chip-list">
          {project.stack.map((tech) => (
            <li key={tech} className="chip-item">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <div dangerouslySetInnerHTML={{ __html: marked(project.content) as string }} />

      <section className="action-row">
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button-primary">
            Ver demo
          </a>
        ) : null}
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button-secondary">
            Ver codigo
          </a>
        ) : null}
      </section>
    </article>
  )
}
