import { NAV_ITEMS, SITE_NAME } from "../lib/site-config";

interface SiteHeaderProps {
  currentPath?: string;
}

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header
      className="surface-raised"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        marginBlock: "1.5rem 2rem",
        boxShadow: "0 0 24px var(--color-shadow-glow)",
      }}
    >
      <a
        href="/"
        className="glow"
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {SITE_NAME}
      </a>

      <nav aria-label="Primary navigation">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === currentPath;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.45rem 0.75rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    background: isActive ? "var(--color-surface)" : "transparent",
                    color: isActive ? "var(--color-accent-2)" : undefined,
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
