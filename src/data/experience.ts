export type TimelineEntry = {
  period?: string
  title: string
  org: string
  kind: string
  points?: string[]
}

export const education: TimelineEntry = {
  period: '2023 — 2027',
  title: 'B.Tech Computer Science & Engineering',
  org: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
  kind: 'Education',
  points: ['Current CGPA: 9.08 / 10.'],
}

// Internship details as listed on the resume. Leave `period` out when the dates are not confirmed.
export const internships: TimelineEntry[] = [
  {
    period: 'Jan 2026 — Feb 2026',
    title: 'Data Science Intern',
    org: 'NSP Nexus',
    kind: 'Internship',
    points: [
      'Worked on data preprocessing, exploratory data analysis and visualization using Python.',
      'Assisted in developing machine learning models and preparing analytical reports.',
    ],
  },
  {
    title: 'Software Developer Intern',
    org: 'Zilogic Systems',
    kind: 'Internship',
  },
  {
    period: 'Jun 2025 — Jul 2025',
    title: 'Cyber Security Intern',
    org: 'SkillForge E-Learning Solutions Pvt Ltd',
    kind: 'Internship',
    points: [
      'Learned cyber security fundamentals and ethical hacking concepts using Kali Linux.',
      'Performed basic vulnerability scanning and network security analysis tasks.',
    ],
  },
]

export const projectExperience = {
  title: 'Project-Based Experience',
  summary:
    'Alongside coursework and internships, I build independent academic and personal projects. Each one starts from a concrete question and ends as working software I can demo and explain.',
  areas: [
    { name: 'Data Science', note: 'Cleaning, exploring and visualising data to surface patterns.' },
    { name: 'AI / ML', note: 'Applying machine learning and AI to practical, well-scoped problems.' },
    { name: 'Cybersecurity', note: 'Modelling assets, vulnerabilities and how attacks could move.' },
    { name: 'Data-Driven Apps', note: 'Turning analysis into interfaces people can actually use.' },
  ],
}
