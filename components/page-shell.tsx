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
                      Hi, I'm <span className="page-title__accent">Ghandy</span>
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
                      View my projects
                    </a>
                    <a className="button-secondary" href="https://x.com/Ghandyofmetal">
                      Contact me
                    </a>
                  </div>

                  <div className="page-hero__chips">
                    <span className="info-chip">DevSecOps</span>
                    <span className="info-chip">AI</span>
                    <span className="info-chip">Infrastructure</span>
                    <span className="info-chip">Backend</span>
                  </div>
                </>
              ) : null}
            </div>

            {isHome ? (
              <aside className="page-hero__meta" aria-label="Homepage summary">
                <p className="page-hero__meta-title">Ideas don't survive without infrastructure.</p>
                <p className="page-hero__meta-copy">
                  Complex problem solver at the intersection of backend, infrastructure,
                  DevSecOps, artificial intelligence, and cybersecurity.
                </p>
                <div className="page-hero__chips">
                    <span className="info-chip">Python · Go · Rust</span>
                    <span className="info-chip">Terraform · Kubernetes</span>
                  <span className="info-chip">Cloudflare · AWS</span>
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
