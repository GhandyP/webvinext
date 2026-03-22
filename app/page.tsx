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
  const allPosts = loadBlogPosts();
  const allProjects = loadProjects();
  const recentPosts = allPosts.slice(0, 3);
  const featuredProjects = allProjects.filter((project) => project.featured).slice(0, 3);

  return (
    <PageShell
      currentPath="/"
      eyebrow="Available for focused builds"
      title={SITE_NAME}
      description={SITE_DESCRIPTION}
    >
      <section className="section-stack">
        <div className="hero-stats">
          <article className="hero-stat">
            <div className="hero-stat__meta">
              <span className="hero-stat__label">published projects</span>
              <span className="hero-stat__signal" aria-hidden="true" />
            </div>
            <p className="hero-stat__value">{allProjects.length}</p>
          </article>

          <article className="hero-stat">
            <div className="hero-stat__meta">
              <span className="hero-stat__label">build notes</span>
              <span className="hero-stat__signal" aria-hidden="true" />
            </div>
            <p className="hero-stat__value">{allPosts.length}</p>
          </article>

          <article className="hero-stat">
            <div className="hero-stat__meta">
              <span className="hero-stat__label">runtime focus</span>
              <span className="hero-stat__signal" aria-hidden="true" />
            </div>
            <p className="hero-stat__value">Workers</p>
          </article>
        </div>

        <article className="cta-card">
          <p className="cta-card__title">Signal over clutter.</p>
          <p className="cta-card__copy">
            This homepage keeps the content model intact but upgrades the presentation with a more
            deliberate hierarchy, stronger cards, and a clearer editorial rhythm.
          </p>
        </article>
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <div className="section-heading__intro">
            <p className="section-heading__eyebrow">Selected work</p>
            <div className="section-heading__row">
              <span className="section-heading__number">01</span>
              <h2 className="section-heading__title">Featured Projects</h2>
            </div>
          </div>
          <div className="section-heading__line-wrap">
            <div className="section-heading__line" aria-hidden="true" />
            <a className="section-link" href="/projects">
              View all
            </a>
          </div>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="section-grid section-grid--cards">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="surface-raised empty-state muted">No featured projects published yet.</div>
        )}
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <div className="section-heading__intro">
            <p className="section-heading__eyebrow">Journal / build log</p>
            <div className="section-heading__row">
              <span className="section-heading__number">02</span>
              <h2 className="section-heading__title">Recent Posts</h2>
            </div>
          </div>
          <div className="section-heading__line-wrap">
            <div className="section-heading__line" aria-hidden="true" />
            <a className="section-link" href="/blog">
              View all
            </a>
          </div>
        </div>

        {recentPosts.length > 0 ? (
          <div className="section-grid section-grid--cards">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="surface-raised empty-state muted">No posts published yet.</div>
        )}
      </section>
    </PageShell>
  );
}
