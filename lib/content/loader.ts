import matter from "gray-matter";

import type { MdxContentComponent } from "./mdx.js";
import { blogSchema, projectSchema, aboutSchema, type BlogPost, type Project, type AboutContent } from "./schema.js";

const blogRawModules = import.meta.glob<string>("../../content/blog/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

const blogContentModules = import.meta.glob<MdxContentComponent>("../../.generated/content/blog/*.mjs", {
  eager: true,
  import: "default",
});

const projectRawModules = import.meta.glob<string>("../../content/projects/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

const projectContentModules = import.meta.glob<MdxContentComponent>("../../.generated/content/projects/*.mjs", {
  eager: true,
  import: "default",
});

const aboutRawModules = import.meta.glob<string>("../../content/about.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

const aboutContentModules = import.meta.glob<MdxContentComponent>("../../.generated/content/about.mjs", {
  eager: true,
  import: "default",
});

function slugFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "";
  return filename.replace(/\.mdx$/, "");
}

function resolveRawSource(raw: unknown, sourcePath: string): string {
  if (typeof raw === "string") {
    return raw;
  }

  if (
    raw &&
    typeof raw === "object" &&
    "default" in raw &&
    typeof (raw as { default: unknown }).default === "string"
  ) {
    return (raw as { default: string }).default;
  }

  throw new Error(`Expected raw MDX source string for ${sourcePath}`);
}

function generatedPathFromSourcePath(sourcePath: string): string {
  return sourcePath
    .replace("../../content/", "../../.generated/content/")
    .replace(/\.mdx$/, ".mjs");
}

function getContentComponent(
  modules: Record<string, MdxContentComponent>,
  sourcePath: string,
  collectionName: string
): MdxContentComponent {
  const generatedPath = generatedPathFromSourcePath(sourcePath);
  const Content = modules[generatedPath];
  if (!Content) {
    throw new Error(`Missing generated MDX component for ${collectionName} entry: ${sourcePath}`);
  }
  return Content;
}

function parseAndValidateBlog(raw: string, sourcePath: string, Content: MdxContentComponent): BlogPost {
  const { data, content } = matter(raw);
  const slug = data.slug ?? slugFromPath(sourcePath);
  const result = blogSchema.safeParse({ ...data, slug });
  if (!result.success) {
    throw new Error(
      `Invalid blog post in ${sourcePath}: ${result.error.issues.map((i) => i.message).join(", ")}`
    );
  }
  return {
    ...result.data,
    body: content.trim(),
    Content,
  };
}

function parseAndValidateProject(raw: string, sourcePath: string, Content: MdxContentComponent): Project {
  const { data, content } = matter(raw);
  const slug = data.slug ?? slugFromPath(sourcePath);
  const result = projectSchema.safeParse({ ...data, slug });
  if (!result.success) {
    throw new Error(
      `Invalid project in ${sourcePath}: ${result.error.issues.map((i) => i.message).join(", ")}`
    );
  }
  return {
    ...result.data,
    body: content.trim(),
    Content,
  };
}

function parseAndValidateAbout(raw: string, sourcePath: string, Content: MdxContentComponent): AboutContent {
  const { data, content } = matter(raw);
  const result = aboutSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Invalid about content in ${sourcePath}: ${result.error.issues.map((i) => i.message).join(", ")}`
    );
  }
  return {
    ...result.data,
    body: content.trim(),
    Content,
  };
}

export function checkDuplicateSlugs(
  entries: Array<{ slug: string }>,
  collectionName: string
): void {
  const seen = new Map<string, string>();
  for (const entry of entries) {
    if (seen.has(entry.slug)) {
      throw new Error(
        `Duplicate slug "${entry.slug}" in ${collectionName} collection`
      );
    }
    seen.set(entry.slug, entry.slug);
  }
}

export function loadBlogPosts(): BlogPost[] {
  const posts = Object.entries(blogRawModules).map(([path, raw]) =>
    parseAndValidateBlog(resolveRawSource(raw, path), path, getContentComponent(blogContentModules, path, "blog"))
  );
  checkDuplicateSlugs(posts, "blog");
  const filteredPosts = posts.filter((post) => !post.draft);
  filteredPosts.sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return a.title.localeCompare(b.title);
  });
  return filteredPosts;
}

export function loadProjects(): Project[] {
  const projects = Object.entries(projectRawModules).map(([path, raw]) =>
    parseAndValidateProject(resolveRawSource(raw, path), path, getContentComponent(projectContentModules, path, "projects"))
  );
  checkDuplicateSlugs(projects, "projects");
  projects.sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return a.title.localeCompare(b.title);
  });
  return projects;
}

export function loadAbout(): AboutContent | null {
  const entries = Object.entries(aboutRawModules);
  if (entries.length === 0) {
    return null;
  }
  if (entries.length > 1) {
    throw new Error("Multiple about.mdx files found; only one is allowed");
  }
  const [path, raw] = entries[0]!;
  return parseAndValidateAbout(resolveRawSource(raw, path), path, getContentComponent(aboutContentModules, path, "about"));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = loadBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = loadProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
