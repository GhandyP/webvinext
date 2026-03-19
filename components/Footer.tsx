export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p>&copy; {new Date().getFullYear()} Vinext - Rebuilt on Cloudflare Vinext</p>
        <div className="footer-links">
          <a href="https://github.com/example/webvinext" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:contacto@vinext.dev">Email</a>
        </div>
      </div>
    </footer>
  )
}
