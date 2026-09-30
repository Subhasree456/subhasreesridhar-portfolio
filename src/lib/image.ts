// Netlify Image CDN helpers. Falls back to the original file in plain Vite dev.
const useCdn = !import.meta.env.DEV

export function cdn(src: string, width: number, quality = 82) {
  if (!useCdn) return src
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=${quality}`
}

export function srcSet(src: string, widths: number[], quality?: number) {
  if (!useCdn) return undefined
  return widths.map((w) => `${cdn(src, w, quality)} ${w}w`).join(', ')
}
