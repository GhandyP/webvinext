import { PageShell } from "../components/page-shell";

export default function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="Route not found"
      description="The path or content entry you asked for is missing, unpublished, or no longer available."
    >
      <section className="surface-raised rich-copy">
        <p className="muted">
          Unknown routes and missing slugs resolve through the same shell, so the app keeps a
          clear fallback instead of dropping to a plain failure state.
        </p>

        <div className="link-row">
          <a href="/">Return home</a>
          <a href="/blog">Browse blog</a>
          <a href="/projects">Browse projects</a>
        </div>
      </section>
    </PageShell>
  );
}
