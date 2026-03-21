import { PageShell } from "../components/page-shell";

export default function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="Route not found"
      description="The path or content entry you asked for is missing, unpublished, or no longer available."
    >
      <section className="surface-raised" style={{ display: "grid", gap: "1rem" }}>
        <p className="muted" style={{ maxWidth: "56ch" }}>
          Unknown routes and missing slugs resolve through the same shell, so the app keeps a
          clear fallback instead of dropping to a plain failure state.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <a href="/">Return home</a>
          <a href="/blog">Browse blog</a>
          <a href="/projects">Browse projects</a>
        </div>
      </section>
    </PageShell>
  );
}
