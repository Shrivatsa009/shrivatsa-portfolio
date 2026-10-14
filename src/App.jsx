
import { useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'HOSPITALITY · CONCEPT',
    title: 'Saffron & Stone',
    description:
      'A restaurant website concept with menu highlights, location details and a clear reservation journey.',
    tags: ['React', 'Responsive UI', 'CSS'],
    visual: 'restaurant',
    label: 'A better table starts online.',
  },
  {
    number: '02',
    type: 'REAL ESTATE · CONCEPT',
    title: 'Northline Properties',
    description:
      'A property discovery concept featuring property cards, search UI and enquiry-focused layouts.',
    tags: ['React', 'Search UI', 'CSS'],
    visual: 'property',
    label: 'Find a place to belong.',
  },
  {
    number: '03',
    type: 'SAAS · CONCEPT',
    title: 'Orbit Workspace',
    description:
      'A dashboard concept for presenting customer activity and business performance clearly.',
    tags: ['React', 'Dashboard UI', 'JavaScript'],
    visual: 'dashboard',
    label: 'Clarity for your next move.',
  },
]

const services = [
  [
    '01',
    'Business websites',
    'Modern, mobile-friendly websites that explain what you do and make it easy for customers to contact you.',
  ],
  [
    '02',
    'Landing pages',
    'Focused pages for a product, service or campaign, designed around one clear action.',
  ],
  [
    '03',
    'Website updates',
    'Responsive fixes, new sections, UI improvements and frontend enhancements.',
  ],
]

