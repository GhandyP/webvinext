export function Header() {
  return (
    <header className="site-header">
      <nav className="container nav-shell">
        <a href="/" className="brand-mark">
          &gt; vinext<span className="cursor-blink" />
        </a>
        <div className="nav-links">
          <a href="/">/home</a>
          <a href="/about">/about</a>
          <a href="/projects">/projects</a>
          <a href="/blog">/blog</a>
          <a href="/contact">/contact</a>
        </div>
      </nav>
    </header>
  )
}
