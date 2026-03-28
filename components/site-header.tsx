import { NAV_ITEMS, SITE_NAME } from "../lib/site-config";

interface SiteHeaderProps {
  currentPath?: string;
}

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Primary navigation">
        <a href="/" className="site-header__brand" aria-label={`${SITE_NAME} home`}>
          <span className="site-header__logo">
            <span className="site-header__brand-mark">{SITE_NAME}</span>
          </span>
        </a>

        <ul className="site-header__links">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === currentPath;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`site-header__link${isActive ? " site-header__link--active" : ""}`}
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
