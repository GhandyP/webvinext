import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";

import HomePage from "../app/page";
import ProjectDetailPage from "../app/projects/[slug]/page";
import { PageShell } from "../components/page-shell";
import { loadProjects } from "../lib/content";

function renderHome() {
  return renderToStaticMarkup(createElement(HomePage));
}

function renderProject(slug: string) {
  return renderToStaticMarkup(createElement(ProjectDetailPage, { params: { slug } }));
}

describe("people-first Home experience", () => {
  it("introduces the person and explains connected perspectives without a technical gate", () => {
    const markup = renderHome();

    expect(markup).toMatch(/<h1\b[^>]*>[^]*Ghandy[^]*?<\/h1>/);
    expect(markup).toContain("I bring different perspectives together");
    expect(markup).toContain('aria-labelledby="perspectives-title"');
    expect(markup).toContain('<dt>People</dt>');
    expect(markup).toContain('<dt>Organization</dt>');
    expect(markup).toContain('<dt>Technology</dt>');
    expect(markup).toContain('<dt>Practice</dt>');
    expect(markup).not.toContain("<form");
  });

  it("anchors the introduction in a real personal artifact before the wider work catalogue", () => {
    const markup = renderHome();
    const perspectives = markup.indexOf('id="perspectives-title"');
    const example = markup.indexOf('id="working-example"');
    const catalogue = markup.indexOf("Explore the work");

    expect(perspectives).toBeGreaterThanOrEqual(0);
    expect(example).toBeGreaterThan(perspectives);
    expect(catalogue).toBeGreaterThan(example);
    expect(markup).toContain('href="/projects/webvinext-site"');
    expect(markup).toContain("This is my own evolving site, not a reported client result.");
    expect(markup).toContain("How can work and ideas be easier to explore?");
  });

  it("illustrates the Home perspectives with a labeled, accessible figure", () => {
    const markup = renderHome();

    expect(markup).toContain('src="/images/home-perspectives.svg"');
    expect(markup).toMatch(/alt="[^\"]*People[^\"]*Organization[^\"]*Technology[^\"]*Practice/);
    expect(markup).toMatch(/<figure[^>]*home-perspectives__figure/);
    expect(markup).toContain("<figcaption");
  });

  it("shows the architecture diagram only on the WebVinext project detail", () => {
    const webvinext = renderProject("webvinext-site");
    const otherProject = loadProjects().find((project) => project.slug !== "webvinext-site");

    expect(otherProject).toBeDefined();
    expect(webvinext).toContain('src="/images/webvinext-flow.svg"');
    expect(webvinext).toContain('loading="lazy"');
    expect(webvinext).toContain("explanatory");

    const otherMarkup = renderProject(otherProject!.slug);
    expect(otherMarkup).not.toContain("/images/webvinext-flow.svg");
    expect(otherMarkup).toContain("Project detail");
  });

  it("offers learning, deeper context, and a conversation through existing destinations", () => {
    const markup = renderHome();

    expect(markup).toMatch(/href="\/projects"[^>]*>Browse all projects<\/a>/);
    expect(markup).toMatch(/href="\/blog"[^>]*>Read all articles<\/a>/);
    expect(markup).toMatch(/href="\/about"[^>]*>How I work<\/a>/);
    expect(markup).toContain("Ideas to think with");
    expect(markup).toContain("A conversation can start with a question, not a technical brief.");
    expect(markup).toContain('href="https://x.com/Ghandyofmetal"');
  });

  it("provides a skip link to the single main landmark before site navigation", () => {
    const markup = renderHome();
    const skip = markup.indexOf('href="#main-content"');
    const header = markup.indexOf("<header");

    expect(skip).toBeGreaterThanOrEqual(0);
    expect(skip).toBeLessThan(header);
    expect(markup).toContain("Skip to content");
    expect(markup.match(/<main\b/g)).toHaveLength(1);
    expect(markup).toMatch(/<main\b[^>]*id="main-content"/);
    expect(markup).toMatch(/<main\b[^>]*tabindex="-1"/);
    expect(markup).toContain('href="#working-example"');
  });

  it("preserves inner-page titles, descriptions, content, and navigation outside main", () => {
    const markup = renderToStaticMarkup(
      createElement(PageShell, {
        currentPath: "/about",
        title: "About",
        description: "Existing page description",
        children: createElement("p", null, "Existing page content"),
      }),
    );
    const mainStart = markup.indexOf("<main");
    const mainEnd = markup.indexOf("</main>");

    expect(markup).toMatch(/<h1\b[^>]*>About<\/h1>/);
    expect(markup).toContain("Existing page description");
    expect(markup.slice(mainStart, mainEnd)).toContain("Existing page content");
    expect(markup.indexOf("</header>")).toBeLessThan(mainStart);
    expect(markup.indexOf("<footer")).toBeGreaterThan(mainEnd);
    expect(markup).toMatch(/href="\/about"[^>]*aria-current="page"/);
    expect(markup).not.toContain('id="perspectives-title"');
    expect(markup).not.toContain('id="working-example"');
  });
});
