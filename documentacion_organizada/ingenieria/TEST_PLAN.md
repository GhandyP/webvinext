# Plan de Pruebas

## Enfoque

Dado que es un sitio estático (SSG) con contenido de lectura, el enfoque prioriza:
1. Verificación de build (vinext check + build)
2. Pruebas manuales de navegación
3. Verificación de contenido renderizado

## Verificación de Build

```bash
bun run verify       # vinext check + vinext build
```

Esto verifica:
- Compatibilidad de Vinext (100%)
- Build exitoso sin errores
- Rutas generadas correctamente

## Pruebas Manuales

### Navegación

Verificar que estas rutas cargan correctamente:
- `/` — Home con proyectos destacados y últimos posts
- `/about` — Perfil y habilidades
- `/contact` — Links de contacto y formulario
- `/blog` — Lista de posts
- `/blog/:slug` — Post individual con markdown renderizado
- `/projects` — Lista de proyectos
- `/projects/:slug` — Proyecto individual
- `/missing-page` — 404 personalizado

### Contenido

- Verificar que los posts del blog se renderizan correctamente
- Verificar que los proyectos muestran stack, rol, estado
- Verificar que los links funcionan

## Métricas de Éxito

### Build
- `bun run verify` pasa sin errores
- Vinext check reporta 100% compatible

### Navegación
- Todas las rutas devuelven HTTP 200 (excepto 404s intencionales)
- El contenido se renderiza correctamente

### Performance
- Build time < 10 segundos
- Las páginas cargan rápido en local

## Herramientas

- Vinext check/build para verificación de build
- Navegador manual para pruebas de UI
- curl o similar para verificar HTTP responses

## Consideraciones

- No hay framework de testing unitario configurado (Vitest, Jest)
- No hay pruebas E2E configuradas (Playwright, Cypress)
- Enfoque en verificación de build + pruebas manuales
