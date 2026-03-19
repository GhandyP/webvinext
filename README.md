# webvinext

Personal portfolio site built with Vinext, React 19, TypeScript, and local markdown content.

## Stack

- Vinext (Cloudflare-compatible Pages Router runtime)
- React 19 + TypeScript
- Local markdown content via `gray-matter`
- Hand-written global CSS
- Bun as package manager

## Requirements

- Node `>=22.12.0`
- Bun `1.3.10`

## Setup

```bash
bun install
```

## Scripts

```bash
bun run dev
bun run build
bun run start
bun run check
bun run verify
bun run deploy
```

## Project Structure

```text
pages/                    Route files
components/               Shared layout components
lib/content.ts            Markdown loader and content model
content/blog/             Blog entries
content/projects/         Project entries
assets/css/main.css       Global CSS
public/                   Static assets
documentacion_organizada/ Spanish product and operations docs
```

## Notes

- The app uses Vinext Pages Router conventions; do not add `pages/app/`.
- `lib/content.ts` is server-side only because it depends on `node:fs/promises`.
- The most detailed project documentation lives in `documentacion_organizada/`.
