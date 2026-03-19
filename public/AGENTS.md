# PUBLIC ASSETS KNOWLEDGE BASE

## OVERVIEW

Static public files served as-is live here.

## WHERE TO LOOK

- `favicon.ico` - site icon
- `robots.txt` - crawler directives

## CONVENTIONS

- Keep files deployment-ready with no build step assumptions.
- Use this directory for static files that must be copied through unchanged.

## ANTI-PATTERNS

- Do NOT put source-only assets here if they belong under `assets/`.
- Do NOT add generated build artifacts here.
