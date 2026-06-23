import './App.css'
import heroImg from './assets/profile.jpg'

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive design', 'Vite']

const experiences = [
  {
    role: 'Collection Assistant',
    company: 'Yashjyoti Debt Consultancy',
    duration: '9 months',
    details: 'Handled loan recovery follow-ups, maintained Excel records, and performed data entry for client accounts and payment updates.',
  },
]

const projects = [
  {
    title: 'Food E-commerce Website',
    description: 'A food website demo with clean product layout, cart interactions, and responsive shopping experience.',
    link: 'https://food-website-gpuv.vercel.app',
    external: true,
    buttonText: 'Open live site',
  },
  {
    title: 'Life Spandan AI UI',
    description: 'UI-only design for Life Spandan AI. Not deployed yet, so contact me to see the demo or mockups.',
    link: '#contact',
    buttonText: 'Request demo',
  },
  {
    title: 'Portfolio Website',
    description: 'Creating a personal portfolio to showcase experience, skills, and completed projects with a polished design.',
    link: '#contact',
    buttonText: 'Contact me',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I am</p>
          <h1>Jayprakash Shukla</h1>
          <p className="hero-copy-text">
            Frontend developer crafting modern, responsive portfolio websites
            with React, Vite, and clean UI design.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View projects
            </a>
            <a className="button secondary" href="#contact">
              Contact me
            </a>
          </div>
        </div>
        <aside className="hero-photo-card">
          <div className="photo-label">My profile</div>
          <img src={heroImg} alt="Jay profile" className="profile-photo" />
          <div className="hero-photo-details">
            <p>Frontend Developer</p>
            <strong>React · JavaScript · UI/UX</strong>
          </div>
        </aside>
      </header>

      <main>
        <section id="about" className="section-card">
          <h2>About me</h2>
          <p>
            I build modern portfolio websites and web apps with React and Vite.
            I enjoy turning ideas into polished, responsive experiences that work on every device.
          </p>
          <div className="stats-grid">
            <div>
              <strong>2+</strong>
              <span>Projects completed</span>
            </div>
            <div>
              <strong>Fast</strong>
              <span>Performance-first build</span>
            </div>
            <div>
              <strong>Responsive</strong>
              <span>Mobile-ready experiences</span>
            </div>
          </div>
        </section>

        <section id="experience" className="section-card">
          <h2>Experience</h2>
          <div className="experience-card">
            {experiences.map((item) => (
              <div key={item.company} className="experience-item">
                <div className="experience-header">
                  <h3>{item.role}</h3>
                  <span>{item.duration}</span>
                </div>
                <p className="experience-company">{item.company}</p>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-card">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section-card">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target={project.external ? '_blank' : '_self'}
                  rel={project.external ? 'noreferrer noopener' : undefined}
                >
                  {project.buttonText || 'Explore'}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card contact-card">
          <div>
            <h2>Let’s work together</h2>
            <p>
              Want to start a project or improve your website? Send a message and I’ll
              get back to you soon.
            </p>
          </div>
          <a className="button primary" href="mailto:shuklajayprakash879@gmail.com">
            Email me
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
