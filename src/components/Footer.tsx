import { links, navItems, profile } from '../data/profile'
import { ArrowUpRight } from './Icons'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="grid size-9 place-items-center border border-lime/70 text-[0.8rem] font-bold">{profile.initials}</span>
            <span className="font-medium">{profile.name}</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
            B.Tech CSE student at {profile.collegeShort}, working across {profile.focus}.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-4">
          <p className="label text-dim">Sections</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="link-underline text-mute hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="label text-dim">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-mute hover:text-paper"
              >
                GitHub <ArrowUpRight className="size-3.5" />
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-mute hover:text-paper"
              >
                LinkedIn <ArrowUpRight className="size-3.5" />
              </a>
            </li>
            <li>
              <a href={links.phoneHref} className="text-mute hover:text-paper">
                {links.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={links.resume} download={links.resumeFileName} className="text-mute hover:text-paper">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col justify-between gap-3 py-6 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#home" className="hover:text-paper">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
