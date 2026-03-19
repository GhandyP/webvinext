# Runbook Operativo

## Checklist antes de deploy

- `bun run verify` pasa (check + build)
- La preview en `localhost:5173` carga Home, About, Blog, Projects
- No hay contenido placeholder visible en páginas clave
- Variables de entorno configuradas en Cloudflare

## Checklist post-deploy

- Verificar respuesta del sitio en producción
- Revisar navegación principal, blog y projects
- Confirmar metadatos básicos
- Revisar logs en Cloudflare Dashboard

## Mantenimiento periódico

- Semanal: revisar contenido, links y deploy
- Mensual: revisar roadmap, deuda de contenido y performance
- Trimestral: revisar dependencias y documentación

## Rollback

- Usar Cloudflare Dashboard → Workers & Pages → Deployments
- Promover una versión anterior si es necesario
- O revertir en Git y redeploy: `git revert <commit> && bun run deploy`

## Comandos

```bash
bun run dev          # vinext dev
bun run build        # vinext build
bun run start        # vinext start (production)
bun run check        # vinext check
bun run verify       # bun run check && bun run build
bun run deploy       # vinext deploy (Cloudflare Workers)
```

## Referencias

- [Cloudflare Workers Dashboard](https://dash.cloudflare.com/)
- [Vinext Docs](https://vinext.io/)
