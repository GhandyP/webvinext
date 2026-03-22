import { FOOTER_COPYRIGHT, SOCIAL_LINKS } from "../lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <div className="site-footer__copy">{FOOTER_COPYRIGHT}</div>

        <ul className="site-footer__social">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a className="site-footer__link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
