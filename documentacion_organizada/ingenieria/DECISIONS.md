# Decisiones Técnicas

Decisiones de arquitectura y tecnología para el proyecto webvinext.

## 1. Framework: Vinext (Cloudflare)

**Decisión**: Usar Vinext como framework principal.

**Justificación**:
- Reimplementa la API de Next.js sobre Vite
- Despliegue nativo en Cloudflare Workers
- Pages Router compatible con Next.js
- SSR/SSG por página

**Alternativas consideradas**:
- Nuxt 3: Migrado desde Vue/Nuxt a Vinext/React
- Next.js: Similar API, pero despliegue en Vercel
- Astro: Excelente para estático, pero diferente paradigma

## 2. Frontend: React 19

**Decisión**: Usar React 19 como biblioteca de UI.

**Justificación**:
- Ecosistema maduro y amplio
- Compatibilidad con Vinext/Next.js API
- TypeScript nativo
- Hooks para estado local

**Alternativas consideradas**:
- Vue 3: Usado anteriormente, migrado a React para compatibilidad con Vinext

## 3. Contenido: gray-matter

**Decisión**: Usar gray-matter para parsear Markdown con frontmatter.

**Justificación**:
- Simple y directo
- Sin dependencia a sistema de collections
- Control total sobre el loader
- Funciona en runtime de Cloudflare

**Alternativas consideradas**:
- Nuxt Content: Complejo, no disponible en Vinext
- Contentlayer: Más opinionado

## 4. Estilos: CSS propio

**Decisión**: CSS puro con custom properties, sin framework.

**Justificación**:
- Control total sobre el CSS
- Sin dependencias externas
- CSS custom properties para theming
- Utility classes estilo Tailwind pero manuales

**Alternativas consideradas**:
- Tailwind CSS: Agrega complejidad de build
- CSS Modules: Más boilerplate

## 5. Hosting: Cloudflare Workers

**Decisión**: Desplegar en Cloudflare Workers via Vinext.

**Justificación**:
- Despliegue nativo con Vinext
- Edge runtime para SSR
- CDN global
- `vinext deploy` como único comando

**Alternativas consideradas**:
- Vercel: Requiere Next.js o framework compatible
- Netlify: Similar, pero Vinext está optimizado para Cloudflare

## 6. Package Manager: Bun

**Decisión**: Usar bun como gestor de paquetes.

**Justificación**:
- Instalación rápida
- Compatible con npm ecosystem
- Scripts via bun run
- Node >=22.12.0 requerido

## 7. TypeScript: strict false

**Decisión**: TypeScript con `strict: false`.

**Justificación**:
- Flexibilidad durante desarrollo
- Proyecto personal sin equipo grande
- Se puede activar strict en el futuro

## Resumen del Stack

| Capa | Tecnología |
|------|------------|
| Framework | Vinext (Cloudflare) |
| Frontend | React 19 + TypeScript |
| Estilos | CSS propio |
| Contenido | Markdown + gray-matter |
| Hosting | Cloudflare Workers |
| Package manager | Bun |
