import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'group inline-flex items-center justify-center gap-2.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-[background-color,color,border-color,transform] duration-300 ease-out-expo active:translate-y-px whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary: 'h-12 px-6 bg-lime text-ink hover:bg-paper',
  outline: 'h-12 px-6 border border-line-2 text-paper hover:border-paper hover:bg-paper hover:text-ink',
  ghost: 'h-12 px-2 text-paper hover:text-lime',
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  icon?: ReactNode
  children: ReactNode
}

export function ButtonLink({ variant = 'outline', icon, children, className = '', ...rest }: Props) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </a>
  )
}

export const buttonClass = (variant: Variant = 'outline') => `${base} ${variants[variant]}`
