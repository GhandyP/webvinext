import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import NotFoundPage from "../app/not-found";
import RootLayout from "../app/layout";
import { PageShell } from "../components/page-shell";

describe("page landmarks and navigation state", () => {
  it("keeps site navigation and footer outside the main landmark", () => {
    const page = createElement(PageShell, {
      currentPath: "/about",
      title: "About",
      children: createElement("p", null, "Page content"),
    });
    const markup = renderToStaticMarkup(createElement(RootLayout, { children: page }));
    const headerEnd = markup.indexOf("</header>");
    const mainStart = markup.indexOf("<main");
    const mainEnd = markup.indexOf("</main>");
    const footerStart = markup.indexOf("<footer");

    expect(markup.match(/<main\b/g)).toHaveLength(1);
    expect(headerEnd).toBeGreaterThanOrEqual(0);
    expect(footerStart).toBeGreaterThanOrEqual(0);
    expect(headerEnd).toBeLessThan(mainStart);
    expect(mainStart).toBeLessThan(mainEnd);
    expect(mainEnd).toBeLessThan(footerStart);
    expect(markup.slice(mainStart, mainEnd)).toContain("Page content");
  });

  it("preserves container and shell spacing styles after moving the main landmark", async () => {
    const styles = await readFile(resolve(import.meta.dirname, "..", "app/globals.css"), "utf8");
    const container = styles.match(/[.]container\s*\{([^}]*)\}/)?.[1] ?? "";
    const desktopContainer = styles.match(/@media \(min-width: 768px\)\s*\{\s*[.]container\s*\{([^}]*)\}/)?.[1] ?? "";
    const shell = styles.match(/[.]page-shell\s*\{([^}]*)\}/)?.[1] ?? "";
    const main = styles.match(/[.]page-shell__main\s*\{([^}]*)\}/)?.[1] ?? "";

    expect(container).toContain("max-width: var(--max-width);");
    expect(container).toContain("padding: 1.25rem 1.25rem 3rem;");
    expect(desktopContainer).toContain("padding-inline: 1.75rem;");
    expect(shell).toContain("gap: 1.6rem;");
    expect(main).toContain("gap: 1.6rem;");
  });

  it("leaves 404 navigation inactive while keeping Home active on the home page", () => {
    const notFound = renderToStaticMarkup(createElement(NotFoundPage));
    const home = renderToStaticMarkup(
      createElement(PageShell, {
        currentPath: "/",
        children: createElement("p", null, "Home content"),
      }),
    );

    expect(notFound).toContain("Route not found");
    expect(notFound).not.toContain('aria-current="page"');
    expect(notFound).not.toContain("site-header__link--active");
    expect(home).toContain('aria-current="page"');
    expect(home).toContain("site-header__link--active");
  });
});
