# BLOG CONTENT KNOWLEDGE BASE

## OVERVIEW

This directory stores blog posts as markdown files.

## WHERE TO LOOK

- `*.md` - one post per file, surfaced at `/blog/:slug`

## CONVENTIONS

- Slug comes from the filename.
- Frontmatter should match `lib/content.ts`: `title`, `description`, `pubDate`, optional `tags`.

## ANTI-PATTERNS

- Do NOT add non-markdown files here.
- Do NOT rely on nested folders for routing; filenames drive slugs.
