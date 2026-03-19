# PROJECT CONTENT KNOWLEDGE BASE

## OVERVIEW

This directory stores project showcase entries as markdown files.

## WHERE TO LOOK

- `*.md` - one project per file, surfaced at `/projects/:slug`

## CONVENTIONS

- Slug comes from the filename.
- Frontmatter should match `lib/content.ts`: `title`, `description`, `summary`, `order`, `featured`, `stack`, `role`, `problem`, `outcome`, `status`, optional links.

## ANTI-PATTERNS

- Do NOT add non-markdown files here.
- Do NOT omit required project metadata expected by the project pages.