const process = [
  ['01', 'Discover', 'We discuss your goals, audience, content and what success should look like.'],
  ['02', 'Plan & design', 'I map the page structure and establish a visual direction before development.'],
  ['03', 'Build & refine', 'I develop the responsive experience, test it and refine the details with your feedback.'],
  ['04', 'Launch', 'I help prepare the site for launch and hand over the project clearly.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const email = 'shrivatsakulkarni009@gmail.com'
  const linkedin = 'https://www.linkedin.com/in/shrivatsa-g-i'
  const github = 'https://github.com/Shrivatsa009'

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">SG</span>
          <span>
            SHRIVATSA <span className="muted">G I</span>
            <small>FRONTEND DEVELOPER</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['About', 'Skills', 'Services', 'Work', 'Process'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              FRONTEND DEVELOPER · 3+ YEARS EXPERIENCE
            </div>

            <h1>
              Building digital experiences.
              <br />
              <span>One interface at a time.</span>
            </h1>

            <p className="hero-text">
              I'm Shrivatsa, a frontend developer based in Dubai, UAE.
              I build clean, modern and responsive web experiences using
              React, JavaScript, HTML and CSS.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span>↗</span>
              </a>
              <a className="text-link" href="#contact">
                Let's discuss a project <span>→</span>
              </a>
            </div>

            <div className="hero-meta">
              <span>DUBAI, UAE</span>
              <span>3+ YEARS EXPERIENCE</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract portfolio artwork">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">
              <span>FRONTEND</span>
              <strong>✳</strong>
              <span>DEVELOPMENT</span>
            </div>
            <div className="art-tag tag-top">DESIGN-LED DEVELOPMENT</div>
            <div className="art-tag tag-bottom">IDEA → INTERFACE → IMPACT</div>
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✧</div>
          </div>
        </section>

        
        <section className="trust-strip">
          <span>MY TOOLKIT</span>
          <b>HTML & CSS</b>
          <i />
          <b>JAVASCRIPT</b>
          <i />
          <b>REACT</b>
          <i />
          <b>BOOTSTRAP</b>
          <i />
          <b>TAILWIND CSS</b>
          <i />
          <b>JQUERY</b>
          <i />
          <b>GSAP</b>
          <i />
          <b>REST APIs</b>
          <i />
          <b>GIT</b>
          <i />
          <b>GITHUB</b>
          <i />
          <b>BITBUCKET</b>
          <i />
          <b>FIGMA</b>
        </section>

        <section className="section-wrap section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>

          <div className="about-grid">
            <h2>
              Creating useful
              <br />
              interfaces for
              <br />
              <em>the modern web.</em>
            </h2>

            
            <div className="about-copy">
              <p>
                I'm a frontend developer with 3+ years of experience
                building modern and responsive web applications.
                My professional experience includes company websites,
                landing pages, admin dashboards, internal business tools
                and applications developed for my own company.
              </p>

              <p>
                I work with HTML, CSS, JavaScript and React, alongside
                technologies and tools such as Bootstrap, Tailwind CSS,
                GSAP, jQuery, REST APIs, Git, GitHub, Bitbucket and Figma.
              </p>

              <p>
                I enjoy creating intuitive user interfaces, implementing
                engaging animations and turning business requirements
                into practical frontend solutions.
              </p>

              <a className="text-link" href="#contact">
                Let's connect <span>→</span>
              </a>
            </div>
          </div>
        </section>


        <section className="section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-kicker">02 / TECHNICAL SKILLS</div>

            <div className="section-heading">
              <h2>
                Tools behind
                <br />
                <em>the experience.</em>
              </h2>
              <p>
                Technologies and tools I've worked with across
                frontend development and UI implementation.
              </p>
            </div>

            <div className="skills-grid">
              {[
                ['01', 'Frontend Development', 'HTML5, CSS3, JavaScript, React'],
                ['02', 'UI Frameworks', 'Bootstrap, Tailwind CSS'],
                ['03', 'Animations & Interactions', 'GSAP, jQuery, CSS Animations'],
                ['04', 'API Integration', 'REST APIs'],
                ['05', 'Version Control', 'Git, GitHub, Bitbucket'],
                ['06', 'Design Tools', 'Figma'],
              ].map((skill) => (
                <article className="skill-card" key={skill[0]}>
                  <span>{skill[0]}</span>
                  <h3>{skill[1]}</h3>
                  <p>{skill[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-wrap">
            <div className="section-kicker">02 / WHAT I CAN HELP WITH</div>

            <div className="section-heading">
              <h2>
                Practical skills.
                <br />
                <em>Thoughtful execution.</em>
              </h2>
              <p>
                Frontend development and website experiences for
                businesses, products and growing ideas.
              </p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service[0]}>
                  <span className="service-number">{service[0]}</span>
                  <h3>{service[1]}</h3>
                  <p>{service[2]}</p>
                  <span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="work">
          <div className="section-kicker">03 / SELECTED CONCEPTS</div>

          <div className="section-heading">
            <h2>
              Ideas, made <em>visible.</em>
            </h2>
            <p>
              Self-initiated concept projects demonstrating different
              types of frontend experiences. These are concepts, not
              commissioned client projects.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                  <div className="mock-browser">
                    <div className="browser-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>
                      {project.type.split(' · ')[0].toLowerCase()}.studio
                    </span>
                  </div>

                  <div className="mock-content">
                    <span>{project.label}</span>
                    <strong>
                      {project.visual === 'restaurant'
                        ? 'A taste of\nsomething special.'
                        : project.visual === 'property'
                          ? 'Space to live\nyour next chapter.'
                          : 'Your work,\nin clear view.'}
                    </strong>

                    <div className="mock-lines">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="mock-pill">
                      {project.visual === 'restaurant'
                        ? 'VIEW MENU'
                        : project.visual === 'property'
                          ? 'EXPLORE HOMES'
                          : 'VIEW OVERVIEW'}
                    </div>
                  </div>

                  {project.visual === 'property' && (
                    <div className="property-block" />
                  )}

                  {project.visual === 'dashboard' && (
                    <div className="chart-block">
                      {Array.from({ length: 7 }).map((_, index) => (
                        <span key={index} />
                      ))}
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-number">
                      {project.number} / {project.type}
                    </span>
                    <h3>{project.title}</h3>
                  </div>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-wrap">
            <div className="section-kicker">04 / HOW I WORK</div>

            <div className="section-heading">
              <h2>
                Clear steps.
                <br />
                <em>Focused results.</em>
              </h2>
              <p>
                A straightforward process keeps development focused,
                collaborative and moving forward.
              </p>
            </div>

            <div className="process-grid">
              {process.map((step) => (
                <article className="process-card" key={step[0]}>
                  <span>{step[0]}</span>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="section-kicker">05 / GET IN TOUCH</div>

            <h2>
              Have a good idea?
              <br />
              <em>Let's connect.</em>
            </h2>

            <p>
              I'm open to frontend developer opportunities and
              freelance projects. Feel free to reach out and tell
              me what you're working on.
            </p>

            <div className="contact-actions">
              <a
                className="button button-light"
                href={`mailto:${email}?subject=Frontend%20Developer%20Enquiry`}
              >
                Email me <span>↗</span>
              </a>

              <a
                className="contact-secondary"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
              <a
                href="https://wa.me/919740443965"
                target="_blank"
                rel="noreferrer"
                >
                Let's Talk on WhatsApp ↗
              </a>
            </div>

            <div className="contact-note">
              OPEN TO OPPORTUNITIES · DUBAI, UAE
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">SG</span>
          <span>
            SHRIVATSA <span className="muted">G I</span>
            <small>FRONTEND DEVELOPER</small>
          </span>
        </a>

        <div className="footer-socials">
          <a href={github} target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LINKEDIN ↗
          </a>
        </div>

        <span>
          © {new Date().getFullYear()} SHRIVATSA G I. BUILT WITH CARE.
        </span>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App
