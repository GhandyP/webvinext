import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

interface PageShellProps {
  title?: string;
  description?: string;
  eyebrow?: string;
  currentPath?: string;
  children: ReactNode;
}

export function PageShell({
  title,
  description,
  eyebrow,
  currentPath,
  children,
}: PageShellProps) {
  const headerProps = currentPath ? { currentPath } : {};
  const isHome = currentPath === "/";

  return (
    <div className="page-shell">
      <SiteHeader {...headerProps} />

      {title || description || eyebrow ? (
        <section className={`page-hero${isHome ? " page-hero--home" : ""}`}>
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              {eyebrow ? (
                <p className={`page-hero__eyebrow ${isHome ? "page-hero__eyebrow--home" : "page-hero__eyebrow--inner"}`}>
                  {isHome ? <span className="page-hero__dot" aria-hidden="true" /> : null}
                  {eyebrow}
                </p>
              ) : null}

              {title ? (
                <h1 className={`page-title${isHome ? " page-title--home" : " page-title--inner"}`}>
                  {isHome ? (
                    <>
                      Build the <span className="page-title__accent">visible layer</span>
                    </>
                  ) : (
                    title
                  )}
                </h1>
              ) : null}

              {description ? <p className="page-description">{description}</p> : null}

              {isHome ? (
                <>
                  <div className="page-hero__actions">
                    <a className="button" href="/projects">
                      Inspect projects
                    </a>
                    <a className="button-secondary" href="/blog">
                      Read build notes
                    </a>
                  </div>

                  <div className="page-hero__chips">
                    <span className="info-chip">Vinext app router</span>
                    <span className="info-chip">Cloudflare workers</span>
                    <span className="info-chip">content-driven UI</span>
                  </div>
                </>
              ) : null}
            </div>

            {isHome ? (
              <aside className="page-hero__meta" aria-label="Homepage summary">
                <p className="page-hero__meta-title">Ship fast, keep the surface intentional.</p>
                <p className="page-hero__meta-copy">
                  This portfolio pairs a content-driven architecture with a more expressive visual system,
                  so the homepage feels authored instead of assembled.
                </p>
                <div className="page-hero__chips">
                  <span className="info-chip">responsive shell</span>
                  <span className="info-chip">shared MDX layer</span>
                  <span className="info-chip">workers deploy path</span>
                </div>
              </aside>
            ) : null}
          </div>
        </section>
      ) : null}

      <div className="page-shell__content">{children}</div>

      <SiteFooter />
    </div>
  );
}
