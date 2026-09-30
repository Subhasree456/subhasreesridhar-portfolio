# AGENTS.md

## Overview
Single-page personal portfolio (React + TypeScript + Vite + Tailwind v4), deployed on Netlify as a static site (`dist`).

## Layout
- `src/data/` — all personal content. Components never hardcode facts; edit data here.
- `src/sections/` — one component per page section (Hero, About, Experience, Projects, Skills, Education, Certifications, Contact).
- `src/components/` — shared UI: Navbar, Footer, ProjectCard, ProjectDetail (native `<dialog>` case-study view), Screenshot, SectionHeader, Button, Tag, Icons.
- `src/lib/` — `image.ts` (Netlify Image CDN URL helpers, bypassed in Vite dev), `useReveal.ts` (scroll reveal + active nav section), `delay.ts` (animation delay CSS var).
- `public/img/` — real photo and project screenshots supplied by the owner. `public/resume/` — the resume PDF.
- `public/__forms.html` — static skeleton so Netlify detects the `contact` form. The React form POSTs to `/__forms.html`. Keep field names in sync.

## Conventions
- Authenticity is a hard rule: never add internships, metrics, technologies, repo/demo URLs or certificates that the owner has not confirmed. Project "domains" are intentionally domains, not an invented tech stack. Project links currently point to the GitHub profile by request.
- Design tokens are in `src/index.css` `@theme` (ink/paper/mute/lime). Lime `#A8FF00` is an accent only — use sparingly.
- Square corners, hairline borders, mono uppercase labels (`.label`), large tight display type.
- Animations are CSS-only (`.reveal`, `.line-mask`, `.fade-in`, `.img-reveal`) and are disabled under `prefers-reduced-motion`.
- Case studies are deep-linkable at `#project/<slug>`.
