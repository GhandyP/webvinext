const skills = ['React', 'Vinext', 'TypeScript', 'JavaScript', 'Node.js', 'Cloudflare', 'SQL', 'Git']

const experience = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Frontend Developer',
    period: '2022 - Presente',
    description: 'Desarrollo de aplicaciones web escalables, liderazgo tecnico y mejora continua del producto.',
  },
  {
    company: 'Digital Agency X',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Entrega de proyectos para clientes internacionales y automatizacion de despliegues.',
  },
]

export default function AboutPage() {
  return (
    <div className="page-stack">
      <section>
        <h1>
          <span className="accent-text">&gt;</span> Sobre Mi
        </h1>
        <div className="content-grid">
          <div className="page-stack small-gap">
            <p className="muted-text">
              Soy un desarrollador de software enfocado en productos web modernos, contenido tecnico y experiencias digitales claras.
            </p>
            <p className="muted-text">
              Mi enfoque combina ingenieria practica, decisiones mantenibles y una interfaz sobria inspirada en herramientas de terminal.
            </p>
            <section>
              <h2 className="section-title">Habilidades Tecnicas</h2>
              <ul className="chip-grid">
                {skills.map((skill) => (
                  <li key={skill} className="card-shell compact-card center-block">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="page-stack small-gap">
            <div className="card-shell compact-card">
              <strong>Ubicacion</strong>
              <p className="muted-text">Madrid, Espana</p>
            </div>
            <div className="card-shell compact-card">
              <strong>Experiencia</strong>
              <p className="muted-text">5+ anos</p>
            </div>
            <div className="card-shell compact-card">
              <strong>Disponibilidad</strong>
              <p className="muted-text">Freelance / Contrato</p>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="card-list">
          {experience.map((job) => (
            <article key={job.company} className="card-shell">
              <div className="split-row align-start">
                <h3>{job.position}</h3>
                <span className="meta-text">{job.period}</span>
              </div>
              <p className="accent-text secondary-accent">{job.company}</p>
              <p className="muted-text">{job.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
