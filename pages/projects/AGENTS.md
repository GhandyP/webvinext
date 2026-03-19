# PROJECT ROUTES KNOWLEDGE BASE

## OVERVIEW

This directory owns the projects listing route and project detail route.

## WHERE TO LOOK

- `index.tsx` - projects list page using `getAllProjects`
- `[...slug].tsx` - project detail page using `getStaticPaths`, `getStaticProps`, and `marked`

## CONVENTIONS

- Project data comes from `lib/content.ts`.
- Detail slugs map to markdown filenames in `content/projects/`.

## ANTI-PATTERNS

- Do NOT read markdown files directly from route files.
- Do NOT change frontmatter expectations without updating `lib/content.ts` and content files together.
