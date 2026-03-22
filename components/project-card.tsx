import type { Project } from "../lib/content";

interface ProjectCardProps {
  project: Project;
  href?: string;
}

export function ProjectCard({ project, href = `/projects/${project.slug}` }: ProjectCardProps) {
  const statusClass = `project-card__status project-card__status--${project.status.toLowerCase()}`;

  return (
    <article className="card-panel project-card">
      <div className="project-card__top">
        <div className="project-card__badges">
          <span className={statusClass}>{project.status}</span>

          {project.featured ? <span className="project-card__featured">featured signal</span> : null}
        </div>
      </div>

      <h2 className="project-card__title">
        <a href={href}>{project.title}</a>
      </h2>

      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__tags">
        {project.stack.map((item) => (
          <li className="tag tag--stack" key={item}>
            {item}
          </li>
        ))}
      </ul>

      {(project.repositoryUrl || project.demoUrl) ? (
        <div className="project-card__footer">
          {project.repositoryUrl ? (
            <a className="project-card__link" href={project.repositoryUrl}>
              Source
            </a>
          ) : null}
          {project.demoUrl ? (
            <a className="project-card__link" href={project.demoUrl}>
              Live demo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
