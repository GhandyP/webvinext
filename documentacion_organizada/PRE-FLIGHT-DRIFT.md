# PRE-FLIGHT-DRIFT — Vinext

> Inventario de discrepancias conocidas entre el plan y la implementación real.

## Estado de Sincronización

| Documento | Estado | Observación |
|-----------|--------|-------------|
| `README.md` | ✅ Actualizado | Refleja Vinext actual |
| `PRE-FLIGHT.md` | ✅ Actualizado | Refleja Vinext actual |
| `ARCHITECTURE.md` | ✅ Actualizado | Diagrama y stack Vinext |
| `DECISIONS.md` | ✅ Actualizado | Decisiones actualizadas para Vinext |
| `DEPLOYMENT.md` | ✅ Actualizado | Cloudflare Workers |
| `SETUP.md` | ✅ Actualizado | bun + Vinext |
| `ENVIRONMENT.md` | ✅ Actualizado | Cloudflare variables |
| `OPERATIONS.md` | ✅ Actualizado | Runbook Vinext |
| `TEST_PLAN.md` | ✅ Actualizado | Vinext check/build |
| `DESIGN_SYSTEM.md` | ✅ Actualizado | Referencias a Vinext |
| `CONTENT_GUIDE.md` | ✅ Actualizado | Ejemplos actualizados |
| `PRD.md` | ✅ Actualizado | Stack Vinext |
| `ROADMAP.md` | ✅ Actualizado | Fases actualizadas |
| `TASKS.md` | ✅ Actualizado | Tareas actualizadas |
| `AGENTS.md` | ✅ Actualizado | Refleja Vinext |

## Drifts Críticos

### 1. Stack Tecnológico
- **Plan original**: Nuxt 3 + Vue 3 + Tailwind + Vercel
- **Real**: Vinext + React 19 + CSS propio + Cloudflare Workers
- **Acción**: Actualizar todos los docs que referencian stack anterior

### 2. Gestión de Paquetes
- **Plan original**: npm/pnpm
- **Real**: bun
- **Acción**: Actualizar todos los comandos en docs

### 3. Plataforma de Hosting
- **Plan original**: Vercel
- **Real**: Cloudflare Workers (vinext deploy)
- **Acción**: Eliminar docs de Vercel, actualizar DEPLOYMENT.md

### 4. Sistema de Contenido
- **Plan original**: Nuxt Content (collections, content.config.ts)
- **Real**: gray-matter + lib/content.ts (markdown loader simple)
- **Acción**: Actualizar CONTENT_GUIDE.md si es necesario

## Decisiones Diferidas

| Decisión | Razón de Diferimiento | Fecha Estimada |
|----------|----------------------|----------------|
| Dominio real | Sin dominio configurado | Antes de producción |
| Analytics | Cloudflare Web Analytics disponible | Fase 2 |
| CI/CD | GitHub Actions pendiente | Fase 2 |

## Proceso de Actualización de Docs

1. Identificar archivo obsoleto (grep por "Nuxt", "Vue", "Vercel", "npm run")
2. Reescribir secciones afectadas
3. Verificar que los comandos reflejan `bun` y `vinext`
4. Marcar como actualizado en esta tabla

## Referencias

- `PRE-FLIGHT.md` — Estado actual y decisiones
- `ARCHITECTURE.md` — Arquitectura técnica actual
