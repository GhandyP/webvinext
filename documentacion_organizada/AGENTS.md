# DOCS KNOWLEDGE BASE - Vinext

## OVERVIEW

`documentacion_organizada/` is the Spanish manual for product, engineering, design, and operations. It tracks the Vinext migration more accurately than the root `README.md`.

## STRUCTURE

```text
documentacion_organizada/
|- README.md                  # Entry point and folder map
|- GOVERNANCE.md              # Collaboration rules
|- PRE-FLIGHT.md              # Current-state contract
|- PRE-FLIGHT-DRIFT.md        # Drift inventory
|- diseno/
|  |- DESIGN_SYSTEM.md        # Visual system
|  |- CONTENT_GUIDE.md        # Content and writing guide
|  `- GLOSSARY.md             # Domain glossary
|- ingenieria/
|  |- ARCHITECTURE.md         # Technical architecture
|  |- DECISIONS.md            # Technical decisions
|  |- INTEGRATIONS.md         # Service/integration notes
|  `- TEST_PLAN.md            # Test strategy
|- producto/
|  |- PRD.md                  # Product requirements
|  |- ROADMAP.md              # Delivery roadmap
|  `- TASKS.md                # Active/pending work
`- operacion/
   |- SETUP.md                # Local environment setup
   |- ENVIRONMENT.md          # Environment variable guidance
   |- DEPLOYMENT.md           # Deploy flow
   |- OPERATIONS.md           # Runbook
   `- OPENCODE_WORKFLOW.md    # Agent workflow conventions
```

## WHERE TO LOOK

| Need | Location | Notes |
|------|----------|-------|
| Repo navigation | `README.md` | Entry point for the docs tree |
| Current alignment | `PRE-FLIGHT.md` | Highest-priority reality snapshot |
| Known mismatches | `PRE-FLIGHT-DRIFT.md` | Drift between plans/docs/code |
| Product scope | `producto/PRD.md`, `producto/ROADMAP.md` | Scope and roadmap |
| Delivery tracking | `producto/TASKS.md` | Active/pending tasks; there is no `BACKLOG.md` in the current tree |
| Design rules | `diseno/DESIGN_SYSTEM.md`, `diseno/CONTENT_GUIDE.md` | Visual and editorial rules |
| Terminology | `diseno/GLOSSARY.md` | Shared vocabulary |
| Engineering reality | `ingenieria/ARCHITECTURE.md`, `ingenieria/DECISIONS.md`, `ingenieria/INTEGRATIONS.md` | Stack and technical decisions |
| Test strategy | `ingenieria/TEST_PLAN.md` | Verification approach |
| Setup / deploy | `operacion/SETUP.md`, `operacion/ENVIRONMENT.md`, `operacion/DEPLOYMENT.md` | Local workflow and deploys |
| Agent workflow | `operacion/OPENCODE_WORKFLOW.md` | Local agent operating rules |

## CONVENTIONS

- Code and filenames stay in English.
- Documentation stays in Spanish.
- Update docs when code changes, especially `PRE-FLIGHT.md` and drift notes.
- Prefer pointing to the single authoritative doc instead of duplicating rules.

## ANTI-PATTERNS

- No confiar ciegamente en snapshots de drift.
- No duplicar reglas en multiples documentos.
- No asumir implementacion sin evidencia en codigo.
- No olvidar sincronizar docs tras cambios de codigo.
- No escribir documentacion en ingles.
- No referenciar `BACKLOG.md` como si existiera; el arbol actual no lo incluye.

## COMMANDS

```bash
bun run dev
bun run build
bun run start
bun run check
bun run verify
bun run deploy
```

## NOTES

- The docs tree already includes `operacion/OPENCODE_WORKFLOW.md`, `ingenieria/INTEGRATIONS.md`, and `diseno/GLOSSARY.md`.
- Product and operations docs still carry migration-era sync debt; cross-check with the current code before trusting old assumptions.
