import { FOOTER_COPYRIGHT, SOCIAL_LINKS } from "../lib/site-config";

export function SiteFooter() {
  return (
    <footer
      className="surface"
      style={{
        display: "grid",
        gap: "0.9rem",
        marginBlock: "2rem 1.5rem",
      }}
    >
      <div className="muted" style={{ fontSize: "0.9rem" }}>
        {FOOTER_COPYRIGHT}
      </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          gap: "0.75rem",
        }}
      >
        {SOCIAL_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
