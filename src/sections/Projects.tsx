import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/projects'

export function Projects({ onOpen }: { onOpen: (slug: string) => void }) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          index="03"
          label="Case Studies"
          id="projects-title"
          title={
            <>
              Selected
              <br />
              Projects
            </>
          }
          aside={
            <p className="text-sm leading-relaxed">
              Three projects across cybersecurity, data analytics and education. Open any one for the full case study.
            </p>
          }
        />
        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}
