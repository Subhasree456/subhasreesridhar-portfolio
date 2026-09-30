import { useCallback, useEffect, useRef, useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ProjectDetail } from './components/ProjectDetail'
import { projects } from './data/projects'
import { useReveal } from './lib/useReveal'
import { About } from './sections/About'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

// Case studies are deep-linkable via #project/<slug>.
const PREFIX = '#project/'
const slugFromHash = () => (location.hash.startsWith(PREFIX) ? location.hash.slice(PREFIX.length) : null)

export default function App() {
  const [slug, setSlug] = useState<string | null>(slugFromHash)
  const pushed = useRef(false)
  useReveal()

  useEffect(() => {
    const onHash = () => setSlug(slugFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const open = useCallback((next: string) => {
    if (slugFromHash()) {
      history.replaceState(null, '', PREFIX + next)
    } else {
      history.pushState(null, '', PREFIX + next)
      pushed.current = true
    }
    setSlug(next)
  }, [])

  const close = useCallback(() => {
    if (!slugFromHash()) return setSlug(null)
    if (pushed.current) {
      pushed.current = false
      history.back()
    } else {
      history.replaceState(null, '', '#projects')
      setSlug(null)
    }
  }, [])

  const project = projects.find((p) => p.slug === slug) ?? null

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-20 bg-lime px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects onOpen={open} />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ProjectDetail project={project} onOpen={open} onClose={close} />
    </>
  )
}
