import { getAllProjects, type Project } from '../../lib/content'

type ProjectsIndexProps = {
  projects: Project[]
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getAllProjects(),
    },
  }
}

export default function ProjectsIndexPage({ projects }: ProjectsIndexProps) {
  return (
    <div className="page-stack">
      <section>
        <h1>
          <span className="accent-text">&gt;</span> Proyectos
        </h1>
        <p className="muted-text">Una seleccion de proyectos y estudios de caso publicados desde el contenido local.</p>
      </section>

      <section className="card-grid two-up">
        {projects.map((project) => (
          <article key={project.slug} className="card-shell">
            <p className="meta-text">{project.status}</p>
            <h2>{project.title}</h2>
            <p className="muted-text">{project.summary}</p>
            <ul className="chip-list">
              {project.stack.map((tech) => (
                <li key={tech} className="chip-item">
                  {tech}
                </li>
              ))}
            </ul>
            <a href={project.path}>Ver proyecto &rarr;</a>
          </article>
        ))}
      </section>
    </div>
  )
}
