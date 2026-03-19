# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-19
**Runtime:** Vinext (Cloudflare Next.js-compatible Vite plugin) - Pages Router only

## OVERVIEW

Personal portfolio app built with Cloudflare Vinext, React 19, TypeScript, and local markdown content. Package manager is bun; no linter, formatter, or test runner is configured.

## STRUCTURE

```text
webvinext/
|- pages/                    # Route source; see pages/AGENTS.md
|- components/               # Shared shell pieces
|- lib/content.ts            # Markdown loader and content model
|- content/blog/             # Blog markdown entries
|- content/projects/         # Project markdown entries
|- assets/css/main.css       # Hand-written global CSS
|- public/                   # Static assets copied as-is
|- documentacion_organizada/ # Spanish product/ops docs
|- vite.config.ts            # vinext() plugin only
|- next.config.js            # Empty compatibility file
|- tsconfig.json             # Bundler resolution, strict OFF
|- package.json              # Bun scripts and dependencies
|- .gitignore                # Ignores generated outputs
`- README.md                 # Stale Nuxt starter text; not source of truth
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Route behavior | `pages/` | Each file maps to one URL; dynamic content lives under `blog/` and `projects/`. |
| Content model | `lib/content.ts` | Uses `node:fs/promises` + manual frontmatter parsing; only server-side content reader. |
| Shared shell | `components/Layout.tsx` | Imports `Header` + `Footer`; default wrapper from `_app.tsx`. |
| Markdown rendering | `pages/blog/[...slug].tsx`, `pages/projects/[...slug].tsx` | Uses `react-markdown` for detail pages. |
| Build/deploy | `package.json`, `vite.config.ts`, `next.config.js` | Bun scripts; Vinext handles React plugin registration. |
| Project docs | `documentacion_organizada/` | Spanish docs are more reliable than the stale root `README.md`. |
| Generated artifacts | `.nuxt/`, `.output/`, `dist/`, `.data/` | Ignore for source analysis; all are gitignored. |

## CODE MAP

| Symbol | File | Role |
|--------|------|------|
| `App` | `pages/_app.tsx` | Default app wrapper; honors optional `Component.getLayout` |
| `getStaticProps` | `pages/index.tsx`, `pages/blog/index.tsx`, `pages/projects/index.tsx`, slug routes | Static data loading |
| `getStaticPaths` | `pages/blog/[...slug].tsx`, `pages/projects/[...slug].tsx` | Dynamic route generation |
| `getServerSideProps` | `pages/[...slug].tsx` | Catch-all 404 responder |
| `getInitialProps` | `pages/_error.tsx` | Custom error page status handling |
| `getAllBlogPosts` | `lib/content.ts` | Reads and sorts blog content |
| `getAllProjects` | `lib/content.ts` | Reads and sorts project content |
| `Layout` | `components/Layout.tsx` | Site shell wrapper |

## CONVENTIONS

- TypeScript source only; `allowJs` is false.
- ESM everywhere (`"type": "module"`).
- `strict: false` in `tsconfig.json`.
- Package manager is bun; scripts go through `bun run ...`.
- No CSS framework; `assets/css/main.css` is hand-written utility-style CSS.
- Content lives in `content/` and is read at build/server time through `lib/content.ts`.
- Blog and project detail pages render markdown through `react-markdown`.
- Verification relies on `bun run check` and `bun run verify`; no dedicated test framework is configured.
- Documentation in `documentacion_organizada/` is Spanish; code and filenames stay in English.

## ANTI-PATTERNS (THIS PROJECT)

- Do NOT add `@vitejs/plugin-react` to the `vite.config.ts` plugins array - Vinext registers React automatically.
- Do NOT add `pages/app/` - Vinext will detect App Router and require `@vitejs/plugin-rsc`.
- Do NOT use browser-only code inside `lib/content.ts` - it depends on `node:fs/promises`.
- Do NOT treat root `README.md` as current framework guidance - it still contains the default Nuxt starter text.

## COMMANDS

```bash
bun run dev
bun run build
bun run start
bun run check
bun run verify
bun run deploy
```
