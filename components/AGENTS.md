# COMPONENTS KNOWLEDGE BASE

## OVERVIEW

Shared shell components live here. The directory is small and currently centered on the site frame.

## WHERE TO LOOK

- `Layout.tsx` - wraps page content with header/footer
- `Header.tsx` - top navigation
- `Footer.tsx` - footer content

## CONVENTIONS

- Keep components simple and presentational.
- Follow the existing named-export pattern.

## ANTI-PATTERNS

- Do NOT move route-level data loading into this directory.
- Do NOT duplicate layout responsibilities already handled by `Layout.tsx`.
