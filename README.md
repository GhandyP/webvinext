# webvinext

`webvinext` is a content-driven site built with Vinext, React App Router, and Cloudflare Workers. The repo includes a validated MDX content layer, route metadata, sitemap/robots support, and a Workers-aligned local preview/deploy workflow.

## Prerequisites

- Node.js and pnpm available locally
- Dependencies installed with `pnpm install`
- Cloudflare authentication before the first real deploy:

```bash
wrangler login
wrangler whoami
```

## Available Scripts

```bash
npm run dev
npm run check
npm run build
npm run preview
npm run deploy
```

- `npm run dev` starts local development (runs `content:generate` then `vp dev`)
- `npm run check` runs typecheck and tests (each runs `content:generate` first)
- `npm run build` produces the production output used by preview and deploy (runs `content:generate` then `vp build`)
- `npm run preview` runs the built app through the local Workers-aligned preview flow (runs `content:generate` then `vp preview`)
- `npm run deploy` publishes the Worker with Wrangler

## Local Development

Install dependencies once:

```bash
pnpm install
```

Start the app locally:

```bash
npm run dev
```

Use local development for route, content, and UI work. The runtime contract is defined by `vite.config.ts`, `wrangler.jsonc`, and `worker/index.ts`, so keep workflow changes aligned with those files.

## Validation

Run the repo checks before preview or deploy:

```bash
npm run check
npm run build
```

`npm run check` must stay green before release work. `npm run build` is the source of truth for the preview and deploy artifacts.

## Preview Workflow

Start the production preview:

```bash
npm run preview
```

After preview starts, verify the publishable surface:

- `/`
- `/about`
- `/blog`
- `/blog/getting-started-with-vinext`
- `/projects`
- `/projects/webvinext-site`
- `/sitemap.xml`
- `/robots.txt`
- `/favicon.svg`
- `/og-default.svg`

Preview is the local verification step for the built Worker output. In the current repo, the preview flow is powered by `vp preview`, and the production deploy step consumes the built Worker output that Wrangler sees through the generated deploy config.

## Deploy Workflow

Before a real deploy:

1. Replace the placeholder site domain in `lib/site-config.ts`.
2. Run `npm run check`.
3. Run `npm run build`.
4. Validate the Worker package in dry-run mode.
5. Run the real deploy.

Dry-run validation:

```bash
./node_modules/.bin/wrangler deploy --dry-run
```

Real deploy:

```bash
npm run deploy
```

The documented deploy flow has been verified against the current runtime output. `wrangler deploy --dry-run` uses the generated deploy configuration from the build output and shows the Worker bindings without publishing.

## Production URL Configuration

`SITE_URL` in `lib/site-config.ts` is a build-time site setting, not a default Wrangler binding. Update it before production deploy so canonicals, `og:url`, sitemap entries, and robots output point at the real domain instead of the placeholder `https://webvinext.dev`.

## Cloudflare Runtime Expectations

- `wrangler.jsonc` is the checked-in source config for the Worker runtime
- `worker/index.ts` is the Worker entry used for Vinext routing and image optimization
- Current bindings exposed during deploy validation:
  - `IMAGES`
  - `ASSETS`

If those bindings or the Worker entry change, update this README in the same task so preview and deploy docs do not drift.

## Project-Scoped OpenCode Skills

Repo-local skill guidance lives in `.agents/README.md`. Those skills are workflow helpers for contributors and agents, not site runtime dependencies.

- Local skill docs live under `.agents/skills/`
- Locked skill versions live in `skills-lock.json`
- External skills remain optional; the site must build and deploy without them

See `.agents/README.md` for the current skill inventory, precedence rules, skill installation instructions, and project-local conventions.

## Release Notes
- Keep commands in this README aligned with `package.json`
- Keep Worker/runtime details aligned with `wrangler.jsonc`, `vite.config.ts`, and `worker/index.ts`
- Keep skill documentation in `.agents/README.md` up to date
- When changing scripts, runtime, or skills, update the corresponding documentation
- Before committing, check for stale naming in active docs