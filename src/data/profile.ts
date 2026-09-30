// Single source of truth for personal details and links.
// Update values here and every section of the site picks them up.

export const profile = {
  name: 'Subhasree Sridhar',
  firstName: 'Subhasree',
  lastName: 'Sridhar',
  initials: 'SS',
  positioning: ['Data Science', 'AI/ML', 'Cybersecurity'],
  tagline: 'Building practical systems where data, intelligence and security come together.',
  location: 'Chennai, Tamil Nadu',
  degree: 'B.Tech Computer Science & Engineering',
  college: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
  collegeShort: 'Crescent Institute',
  duration: '2023 — 2027',
  cgpa: '9.08',
  focus: 'Data Science · AI/ML · Cybersecurity',
  photo: '/img/subhasree-sridhar.jpg',
  photoWidth: 1122,
  photoHeight: 1402,
}

export const links = {
  github: 'https://github.com/Subhasree456',
  githubHandle: 'Subhasree456',
  linkedin: 'https://www.linkedin.com/in/subhasree-sridhar-37204b339',
  linkedinHandle: 'subhasree-sridhar',
  phoneDisplay: '+91 95000 82375',
  phoneHref: 'tel:+919500082375',
  email: 'subhasreesridhar3@gmail.com',
  // Replace the file in /public/resume to update the downloadable resume.
  resume: '/resume/Subhasree-Sridhar-Resume.pdf',
  resumeFileName: 'Subhasree-Sridhar-Resume.pdf',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const
