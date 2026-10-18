import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

interface PageShellProps {
  title?: string;
  description?: string;
  eyebrow?: string;
  currentPath?: string | null;
  children: ReactNode;
}

export function PageShell({
  title,
  description,
  eyebrow,
  currentPath,
  children,
}: PageShellProps) {
  const headerProps = currentPath === undefined ? {} : { currentPath };
  const isHome = currentPath === "/";

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader {...headerProps} />

      <main id="main-content" className="page-shell__main" tabIndex={-1}>
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
                      <a className="button" href="#working-example">See a working example</a>
                      <a className="button-secondary" href="https://x.com/Ghandyofmetal">
                        Let’s talk
                      </a>
                      <a className="section-link" href="/about">How I work</a>
                    </div>
                  </>
                ) : null}
              </div>

              {isHome ? (
                <aside className="page-hero__meta home-perspectives" aria-labelledby="perspectives-title">
                  <h2 id="perspectives-title" className="page-hero__meta-title">More than one perspective</h2>
                  <p className="page-hero__meta-copy">
                    What matters becomes clearer when the pieces are connected.
                  </p>
                  <figure className="home-perspectives__figure">
                    <img
                      src="/images/home-perspectives.svg"
                      width={800}
                      height={620}
                      alt="People, Organization, Technology, and Practice connect around the question: What are you trying to make sense of?"
                      decoding="async"
                    />
                    <figcaption>A question viewed through four connected perspectives.</figcaption>
                  </figure>
                  <dl className="home-perspectives__list">
                    <div>
                      <dt>People</dt>
                      <dd>What someone needs, understands, and experiences.</dd>
                    </div>
                    <div>
                      <dt>Organization</dt>
                      <dd>How goals, resources, and everyday work fit together.</dd>
                    </div>
                    <div>
                      <dt>Technology</dt>
                      <dd>Where software, data, and connected systems can help.</dd>
                    </div>
                    <div>
                      <dt>Practice</dt>
                      <dd>What can be built, maintained, and improved.</dd>
                    </div>
                  </dl>
                  <p className="home-perspectives__note">
                    Different lenses, not boxes for you to fit into.
                  </p>
                </aside>
              ) : null}
            </div>
          </section>
        ) : null}

        <div className="page-shell__content">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}
