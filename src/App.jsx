import { useState, useEffect, useRef } from 'react'

/* ------------------------------------------------------------------ */
/*  CONTENT — edit anything here to update the site                    */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: 'Samiksha Raj',
  roles: ['Full-Stack Engineer', 'React Developer', 'Problem Solver', 'Next.js Enthusiast'],
  tagline:
    'I build fast, reliable web applications end-to-end — from polished React interfaces to Node.js APIs and cloud deployments.',
  location: 'Delhi, India',
  email: 'samikshatiwary704@gmail.com',
  phone: '+91 9798567494',
  github: 'https://github.com/samikshatiwary',
  linkedin: 'https://www.linkedin.com/in/samiksha-raj-49382522a/',
  resume: '/resume.pdf',
}

const STATS = [
  { value: 2, suffix: '', label: 'Internships' },
  { value: 2, suffix: '', label: 'Live Projects' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Deployed' },
]

const ABOUT = [
  "I'm a Full-Stack Engineer and MCA candidate who loves turning ideas into polished, production-ready products.",
  'Across internships and personal projects I have shipped multi-tenant platforms, real-time collaboration tools and document-automation pipelines using React, Next.js, TypeScript and Node.js.',
  'I care about clean architecture, thoughtful UX, and getting things live — every project below is deployed and usable.',
]

const EXPERIENCE = [
  {
    company: 'IndiaAccelerator',
    role: 'Full-Stack Engineer Intern',
    location: 'Gurgaon',
    period: 'Jan 2026 — Present',
    points: [
      'Engineered a 4-phase Unit Demat system automating 12+ financial document types (DOCX/PDF/CSV) with a zero-disk-write buffer architecture streaming directly to AWS S3.',
      'Built a multi-tenant Alternative Investment Platform using Next.js 14, TypeScript & PostgreSQL with a layered architecture.',
      'Developed a User Management suite with a multi-step wizard and dynamic RBAC role assignment.',
      'Implemented Magic Link Auto-Login with org-specific domain handling and automated session revocation.',
      'Built bulk CSV/Excel pipelines for investor commitments and a Multi-Fund Analytics Dashboard.',
    ],
  },
  {
    company: 'Sumvaik Consulting Group',
    role: 'Frontend Developer Intern',
    location: 'Gurgaon',
    period: 'Nov 2025 — Jan 2026',
    points: [
      'Built responsive user interfaces using React and Next.js with a reusable component architecture.',
      'Integrated REST APIs with the frontend and resolved UI/UX bugs based on product requirements.',
      'Collaborated with a cross-functional team to understand project flow and deliver tasks on time.',
    ],
  },
]

const PROJECTS = [
  {
    name: 'PDF Annotator',
    period: 'Aug 2025 — Dec 2025',
    description:
      'A collaborative PDF annotation platform with AI-powered summarization, semantic search, and real-time multi-user editing.',
    highlights: [
      'AI summarization & semantic search',
      'Real-time collaboration (Socket.IO) with reactions & threaded comments',
      'Google Drive & Dropbox integration + offline support via IndexedDB',
    ],
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'OpenAI'],
    live: 'https://pdf-annotator-silk.vercel.app',
    code: 'https://github.com/Samikshatiwary/pdf-annotator',
  },
  {
    name: 'HealthTrack',
    period: 'Oct 2025 — Dec 2025',
    description:
      'A full-stack health tracking application for managing health records, medications and appointments.',
    highlights: [
      'REST APIs with Node.js & Express, JWT auth and MongoDB schemas',
      'Cloudinary file uploads and Nodemailer email notifications',
      'Scheduled reminders with Node-cron',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    live: 'https://health-track-management-system-nine.vercel.app',
    code: 'https://github.com/Samikshatiwary/Health-Track-Management-System',
  },
]

const SKILLS = {
  Languages: ['C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  Frameworks: ['React', 'Next.js', 'Node.js', 'Express.js', 'NestJS', 'Redux', 'Zustand', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Redis'],
  Tools: ['Git', 'GitHub', 'Postman', 'Figma', 'Docker', 'AWS', 'CircleCI'],
}

const MARQUEE = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redux', 'Tailwind', 'AWS', 'Docker', 'Socket.IO', 'NestJS', 'Redis', 'Figma']

const EDUCATION = [
  {
    school: 'Vivekananda Institute of Professional Studies',
    degree: 'Master of Computer Applications (MCA)',
    location: 'New Delhi',
    period: 'Aug 2024 — June 2026',
    coursework: 'Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, OOP',
  },
  {
    school: 'Maulana Mazharul Haque Arabic and Persian University',
    degree: 'Bachelor of Computer Applications (BCA)',
    location: 'Patna',
    period: '',
    coursework: '',
  },
]

/* ------------------------------------------------------------------ */
/*  ICONS                                                              */
/* ------------------------------------------------------------------ */

const Icon = {
  github: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...p}><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" /></svg>),
  linkedin: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...p}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.3a1.7 1.7 0 110-3.5 1.7 1.7 0 010 3.5zM19 19h-3v-4.7c0-1.1 0-2.5-1.6-2.5s-1.7 1.2-1.7 2.4V19h-3v-9h2.9v1.2h.1a3.2 3.2 0 012.9-1.6c3 0 3.6 2 3.6 4.6z" /></svg>),
  mail: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>),
  external: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14 21 3" /></svg>),
  code: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...p}><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>),
  doc: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>),
  arrow: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>),
}

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */

