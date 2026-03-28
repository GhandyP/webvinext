import { describe, expect, it } from "vite-plus/test";
import {
  blogSchema,
  projectSchema,
  aboutSchema,
} from "../lib/content/schema.js";

describe("content schemas", () => {
  it("accepts a valid blog post", () => {
    const result = blogSchema.safeParse({
      title: "Test Post",
      description: "A test blog post",
      date: "2026-03-18T00:00:00.000Z",
      draft: false,
      tags: ["test"],
      slug: "test-post",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a blog post missing required fields", () => {
    const result = blogSchema.safeParse({
      title: "Test Post",
      slug: "test-post",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a blog post with an invalid slug", () => {
    const result = blogSchema.safeParse({
      title: "Test Post",
      description: "A test blog post",
      date: "2026-03-18T00:00:00.000Z",
      draft: false,
      tags: [],
      slug: "INVALID SLUG!",
    });
    expect(result.success).toBe(false);
  });

  it("accepts a valid project", () => {
    const result = projectSchema.safeParse({
      title: "Test Project",
      description: "A test project",
      date: "2026-03-18T00:00:00.000Z",
      status: "active",
      stack: ["react"],
      featured: false,
      slug: "test-project",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a project with empty stack", () => {
    const result = projectSchema.safeParse({
      title: "Test Project",
      description: "A test project",
      date: "2026-03-18T00:00:00.000Z",
      status: "active",
      stack: [],
      featured: false,
      slug: "test-project",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a project with invalid status", () => {
    const result = projectSchema.safeParse({
      title: "Test Project",
      description: "A test project",
      date: "2026-03-18T00:00:00.000Z",
      status: "invalid-status",
      stack: ["react"],
      featured: false,
      slug: "test-project",
    });
    expect(result.success).toBe(false);
  });

  it("accepts valid about content", () => {
    const result = aboutSchema.safeParse({
      title: "About",
      description: "About this site",
    });
    expect(result.success).toBe(true);
  });

   it("rejects about content missing description", () => {
     const result = aboutSchema.safeParse({
       title: "About",
     });
     expect(result.success).toBe(false);
   });

   describe("project schema new fields", () => {
     it("accepts a project with category field", () => {
       const result = projectSchema.safeParse({
         title: "Test Project",
         description: "A test project",
         date: "2026-03-18T00:00:00.000Z",
         status: "active",
         stack: ["react"],
         slug: "test-project",
         category: "backend",
       });
       expect(result.success).toBe(true);
     });

     it("accepts a project with highlights field", () => {
       const result = projectSchema.safeParse({
         title: "Test Project",
         description: "A test project",
         date: "2026-03-18T00:00:00.000Z",
         status: "active",
         stack: ["react"],
         slug: "test-project",
         highlights: ["high performance", "scalable"],
       });
       expect(result.success).toBe(true);
     });

     it("accepts a project with architecture field", () => {
       const result = projectSchema.safeParse({
         title: "Test Project",
         description: "A test project",
         date: "2026-03-18T00:00:00.000Z",
         status: "active",
         stack: ["react"],
         slug: "test-project",
         architecture: "Microservices with API gateway",
       });
       expect(result.success).toBe(true);
     });

     it("accepts a project with challenges field", () => {
       const result = projectSchema.safeParse({
         title: "Test Project",
         description: "A test project",
         date: "2026-03-18T00:00:00.000Z",
         status: "active",
         stack: ["react"],
         slug: "test-project",
         challenges: ["Legacy system integration", "Performance optimization"],
       });
       expect(result.success).toBe(true);
     });

     it("accepts a project with outcome field", () => {
       const result = projectSchema.safeParse({
         title: "Test Project",
         description: "A test project",
         date: "2026-03-18T00:00:00.000Z",
         status: "active",
         stack: ["react"],
         slug: "test-project",
         outcome: "Increased throughput by 40%",
       });
       expect(result.success).toBe(true);
     });

     it("accepts a project without the new fields (omission)", () => {
       const result = projectSchema.safeParse({
         title: "Test Project",
         description: "A test project",
         date: "2026-03-18T00:00:00.000Z",
         status: "active",
         stack: ["react"],
         slug: "test-project",
       });
       expect(result.success).toBe(true);
     });

     it("rejects project with invalid category type", () => {
       const result = projectSchema.safeParse({
         title: "Test Project",
         description: "A test project",
         date: "2026-03-18T00:00:00.000Z",
         status: "active",
         stack: ["react"],
         slug: "test-project",
         category: 123,
       });
       expect(result.success).toBe(false);
     });

     it("accepts project with valid category values", () => {
       const validCategories = ["backend", "devops", "ai", "security", "fullstack"];
       validCategories.forEach((category) => {
         const result = projectSchema.safeParse({
           title: "Test Project",
           description: "A test project",
           date: "2026-03-18T00:00:00.000Z",
           status: "active",
           stack: ["react"],
           slug: "test-project",
           category,
         });
         expect(result.success).toBe(true);
       });
     });
   });
 });

describe("duplicate slug detection", () => {
    it("throws on duplicate slugs in a collection", async () => {
     const { checkDuplicateSlugs } = await import("../lib/content/loader.js");
     const duplicateEntries = [
       { slug: "post-1" },
       { slug: "post-2" },
       { slug: "post-1" },
     ];
     expect(() => checkDuplicateSlugs(duplicateEntries, "blog")).toThrow(
       'Duplicate slug "post-1" in blog collection'
     );
   });

   it("does not throw on unique slugs", async () => {
     const { checkDuplicateSlugs } = await import("../lib/content/loader.js");
     const uniqueEntries = [
       { slug: "post-1" },
       { slug: "post-2" },
       { slug: "post-3" },
     ];
     expect(() => checkDuplicateSlugs(uniqueEntries, "projects")).not.toThrow();
    });

    it("treats draft and published slug collisions as duplicates", async () => {
      const { checkDuplicateSlugs } = await import("../lib/content/loader.js");
      const entries = [
        { slug: "same-slug" },
        { slug: "same-slug" },
      ];
      expect(() => checkDuplicateSlugs(entries, "blog")).toThrow('Duplicate slug "same-slug" in blog collection');
    });
  });

describe("content loaders", () => {
   it("filters out draft blog posts", async () => {
     const { loadBlogPosts } = await import("../lib/content/loader.js");
     const posts = loadBlogPosts();
     const draftPosts = posts.filter((post) => post.draft);
     expect(draftPosts).toHaveLength(0);
   });

   it("sorts blog posts by date descending, then title ascending", async () => {
     const { loadBlogPosts } = await import("../lib/content/loader.js");
     const posts = loadBlogPosts();
     for (let i = 0; i < posts.length - 1; i++) {
       const current = posts[i];
       const next = posts[i + 1];
       if (!current || !next) continue;
       const currentDate = new Date(current.date).getTime();
       const nextDate = new Date(next.date).getTime();
       
       if (currentDate === nextDate) {
         expect(current.title <= next.title).toBe(true);
       } else {
         expect(currentDate).toBeGreaterThan(nextDate);
       }
     }
   });

   it("sorts projects by date descending, then title ascending", async () => {
     const { loadProjects } = await import("../lib/content/loader.js");
     const projects = loadProjects();
     for (let i = 0; i < projects.length - 1; i++) {
       const current = projects[i];
       const next = projects[i + 1];
       if (!current || !next) continue;
       const currentDate = new Date(current.date).getTime();
       const nextDate = new Date(next.date).getTime();
       
       if (currentDate === nextDate) {
         expect(current.title <= next.title).toBe(true);
       } else {
         expect(currentDate).toBeGreaterThan(nextDate);
       }
     }
   });

   it("returns null for unknown blog slug", async () => {
     const { getBlogPostBySlug } = await import("../lib/content/loader.js");
     const post = getBlogPostBySlug("non-existent-slug-12345");
     expect(post).toBeNull();
   });

   it("returns null for unknown project slug", async () => {
     const { getProjectBySlug } = await import("../lib/content/loader.js");
     const project = getProjectBySlug("non-existent-slug-67890");
     expect(project).toBeNull();
   });

   it("returns about content when file exists", async () => {
     const { loadAbout } = await import("../lib/content/loader.js");
     const about = loadAbout();
     expect(about).not.toBeNull();
     if (about) {
       expect(about.title).toBeDefined();
       expect(about.description).toBeDefined();
     }
   });

   it("returns existing blog post by slug", async () => {
     const { loadBlogPosts, getBlogPostBySlug } = await import("../lib/content/loader.js");
     const posts = loadBlogPosts();
     if (posts.length > 0) {
       const firstPost = posts[0];
       if (!firstPost) return;
       const found = getBlogPostBySlug(firstPost.slug);
       expect(found).not.toBeNull();
       expect(found?.slug).toBe(firstPost.slug);
     }
   });

    it("returns existing project by slug", async () => {
      const { loadProjects, getProjectBySlug } = await import("../lib/content/loader.js");
     const projects = loadProjects();
     if (projects.length > 0) {
       const firstProject = projects[0];
       if (!firstProject) return;
       const found = getProjectBySlug(firstProject.slug);
       expect(found).not.toBeNull();
        expect(found?.slug).toBe(firstProject.slug);
      }
    });

    it("includes project body content from mdx", async () => {
      const { loadProjects } = await import("../lib/content/loader.js");
      const projects = loadProjects();
      expect(projects[0]?.body).toContain("## Problem");
    });

    it("includes about body content from mdx", async () => {
      const { loadAbout } = await import("../lib/content/loader.js");
      const about = loadAbout();
      expect(about?.body).toContain("## From Curiosity to Engineering");
    });
  });
