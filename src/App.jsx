import certificateImage from './assets/responsiveness-certificate-cropped.jpg'
import './App.css'

const githubUsername = 'BwaseFabbians0417-sudo'
const fullName = 'Olorunniyi Oluwapelumi Victor'
const certificateVerificationUrl = 'https://freecodecamp.org/certification/fcc-97897ec5-6305-40c5-8ee2-e95600338847/responsive-web-design-v9'
const featuredProjects = [
  {
    name: 'DTA Assignment',
    category: 'WEB DEVELOPMENT',
    description: 'A live deployment of my DTA assignment.',
    url: 'https://dta-clone.vercel.app',
    technology: 'HTML · CSS · JAVASCRIPT',
  },
  {
    name: 'Weather Assignment',
    category: 'WEB APPLICATION',
    description: 'A deployed weather assignment project.',
    url: 'https://weather-pink-rho.vercel.app',
    technology: 'JAVASCRIPT · API',
  },
  {
    name: 'To-do Assignment',
    category: 'PRODUCTIVITY',
    description: 'A deployed to-do assignment project.',
    url: 'https://react-to-do-list-nu-three.vercel.app',
    technology: 'JAVASCRIPT · CSS',
  },
  {
    name: 'Age Validation Assignment',
    category: 'WEB APPLICATION',
    description: 'A deployed age-validation assignment project.',
    url: 'https://weather-ety2.vercel.app',
    technology: 'JAVASCRIPT · HTML',
  },
  {
    name: 'Vite Project',
    category: 'FEATURED BUILD',
    description: 'A modern web project, deployed and ready to explore.',
    url: 'https://vite-project-fengs.vercel.app',
    technology: 'REACT · VITE',
  },
]

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.14 1.7 1.14 1 .1.75 2.26 4.2 1.52.1-.73.39-1.23.7-1.52-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.62 5.22-5.11 5.5.4.35.76 1.02.76 2.06v3.04c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  )
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.8" />
        <path d="m13.5 14.5 6.5 13 6.5-13" stroke="var(--text)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Olorunniyi, home">
        <BrandMark />
        <span>OLORUNNIYI<span className="brand-period">.</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#certificate">Certificate</a>
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
      </nav>
      <a className="header-contact" href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
        Let&apos;s connect <span><ArrowIcon diagonal /></span>
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
        <p className="hero-kicker">FRONTEND DEVELOPER <span>·</span> WEB ENTHUSIAST</p>
        <h1>Hey, I&apos;m<br /><span className="hero-name">Oluwapelumi.</span><br />I make the web<br />feel a little more <span className="italic-word">human.</span></h1>
        <p className="hero-description">
          I&apos;m a developer who cares about the details — turning thoughtful ideas into fast, accessible experiences people love to use.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <ArrowIcon /></a>
          <a className="button button-text" href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer"><GithubIcon /> Find me on GitHub</a>
        </div>
        <div className="hero-footnote"><span className="footnote-line" /> SCROLL TO EXPLORE <span className="footnote-arrow">↓</span></div>
      </div>
      <div className="hero-art" aria-label="GitHub profile preview">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-sparkle sparkle-one">✳</div>
        <div className="art-sparkle sparkle-two">✳</div>
        <div className="profile-card">
          <div className="profile-card-top"><span className="profile-label"><span className="availability-dot" /> ON GITHUB</span><GithubIcon /></div>
          <img className="profile-avatar" src={`https://github.com/${githubUsername}.png?size=320`} alt={`${fullName}'s GitHub avatar`} />
          <div className="profile-name">{fullName}<span className="verified-mark">✳</span></div>
          <div className="profile-handle">@{githubUsername}</div>
          <div className="profile-divider" />
          <div className="profile-stats">
            <div><strong>05</strong><span>FEATURED BUILDS</span></div>
            <div><strong>∞</strong><span>IDEAS TO BUILD</span></div>
          </div>
          <a className="profile-link" href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
            Explore my GitHub <ArrowIcon diagonal />
          </a>
        </div>
        <div className="art-note"><span>✦</span> made with curiosity</div>
      </div>
      <div className="hero-index"><span>01</span> — 05</div>
    </section>
  )
}

