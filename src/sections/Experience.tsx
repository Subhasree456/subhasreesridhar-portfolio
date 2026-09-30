import { SectionHeader } from '../components/SectionHeader'
import { education, internships, projectExperience, type TimelineEntry } from '../data/experience'

function Entry({ entry, highlight = false }: { entry: TimelineEntry; highlight?: boolean }) {
  return (
    <li className="reveal relative grid gap-3 border-b border-line py-8 pl-8 md:grid-cols-[1fr_3fr] md:gap-0 md:pl-0">
      <span
        className={`absolute left-0 top-[2.45rem] size-2.5 -translate-x-[4.5px] md:left-[25%] md:-translate-x-[5px] ${highlight ? 'bg-lime' : 'border border-paper/60 bg-ink'}`}
        aria-hidden="true"
      />
      <div className="md:pr-8">
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-paper">{entry.period ?? entry.kind}</p>
        {entry.period && <p className="label mt-1 text-dim">{entry.kind}</p>}
      </div>
      <div className="md:pl-10">
        <h3 className="text-[1.45rem] font-semibold leading-tight tracking-[-0.02em] text-paper md:text-[1.75rem]">{entry.title}</h3>
        <p className="mt-1.5 text-mute">{entry.org}</p>
        {entry.points && (
          <ul className="mt-4 space-y-2 text-[0.96rem] leading-relaxed text-mute">
            {entry.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-lime/70" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="Journey"
          id="experience-title"
          title="Experience"
          aside={<p className="text-sm leading-relaxed">Education, internships and the project work that ties them together.</p>}
        />

        <div className="relative">
          <span className="absolute bottom-0 left-0 top-0 w-px bg-line md:left-[25%]" aria-hidden="true" />
          <ol className="border-t border-line">
            <Entry entry={education} highlight />
            {internships.map((e) => (
              <Entry key={e.org} entry={e} />
            ))}
          </ol>

          <div className="reveal relative grid gap-8 py-12 pl-8 md:grid-cols-[1fr_3fr] md:gap-0 md:pl-0">
            <span
              className="absolute left-0 top-[3.6rem] size-2.5 -translate-x-[4.5px] bg-lime md:left-[25%] md:-translate-x-[5px]"
              aria-hidden="true"
            />
            <div className="md:pr-8">
              <p className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-paper">Ongoing</p>
              <p className="label mt-1 text-dim">Independent work</p>
            </div>
            <div className="md:pl-10">
              <h3 className="text-[1.45rem] font-semibold uppercase leading-tight tracking-[-0.02em] text-paper md:text-[1.75rem]">
                {projectExperience.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-mute">{projectExperience.summary}</p>
              <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
                {projectExperience.areas.map((a, i) => (
                  <li key={a.name} className="bg-ink p-5 transition-colors duration-300 hover:bg-ink-3">
                    <p className="font-mono text-[0.7rem] text-lime">0{i + 1}</p>
                    <p className="mt-6 font-medium text-paper">{a.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{a.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
