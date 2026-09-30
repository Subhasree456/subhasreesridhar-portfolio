import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/profile'
import { delay } from '../lib/delay'

const facts = [
  { k: 'Name', v: profile.name, span: 'lg:col-span-2' },
  { k: 'Degree', v: profile.degree, span: 'lg:col-span-3' },
  { k: 'CGPA', v: profile.cgpa, span: 'lg:col-span-1' },
  { k: 'College', v: profile.college, span: 'lg:col-span-3' },
  { k: 'Focus', v: profile.focus, span: 'lg:col-span-3' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeader index="01" label="Executive Summary" id="about-title" title="About Me" />

        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7 md:col-start-4">
            <p className="reveal font-serif text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.15] text-paper">
              I'm Subhasree — a Computer Science &amp; Engineering student who enjoys turning ideas into{' '}
              <span className="italic text-lime">practical software</span>.
            </p>
            <div className="reveal mt-10 grid gap-6 text-[1.02rem] leading-[1.75] text-mute md:grid-cols-2 md:gap-10" style={delay(80)}>
              <p>
                I'm pursuing a B.Tech in Computer Science and Engineering at B.S. Abdur Rahman Crescent Institute of Science and Technology
                (2023 — 2027), where I currently hold a CGPA of <span className="text-paper">9.08</span>.
              </p>
              <p>
                My interests sit at the meeting point of <span className="text-paper">Data Science</span>,{' '}
                <span className="text-paper">Artificial Intelligence &amp; Machine Learning</span> and{' '}
                <span className="text-paper">Cybersecurity</span>. I like building solutions that combine data, intelligence and technology.
              </p>
              <p className="md:col-span-2">
                Most of what I've learned comes from building. My projects range from a system that maps how an attacker could move through
                a network, to an analytics experience for Spotify listening data, to a platform that turns student feedback into insight.
                I'm drawn to real-world problems where a well-built tool makes the next decision clearer.
              </p>
            </div>
          </div>

          <aside aria-label="Quick facts" className="reveal md:col-span-12 lg:col-span-9 lg:col-start-4" style={delay(120)}>
            <dl className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-6">
              {facts.map((f) => (
                <div key={f.k} className={`border-b border-line py-5 sm:pr-6 ${f.span}`}>
                  <dt className="label text-dim">{f.k}</dt>
                  <dd className={`mt-2 ${f.k === 'CGPA' ? 'text-2xl font-semibold tracking-tight text-lime' : 'text-paper'}`}>{f.v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
