# PRD — Web Personal Profesional (webvinext)

## 1. Visión del Producto

Crear un sitio web personal profesional con Vinext (Cloudflare) y React que sirva como portafolio, blog y plataforma de documentación técnica.

## 2. Usuarios y Personas

1. **Reclutadores y equipos de contratación**: Evidencia de habilidades técnicas y proyectos.
2. **Comunidad técnica**: Artículos sobre desarrollo y arquitectura.
3. **Contactos profesionales**: Información de contacto y redes sociales.

## 3. Alcance del MVP

### Páginas Implementadas (Fase 1) ✅
- **Home**: Proyectos destacados, últimos posts, CTA contacto
- **Acerca de**: Perfil, habilidades, experiencia
- **Blog**: Lista de artículos + páginas de detalle (markdown)
- **Contacto**: Links de contacto + formulario
- **Projects**: Lista de proyectos + páginas de detalle (markdown)
- **404**: Página personalizada

## 4. Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Vinext (Cloudflare) |
| Frontend | React 19 + TypeScript |
| Estilos | CSS propio |
| Contenido | Markdown + gray-matter |
| Hosting | Cloudflare Workers |
| Package manager | Bun |

## 5. Métricas de Éxito

### Objetivos Cuantitativos
- Build exitoso (`bun run verify`)
- Vinext check 100% compatible
- Todas las rutas funcionales

### Objetivos Cualitativos
- El sitio transmite profesionalismo
- Los artículos del blog son útiles
- El flujo de contacto es claro

## 6. Estado

- **Fecha de creación**: 2026-03-17
- **Última actualización**: 2026-03-19 (migración a Vinext)
- **Estado**: Implementado (MVP completo)
