# Sistema de Diseño

## Identidad Visual

El proyecto Vinext utiliza una identidad visual inspirada en terminales retro, con un estilo "cyberpunk" moderno y profesional.

## Paleta de Colores

### Colores Base

| Color | Código | Uso |
|-------|--------|-----|
| **Fondo oscuro** | `#0d1117` | Fondo principal |
| **Fondo secundario** | `#161b22` | Cards, secciones |
| **Texto principal** | `#c9d1d9` | Texto normal |
| **Texto secundario** | `#8b949e` | Texto secundario |
| **Texto enlace** | `#58a6ff` | Enlaces y CTA |
| **Borde** | `#30363d` | Bordes y separadores |

### Colores de Acento

| Color | Código | Uso |
|-------|--------|-----|
| **Verde terminal** | `#3fb950` | Éxitos, positivo |
| **Cian terminal** | `#39c5cf` | Enlaces, hover |
| **Amarillo terminal** | `#d29922` | Advertencias |
| **Rojo terminal** | `#f85149` | Errores, crítico |
| **Morado terminal** | `#a371f7` | Características especiales |

## Tipografía

### Fuentes

```css
/* Tipografía principal */
font-family: 'JetBrains Mono', 'Fira Code', monospace;

/* Tipografía de respaldo */
font-family: 'SF Mono', 'Consolas', monospace;
```

### Tamaños

| Elemento | Tamaño | Peso |
|----------|--------|------|
| **Heading 1** | 2.5rem | 700 |
| **Heading 2** | 2rem | 700 |
| **Heading 3** | 1.5rem | 600 |
| **Body** | 1rem | 400 |
| **Small** | 0.875rem | 400 |
| **Tiny** | 0.75rem | 400 |

### Espaciado

```css
/* Sistema de 4px */
spacing-unit: 4px;

/* Escala */
spacing-1: 4px    /* 0.25rem */
spacing-2: 8px    /* 0.5rem */
spacing-3: 12px   /* 0.75rem */
spacing-4: 16px   /* 1rem */
spacing-5: 24px   /* 1.5rem */
spacing-6: 32px   /* 2rem */
spacing-7: 48px   /* 3rem */
spacing-8: 64px   /* 4rem */
```

## Componentes

### Botones

#### Primario
```html
<button class="btn-primary">
  Acción principal
</button>
```
- Fondo: Verde terminal
- Texto: Blanco
- Hover: Tono más claro

#### Secundario
```html
<button class="btn-secondary">
  Acción secundaria
</button>
```
- Fondo: Transparente
- Borde: Verde terminal
- Texto: Verde terminal

#### Enlace
```html
<a class="btn-link">
  Enlace estilo botón
</a>
```

### Tarjetas (Cards)

```html
<article class="card">
  <h3>Título</h3>
  <p>Descripción</p>
</article>
```

- Fondo: `#161b22`
- Borde: `#30363d`
- Padding: `1.5rem`
- Border-radius: 8px

### Navegación

```html
<nav class="nav">
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/about">Acerca de</a>
</nav>
```

- Fondo semi-transparente
- Efecto glow en hover
- Indicador de página activa

### Hero Section

```html
<section class="hero">
  <h1>Título principal</h1>
  <p>Descripción</p>
  <div class="cta-buttons">...</div>
</section>
```

## Efectos Visuales

### Glow Effect

```css
.glow {
  text-shadow: 0 0 10px var(--color-accent);
}
```

### Scanlines (Overlay)

```css
.scanlines::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 9999;
}
```

### Terminal Cursor Blink

```css
.cursor-blink::after {
  content: "▌";
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
```

## Breakpoints

```css
/* Breakpoints */
sm: 640px;
md: 768px;
lg: 1024px;
xl: 1280px;
```

## Spacing System

### Layout

```css
/* Container máximo */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Secciones */
.section {
  padding: 4rem 0;
}

/* Cards grid */
.cards-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

## Dark Mode

### Tokens

```css
:root {
  /* Light mode */
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

.dark {
  /* Dark mode */
  --bg-primary: #0d1117;
  --text-primary: #c9d1d9;
}
```

## Animaciones

### Fade In

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Slide Up

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Iconos

### Tamaños

| Tamaño | Uso |
|--------|-----|
| 16px | Navegación |
| 20px | Botones |
| 24px | Cards |
| 32px | Hero |

### Estilo

- Line icons (no rellenos)
- Colores heredados del texto
- Alineados verticalmente con texto

## Referencias de Estilo

### Inspiración
- GitHub Dark Mode
- Terminal emuladores (iTerm2, Hyper)
- Estética cyberpunk minimalista

### Herramientas
- CSS Variables
- Figma (para diseños)

---
*Actualizado: 2026-03-17*
