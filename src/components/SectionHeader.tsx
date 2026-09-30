import type { ReactNode } from 'react'

type Props = {
  index: string
  label: string
  title: ReactNode
  id?: string
  aside?: ReactNode
}

export function SectionHeader({ index, label, title, id, aside }: Props) {
  return (
    <header className="reveal mb-14 grid gap-6 border-t border-line pt-6 md:mb-20 md:grid-cols-12 md:gap-10">
      <p className="label flex items-center gap-3 md:col-span-3">
        <span className="text-lime">({index})</span>
        <span>{label}</span>
      </p>
      <div className="md:col-span-9">
        <h2
          id={id}
          className="text-[clamp(2.3rem,6.4vw,5.5rem)] break-words font-semibold uppercase leading-[0.9] tracking-[-0.035em] text-paper"
        >
          {title}
        </h2>
        {aside && <div className="mt-6 max-w-md text-mute">{aside}</div>}
      </div>
    </header>
  )
}