// Reveal elements on scroll (adds .in when visible)
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Top scroll-progress bar
function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setW(scrolled)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="progress" style={{ width: `${w}%` }} />
}

// Cursor-following spotlight glow
function Spotlight() {
  const ref = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.setProperty('--x', `${e.clientX}px`)
        ref.current.style.setProperty('--y', `${e.clientY}px`)
      }
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <div ref={ref} className="spotlight" />
}

// Typewriter that cycles roles
function Typewriter({ words }) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const current = words[i % words.length]
    let delay = del ? 45 : 95
    if (!del && text === current) delay = 1600
    if (del && text === '') delay = 350
    const t = setTimeout(() => {
      if (!del && text === current) return setDel(true)
      if (del && text === '') { setDel(false); return setI((v) => v + 1) }
      setText(current.slice(0, del ? text.length - 1 : text.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [text, del, i, words])
  return (
    <span className="typewriter">
      {text}
      <span className="caret">|</span>
    </span>
  )
}

// Count-up number when scrolled into view
function Stat({ value, suffix, label }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1300
          const t0 = performance.now()
          const step = (t) => {
            const p = Math.min((t - t0) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          io.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return (
    <div className="stat" ref={ref}>
      <b>{n}{suffix}</b>
      <span>{label}</span>
    </div>
  )
}

// 3D tilt + inner glow handlers (shared by cards)
const tilt = {
  onMouseMove: (e) => {
    const c = e.currentTarget
    const r = c.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    c.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
    c.style.setProperty('--rx', `${(0.5 - y) * 10}deg`)
    c.style.setProperty('--gx', `${x * 100}%`)
    c.style.setProperty('--gy', `${y * 100}%`)
  },
  onMouseLeave: (e) => {
    const c = e.currentTarget
    c.style.setProperty('--ry', '0deg')
    c.style.setProperty('--rx', '0deg')
  },
}

// Magnetic button
function Magnetic({ children, className, href, ...rest }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)' }
  return (
    <a ref={ref} href={href} className={className} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>
      {children}
    </a>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTIONS                                                           */
/* ------------------------------------------------------------------ */

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">SR</span>
        </a>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="btn btn--sm">Resume</a>
        </nav>
        <button className="nav__toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

const PARTICLES = [
  { l: '6%', t: '18%', s: 5, d: 0, dur: 7 }, { l: '14%', t: '68%', s: 3, d: 1.2, dur: 9 },
  { l: '22%', t: '38%', s: 4, d: 2.4, dur: 8 }, { l: '31%', t: '82%', s: 6, d: 0.6, dur: 10 },
  { l: '40%', t: '24%', s: 3, d: 3.1, dur: 7.5 }, { l: '48%', t: '60%', s: 5, d: 1.8, dur: 9.5 },
  { l: '57%', t: '14%', s: 4, d: 2.2, dur: 8.2 }, { l: '64%', t: '74%', s: 3, d: 0.9, dur: 11 },
  { l: '72%', t: '42%', s: 6, d: 3.6, dur: 7.8 }, { l: '80%', t: '22%', s: 4, d: 1.4, dur: 9.2 },
  { l: '87%', t: '64%', s: 3, d: 2.8, dur: 8.6 }, { l: '93%', t: '34%', s: 5, d: 0.3, dur: 10.4 },
  { l: '36%', t: '52%', s: 3, d: 4, dur: 7.2 }, { l: '68%', t: '58%', s: 4, d: 1.1, dur: 9.8 },
  { l: '18%', t: '52%', s: 4, d: 2.6, dur: 8.4 }, { l: '52%', t: '86%', s: 3, d: 3.3, dur: 10.8 },
]

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: `${p.d}s`, animationDuration: `${p.dur}s` }}
        />
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="aurora">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
        <span className="aurora__ring" />
      </div>
      <Particles />
      <div className="grid-overlay" />
      <div className="container hero__inner">
        <p className="hero__hi" data-reveal>Hi, I'm</p>
        <h1 className="hero__name shine" data-reveal>{PROFILE.name}</h1>
        <h2 className="hero__role" data-reveal>
          <Typewriter words={PROFILE.roles} />
        </h2>
        <p className="hero__tagline" data-reveal>{PROFILE.tagline}</p>
        <div className="hero__cta" data-reveal>
          <Magnetic href="#projects" className="btn btn--primary">View Projects {Icon.arrow()}</Magnetic>
          <Magnetic href="#contact" className="btn">Get in Touch</Magnetic>
        </div>
        <div className="hero__socials" data-reveal>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">{Icon.github()}</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">{Icon.linkedin()}</a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">{Icon.mail()}</a>
        </div>
        <div className="hero__stats" data-reveal>
          {STATS.map((s) => (<Stat key={s.label} {...s} />))}
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down"><span /></a>
    </section>
  )
}

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE]
  return (
    <div className="marquee">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i} className="marquee__item">{t}<i>✦</i></span>
        ))}
      </div>
    </div>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section__title" data-reveal><span className="accent">#</span> {title}</h2>
        {children}
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="about__text" data-reveal="left">
          {ABOUT.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
        <div className="about__card tilt" data-reveal="right" {...tilt}>
          <div className="about__row"><span>Role</span><b>Full-Stack Engineer</b></div>
          <div className="about__row"><span>Location</span><b>{PROFILE.location}</b></div>
          <div className="about__row"><span>Education</span><b>MCA</b></div>
          <div className="about__row"><span>Email</span><b>{PROFILE.email}</b></div>
        </div>
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <div className="timeline__item" data-reveal style={{ transitionDelay: `${i * 120}ms` }} key={i}>
            <div className="timeline__dot" />
            <div className="timeline__body">
              <div className="timeline__head">
                <h3>{e.role} <span className="accent">@ {e.company}</span></h3>
                <span className="timeline__period">{e.period}</span>
              </div>
              <p className="timeline__loc">{e.location}</p>
              <ul>{e.points.map((pt, j) => (<li key={j}>{pt}</li>))}</ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects">
        {PROJECTS.map((p, i) => (
          <article className="card tilt" data-reveal={i % 2 === 0 ? 'left' : 'right'} style={{ transitionDelay: `${i * 120}ms` }} key={i} {...tilt}>
            <div className="card__glow" />
            <div className="card__inner">
              <div className="card__top">
                <div className="card__folder">{Icon.doc()}</div>
                <div className="card__links">
                  <a href={p.code} target="_blank" rel="noreferrer" aria-label="Source code">{Icon.code()}</a>
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live site">{Icon.external()}</a>
                </div>
              </div>
              <h3 className="card__title">{p.name}</h3>
              <p className="card__period">{p.period}</p>
              <p className="card__desc">{p.description}</p>
              <ul className="card__highlights">{p.highlights.map((h, j) => (<li key={j}>{h}</li>))}</ul>
              <div className="card__tech">{p.tech.map((t) => (<span key={t}>{t}</span>))}</div>
              <div className="card__cta">
                <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">Live Demo {Icon.arrow()}</a>
                <a href={p.code} target="_blank" rel="noreferrer" className="btn btn--sm">Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {Object.entries(SKILLS).map(([group, items], i) => (
          <div className="skills__group tilt" data-reveal={i === 0 ? 'left' : i === 2 ? 'right' : 'up'} style={{ transitionDelay: `${i * 100}ms` }} key={group} {...tilt}>
            <h3>{group}</h3>
            <div className="skills__tags">{items.map((s) => (<span key={s}>{s}</span>))}</div>
          </div>
        ))}
      </div>
      <div className="edu" data-reveal>
        <h3 className="edu__title"><span className="accent">#</span> Education</h3>
        <div className="edu__list">
          {EDUCATION.map((ed, i) => (
            <div className="edu__card tilt" key={i} {...tilt}>
              <div className="edu__head"><b>{ed.school}</b>{ed.period && <span>{ed.period}</span>}</div>
              <p>{ed.degree} · {ed.location}</p>
              {ed.coursework && <p className="edu__course"><b>Coursework:</b> {ed.coursework}</p>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact" data-reveal>
        <p className="contact__lead">I'm open to full-time roles and interesting projects. Let's build something together.</p>
        <Magnetic href={`mailto:${PROFILE.email}`} className="btn btn--primary btn--lg">{Icon.mail()} Say Hello</Magnetic>
        <div className="contact__socials">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">{Icon.github()} GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">{Icon.linkedin()} LinkedIn</a>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Designed & built by <span className="accent">{PROFILE.name}</span></p>
        <p className="footer__muted">React · Vite · Deployed on Vercel</p>
      </div>
    </footer>
  )
}

export default function App() {
  useScrollReveal()
  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <span className="bg-fx__glow bg-fx__glow--a" />
        <span className="bg-fx__glow bg-fx__glow--b" />
        <span className="bg-fx__glow bg-fx__glow--c" />
      </div>
      <ScrollProgress />
      <Spotlight />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
