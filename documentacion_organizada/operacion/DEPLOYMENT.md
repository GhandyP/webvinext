# Despliegue y Operación

## Plataforma de Hosting

### Cloudflare Workers (Vinext)

El proyecto se despliega nativamente en Cloudflare Workers usando Vinext.

#### Comando de Deploy

```bash
bun run deploy     # vinext deploy
```

Esto construye y despliega la app en Cloudflare Workers.

#### Requisitos previos

1. Cuenta de Cloudflare activa
2. Login mediante `wrangler login` o `CLOUDFLARE_API_TOKEN` configurado
3. `CLOUDFLARE_ACCOUNT_ID` en `.dev.vars` (desarrollo) o configurado en Cloudflare

## Flujo de Despliegue

### Desarrollo Local

```bash
bun run dev        # vinext dev → http://localhost:5173
```

### Build

```bash
bun run build      # vinext build
bun run start      # vinext start (production local)
```

### Deploy a Producción

```bash
bun run deploy     # vinext deploy → Cloudflare Workers
```

## Flujos de Trabajo

### Flujo de Desarrollo

1. **Desarrollo Local**
   ```bash
   bun run dev
   ```

2. **Verificación**
   ```bash
   bun run verify   # check + build
   ```

3. **Commit y Push**
   ```bash
   git add .
   git commit -m "feat: descripción del cambio"
   git push
   ```

4. **Deploy**
   ```bash
   bun run deploy
   ```

## Comandos

```bash
bun run dev          # vinext dev
bun run build        # vinext build
bun run start        # vinext start (production)
bun run check        # vinext check (compatibility)
bun run verify       # bun run check && bun run build
bun run deploy       # vinext deploy (Cloudflare Workers)
```

## Rollback

### En Cloudflare

1. Ve a Cloudflare Dashboard → Workers & Pages
2. Selecciona el proyecto
3. Ve a Deployments
4. Selecciona una versión anterior y promuévela

### Manual

```bash
git checkout <commit-hash>
bun run deploy
```

## Referencias

- [Vinext Deploy Docs](https://vinext.io/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
