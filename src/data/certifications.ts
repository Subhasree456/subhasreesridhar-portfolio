// Certifications as listed on the resume.
// Optional fields (`year`, `url`) render only when filled in.
export type Certification = {
  title: string
  issuer: string
  area: string
  year?: string
  url?: string
}

export const certifications: Certification[] = [
  { title: 'Data Science Internship Certification', issuer: 'NSP Nexus', area: 'Data Science' },
  { title: 'Cyber Security Internship Certification', issuer: 'SkillForge', area: 'Cybersecurity' },
  { title: 'Cyber Security Certification', issuer: 'Simplilearn', area: 'Cybersecurity' },
  { title: 'Data Analysis & Visualization Projects', issuer: 'CodeChef', area: 'Data Analysis' },
  { title: 'C++ Problem Solving', issuer: 'CodeChef', area: 'Programming' },
  { title: 'HTML Certification', issuer: 'Simplilearn', area: 'Web' },
]
