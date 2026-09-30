import type { CSSProperties } from 'react'

// Sets the `--d` custom property used by the CSS reveal animations.
export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties
