# CONTENT KNOWLEDGE BASE

## OVERVIEW

Markdown content for blog posts and project entries lives here.

## STRUCTURE

```text
content/
|- blog/      # Blog post markdown files
`- projects/  # Project markdown files
```

## CONVENTIONS

- Content is loaded through `lib/content.ts`.
- Keep one markdown file per entry.

## ANTI-PATTERNS

- Do NOT put runtime code in this directory.
- Do NOT bypass the frontmatter shape expected by `lib/content.ts`.
