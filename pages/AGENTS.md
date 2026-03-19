# PAGES KNOWLEDGE BASE - Vinext

## OVERVIEW

All route files live here. The app uses Vinext Pages Router semantics, with list/detail markdown routes for blog and projects.

## STRUCTURE

```text
pages/
|- _app.tsx              # Global CSS import + default Layout wrapper
|- _error.tsx            # Error page with getInitialProps
|- index.tsx             # Home: featured projects + latest posts
|- about.tsx             # Static profile page
|- contact.tsx           # Static contact page with local form state
|- 404.tsx               # Explicit 404 page
|- [...slug].tsx         # Catch-all SSR 404 responder
|- blog/
|  |- index.tsx          # Blog list
|  `- [...slug].tsx      # Blog detail from markdown
`- projects/
   |- index.tsx          # Project list
   `- [...slug].tsx      # Project detail from markdown
```

## WHERE TO LOOK

| Route | Source | Data source |
|-------|--------|-------------|
| `/` | `index.tsx` | `lib/content.ts` - `getAllBlogPosts`, `getAllProjects` |
| `/blog` | `blog/index.tsx` | `lib/content.ts` - `getAllBlogPosts` |
| `/blog/:slug` | `blog/[...slug].tsx` | `lib/content.ts` - `getBlogPostBySlug`, rendered with `react-markdown` |
| `/projects` | `projects/index.tsx` | `lib/content.ts` - `getAllProjects` |
| `/projects/:slug` | `projects/[...slug].tsx` | `lib/content.ts` - `getProjectBySlug`, rendered with `react-markdown` |
| `/about` | `about.tsx` | Static |
| `/contact` | `contact.tsx` | Static + `useState` |
| 404 | `404.tsx`, `[...slug].tsx`, `_error.tsx` | Explicit page + SSR catch-all + status-aware error page |

## CONVENTIONS

- File name equals route path; `[...slug].tsx` is the dynamic catch-all form.
- `getStaticProps` handles content-backed pages; `getServerSideProps` appears only in the catch-all 404 route.
- Page data loading goes through `lib/content.ts` - no inline filesystem reads in page files.
- `_app.tsx` wraps pages in `Layout` by default, but it also honors optional `Component.getLayout`.
- Markdown rendering is limited to the blog/project detail routes.

## ANTI-PATTERNS (THIS PROJECT)

- Do NOT add `pages/app/` - Vinext will detect App Router and fail.
- Do NOT import `node:` modules directly in page files - keep server-only filesystem code in `lib/content.ts`.
- Do NOT add `getStaticProps` to `about.tsx` or `contact.tsx` - those pages are static.
- Do NOT bypass `_app.tsx` layout conventions unless a page explicitly defines `getLayout`.
