import { ArrowUpRight } from '../components/Icons'
import { SectionHeader } from '../components/SectionHeader'
import { certifications } from '../data/certifications'

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          index="06"
          label="Credentials"
          id="certifications-title"
          title="Certifications"
          aside={<p className="text-sm leading-relaxed">Certifications earned through internships and online learning platforms.</p>}
        />
        <ul className="reveal grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((c, i) => {
            const body = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.7rem] text-lime">{String(i + 1).padStart(2, '0')}</span>
                  <span className="label text-dim">{c.area}</span>
                </div>
                <h3 className="mt-10 text-[1.3rem] font-semibold leading-snug tracking-[-0.015em] text-paper md:mt-14">{c.title}</h3>
                <p className="mt-3 flex items-center justify-between gap-4 text-mute">
                  <span>
                    {c.issuer}
                    {c.year && <span className="text-dim"> · {c.year}</span>}
                  </span>
                  {c.url && (
                    <ArrowUpRight className="size-4 text-paper transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </p>
              </>
            )
            return (
              <li key={c.title} className="bg-ink">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full p-6 transition-colors duration-300 hover:bg-ink-3 md:p-8"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="h-full p-6 transition-colors duration-300 hover:bg-ink-3 md:p-8">{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
