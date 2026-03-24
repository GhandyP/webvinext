# OpenCode Skills - Project Scope

This document defines the OpenCode skill structure for the webvinext project. Skills are **workflow accelerators** that extend agent capabilities — they are **NOT runtime dependencies** and the site functions without them.

## Skill Categories

### 🔧 Built-in Skills (No Installation Required)
These are available by default in OpenCode agents:

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| `playwright` | Browser automation, E2E testing | Testing UI flows, taking screenshots, automating browser interactions |
| `frontend-ui-ux` | Design system, component architecture | Building React components, styling, accessibility |
| `git-master` | Git workflows, commit conventions | Branching strategies, PR workflows, conflict resolution |
| `dev-browser` | Dev server debugging | Inspecting running dev servers, debugging hot reload issues |
| `find-skills` | Discover and install additional skills | Finding and installing skills from the open agent skills ecosystem |

### ⚡ Priority Skills (User-Installed)
These are installed and take precedence over built-in defaults:

| Skill | Source | Purpose |
|-------|--------|---------|

### 🌐 Project-Specific Skills (Locked via `skills-lock.json`)
These are installed in `.agents/skills/` and locked for reproducibility:

| Skill | Source | Use Case |
|-------|--------|----------|
| `cloudflare` | cloudflare/skills | Cloudflare Workers, Pages, KV, D1, R2, etc. |
| `durable-objects` | cloudflare/skills | Durable Objects patterns and best practices |
| `workers-best-practices` | cloudflare/skills | Workers architecture and optimization |
| `wrangler` | cloudflare/skills | Wrangler CLI usage and configuration |
| `vinext-vite-nextjs` | aradotso/trending-skills | Vinext + Vite + Next.js patterns |
| `web-design-guidelines` | vercel-labs/agent-skills | Modern web design standards |

## Skill Locations

```
.agents/
├── README.md           ← This file
└── skills/             ← Installed skill documentation
    ├── cloudflare/
    ├── durable-objects/
    ├── vinext-vite-nextjs/
    ├── web-design-guidelines/
    ├── workers-best-practices/
    └── wrangler/

skills-lock.json        ← Version-locked skill manifest
```

## How Skills Are Used

### In Agent Prompts
Skills are loaded via the `load_skills` parameter:

```typescript
// Load relevant skills for the task
task(
  category="deep",
  load_skills=["playwright", "find-skills"],
  prompt="..."
)
```

### Skill Selection Rule
**User-installed skills OVERRIDE built-in defaults.** When domain matches, prefer:
1. Priority skills (find-skills)
2. Project-locked skills (cloudflare, etc.)
3. Built-in skills (playwright, frontend-ui-ux, etc.)

## Adding Optional Skills

Skills are optional workflow accelerators. To add a new skill:

```bash
# Using the Skills CLI (if available)
npx skills add <source>

# Or manually clone to .agents/skills/
git clone <repo> .agents/skills/<skill-name>
```

Then update `skills-lock.json` to lock the version.

## What Skills Are NOT

- ❌ Runtime dependencies (not in package.json)
- ❌ Required for site to build/deploy
- ❌ Global user configuration (project-scoped only)
- ❌ Static analysis or linting tools

## Verification

The project builds and deploys without any skills installed. Skills only enhance the agent's ability to:
- Understand Cloudflare platform specifics
- Follow established patterns
- Automate repetitive tasks
- Discover additional capabilities

---

*Last updated: 2026-03-22 | Task: Update .agents/README.md to align with current webvinext project identity*