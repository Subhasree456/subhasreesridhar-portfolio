import { useEffect, useRef, type ReactNode } from 'react'
import { projects, type Project } from '../data/projects'
import { buttonClass } from './Button'
import { ArrowRight, ArrowUpRight, Close, GitHub } from './Icons'
import { Screenshot } from './Screenshot'
import { Tag } from './Tag'

type Props = {
  project: Project | null
  onClose: () => void
  onOpen: (slug: string) => void
}

function Block({ label, index, children }: { label: string; index: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-10 md:py-10">
      <h3 className="label flex gap-3 md:col-span-3">
        <span className="text-lime">{index}</span>
        {label}
      </h3>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}

export function ProjectDetail({ project, onClose, onOpen }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) {
      dialog.showModal()
      document.body.classList.add('lock')
    }
    if (!project && dialog.open) {
      dialog.close()
    }
    if (project) dialog.scrollTo({ top: 0 })
  }, [project])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onDialogClose = () => {
      document.body.classList.remove('lock')
      onClose()
    }
    dialog.addEventListener('close', onDialogClose)
    return () => dialog.removeEventListener('close', onDialogClose)
  }, [onClose])

  const next = project ? projects[(projects.indexOf(project) + 1) % projects.length] : null

  return (
    <dialog
      ref={ref}
      aria-labelledby="detail-title"
      className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto bg-ink p-0 text-paper backdrop:bg-ink/90 open:animate-[overlay-in_0.5s_cubic-bezier(0.16,1,0.3,1)]"
    >
      {project && (
        <div className="relative min-h-full">
          <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[70vh]" aria-hidden="true" />

          <div className="sticky top-0 z-10 border-b border-line bg-ink/85 backdrop-blur-xl">
            <div className="container-x flex h-16 items-center justify-between gap-4">
              <p className="label truncate">
                <span className="text-lime">Case Study {project.number}</span>
                <span className="hidden sm:inline"> — {project.category}</span>
              </p>
              <button
                type="button"
                onClick={() => ref.current?.close()}
                className="inline-flex h-10 items-center gap-2 border border-line-2 px-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                autoFocus
              >
                Close <Close className="size-4" />
              </button>
            </div>
          </div>

          <article className="container-x relative pb-20 pt-12 md:pt-16">
            <header className="grid gap-6 md:grid-cols-12 md:gap-10">
              <p className="text-[clamp(4rem,10vw,8rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-paper/15 md:col-span-3">
                {project.number}
              </p>
              <div className="md:col-span-9">
                <p className="label text-lime">{project.category}</p>
                <h2
                  id="detail-title"
                  className="mt-4 break-words text-[clamp(2.5rem,8vw,6.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.05em]"
                >
                  {project.title}
                </h2>
                <p className="mt-6 max-w-3xl font-serif text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.25] text-paper/90">
                  {project.summary}
                </p>
              </div>
            </header>

            <figure className="mt-12 md:mt-16">
              <Screenshot project={project} sizes="(min-width: 1408px) 1328px, 94vw" eager />
              <figcaption className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-dim">
                Screenshot — {project.title}
              </figcaption>
            </figure>

            <div className="mt-14">
              <Block index="01" label="Project Overview">
                <p className="max-w-3xl text-[1.05rem] leading-[1.75] text-mute">{project.overview}</p>
              </Block>
              <Block index="02" label="Problem">
                <p className="max-w-3xl text-[1.05rem] leading-[1.75] text-mute">{project.problem}</p>
              </Block>
              <Block index="03" label="Approach">
                <p className="max-w-3xl text-[1.05rem] leading-[1.75] text-mute">{project.approach}</p>
              </Block>
              <Block index="04" label="Key Features">
                <ul className="grid gap-px bg-line sm:grid-cols-2">
                  {project.features.map((f, i) => (
                    <li key={f} className="flex gap-4 bg-ink p-5">
                      <span className="font-mono text-[0.7rem] text-lime">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-paper/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block index="05" label="Technologies / Domain">
                <ul className="flex flex-wrap gap-2">
                  {project.domains.map((d) => (
                    <Tag key={d}>{d}</Tag>
                  ))}
                </ul>
              </Block>
              <Block index="06" label="Links">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={project.links.github} target="_blank" rel="noreferrer" className={buttonClass('primary')}>
                    <GitHub /> {project.links.githubLabel} <ArrowUpRight />
                  </a>
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className={buttonClass('outline')}>
                      Live Demo <ArrowUpRight />
                    </a>
                  )}
                </div>
              </Block>
            </div>

            {next && next.slug !== project.slug && (
              <button
                type="button"
                onClick={() => onOpen(next.slug)}
                className="group mt-10 flex w-full items-end justify-between gap-6 border-t border-line pt-8 text-left"
              >
                <span>
                  <span className="label block text-dim">Next project</span>
                  <span className="mt-3 block text-[clamp(2rem,5vw,4rem)] font-semibold uppercase leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-lime">
                    {next.title}
                  </span>
                </span>
                <ArrowRight className="mb-2 size-8 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-2" />
              </button>
            )}
          </article>
        </div>
      )}
    </dialog>
  )
}
