import { ButtonLink } from '../components/Button'
import { ArrowDown, ArrowRight, Download, GitHub, LinkedIn, Phone } from '../components/Icons'
import { links, profile } from '../data/profile'
import { delay } from '../lib/delay'
import { cdn, srcSet } from '../lib/image'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="container-x">
        <div className="fade-in flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4" style={delay(100)}>
          <p className="label">Portfolio · {new Date().getFullYear()}</p>
          <p className="label hidden sm:block">{profile.location}, India</p>
          <p className="label flex items-center gap-2">
            <span className="size-1.5 bg-lime" aria-hidden="true" />
            Open to opportunities
          </p>
        </div>

        <div className="grid gap-10 pb-14 pt-10 md:pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-14">
          <div className="flex flex-col lg:col-span-7">
            <h1
              id="hero-title"
              className="text-[clamp(3.3rem,14.5vw,6.8rem)] font-bold uppercase leading-[0.84] tracking-[-0.055em] lg:text-[clamp(4.5rem,8vw,8rem)]"
            >
              <span className="line-mask">
                <span style={delay(150)}>{profile.firstName}</span>
              </span>
              <span className="line-mask">
                <span style={delay(260)} className="text-paper/90">
                  {profile.lastName}
                  <span className="text-lime">.</span>
                </span>
              </span>
            </h1>

            <p
              className="fade-in mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.78rem] uppercase tracking-[0.16em] text-paper md:text-sm"
              style={delay(500)}
            >
              {profile.positioning.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="text-lime" aria-hidden="true">
                      ×
                    </span>
                  )}
                  {p}
                </span>
              ))}
            </p>

            <p className="fade-in mt-6 max-w-xl font-serif text-[1.6rem] leading-[1.2] text-paper/90 md:text-[2.1rem]" style={delay(600)}>
              Building practical systems where <em className="text-paper">data</em>, <em className="text-paper">intelligence</em> and{' '}
              <em className="text-paper">security</em> come together.
            </p>

            <p className="fade-in mt-5 max-w-lg text-[0.98rem] leading-relaxed text-mute" style={delay(680)}>
              I'm a Computer Science &amp; Engineering student at {profile.collegeShort}, turning ideas into working software across data
              analytics, applied AI and security.
            </p>

            <div className="fade-in mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={delay(760)}>
              <ButtonLink href="#projects" variant="primary" icon={<ArrowDown />}>
                View My Work
              </ButtonLink>
              <ButtonLink href="#about" variant="outline" icon={<ArrowRight />}>
                About Me
              </ButtonLink>
              <ButtonLink href={links.resume} download={links.resumeFileName} variant="outline" icon={<Download />}>
                Download Resume
              </ButtonLink>
            </div>

            <ul className="fade-in mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-mute" style={delay(840)}>
              <li>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub /> <span className="link-underline">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn /> <span className="link-underline">LinkedIn</span>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 transition-colors hover:text-paper" href={links.phoneHref}>
                  <Phone /> <span className="link-underline">{links.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>

          <figure className="relative max-lg:order-first lg:col-span-5 lg:pl-4">
            <div
              className="img-reveal relative aspect-square w-full overflow-hidden border border-line bg-ink-3 sm:max-lg:aspect-[16/11] lg:aspect-[4/5]"
              style={delay(300)}
            >
              <img
                src={cdn(profile.photo, 900)}
                srcSet={srcSet(profile.photo, [600, 900, 1122])}
                sizes="(min-width: 1024px) 38vw, 92vw"
                width={profile.photoWidth}
                height={profile.photoHeight}
                alt="Portrait of Subhasree Sridhar, a Computer Science and Engineering student, wearing a pink collared shirt."
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[50%_25%]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
              <span className="absolute left-3 top-3 size-3 border-l border-t border-ink/60" aria-hidden="true" />
              <span className="absolute right-3 top-3 size-3 border-r border-t border-ink/60" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-paper">
                  Subhasree Sridhar
                  <br />
                  <span className="text-paper/70">B.Tech CSE · {profile.duration}</span>
                </p>
                <p className="bg-lime px-2 py-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink">CGPA {profile.cgpa}</p>
              </div>
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-dim">
              <span>Fig. 01 — Portrait</span>
              <span>{profile.collegeShort}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="border-y border-line">
        <dl className="container-x grid grid-cols-2 gap-px bg-line px-0 md:grid-cols-4 md:px-0">
          {[
            ['Who', 'CSE student, Crescent'],
            ['What', 'Data · AI/ML · Security'],
            ['Builds', 'Practical, working software'],
            ['Based', profile.location],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink px-5 py-5 md:px-8">
              <dt className="label text-dim">{k}</dt>
              <dd className="mt-1.5 text-[0.95rem] text-paper">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
