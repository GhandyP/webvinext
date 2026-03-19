# BLOG ROUTES KNOWLEDGE BASE

## OVERVIEW

This directory owns the blog listing route and blog detail route.

## WHERE TO LOOK

- `index.tsx` - blog list page using `getAllBlogPosts`
- `[...slug].tsx` - blog detail page using `getStaticPaths`, `getStaticProps`, and `marked`

## CONVENTIONS

- Blog data comes from `lib/content.ts`.
- Detail slugs map to markdown filenames in `content/blog/`.

## ANTI-PATTERNS

- Do NOT read markdown files directly from route files.
- Do NOT change slug behavior without keeping `content/blog/` in sync.
