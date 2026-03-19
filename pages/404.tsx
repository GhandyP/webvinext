export default function NotFoundPage() {
  return (
    <div className="center-block page-stack full-height">
      <h1>404</h1>
      <p className="muted-text">Pagina no encontrada.</p>
      <div className="action-row center-row">
        <a href="/" className="button-primary">
          Inicio
        </a>
        <a href="/projects" className="button-secondary">
          Proyectos
        </a>
        <a href="/blog" className="button-secondary">
          Blog
        </a>
      </div>
    </div>
  )
}
