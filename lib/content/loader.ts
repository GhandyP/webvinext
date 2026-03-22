import type { MdxContentComponent } from "./mdx.js";
import { blogSchema, projectSchema, aboutSchema, type BlogPost, type Project, type AboutContent } from "./schema.js";

interface GeneratedMdxModule {
  default: MdxContentComponent;
  frontmatter: Record<string, unknown>;
  rawContent: string;
}

const blogModules = import.meta.glob<GeneratedMdxModule>("../../.generated/content/blog/*.mjs", {
  eager: true,
});

const projectModules = import.meta.glob<GeneratedMdxModule>("../../.generated/content/projects/*.mjs", {
  eager: true,
});

const aboutModules = import.meta.glob<GeneratedMdxModule>("../../.generated/content/about.mjs", {
  eager: true,
});

function slugFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "";
  return filename.replace(/\.mjs$/, "");
}

function parseAndValidateBlog(module: GeneratedMdxModule, sourcePath: string): BlogPost {
  const data = module.frontmatter;
  const slug = (data.slug as string | undefined) ?? slugFromPath(sourcePath);
  const result = blogSchema.safeParse({ ...data, slug });
  if (!result.success) {
    throw new Error(
      `Invalid blog post in ${sourcePath}: ${result.error.issues.map((i) => i.message).join(", ")}`
    );
  }
  return {
    ...result.data,
    body: module.rawContent.trim(),
    Content: module.default,
  };
}

function parseAndValidateProject(module: GeneratedMdxModule, sourcePath: string): Project {
  const data = module.frontmatter;
  const slug = (data.slug as string | undefined) ?? slugFromPath(sourcePath);
  const result = projectSchema.safeParse({ ...data, slug });
  if (!result.success) {
    throw new Error(
      `Invalid project in ${sourcePath}: ${result.error.issues.map((i) => i.message).join(", ")}`
    );
  }
  return {
    ...result.data,
    body: module.rawContent.trim(),
    Content: module.default,
  };
}

function parseAndValidateAbout(module: GeneratedMdxModule, sourcePath: string): AboutContent {
  const data = module.frontmatter;
  const result = aboutSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Invalid about content in ${sourcePath}: ${result.error.issues.map((i) => i.message).join(", ")}`
    );
  }
  return {
    ...result.data,
    body: module.rawContent.trim(),
    Content: module.default,
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
  const posts = Object.entries(blogModules).map(([path, mod]) =>
    parseAndValidateBlog(mod, path)
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
  const projects = Object.entries(projectModules).map(([path, mod]) =>
    parseAndValidateProject(mod, path)
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
  const entries = Object.entries(aboutModules);
  if (entries.length === 0) {
    return null;
  }
  if (entries.length > 1) {
    throw new Error("Multiple about.mjs files found; only one is allowed");
  }
  const [path, mod] = entries[0]!;
  return parseAndValidateAbout(mod, path);
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = loadBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = loadProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
