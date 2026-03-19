# Gobernanza del Proyecto Vinext

## Objetivo

Establecer reglas y procesos para la colaboración y mantenimiento del proyecto Vinext.

## Roles y Responsabilidades

### Mantenedor Principal

**Responsabilidades:**
- Revisar y aprobar cambios importantes
- Mantener la dirección técnica del proyecto
- Gestionar releases y versionado
- Resolver conflictos en la colaboración

**Actual:** [Nombre del mantenedor]

### Colaboradores

**Responsabilidades:**
- Contribuir código, documentación o contenido
- Revisar pull requests de otros colaboradores
- Reportar errores y problemas
- Sugerir mejoras y nuevas funcionalidades

## Flujo de Trabajo

### Ramas

```text
main        → Producción (estable)
dev         → Desarrollo (integración)
feature/*   → Nuevas funcionalidades
fix/*       → Correcciones de errores
hotfix/*    → Fixes urgentes de producción
```

### Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: añadir sistema de búsqueda
fix: corregir error de renderizado en mobile
docs: actualizar guía de contenido
style: ajustar espaciado en cards
refactor: optimizar carga de imágenes
test: añadir pruebas unitarias
chore: actualizar dependencias
```

### Pull Requests

1. **Descripción clara**: Explicar qué cambia y por qué
2. **Cambios mínimos**: Un PR por funcionalidad
3. **Tests**: Añadir pruebas si es necesario
4. **Documentación**: Actualizar docs si cambia comportamiento
5. **Aprobación**: Necesita aprobación del mantenedor principal

### Releases

```bash
# Patch (bug fixes)
bun version patch

# Minor (nuevas funcionalidades)
bun version minor

# Major (breaking changes)
bun version major
```

## Revisión de Código

### Checklist de Revisión

- [ ] El código sigue las convenciones del proyecto
- [ ] Los tests pasan
- [ ] La documentación está actualizada
- [ ] Los cambios son necesarios y bien justificados
- [ ] No introduce deuda técnica innecesaria
- [ ] Es mantenible a largo plazo

### Estándares de Calidad

1. **TypeScript**: Tipos, sin `as any` innecesario
2. **React**: Hooks preferidos, componentes funcionales
3. **CSS**: Custom properties sobre valores hardcodeados
4. **Estructura**: Seguir la estructura de directorios existente
5. **Comentarios**: Comentar código complejo o no obvio

## Issues

### Tipos de Issues

- **bug**: Error en el comportamiento existente
- **enhancement**: Mejora a funcionalidad existente
- **feature**: Nueva funcionalidad
- **documentation**: Mejoras a la documentación
- **question**: Pregunta sobre el proyecto

### Plantilla de Issue

```markdown
## Descripción
[Breve descripción del problema o propuesta]

## Pasos para reproducir
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

## Comportamiento esperado
[Descripción del comportamiento esperado]

## Comportamiento actual
[Descripción del comportamiento actual]

## Entorno
- Navegador: [Versión]
- Sistema operativo: [Versión]
- Versión del proyecto: [Versión]

## Screenshots/Logs
[Adjuntar si es relevante]
```

## Decisiones Técnicas

### Proceso de Decisión

1. **Proponer**: Abrir un issue o discussión
2. **Investigar**: Analizar alternativas
3. **Debatir**: Revisar comentarios de la comunidad
4. **Decidir**: El mantenedor principal decide
5. **Documentar**: Registrar la decisión en `DECISIONS.md`

### Áreas Requeridas

Las siguientes decisiones deben documentarse:
- Framework y librerías principales
- Patrones de arquitectura
- Estándares de código
- Herramientas de desarrollo

## Contribuciones

### Cómo Contribuir

1. **Fork** el repositorio
2. **Clone** tu fork localmente
3. **Crea una rama** para tu contribución
4. **Haz tus cambios**
5. **Prueba** localmente
6. **Commit** con mensaje descriptivo
7. **Push** a tu fork
8. **Crea un Pull Request**

### Contribuciones Aceptadas

- Corrección de errores
- Nuevas funcionalidades
- Mejoras de documentación
- Mejoras de performance
- Optimizaciones de código

### No Aceptadas

- Cambios que rompen la compatibilidad sin justificación
- Cambios puramente estéticos sin valor funcional
- Nuevas dependencias sin evaluación
- Cambios que no siguen las convenciones

## Comunidad

### Canales de Comunicación

- **Issues**: Para bugs y propuestas de funcionalidades
- **Discussions**: Para preguntas y debate general
- **Pull Requests**: Para revisiones de código

### Código de Conducta

- Sé respetuoso con todos los contribuyentes
- Enfócate en el código, no en la persona
- Acepta críticas constructivas
- Ayuda a otros miembros de la comunidad

## Versionado

### SemVer

El proyecto sigue [Semantic Versioning](https://semver.org/):

- **MAJOR**: Cambios incompatibles
- **MINOR**: Nuevas funcionalidades compatibles
- **PATCH**: Correcciones de bugs compatibles

### Changelog

Mantener un `CHANGELOG.md` con:
- Versiones lanzadas
- Cambios importantes
- Breaking changes
- Notas de migración

## Mantenimiento

### Revisión Regular

- **Semanal**: Revisar issues y PRs abiertos
- **Mensual**: Actualizar dependencias
- **Trimestral**: Revisar deuda técnica y roadmap

### Deprecación

- Marcar funcionalidades obsoletas como `@deprecated`
- Documentar alternativas
- Planificar eliminación en siguiente versión mayor

## Contacto

### Para Dudas

1. Revisar documentación existente
2. Buscar issues abiertos/cerrados
3. Abrir un issue con etiqueta `question`

### Para Problemas Críticos

- Abrir un issue con etiqueta `bug`
- Añadir detalles reproducción
- Incluir logs y screenshots

## Licencia

Este proyecto está bajo la licencia MIT.

---
*Actualizado: 2026-03-17*
