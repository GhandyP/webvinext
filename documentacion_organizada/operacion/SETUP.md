# Configuración del Entorno

## Requisitos Previos

### Software Necesario

1. **Node.js** (versión 22.12.0 o superior)
   - Verificar: `node --version`

2. **Bun** (gestor de paquetes)
   - Instalar: `curl -fsSL https://bun.sh/install | bash`
   - Verificar: `bun --version`

3. **Git**
   - Verificar: `git --version`

### Editor de Código

VS Code con extensiones recomendadas:
- TypeScript
- ES7+ React/Redux/React-Native snippets

## Configuración Inicial

### 1. Clonar el Repositorio

```bash
git clone <repo-url>
cd webvinext
```

### 2. Instalar Dependencias

```bash
bun install
```

### 3. Verificar Instalación

```bash
bun run verify     # bun run check && bun run build
```

Si el build es exitoso, la configuración es correcta.

## Iniciar Servidor de Desarrollo

```bash
bun run dev        # vinext dev → http://localhost:5173
```

## Estructura de Directorios

```text
webvinext/
├── pages/              # Vinext Pages Router (Next.js convention)
│   ├── _app.tsx        # Global app shell, CSS import
│   ├── _error.tsx      # Custom error page
│   ├── index.tsx       # Home
│   ├── about.tsx       # About
│   ├── contact.tsx     # Contact
│   ├── 404.tsx         # 404 page
│   ├── [...slug].tsx   # Catch-all 404
│   ├── blog/           # Blog routes
│   └── projects/       # Project routes
├── components/         # React components (Header, Footer, Layout)
├── lib/content.ts      # Markdown loader (gray-matter + fs)
├── content/blog/       # Markdown posts
├── content/projects/   # Markdown projects
├── assets/css/main.css # Global CSS
├── vite.config.ts      # Vinext Vite config
├── next.config.js      # Empty (required by Vinext)
├── tsconfig.json       # TypeScript config
└── package.json        # Dependencies and scripts
```

## Scripts Disponibles

```bash
bun run dev          # vinext dev
bun run build        # vinext build
bun run start        # vinext start (production)
bun run check        # vinext check (compatibility)
bun run verify       # bun run check && bun run build
bun run deploy       # vinext deploy (Cloudflare Workers)
```

## Solución de Problemas

### Error de dependencias

```bash
rm -rf node_modules
bun install
```

### Error de build

```bash
bun run check        # Verificar compatibilidad
bun run build        # Intentar build
```

## Referencias

- [Vinext Docs](https://vinext.io/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [React 19](https://react.dev/)
