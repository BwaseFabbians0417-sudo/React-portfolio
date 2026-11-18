import { useEffect, useRef, useState } from 'react'
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
  {
    name: 'Contact List',
    category: 'REACT APPLICATION',
    description: 'Add, search, and organize people in a simple personal directory.',
    url: '#contact-list',
    technology: 'REACT · JAVASCRIPT',
    demo: true,
    showcaseId: 'contact-list',
  },
  {
    name: 'Calculator',
    category: 'INTERACTIVE TOOL',
    description: 'A clean, responsive calculator for everyday arithmetic.',
    url: 'https://calculator-rosy-six-11.vercel.app',
    technology: 'REACT · JAVASCRIPT',
    showcaseId: 'calculator',
  },
  {
    name: 'Profile Card',
    category: 'PROFILE DESIGN',
    description: 'A polished personal profile card with clear contact links.',
    url: 'https://profile-card-mauve-iota.vercel.app',
    technology: 'HTML · CSS',
    showcaseId: 'profile-card',
  },
  {
    name: 'Facebook Login Clone',
    category: 'UI STUDY',
    description: 'A responsive social sign-in layout, presented as a static visual study.',
    url: '#facebook-clone',
    technology: 'HTML · CSS',
    demo: true,
    showcaseId: 'facebook-clone',
  },
  {
    name: 'Price Tag',
    category: 'PRICING DESIGN',
    description: 'A tiered pricing layout for an automotive service concept.',
    url: 'https://facebook-login-clone-gotd.vercel.app',
    technology: 'HTML · CSS',
    showcaseId: 'price-tag',
  },
  {
    name: 'Product Designs',
    category: 'PRODUCT UI',
    description: 'A small set of product cards exploring color, layout, and hierarchy.',
    url: 'https://price-tag-flax.vercel.app',
    technology: 'HTML · CSS',
    showcaseId: 'product-designs',
  },
  {
    name: 'Note Pad',
    category: 'PRODUCTIVITY',
    description: 'A React notepad for capturing and organizing notes.',
    url: 'https://note-pad-test-run.vercel.app',
    technology: 'REACT · JAVASCRIPT',
  },
]
const liveProjectCount = featuredProjects.filter((project) => !project.demo).length
const showcaseProjectCount = featuredProjects.filter((project) => project.showcaseId).length

