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
      <section className="surface detail-overview">
        <div className="meta-row">
          <span className="detail-status">{entry.status}</span>

          <span className="meta-copy">
            <time dateTime={entry.date}>
              Published {new Date(entry.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </span>

          {entry.featured ? <span className="meta-copy detail-featured">Featured project</span> : null}
        </div>

        <ul className="tag-list">
          {entry.stack.map((item) => (
            <li className="tag tag--stack" key={item}>
              {item}
            </li>
          ))}
        </ul>

        {(entry.repositoryUrl || entry.demoUrl) ? (
          <div className="link-row">
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

      <section className="surface-raised rich-copy">
        <h2 className="detail-overview__title glow">Overview</h2>
        <Content components={mdxComponents} />
      </section>

      <div className="link-row">
        <a href="/projects">Back to all projects</a>
        <a href="/">Return home</a>
      </div>
    </PageShell>
  );
}
