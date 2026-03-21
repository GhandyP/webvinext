import type { MdxContentComponent } from "./mdx.js";
import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, "Blog post title is required"),
  description: z.string().min(1, "Blog post description is required"),
  date: z.string().datetime({ message: "Blog date must be a valid ISO datetime string" }),
  updatedDate: z
    .string()
    .datetime({ message: "Updated date must be a valid ISO datetime string" })
    .optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  cover: z.string().url().optional(),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase alphanumeric with hyphens"
    ),
});

export type BlogPostFrontmatter = z.infer<typeof blogSchema>;

export interface BlogPost extends BlogPostFrontmatter {
  body: string;
  Content: MdxContentComponent;
}

export const projectSchema = z.object({
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Project description is required"),
  date: z.string().datetime({ message: "Project date must be a valid ISO datetime string" }),
  status: z.enum(["active", "completed", "archived", "wip"]),
  stack: z.array(z.string()).min(1, "At least one stack item is required"),
  featured: z.boolean().default(false),
  repositoryUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase alphanumeric with hyphens"
    ),
});

export interface Project extends z.infer<typeof projectSchema> {
  body: string;
  Content: MdxContentComponent;
}

export const aboutSchema = z.object({
  title: z.string().min(1, "About page title is required"),
  description: z.string().min(1, "About page description is required"),
});

export interface AboutContent extends z.infer<typeof aboutSchema> {
  body: string;
  Content: MdxContentComponent;
}

export type ContentCollection = "blog" | "projects" | "about";