function Marquee() {
  const skills = ['REACT', 'JAVASCRIPT', 'CSS', 'HTML', 'GIT & GITHUB', 'RESPONSIVE DESIGN']
  return (
    <div className="marquee" aria-label={`Technologies: ${skills.join(', ')}`}>
      <div className="marquee-track" aria-hidden="true">
        {[...skills, ...skills].map((skill, index) => (
          <span className="marquee-item" key={`${skill}-${index}`}>{skill}<i>✳</i></span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="section-label"><span>01</span> A LITTLE ABOUT ME</div>
      <div className="about-content">
        <h2>Curious by nature.<br /><span>Developer by choice.</span></h2>
        <div className="about-copy">
          <p>
            I&apos;m {fullName}, a front-end developer learning by building. I enjoy turning ideas into responsive, easy-to-use websites with HTML, CSS, JavaScript, and React. My coding journey includes five deployed projects and freeCodeCamp&apos;s Responsive Web Design certification, and I&apos;m growing with every project.
          </p>
          <div className="about-links">
            <a className="inline-link" href="#resume">View my resume <ArrowIcon diagonal /></a>
            <a className="inline-link" href="#certificate">See my certificate <ArrowIcon diagonal /></a>
          </div>
        </div>
      </div>
      <div className="skills-row">
        <span className="skills-heading">THINGS I WORK WITH</span>
        <div className="skill-list">
          {['React', 'JavaScript', 'CSS & HTML', 'GitHub', 'Responsive UI'].map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
        </div>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section className="resume section-wrap" id="resume">
      <div className="section-label"><span>02</span> RESUME</div>
      <article className="resume-sheet">
        <div className="resume-header">
          <div>
            <p className="resume-eyebrow">FRONT-END DEVELOPER</p>
            <h2>{fullName}</h2>
            <a className="resume-handle" href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
              github.com/{githubUsername}
            </a>
          </div>
          <button className="resume-print-button" type="button" onClick={() => window.print()}>
            Print / Save as PDF <ArrowIcon diagonal />
          </button>
        </div>
        <div className="resume-grid">
          <section className="resume-block">
            <h3>PROFILE</h3>
            <p>
              Front-end developer focused on responsive, user-friendly web experiences. I learn through hands-on work, from shaping page layouts to building interactive projects with JavaScript and React.
            </p>
          </section>
          <section className="resume-block">
            <h3>TECHNICAL SKILLS</h3>
            <div className="resume-skills">
              {['HTML', 'CSS', 'Responsive design', 'JavaScript', 'React', 'Git & GitHub'].map((skill) => (
                <span className="skill-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </section>
          <section className="resume-block">
            <h3>SELECTED DEPLOYMENTS</h3>
            <ul className="resume-projects">
              {featuredProjects.map((project) => (
                <li key={project.name}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.name}<ArrowIcon diagonal />
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className="resume-block">
            <h3>CERTIFICATION</h3>
            <p><strong>Responsive Web Design Developer Certification</strong></p>
            <p>freeCodeCamp · September 30, 2026 · Approximately 300 hours</p>
            <a className="inline-link" href={certificateVerificationUrl} target="_blank" rel="noreferrer">
              Verify credential <ArrowIcon diagonal />
            </a>
          </section>
        </div>
      </article>
    </section>
  )
}

function Certificate() {
  return (
    <section className="certificate section-wrap" id="certificate">
      <div className="section-label"><span>04</span> CERTIFICATION</div>
      <div className="certificate-layout">
        <div className="certificate-copy">
          <p className="work-overline">FREECODECAMP · DEVELOPER CERTIFICATION</p>
          <h2>Responsive design,<br /><span>from the ground up.</span></h2>
          <p className="certificate-description">
            Completed the Responsive Web Design curriculum, representing approximately 300 hours of coursework and hands-on practice.
          </p>
          <div className="certificate-meta">
            <span>ISSUED SEPTEMBER 30, 2026</span>
            <span>RESPONSIVE WEB DESIGN</span>
          </div>
          <a className="inline-link" href={certificateVerificationUrl} target="_blank" rel="noreferrer">
            Verify my certificate <ArrowIcon diagonal />
          </a>
        </div>
        <a className="certificate-preview" href={certificateVerificationUrl} target="_blank" rel="noreferrer" aria-label="Verify the freeCodeCamp Responsive Web Design certificate">
          <img
            src={certificateImage}
            alt={`freeCodeCamp Responsive Web Design Developer Certification awarded to ${fullName} on September 30, 2026`}
          />
        </a>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <a
      className="repo-card"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.name} live deployment`}
    >
      <div className="repo-card-top">
        <span className="repo-number">{number} / {project.category}</span>
        <span className="repo-arrow"><ArrowIcon diagonal /></span>
      </div>
      <h3>{project.name}</h3>
      <p className="repo-description">{project.description}</p>
      <div className="repo-card-bottom">
        <span className="repo-language"><i /> {project.technology}</span>
        <span className="project-cta">OPEN LIVE SITE ↗</span>
      </div>
    </a>
  )
}

function Work() {
  return (
    <section className="work section-wrap" id="work">
      <div className="section-label"><span>03</span> SELECTED WORK</div>
      <div className="work-heading">
        <div>
          <p className="work-overline">FIVE PROJECTS · BUILT AND DEPLOYED</p>
          <h2>A few things I&apos;ve <span>made.</span></h2>
        </div>
        <a className="all-work-link" href={`https://github.com/${githubUsername}?tab=repositories`} target="_blank" rel="noreferrer">
          More on GitHub <ArrowIcon diagonal />
        </a>
      </div>
      <div className="repo-grid">
        {featuredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
      <div className="work-foot">
        <span>FIVE LIVE BUILDS <i>✳</i> MORE ON GITHUB</span>
        <a href={`https://github.com/${githubUsername}?tab=repositories`} target="_blank" rel="noreferrer">VIEW ALL REPOSITORIES ↗</a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-sticker">YOUR NEXT<br />GOOD IDEA <span>↘</span></div>
      <p className="contact-overline">HAVE A PROJECT IN MIND?</p>
      <h2>Let&apos;s make<br />something <span>matter.</span></h2>
      <a className="contact-button" href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">Connect on GitHub <ArrowIcon diagonal /></a>
      <div className="contact-decoration">✳</div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="brand footer-brand" href="#home"><BrandMark /><span>OLORUNNIYI<span className="brand-period">.</span></span></a>
      <span className="footer-note">{fullName.toUpperCase()}</span>
      <div className="footer-links">
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">GITHUB <ArrowIcon diagonal /></a>
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">CONNECT <ArrowIcon diagonal /></a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} OLORUNNIYI</span>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Resume />
        <Work />
        <Certificate />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App