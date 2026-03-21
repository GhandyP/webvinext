import { BlogCard } from "../components/blog-card";
import { PageShell } from "../components/page-shell";
import { ProjectCard } from "../components/project-card";
import { loadBlogPosts, loadProjects } from "../lib/content";
import { buildMetadata } from "../lib/seo";
import { SITE_DESCRIPTION, SITE_NAME } from "../lib/site-config";

const seoData = buildMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
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

export default function HomePage() {
  const recentPosts = loadBlogPosts().slice(0, 3);
  const featuredProjects = loadProjects().filter((project) => project.featured).slice(0, 3);

  return (
    <PageShell
      currentPath="/"
      eyebrow="Console log"
      title={SITE_NAME}
      description={SITE_DESCRIPTION}
    >
      <section className="surface" style={{ display: "grid", gap: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <a href="/projects">Inspect projects</a>
          <a href="/blog">Read notes</a>
        </div>

        <p className="muted" style={{ maxWidth: "60ch" }}>
          Built on Vinext and deployed for the Workers runtime, this site keeps its content,
          structure, and shipping workflow explicit. No filler sections, no borrowed starter
          chrome - just a clean terminal-flavored surface for writing and shipping.
        </p>
      </section>

      <section style={{ display: "grid", gap: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 className="glow" style={{ fontSize: "1.4rem" }}>Featured Projects</h2>
          <a href="/projects">View all</a>
        </div>

        {featuredProjects.length > 0 ? (
          <div style={{ display: "grid", gap: "1rem" }}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="surface-raised muted">No featured projects published yet.</div>
        )}
      </section>

      <section style={{ display: "grid", gap: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
          <h2 className="glow" style={{ fontSize: "1.4rem" }}>Recent Posts</h2>
          <a href="/blog">View all</a>
        </div>

        {recentPosts.length > 0 ? (
          <div style={{ display: "grid", gap: "1rem" }}>
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="surface-raised muted">No posts published yet.</div>
        )}
      </section>
    </PageShell>
  );
}
