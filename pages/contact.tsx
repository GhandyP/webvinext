import { useState } from 'react'

const contactLinks = [
  { label: 'Email', href: 'mailto:contacto@vinext.dev', value: 'contacto@vinext.dev' },
  { label: 'GitHub', href: 'https://github.com/example/webvinext', value: 'github.com/example/webvinext' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', value: 'linkedin.com' },
  { label: 'X', href: 'https://x.com', value: '@vinext_dev' },
]

export default function ContactPage() {
  const [message, setMessage] = useState('')

  return (
    <div className="page-stack">
      <section>
        <h1>
          <span className="accent-text">&gt;</span> Contacto
        </h1>
        <p className="muted-text lede left-align">
          Tienes un proyecto en mente o simplemente quieres saludar? Puedes contactarme por estos canales.
        </p>
      </section>

      <section className="card-grid two-up">
        {contactLinks.map((item) => (
          <article key={item.label} className="card-shell compact-card">
            <h3>{item.label}</h3>
            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {item.value}
            </a>
          </article>
        ))}
      </section>

      <section className="card-shell">
        <h2 className="section-title">Enviar Mensaje</h2>
        <form
          className="form-stack"
          onSubmit={(event) => {
            event.preventDefault()
            setMessage('Mensaje enviado (demo sin backend).')
          }}
        >
          <label>
            <span>Nombre</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Mensaje</span>
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" className="button-primary fit-width">
            Enviar Mensaje
          </button>
        </form>
        {message ? <p className="meta-text success-text">{message}</p> : null}
      </section>
    </div>
  )
}
