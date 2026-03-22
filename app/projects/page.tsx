import { PageShell } from "../../components/page-shell";
import { ProjectCard } from "../../components/project-card";
import { loadProjects } from "../../lib/content";
import { buildMetadata } from "../../lib/seo";

const seoData = buildMetadata({
  title: "Projects",
  description: "A validated list of projects built and shipped from the site content layer.",
  path: "/projects",
});

export const metadata = {
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
  openGraph: seoData.openGraph,
  twitter: seoData.twitter,
};

export default function ProjectsPage() {
  const projects = loadProjects();

  return (
    <PageShell
      currentPath="/projects"
      eyebrow="Project index"
      title="Projects"
      description="Validated project entries pulled from the shared content layer, sorted for a stable build output."
    >
      {projects.length > 0 ? (
        <section className="section-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      ) : (
        <div className="surface-raised empty-state muted">No projects published yet.</div>
      )}
    </PageShell>
  );
}
