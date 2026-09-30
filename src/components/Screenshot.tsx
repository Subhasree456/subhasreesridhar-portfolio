import type { Project } from '../data/projects'
import { cdn, srcSet } from '../lib/image'

type Props = {
  project: Project
  sizes: string
  eager?: boolean
  className?: string
}

// Real project screenshot inside a thin editorial frame. Always shown in full (no cropping).
export function Screenshot({ project, sizes, eager = false, className = '' }: Props) {
  const { image } = project
  const widths = [640, 960, image.width].filter((w, i, a) => w <= image.width && a.indexOf(w) === i)
  return (
    <span className={`block border border-line bg-ink-2 ${className}`}>
      <span className="flex items-center justify-between border-b border-line px-3 py-2.5 md:px-4">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">
          {project.number} / {project.title}
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-1.5 bg-line-2" />
          <span className="size-1.5 bg-line-2" />
          <span className="size-1.5 bg-lime/80" />
        </span>
      </span>
      <span className="block overflow-hidden">
        <img
          src={cdn(image.src, Math.min(1400, image.width), 90)}
          srcSet={srcSet(image.src, widths, 90)}
          sizes={sizes}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="block h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
        />
      </span>
    </span>
  )
}
