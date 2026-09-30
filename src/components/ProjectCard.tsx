import type { Project } from '../data/projects'
import { buttonClass } from './Button'
import { ArrowRight, ArrowUpRight, GitHub } from './Icons'
import { Screenshot } from './Screenshot'
import { Tag } from './Tag'

type Props = { project: Project; index: number; onOpen: (slug: string) => void }

export function ProjectCard({ project, index, onOpen }: Props) {
  const flip = index % 2 === 1
  return (
    <article
      aria-labelledby={`project-${project.slug}-title`}
      className="reveal grid gap-8 border-t border-line pt-8 lg:grid-cols-12 lg:gap-12 lg:pt-12"
    >
      <button
        type="button"
        onClick={() => onOpen(project.slug)}
        className={`group relative block text-left lg:col-span-8 ${flip ? 'lg:order-2' : ''}`}
        aria-label={`Open ${project.title} case study`}
      >
        <Screenshot
          project={project}
          sizes="(min-width: 1024px) 60vw, 94vw"
          className="transition-colors duration-500 group-hover:border-line-2"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-paper px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100 max-lg:hidden lg:translate-y-2">
          View case study <ArrowUpRight className="size-3.5" />
        </span>
      </button>

      <div className={`flex flex-col lg:col-span-4 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.05em] text-paper/15">
            {project.number}
          </span>
          <span className="label text-lime">{project.category}</span>
        </div>
        <h3
          id={`project-${project.slug}-title`}
          className="mt-6 text-[clamp(2rem,3.6vw,3rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em]"
        >
          {project.title}
        </h3>
        <p className="mt-5 leading-relaxed text-mute">{project.summary}</p>

        <p className="label mt-8 text-dim">Key features</p>
        <ul className="mt-3 space-y-2 text-[0.94rem] text-paper/90">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-[0.7em] h-px w-3 shrink-0 bg-lime/70" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <p className="label mt-8 text-dim">Domain</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.domains.slice(0, 4).map((d) => (
            <Tag key={d}>{d}</Tag>
          ))}
        </ul>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:flex-col lg:pt-9 xl:flex-row">
          <button type="button" onClick={() => onOpen(project.slug)} className={`${buttonClass('primary')} flex-1`}>
            Case Study <ArrowRight />
          </button>
          <a href={project.links.github} target="_blank" rel="noreferrer" className={`${buttonClass('outline')} flex-1`}>
            <GitHub /> GitHub
          </a>
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className={`${buttonClass('outline')} flex-1`}>
              Live Demo <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
