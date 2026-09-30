# Subhasree Sridhar — Portfolio

Personal portfolio for Subhasree Sridhar, a B.Tech Computer Science & Engineering student (B.S. Abdur Rahman Crescent Institute of Science and Technology, 2023 — 2027) focused on Data Science, AI/ML and Cybersecurity.

The site is a single-page portfolio with Hero, About, Experience, Projects (with full case-study views), Skills, Education, Certifications and Contact sections, plus a downloadable resume.

## Stack

- React 19 + TypeScript, bundled with Vite
- Tailwind CSS v4
- Self-hosted fonts via Fontsource (Inter Tight, Instrument Serif, JetBrains Mono)
- Netlify Forms for the contact form
- Netlify Image CDN for responsive WebP images

## Run locally

```bash
npm install
netlify dev   # recommended: emulates Netlify Forms and the Image CDN
# or
npm run dev   # plain Vite; images fall back to the original files
```

## Editing content

All content lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, degree, CGPA, phone, email, GitHub, LinkedIn, resume path |
| `experience.ts` | Education and internship timeline, project-based experience |
| `projects.ts` | The three case studies (text, features, domains, screenshot, links) |
| `skills.ts` | Skill groups |
| `certifications.ts` | Certifications (optional `year` and `url` render when filled in) |

To add a live demo or repository link for a project, set `links.live` or `links.github` in `projects.ts`.
To update the resume, replace `public/resume/Subhasree-Sridhar-Resume.pdf`.

Contact form submissions appear in the Netlify dashboard under **Forms → contact**.
