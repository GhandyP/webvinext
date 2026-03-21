import { notFound } from "vinext/shims/navigation";

import { PageShell } from "../../../components/page-shell";
import { getProjectBySlug, loadProjects, mdxComponents } from "../../../lib/content";
import { buildMetadata } from "../../../lib/seo";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return loadProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    const seoData = buildMetadata({
      title: "Projects",
      description: "A validated list of projects built and shipped from the site content layer.",
      path: "/projects",
    });

    return {
      title: seoData.title,
      description: seoData.description,
      alternates: {
        canonical: seoData.canonical,
      },
      openGraph: seoData.openGraph,
      twitter: seoData.twitter,
    };
  }

  const seoData = buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    tags: project.stack,
    modifiedTime: project.date,
  });

  return {
    title: seoData.title,
    description: seoData.description,
    alternates: {
      canonical: seoData.canonical,
    },
    keywords: project.stack,
    openGraph: seoData.openGraph,
    twitter: seoData.twitter,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const entry = project;
  const Content = entry.Content;

  return (
    <PageShell
      currentPath="/projects"
      eyebrow="Project detail"
      title={entry.title}
      description={entry.description}
    >
      <section className="surface" style={{ display: "grid", gap: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
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
            {entry.status}
          </span>

          <span className="muted" style={{ fontSize: "0.9rem" }}>
            <time dateTime={entry.date}>
              Published {new Date(entry.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </span>

          {entry.featured ? <span className="muted">Featured project</span> : null}
        </div>

        <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", gap: "0.5rem" }}>
          {entry.stack.map((item) => (
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

        {(entry.repositoryUrl || entry.demoUrl) ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
            {entry.repositoryUrl ? (
              <a href={entry.repositoryUrl} target="_blank" rel="noreferrer">
                Source repository
              </a>
            ) : null}
            {entry.demoUrl ? (
              <a href={entry.demoUrl} target="_blank" rel="noreferrer">
                Live demo
              </a>
            ) : null}
          </div>
        ) : (
          <p className="muted">No public repository or demo link is published for this project yet.</p>
        )}
      </section>

      <section className="surface-raised" style={{ display: "grid", gap: "0.85rem" }}>
        <h2 className="glow" style={{ fontSize: "1.1rem" }}>Overview</h2>
        <Content components={mdxComponents} />
      </section>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <a href="/projects">Back to all projects</a>
        <a href="/">Return home</a>
      </div>
    </PageShell>
  );
}
