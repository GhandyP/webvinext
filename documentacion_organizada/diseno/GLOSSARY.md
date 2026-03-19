# Glosario del Proyecto Vinext

Términos técnicos y conceptos específicos del proyecto.

## Términos Técnicos

- **Vinext**: Plugin de Vite que reimplementa la API de Next.js para desplegar en Cloudflare Workers
- **Cloudflare Workers**: Plataforma de edge computing donde se ejecuta la app
- **React 19**: Biblioteca de UI para construir interfaces
- **Pages Router**: Sistema de rutas basado en archivos (Next.js convention)
- **gray-matter**: Biblioteca para parsear frontmatter YAML de archivos Markdown
- **getStaticProps**: Función de Next.js/Vinext para carga de datos en build time
- **getStaticPaths**: Función para generar rutas dinámicas estáticas
- **getServerSideProps**: Función para carga de datos en cada request

## Términos de Producto

- **MVP**: Producto mínimo viable — versión inicial funcional
- **SSG**: Static Site Generation — contenido generado en build time
- **SSR**: Server Side Rendering — contenido generado en cada request
- **Frontmatter**: Metadatos YAML al inicio de archivos Markdown

## Herramientas

- **Bun**: Gestor de paquetes y runtime
- **Vite**: Build tool usado por Vinext
- **wrangler**: CLI de Cloudflare para Workers
