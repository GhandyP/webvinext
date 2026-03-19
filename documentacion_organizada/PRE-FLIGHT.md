# PRE-FLIGHT — Vinext

## Estado Actual del Proyecto

El proyecto webvinext está implementado con Vinext (Cloudflare) y React. El código fuente es funcional y desplegable.

## Stack Tecnológico Confirmado

| Capa | Tecnología | Estado |
|------|------------|--------|
| Framework | Vinext (Cloudflare) | ✅ Implementado |
| Frontend | React 19 + TypeScript | ✅ Implementado |
| Estilos | CSS propio (sin framework) | ✅ Implementado |
| Contenido | Markdown local + gray-matter | ✅ Implementado |
| Hosting | Cloudflare Workers | ✅ Listo para deploy |
| Package manager | Bun | ✅ Confirmado |
| CI/CD | GitHub Actions | ⏳ Pendiente |

## Estructura de Directorios

```text
webvinext/
├── pages/                    # Vinext Pages Router
│   ├── _app.tsx              # Global shell
│   ├── _error.tsx            # Error page
│   ├── index.tsx             # Home
│   ├── about.tsx             # About
│   ├── contact.tsx           # Contact
│   ├── 404.tsx               # Not found
│   ├── [...slug].tsx         # Catch-all 404
│   ├── blog/                 # Blog routes
│   └── projects/             # Project routes
├── components/               # React components (Header, Footer, Layout)
├── lib/content.ts            # Markdown loader
├── content/blog/             # Markdown posts
├── content/projects/         # Markdown projects
├── assets/css/main.css       # Global CSS
├── vite.config.ts            # Vinext Vite config
├── next.config.js            # Empty (required by Vinext)
└── package.json              # bun, vinext, react 19
```

## Smoke Baseline

```bash
bun run check        # vinext check (compatibility)
bun run build        # vinext build
bun run verify       # bun run check && bun run build
```

### Resultados Esperados

- ✅ Build exitoso sin errores
- ✅ Vinext check 100% compatible
- ✅ Rutas estáticas y dinámicas generadas

## Decisiones Pendientes

| Decisión | Descripción | Prioridad |
|----------|-------------|-----------|
| Dominio real | Configurar dominio personalizado en Cloudflare | Alta |
| Analytics | Elegir Cloudflare Web Analytics u otro | Media |
| Búsqueda | Integrar Pagefind o similar si contenido crece | Baja |

## Comandos Esenciales

```bash
bun run dev          # vinext dev
bun run build        # vinext build
bun run start        # vinext start (production)
bun run check        # vinext check
bun run verify       # bun run check && bun run build
bun run deploy       # vinext deploy (Cloudflare Workers)
```

## Actualizaciones Recientes

- **2026-03-19**: Migración completa de Nuxt/Vue a Vinext/React
- **2026-03-19**: Documentación actualizada para reflejar Vinext
