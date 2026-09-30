import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/profile'
import { delay } from '../lib/delay'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeader index="05" label="Academics" id="education-title" title="Education" />

        <article className="reveal relative grid overflow-hidden border border-line bg-ink-2 lg:grid-cols-12">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative p-6 sm:p-10 lg:col-span-8 lg:p-14">
            <p className="label flex items-center gap-3">
              <span className="size-1.5 bg-lime" aria-hidden="true" />
              Undergraduate · {profile.duration}
            </p>
            <h3 className="mt-8 text-[clamp(2rem,4.6vw,3.9rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em]">
              B.Tech Computer Science
              <br />
              &amp; Engineering
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{profile.college}</p>
          </div>
          <dl className="relative grid grid-cols-2 border-t border-line lg:col-span-4 lg:grid-cols-1 lg:border-l lg:border-t-0">
            <div className="flex flex-col justify-between gap-6 border-r border-line p-6 sm:p-10 lg:border-b lg:border-r-0">
              <dt className="label">CGPA</dt>
              <dd
                className="reveal text-[clamp(3.2rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.05em] text-lime"
                style={delay(150)}
              >
                {profile.cgpa}
              </dd>
            </div>
            <div className="flex flex-col justify-between gap-6 p-6 sm:p-10">
              <dt className="label">Duration</dt>
              <dd className="font-mono text-lg text-paper sm:text-2xl">{profile.duration}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  )
}
