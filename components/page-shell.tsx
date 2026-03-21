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

  return (
    <>
      <SiteHeader {...headerProps} />

      {title || description || eyebrow ? (
        <section
          className="surface"
          style={{
            display: "grid",
            gap: "0.9rem",
            marginBlockEnd: "1.5rem",
          }}
        >
          {eyebrow ? (
            <p
              className="muted"
              style={{ letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "0.78rem" }}
            >
              {eyebrow}
            </p>
          ) : null}

          {title ? (
            <h1 className="glow" style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)", lineHeight: 1.05 }}>
              {title}
            </h1>
          ) : null}

          {description ? (
            <p className="muted" style={{ maxWidth: "54ch", fontSize: "1rem" }}>
              {description}
            </p>
          ) : null}
        </section>
      ) : null}

      <div style={{ display: "grid", gap: "1rem" }}>{children}</div>

      <SiteFooter />
    </>
  );
}