function projectNumber(name) {
  const index = featuredProjects.findIndex((project) => project.name === name)
  return String(index + 1).padStart(2, '0')
}

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
            <div><strong>{String(featuredProjects.length).padStart(2, '0')}</strong><span>FEATURED BUILDS</span></div>
            <div><strong>∞</strong><span>IDEAS TO BUILD</span></div>
          </div>
          <a className="profile-link" href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
            Explore my GitHub <ArrowIcon diagonal />
          </a>
        </div>
        <div className="art-note"><span>✦</span> made with curiosity</div>
      </div>
      <div className="hero-index"><span>01</span> — {String(featuredProjects.length).padStart(2, '0')}</div>
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
            I&apos;m {fullName}, a front-end developer learning by building. I enjoy turning ideas into responsive, easy-to-use websites with HTML, CSS, JavaScript, and React. My coding journey includes a growing collection of deployed projects and freeCodeCamp&apos;s Responsive Web Design certification, and I&apos;m growing with every project.
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
            <h3>SELECTED PROJECTS</h3>
            <ul className="resume-projects">
              {featuredProjects.map((project) => (
                <li key={project.name}>
                  <a href={project.url} target={project.demo ? undefined : '_blank'} rel={project.demo ? undefined : 'noreferrer'}>
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
      target={project.demo ? undefined : '_blank'}
      rel={project.demo ? undefined : 'noreferrer'}
      aria-label={project.demo ? `Try the ${project.name} demo` : `Open ${project.name} live deployment`}
    >
      <div className="repo-card-top">
        <span className="repo-number">{number} / {project.category}</span>
        <span className="repo-arrow"><ArrowIcon diagonal /></span>
      </div>
      <h3>{project.name}</h3>
      <p className="repo-description">{project.description}</p>
      <div className="repo-card-bottom">
        <span className="repo-language"><i /> {project.technology}</span>
        <span className="project-cta">{project.demo ? 'TRY THE DEMO ↗' : 'OPEN LIVE SITE ↗'}</span>
      </div>
    </a>
  )
}

function ContactListDemo() {
  const nextContactId = useRef(0)
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const visibleContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.phone}`.toLowerCase().includes(search.trim().toLowerCase()),
  )

  function addContact(event) {
    event.preventDefault()
    const cleanName = name.trim()
    const cleanPhone = phone.trim()
    if (!cleanName || !cleanPhone) {
      setError('Enter both a name and a phone number.')
      return
    }

    setContacts((currentContacts) => [
      ...currentContacts,
      { id: nextContactId.current += 1, name: cleanName, phone: cleanPhone },
    ])
    setName('')
    setPhone('')
    setError('')
  }

  return (
    <article className="demo-card contact-demo" id="contact-list">
      <div className="demo-heading">
        <div>
          <p className="demo-eyebrow">PROJECT {projectNumber('Contact List')} · PERSONAL DIRECTORY</p>
          <h3>Keep your people close.</h3>
          <p>Add a contact, then search your list by name or number.</p>
        </div>
        <span className="demo-count">{contacts.length}<small>{contacts.length === 1 ? 'CONTACT' : 'CONTACTS'}</small></span>
      </div>
      <div className="contact-demo-layout">
        <form className="demo-form" onSubmit={addContact}>
          <label htmlFor="demo-contact-name">Name</label>
          <input id="demo-contact-name" autoComplete="name" placeholder="e.g. Alex Morgan" value={name} onChange={(event) => { setName(event.target.value); setError('') }} required />
          <label htmlFor="demo-contact-phone">Phone number</label>
          <input id="demo-contact-phone" type="tel" autoComplete="tel" placeholder="e.g. +1 555 010 2030" value={phone} onChange={(event) => { setPhone(event.target.value); setError('') }} required />
          {error && <p className="demo-form-error" role="alert">{error}</p>}
          <button className="demo-submit" type="submit">Add contact <span aria-hidden="true">＋</span></button>
        </form>
        <div className="demo-contact-list">
          <label className="visually-hidden" htmlFor="demo-contact-search">Search contacts</label>
          <input id="demo-contact-search" className="demo-search" type="search" placeholder="Search contacts..." value={search} onChange={(event) => setSearch(event.target.value)} />
          {visibleContacts.length ? (
            <ul>
              {visibleContacts.map((contact) => (
                <li key={contact.id}>
                  <span className="demo-avatar" aria-hidden="true">{contact.name.charAt(0).toUpperCase()}</span>
                  <span className="demo-contact-details"><strong>{contact.name}</strong><a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a></span>
                  <button className="demo-remove" type="button" aria-label={`Remove ${contact.name}`} onClick={() => setContacts((currentContacts) => currentContacts.filter((item) => item.id !== contact.id))}>×</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="demo-empty">{contacts.length ? 'No matching contacts. Try another search.' : 'Your list is ready for its first hello.'}</p>
          )}
        </div>
      </div>
    </article>
  )
}

function CalculatorDemo() {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [replaceDisplay, setReplaceDisplay] = useState(false)

  function enterDigit(digit) {
    setDisplay((current) => {
      if (replaceDisplay || current === '0' || current === 'Error') return digit
      return current.length < 14 ? `${current}${digit}` : current
    })
    setReplaceDisplay(false)
  }

  function chooseOperator(nextOperator) {
    setStoredValue(Number(display))
    setOperator(nextOperator)
    setReplaceDisplay(true)
  }

  function calculate() {
    if (storedValue === null || !operator) return
    const secondValue = Number(display)
    const result = operator === '+' ? storedValue + secondValue
      : operator === '−' ? storedValue - secondValue
        : operator === '×' ? storedValue * secondValue
          : secondValue === 0 ? NaN : storedValue / secondValue
    setDisplay(Number.isFinite(result) ? String(Number(result.toPrecision(10))) : 'Error')
    setStoredValue(null)
    setOperator(null)
    setReplaceDisplay(true)
  }

  function clearCalculator() {
    setDisplay('0')
    setStoredValue(null)
    setOperator(null)
    setReplaceDisplay(false)
  }

  const buttons = [
    { label: 'AC', action: clearCalculator, kind: 'utility' },
    { label: '7', action: () => enterDigit('7') },
    { label: '8', action: () => enterDigit('8') },
    { label: '9', action: () => enterDigit('9') },
    { label: '÷', action: () => chooseOperator('÷'), kind: 'operator' },
    { label: '4', action: () => enterDigit('4') },
    { label: '5', action: () => enterDigit('5') },
    { label: '6', action: () => enterDigit('6') },
    { label: '×', action: () => chooseOperator('×'), kind: 'operator' },
    { label: '1', action: () => enterDigit('1') },
    { label: '2', action: () => enterDigit('2') },
    { label: '3', action: () => enterDigit('3') },
    { label: '−', action: () => chooseOperator('−'), kind: 'operator' },
    { label: '0', action: () => enterDigit('0'), kind: 'zero' },
    { label: '.', action: () => {
      setDisplay((current) => replaceDisplay || current === 'Error' ? '0.' : current.includes('.') ? current : `${current}.`)
      setReplaceDisplay(false)
    } },
    { label: '=', action: calculate, kind: 'equals' },
    { label: '+', action: () => chooseOperator('+'), kind: 'operator' },
  ]

  return (
    <article className="demo-card calculator-demo" id="calculator">
      <div className="demo-heading">
        <div>
          <p className="demo-eyebrow">PROJECT {projectNumber('Calculator')} · EVERYDAY TOOL</p>
          <h3>Just the right numbers.</h3>
          <p>Quick, clear arithmetic with the essentials.</p>
        </div>
        <span className="calculator-mark" aria-hidden="true">÷</span>
      </div>
      <div className="calculator-widget" aria-label="Calculator">
        <output className="calculator-display" aria-live="polite">{display}</output>
        <div className="calculator-keys">
          {buttons.map(({ label, action, kind }) => (
            <button className={`calculator-key${kind ? ` ${kind}` : ''}`} key={label} type="button" onClick={action} aria-label={label === 'AC' ? 'Clear calculator' : label}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProfileCardDemo() {
  return (
    <article className="demo-card design-demo" id="profile-card">
      <div className="demo-heading">
        <div>
          <p className="demo-eyebrow">PROJECT {projectNumber('Profile Card')} · PROFILE DESIGN</p>
          <h3>A card that says hello.</h3>
          <p>A compact identity card with direct ways to connect.</p>
        </div>
      </div>
      <div className="profile-preview">
        <div className="profile-preview-banner" />
        <img src={`https://github.com/${githubUsername}.png?size=160`} alt="" />
        <p className="profile-preview-role">FRONT-END DEVELOPER</p>
        <h4>{fullName}</h4>
        <p className="profile-preview-copy">Building thoughtful, responsive experiences for the web.</p>
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">Visit my GitHub <ArrowIcon diagonal /></a>
      </div>
    </article>
  )
}

