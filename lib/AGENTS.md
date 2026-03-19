# LIB KNOWLEDGE BASE

## OVERVIEW

Shared non-UI logic lives here. Right now the directory contains the markdown content loader.

## WHERE TO LOOK

- `content.ts` - markdown read/parse helpers and exported content queries

## CONVENTIONS

- Keep server-only content access here.
- Match the existing typed helper/export pattern.

## ANTI-PATTERNS

- Do NOT import browser-only APIs here.
- Do NOT move direct filesystem reads into page files.
