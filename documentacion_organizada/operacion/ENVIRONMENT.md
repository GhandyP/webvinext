# Variables de Entorno

## Configuración

El proyecto usa Vinext sobre Cloudflare Workers, que lee secretos desde `.dev.vars` en desarrollo local.

## Variables de Producción

### En Cloudflare

Las variables de entorno se configuran en Cloudflare Dashboard:
1. Ve a Workers & Pages → tu proyecto → Settings → Variables
2. Añade las variables necesarias

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `CLOUDFLARE_ACCOUNT_ID` | Account ID de Cloudflare | `abc123...` |
| `CLOUDFLARE_API_TOKEN` | API Token para deploy | `Bearer ...` |

## Variables de Desarrollo

### Archivo .dev.vars

Crear `.dev.vars` en la raíz del proyecto para variables locales:

```
CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_API_TOKEN=your-api-token
```

### .gitignore

Asegurar que `.dev.vars` y `.env` están en `.gitignore`:
```
.dev.vars
.env
.env.*
```

## Acceso en Código

### Server-side (getStaticProps, getServerSideProps)

```typescript
export async function getStaticProps() {
  // Las variables de entorno están disponibles en server-side
  const apiUrl = process.env.API_URL
  return { props: { ... } }
}
```

### Client-side

No exponer variables sensibles al cliente. Usar getStaticProps para obtener datos server-side y pasarlos como props.

## Referencias

- [Cloudflare Workers Environment Variables](https://developers.cloudflare.com/workers/configuration/environment-variables/)