function FacebookCloneDemo() {
  return (
    <article className="demo-card design-demo" id="facebook-clone">
      <div className="demo-heading">
        <div>
          <p className="demo-eyebrow">PROJECT {projectNumber('Facebook Login Clone')} · SOCIAL UI STUDY</p>
          <h3>Familiar, reimagined.</h3>
          <p>A responsive login-page layout recreated as a visual exercise.</p>
        </div>
      </div>
      <div className="social-preview" aria-label="Static Facebook login design preview">
        <div className="social-brand">f</div>
        <div className="social-login-card">
          <h4>Log in to Facebook</h4>
          <input aria-label="Email preview" placeholder="Email address or mobile number" disabled />
          <input aria-label="Password preview" placeholder="Password" disabled />
          <button type="button" disabled>Log in</button>
          <span>Forgotten password?</span>
          <div />
          <strong>Create new account</strong>
        </div>
        <p className="social-preview-note">Static design preview · no credentials are collected</p>
      </div>
    </article>
  )
}

function PriceTagDemo() {
  const plans = [
    { name: 'Mini', detail: 'Auto care', price: '$15', features: ['Repairs', 'Motor works', 'Auto tech'] },
    { name: 'Pro', detail: 'Performance & modification', price: '$30', features: ['Tuning', 'Performance works', 'Race works'], popular: true },
    { name: 'Team', detail: 'Luxury & high-end', price: '$100', features: ['Auto studio', 'Motor prestige', 'Priority support'] },
  ]

  return (
    <article className="demo-card design-demo" id="price-tag">
      <div className="demo-heading">
        <div>
          <p className="demo-eyebrow">PROJECT {projectNumber('Price Tag')} · PRICING DESIGN</p>
          <h3>Find your level.</h3>
          <p>A responsive set of plans for an automotive service concept.</p>
        </div>
      </div>
      <div className="pricing-preview">
        {plans.map((plan) => (
          <div className={`pricing-preview-plan${plan.popular ? ' popular' : ''}`} key={plan.name}>
            {plan.popular && <span className="pricing-preview-badge">POPULAR</span>}
            <span className="pricing-preview-name">{plan.name}</span>
            <span className="pricing-preview-detail">{plan.detail}</span>
            <strong>{plan.price}<small> / month</small></strong>
            <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </div>
        ))}
      </div>
    </article>
  )
}

