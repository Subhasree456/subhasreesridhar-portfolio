import { SectionHeader } from '../components/SectionHeader'
import { Tag } from '../components/Tag'
import { skillGroups } from '../data/skills'
import { delay } from '../lib/delay'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          index="04"
          label="Toolkit"
          id="skills-title"
          title="Skills"
          aside={<p className="text-sm leading-relaxed">The languages, libraries and areas I work with, grouped by discipline.</p>}
        />
        <ul className="border-b border-line">
          {skillGroups.map((g, i) => (
            <li
              key={g.name}
              className="reveal group grid gap-5 border-t border-line py-7 transition-colors duration-500 md:grid-cols-12 md:gap-10 md:py-9"
              style={delay(i * 50)}
            >
              <div className="flex items-baseline gap-4 md:col-span-3">
                <span className="font-mono text-[0.7rem] text-dim transition-colors duration-300 group-hover:text-lime">0{i + 1}</span>
                <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] md:text-2xl">{g.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 md:col-span-9" aria-label={`${g.name} skills`}>
                {g.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
