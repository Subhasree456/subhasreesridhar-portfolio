export function Tag({ children }: { children: string }) {
  return (
    <li className="border border-line-2 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-paper/85 transition-colors duration-300 hover:border-lime hover:text-lime">
      {children}
    </li>
  )
}
