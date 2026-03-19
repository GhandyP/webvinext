# Guía de Contenido

## Objetivo

Esta guía define los estándares de contenido para el sitio Vinext, asegurando consistencia en calidad, estilo y formato de todo el material publicado.

## Tono y Estilo

### Tono General

- **Profesional**: Como ingeniero de software experimentado
- **Directo**: Sin rodeos, al punto
- **Técnico pero accesible**: Explica conceptos complejos de forma clara
- **Atractivo**: Engancha al lector desde el inicio

### Evitar

- Jerga excesiva sin explicación
- Texto demasiado largo sin estructura
- Lenguaje demasiado casual
- Humor que pueda confundir o ofender

### Buscar

- Claridad en la explicación
- Ejemplos prácticos
- Referencias a recursos externos
- Puntos de acción claros

## Estructura de Artículos

### Encabezado (Frontmatter)

```yaml
---
title: "Título del Artículo"
description: "Descripción corta para SEO y redes sociales"
pubDate: "2026-03-17"
heroImage: "/placeholder.jpg"
tags: ["react", "vinext", "javascript"]
category: "frontend"
featured: false
---
```

### Estructura del Cuerpo

1. **Introducción** (1-2 párrafos)
   - Contexto del problema
   - Qué aprenderá el lector
   - Hook de apertura

2. **Desarrollo**
   - Secciones claras con subtítulos
   - Ejemplos de código relevantes
   - Explicaciones paso a paso

3. **Conclusión**
   - Resumen de puntos clave
   - Próximos pasos
   - Call to action

## Formato de Código

### Bloques de Código

````markdown
```typescript
interface User {
  id: number;
  name: string;
}
```
````

### Código en línea

Usar `backticks` para nombres de funciones, variables, archivos, etc.

## Longitud de Artículos

### Blog Posts

- **Mínimo**: 800 palabras
- **Ideal**: 1200-2000 palabras
- **Máximo**: 3000 palabras (sin dividir en partes)

### Artículos Técnicos

- **Mínimo**: 1000 palabras
- **Ideal**: 1500-2500 palabras
- **Máximo**: 4000 palabras (con secciones claras)

## Títulos y Encabezados

### Reglas

- **Título principal**: H1, 1 por página
- **Secciones**: H2
- **Subsecciones**: H3
- **Nunca saltar niveles** (de H2 a H4 sin H3)

### Ejemplo

```markdown
# Título Principal (H1)

## Sección 1 (H2)

### Subsección 1.1 (H3)

### Subsección 1.2 (H3)

## Sección 2 (H2)
```

## Enlaces

### Enlaces Internos

```markdown
[Texto del enlace](/ruta/a/pagina)
```

### Enlaces Externos

```markdown
[Texto del enlace](https://url-externa.com)
```

**Nota**: Los enlaces externos se abren en nueva pestaña automáticamente.

## Imágenes

### Formato

- **Formato**: WebP o AVIF
- **Tamaño máximo**: 1920px ancho
- **Compresión**: 80-85% calidad

### Alt Text

Todas las imágenes deben incluir texto alternativo descriptivo.

```markdown
![Descripción de la imagen](/ruta/imagen.jpg)
```

### Capturas de Pantalla

- Incluir solo áreas relevantes
- Añadir anotaciones si es necesario
- Usar consistencia en herramientas (dev tools, terminal, etc.)

## Listas

### Listas con Viñetas

```markdown
- Elemento 1
- Elemento 2
  - Subelemento anidado
- Elemento 3
```

### Listas Numeradas

```markdown
1. Primer paso
2. Segundo paso
3. Tercer paso
```

### Listas de Definición

```markdown
- **Término**: Definición
- **Concepto clave**: Explicación
```

## Bloques Especiales

### Notas Advertencia

```markdown
> **⚠️ Advertencia**
> Este método puede causar problemas de seguridad si no se implementa correctamente.
```

### Notas Información

```markdown
> **💡 Tip**
> Puedes optimizar aún más usando lazy loading de imágenes.
```

### Notas Importantes

```markdown
> **📌 Importante**
> Asegúrate de actualizar las dependencias antes de desplegar a producción.
```

## Etiquetas y Categorías

### Etiquetas (Tags)

- Máximo 5 etiquetas por artículo
- Usar minúsculas
- Sin espacios (usar guiones)
- Ejemplos: `react`, `vinext`, `typescript`, `performance`

### Categorías

- Una categoría principal por artículo
- Usar mayúsculas para nombres propios
- Ejemplos: `Frontend`, `Backend`, `DevOps`, `Arquitectura`

## SEO y Metadata

### Meta Description

- Máximo 160 caracteres
- Incluir palabras clave relevantes
- Ser atractivo para clicks

### Open Graph

Incluir en frontmatter:

```yaml
ogImage: "/og-image.jpg"
ogTitle: "Título para redes sociales"
ogDescription: "Descripción para redes sociales"
```

## Calidad del Contenido

### Checklist de Publicación

- [ ] Título claro y atractivo
- [ ] Meta description optimizada
- [ ] Introducción engancha al lector
- [ ] Contenido estructurado con encabezados
- [ ] Ejemplos de código funcionales y claros
- [ ] Enlaces internos y externos relevantes
- [ ] Imágenes optimizadas con alt text
- [ ] Conclusión con call to action
- [ ] Etiquetas y categoría asignadas
- [ ] Revisión ortográfica y gramatical

### Revisión

1. **Autocorrección**: Revisar ortografía y gramática
2. **Prueba de código**: Ejecutar ejemplos
3. **Enlaces**: Verificar que todos funcionen
4. **Vista previa**: Ver en el sitio antes de publicar

## Actualización de Contenido

### Cuando actualizar

- Cambios en el código que hacen el contenido obsoleto
- Nuevas versiones de frameworks/librerías
- Correcciones de errores
- Mejoras significativas

### Proceso de actualización

1. Marcar fecha de actualización en frontmatter
2. Añadir nota de actualización si es relevante
3. Mantener el contenido antiguo archivado si es necesario

## Series de Artículos

### Estructura

- Parte 1: Introducción y conceptos básicos
- Parte 2: Implementación paso a paso
- Parte 3: Casos avanzados y mejores prácticas
- Parte 4: Integración y despliegue

### Navegación entre partes

Incluir enlaces al inicio y final de cada artículo:
- "← Parte anterior"
- "Parte siguiente →"

## Referencias y Citas

### Citas de Código

```markdown
> "El código es leído mucho más veces de las que es escrito."
> — Adelle Watts
```

### Referencias Externas

Incluir enlaces a:
- Documentación oficial
- Artículos relacionados
- Repositorios de ejemplo

## Calendario de Publicación

### Frecuencia Recomendada

- **Blog personal**: 1-2 artículos por mes
- **Artículos técnicos**: 1 cada 2-3 semanas
- **Tutoriales**: 1 cada mes

### Mejor momento para publicar

- Martes, miércoles o jueves
- Entre 9:00 y 11:00 (hora local)
- Evitar fines de semana

## Medición de Éxito

### Métricas a Seguir

- **Vistas de página**
- **Tiempo en página**
- **Tasa de rebote**
- **Comparticiones en redes sociales**
- **Comentarios y engagement**

---
*Actualizado: 2026-03-17*
