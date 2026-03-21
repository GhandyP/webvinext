import type { Project } from "../lib/content";

interface ProjectCardProps {
  project: Project;
  href?: string;
}

export function ProjectCard({ project, href = `/projects/${project.slug}` }: ProjectCardProps) {
  return (
    <article className="surface-raised" style={{ display: "grid", gap: "0.85rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center" }}>
        <span
          style={{
            padding: "0.2rem 0.55rem",
            borderRadius: "999px",
            border: "1px solid var(--color-border)",
            color: "var(--color-accent-2)",
            fontSize: "0.82rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {project.status}
        </span>

        {project.featured ? (
          <span className="muted" style={{ fontSize: "0.82rem" }}>
            featured
          </span>
        ) : null}
      </div>

      <h2 style={{ fontSize: "1.2rem", lineHeight: 1.2 }}>
        <a href={href}>{project.title}</a>
      </h2>

      <p className="muted">{project.description}</p>

      <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", gap: "0.5rem" }}>
        {project.stack.map((item) => (
          <li
            key={item}
            style={{
              padding: "0.2rem 0.55rem",
              border: "1px solid var(--color-border)",
              borderRadius: "999px",
              fontSize: "0.82rem",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {(project.repositoryUrl || project.demoUrl) ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
          {project.repositoryUrl ? <a href={project.repositoryUrl}>Source</a> : null}
          {project.demoUrl ? <a href={project.demoUrl}>Live demo</a> : null}
        </div>
      ) : null}
    </article>
  );
}
