# Arquitectura del Proyecto Vinext

## Resumen

El proyecto usa Vinext, un plugin de Vite que reimplementa la API de Next.js sobre Vite, para desplegar en Cloudflare Workers. Es una aplicación de Pages Router con React 19, TypeScript y contenido Markdown local.

## Stack

```
┌─────────────────────────────────────────────────────┐
│                 Cloudflare Workers                  │
│  (Edge Network: caché global, SSL, HTTP/2)          │
└─────────────────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────────────────┐
│                  Vinext App (Vite)                  │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│  │  React 19    │  │  Pages Router│  │  SSR/SSG  │  │
│  │  Components  │  │  (Next conv) │  │  per page  │  │
│  └──────────────┘  └──────────────┘  └───────────┘  │
│  ┌──────────────────────────────────────────────┐   │
│  │    lib/content.ts → gray-matter → Markdown   │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────────────────┐
│               Contenido (content/)                  │
│  ┌──────────────┐  ┌──────────────┐                 │
│  │  blog/*.md   │  │ projects/*.md│                 │
│  └──────────────┘  └──────────────┘                 │
└─────────────────────────────────────────────────────┘
```

## Componentes del Sistema

### 1. Frontend (React 19 + Vinext)
- **Framework**: Vinext (Vite plugin, Next.js API compat)
- **Ruteo**: Pages Router — cada `pages/*.tsx` = una URL
- **Rendering**: SSR/SSG por página (getStaticProps, getServerSideProps)
- **Estado**: React hooks (useState/useEffect), no state library

### 2. Contenido (gray-matter)
- **Formato**: Markdown con frontmatter YAML
- **Loader**: `lib/content.ts` usa `node:fs/promises` + `gray-matter`
- **Colecciones**: `content/blog/` y `content/projects/`
- **Timing**: Lectura en build/server time, no cliente

### 3. Estilos (CSS propio)
- **Archivo**: `assets/css/main.css`
- **Enfoque**: CSS custom properties + utility classes estilo Tailwind
- **Sin framework**: No usa Tailwind, PostCSS ni preprocessor

### 4. Hosting (Cloudflare Workers)
- **Deploy**: `bun run deploy` (vinext deploy)
- **Edge**: SSR ejecuta en edge runtime (workerd)
- **CDN**: Assets estáticos servidos desde Cloudflare CDN

## Estructura de Rutas

| Ruta | Archivo | Data fetching |
|------|---------|---------------|
| `/` | `pages/index.tsx` | getStaticProps → getAllBlogPosts + getAllProjects |
| `/about` | `pages/about.tsx` | None (static) |
| `/contact` | `pages/contact.tsx` | None (useState) |
| `/blog` | `pages/blog/index.tsx` | getStaticProps → getAllBlogPosts |
| `/blog/:slug` | `pages/blog/[...slug].tsx` | getStaticProps + getStaticPaths |
| `/projects` | `pages/projects/index.tsx` | getStaticProps → getAllProjects |
| `/projects/:slug` | `pages/projects/[...slug].tsx` | getStaticProps + getStaticPaths |
| 404 | `pages/404.tsx` + `pages/[...slug].tsx` | getServerSideProps (catch-all) |

## Performance

- **SSG por defecto**: Rutas estáticas generadas en build time
- **SSR bajo demanda**: Catch-all 404 usa getServerSideProps
- **Assets**: Servidos desde Cloudflare CDN con caché

## Referencias

- [Vinext GitHub](https://github.com/cloudflare/vinext)
- [Vinext Docs](https://vinext.io/)
