type ErrorPageProps = {
  statusCode?: number
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const isNotFound = statusCode === 404

  return (
    <div className="center-block page-stack full-height">
      <h1>{isNotFound ? '404' : 'Error'}</h1>
      <p className="muted-text">{isNotFound ? 'Pagina no encontrada.' : 'Ha ocurrido un error inesperado.'}</p>
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

ErrorPage.getInitialProps = ({ res, err }: { res?: { statusCode?: number }; err?: { statusCode?: number } }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404
  return { statusCode }
}

export default ErrorPage
