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
  const exampleProject = allProjects.find((project) => project.slug === "webvinext-site");
  const featuredProjects = allProjects
    .filter((project) => project.featured && project.slug !== exampleProject?.slug)
    .slice(0, 3);

  return (
    <PageShell
      currentPath="/"
      title={SITE_NAME}
      description="I bring different perspectives together to make complex problems clearer and build useful systems."
    >
      <section id="working-example" className="home-evidence" aria-labelledby="working-example-title">
        <h2 id="working-example-title" className="home-section-title">A working example</h2>

        {exampleProject ? (
          <article className="home-evidence__body">
            <div className="home-evidence__intro">
              <p className="home-evidence__kind">Personal project · {exampleProject.status}</p>
              <h3 className="home-evidence__title">
                <a href={`/projects/${exampleProject.slug}`}>{exampleProject.title}</a>
              </h3>
              <p>
                This site is a place to explore what I build, how I think, and what I am learning.
                The work behind it is available to inspect, not just describe.
              </p>
            </div>

            <dl className="home-evidence__details">
              <div>
                <dt>Starting question</dt>
                <dd>How can work and ideas be easier to explore?</dd>
              </div>
              <div>
                <dt>What I built</dt>
                <dd>A portfolio with structured projects, articles, and a shared layout.</dd>
              </div>
              <div>
                <dt>Keep in mind</dt>
                <dd>This is my own evolving site, not a reported client result.</dd>
              </div>
            </dl>

            <div className="link-row">
              <a className="section-link" href={`/projects/${exampleProject.slug}`}>
                Explore this project
              </a>
              {exampleProject.repositoryUrl ? (
                <a className="section-link" href={exampleProject.repositoryUrl}>Inspect the source</a>
              ) : null}
            </div>
          </article>
        ) : (
          <p>
            No case study is available here yet. You can still{" "}
            <a className="section-link" href="/projects">explore the project collection</a>.
          </p>
        )}
      </section>

      <section className="section-stack" aria-labelledby="explore-work-title">
        <div className="section-heading">
          <div>
            <h2 id="explore-work-title" className="home-section-title">Explore the work</h2>
            <p className="home-section-copy">
              Different questions, visible artifacts, and room to look closer.
              There are {allProjects.length} published projects to explore.
            </p>
          </div>
          <a className="section-link" href="/projects">Browse all projects</a>
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

      <section className="section-stack" aria-labelledby="ideas-title">
        <div className="section-heading">
          <div>
            <h2 id="ideas-title" className="home-section-title">Ideas to think with</h2>
            <p className="home-section-copy">
              Notes on decisions, systems, and what I am learning along the way.
            </p>
          </div>
          <a className="section-link" href="/blog">Read all articles</a>
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

      <section className="home-conversation" aria-labelledby="conversation-title">
        <div>
          <h2 id="conversation-title" className="home-section-title">
            What are you trying to make sense of?
          </h2>
          <p className="home-section-copy">
            A conversation can start with a question, not a technical brief.
            Share what you want to understand, improve, or build.
          </p>
        </div>
        <a className="button" href="https://x.com/Ghandyofmetal">Let’s talk</a>
      </section>
    </PageShell>
  );
}
