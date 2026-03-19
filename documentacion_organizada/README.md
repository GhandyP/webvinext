# Documentación Organizada — webvinext

> Manual operativo del proyecto webvinext: sitio web personal con Vinext (Cloudflare) y React.

## Estructura del Directorio

```text
documentacion_organizada/
├── README.md                  # Este archivo — punto de entrada
├── GOVERNANCE.md              # Reglas de gobernanza del proyecto
├── PRE-FLIGHT.md              # Estado actual y decisiones
├── PRE-FLIGHT-DRIFT.md        # Inventario de discrepancias conocidas
├── diseno/                    # Documentación de diseño
│   ├── DESIGN_SYSTEM.md       # Sistema de diseño visual
│   └── CONTENT_GUIDE.md       # Guía de contenido y redacción
├── ingenieria/                # Documentación técnica
│   ├── ARCHITECTURE.md        # Arquitectura del proyecto
│   ├── DECISIONS.md           # Decisiones técnicas documentadas
│   └── TEST_PLAN.md           # Plan de pruebas
├── producto/                  # Documentación de producto
│   ├── PRD.md                 # Documento de requisitos de producto
│   ├── ROADMAP.md             # Roadmap de implementación
│   └── TASKS.md               # Tareas pendientes y seguimiento
└── operacion/                 # Documentación operativa
    ├── SETUP.md               # Configuración del entorno
    ├── ENVIRONMENT.md         # Variables y entornos
    ├── DEPLOYMENT.md          # Flujos de despliegue
    └── OPERATIONS.md          # Runbook operativo
```

## Navegación por Temas

| Tema | Documento Principal | Descripción |
|------|---------------------|-------------|
| **Visión general** | `PRE-FLIGHT.md` | Estado actual y decisiones pendientes |
| **Producto** | `PRD.md` + `ROADMAP.md` | Alcance, objetivos y cronograma |
| **Diseño** | `DESIGN_SYSTEM.md` | Identidad visual y componentes |
| **Ingeniería** | `ARCHITECTURE.md` + `DECISIONS.md` | Stack técnico y decisiones |
| **Contenido** | `CONTENT_GUIDE.md` | Guía de escritura y estilo |
| **Pruebas** | `TEST_PLAN.md` | Estrategia de testing |
| **Operación** | `SETUP.md` + `DEPLOYMENT.md` | Workflow diario y deploy |
| **Seguimiento** | `TASKS.md` | Tareas y mejoras futuras |

## Comandos Útiles

```bash
bun run dev          # vinext dev
bun run build        # vinext build
bun run start        # vinext start (production)
bun run check        # vinext check (compatibility)
bun run verify       # bun run check && bun run build
bun run deploy       # vinext deploy (Cloudflare Workers)
```

## Convenciones

- **Código y nombres de archivos**: Inglés
- **Documentación**: Español (español de España)
- **Gestión de paquetes**: Bun
- **Framework**: Vinext (Cloudflare) + React 19

## Stack Principal

| Capa | Tecnología |
|------|------------|
| Framework | Vinext (Cloudflare) |
| Frontend | React 19 + TypeScript |
| Estilos | CSS propio (sin framework) |
| Contenido | Markdown local + gray-matter |
| Hosting | Cloudflare Workers |
| Package manager | Bun |

## Contacto

Para dudas o sugerencias sobre la documentación:
- Revisar `GOVERNANCE.md` para reglas de colaboración
- Revisar `ROADMAP.md` para tareas planificadas