function ProductDesignDemo() {
  const products = [
    { name: 'Studio headphones', type: 'AUDIO · WIRELESS', price: '$89', art: 'headphones' },
    { name: 'Everyday carry bag', type: 'ACCESSORIES · CANVAS', price: '$64', art: 'bag' },
    { name: 'Sculpted table lamp', type: 'HOME · LIGHTING', price: '$112', art: 'lamp' },
  ]

  return (
    <article className="demo-card design-demo" id="product-designs">
      <div className="demo-heading">
        <div>
          <p className="demo-eyebrow">PROJECT {projectNumber('Product Designs')} · PRODUCT UI</p>
          <h3>Little things, well considered.</h3>
          <p>A product-card study focused on imagery, detail, and price.</p>
        </div>
      </div>
      <div className="product-preview-grid">
        {products.map((product) => (
          <article className="product-preview-card" key={product.name}>
            <div className={`product-preview-art ${product.art}`} aria-hidden="true"><span /></div>
            <p>{product.type}</p>
            <h4>{product.name}</h4>
            <strong>{product.price}</strong>
          </article>
        ))}
      </div>
    </article>
  )
}

function GitHubRepositories() {
  const [repositories, setRepositories] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadRepositories() {
      try {
        const allRepositories = []
        let page = 1
        let hasMore = true

        while (hasMore) {
          const response = await fetch(
            `https://api.github.com/users/${githubUsername}/repos?type=owner&per_page=100&sort=updated&page=${page}`,
            {
              headers: {
                Accept: 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28',
              },
              signal: controller.signal,
            },
          )

          if (!response.ok) {
            throw new Error(`GitHub returned HTTP ${response.status}.`)
          }

          const pageRepositories = await response.json()
          if (!Array.isArray(pageRepositories)) {
            throw new Error('GitHub returned an unexpected repository list.')
          }

          allRepositories.push(...pageRepositories.filter((repository) =>
            repository
            && !repository.fork
            && typeof repository.id === 'number'
            && typeof repository.name === 'string'
            && typeof repository.html_url === 'string',
          ))
          hasMore = pageRepositories.length === 100
          page += 1
        }

        setRepositories(allRepositories)
        setStatus('success')
      } catch (loadError) {
        if (controller.signal.aborted) return
        setError(loadError instanceof Error ? loadError.message : 'An unknown error occurred.')
        setStatus('error')
      }
    }

    loadRepositories()
    return () => controller.abort()
  }, [reloadKey])

  const visibleRepositories = repositories.filter((repository) =>
    `${repository.name} ${repository.description ?? ''} ${repository.language ?? ''}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  )

  return (
    <section className="github-work" id="all-work" aria-labelledby="all-work-title">
      <div className="github-work-heading">
        <div>
          <p className="work-overline">ALL PUBLIC GITHUB REPOSITORIES</p>
          <h3 id="all-work-title">Everything I&apos;ve been building.</h3>
          <p>Browse every public, non-fork repository on my GitHub profile.</p>
        </div>
        <a className="all-work-link" href={`https://github.com/${githubUsername}?tab=repositories`} target="_blank" rel="noreferrer">
          Open GitHub <ArrowIcon diagonal />
        </a>
      </div>

      {status === 'loading' && <p className="repository-message" role="status">Loading public GitHub projects…</p>}
      {status === 'error' && (
        <div className="repository-error" role="alert">
          <p>Couldn&apos;t load your GitHub projects. {error}</p>
          <button type="button" onClick={() => {
            setError('')
            setStatus('loading')
            setReloadKey((key) => key + 1)
          }}>Try again</button>
        </div>
      )}
      {status === 'success' && (
        <>
          <div className="repository-toolbar">
            <label htmlFor="repository-search">Search all {repositories.length} repositories</label>
            <input id="repository-search" type="search" placeholder="Search by name, language, or description" value={search} onChange={(event) => setSearch(event.target.value)} />
            <span>{visibleRepositories.length} shown</span>
          </div>
          {visibleRepositories.length ? (
            <div className="github-repository-grid">
              {visibleRepositories.map((repository) => {
                const hasLiveSite = typeof repository.homepage === 'string'
                  && /^https?:\/\//i.test(repository.homepage)
                return (
                  <article className="github-repository-card" key={repository.id}>
                    <div className="github-repository-top">
                      <span className="github-repository-icon" aria-hidden="true">⌘</span>
                      <a href={repository.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repository.name} source repository`}>
                        <ArrowIcon diagonal />
                      </a>
                    </div>
                    <h4>{repository.name}</h4>
                    <p>{repository.description || 'No description provided yet.'}</p>
                    <div className="github-repository-meta">
                      <span>{repository.language || 'Code & experiments'}</span>
                      {hasLiveSite && <a href={repository.homepage} target="_blank" rel="noreferrer">Live site ↗</a>}
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <p className="repository-message">No repositories match “{search}”. Try another search.</p>
          )}
        </>
      )}
    </section>
  )
}

function Work() {
  return (
    <section className="work section-wrap" id="work">
      <div className="section-label"><span>03</span> SELECTED WORK</div>
      <div className="work-heading">
        <div>
          <p className="work-overline">{featuredProjects.length} PROJECTS · {liveProjectCount} LIVE LINKS · {showcaseProjectCount} ON-PAGE SHOWCASES</p>
          <h2>A few things I&apos;ve <span>made.</span></h2>
        </div>
        <a className="all-work-link" href={`https://github.com/${githubUsername}?tab=repositories`} target="_blank" rel="noreferrer">
          More on GitHub <ArrowIcon diagonal />
        </a>
      </div>
      <div className="repo-grid">
        {featuredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
      <div className="demo-grid">
        <ContactListDemo />
        <CalculatorDemo />
        <ProfileCardDemo />
        <FacebookCloneDemo />
        <PriceTagDemo />
        <ProductDesignDemo />
      </div>
      <GitHubRepositories />
      <div className="work-foot">
        <span>{liveProjectCount} LIVE PROJECT LINKS · {showcaseProjectCount} ON-PAGE SHOWCASES <i>✳</i> MORE ON GITHUB</span>
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