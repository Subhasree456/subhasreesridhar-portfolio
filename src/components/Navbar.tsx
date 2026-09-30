import { useCallback, useEffect, useState } from 'react'
import { links, navItems, profile } from '../data/profile'
import { useActiveSection } from '../lib/useReveal'
import { Download, GitHub, LinkedIn, Phone } from './Icons'

const ids = navItems.map((n) => n.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useActiveSection(
    ids,
    useCallback((id: string) => setActive(id), []),
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('lock', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1280 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-out-expo ${
          scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-9 place-items-center border border-lime/70 text-[0.8rem] font-bold tracking-[-0.02em] text-paper transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
              {profile.initials}
            </span>
            <span className="text-[0.95rem] font-medium tracking-[-0.01em]">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`relative px-2.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors duration-300 hover:text-paper ${
                    active === item.id ? 'text-paper' : 'text-mute'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-2.5 -bottom-0.5 h-px bg-lime transition-transform duration-500 ease-out-expo ${
                      active === item.id ? 'scale-x-100' : 'scale-x-0'
                    } origin-left`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={links.resume}
              download={links.resumeFileName}
              className="hidden h-10 items-center gap-2 border border-lime px-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-lime transition-colors duration-300 hover:bg-lime hover:text-ink sm:inline-flex"
            >
              <Download className="size-3.5" />
              Download Resume
            </a>
            <button
              type="button"
              className="relative grid size-10 place-items-center border border-line-2 xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`absolute h-px w-4 bg-paper transition-transform duration-300 ease-out-expo ${open ? 'rotate-45' : '-translate-y-[4px]'}`}
              />
              <span
                className={`absolute h-px w-4 bg-paper transition-transform duration-300 ease-out-expo ${open ? '-rotate-45' : 'translate-y-[4px]'}`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink transition-[opacity,visibility] duration-500 ease-out-expo md:top-[4.5rem] xl:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-x relative flex min-h-full flex-col justify-between gap-10 py-8">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li
                key={item.id}
                className={`border-b border-line transition-[opacity,transform] duration-500 ease-out-expo ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${60 + i * 35}ms` : '0ms' }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-3.5 text-[clamp(1.75rem,7vw,2.6rem)] font-semibold uppercase tracking-[-0.03em] text-paper hover:text-lime"
                >
                  {item.label}
                  <span className="font-mono text-xs font-normal tracking-[0.12em] text-dim">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-5">
            <a
              href={links.resume}
              download={links.resumeFileName}
              className="inline-flex h-12 items-center justify-center gap-2 bg-lime font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-mute">
              <a className="inline-flex items-center gap-2 hover:text-paper" href={links.github} target="_blank" rel="noreferrer">
                <GitHub /> GitHub
              </a>
              <a className="inline-flex items-center gap-2 hover:text-paper" href={links.linkedin} target="_blank" rel="noreferrer">
                <LinkedIn /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 hover:text-paper" href={links.phoneHref}>
                <Phone /> {links.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
