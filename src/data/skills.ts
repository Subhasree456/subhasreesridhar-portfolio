export type SkillGroup = { name: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  {
    name: 'Data Science',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis', 'Data Visualization', 'Predictive Analytics', 'Power BI'],
  },
  {
    name: 'AI / ML',
    skills: ['Machine Learning', 'Artificial Intelligence', 'NLP', 'Applied AI', 'Scikit-learn', 'OpenCV', 'Model Evaluation'],
  },
  {
    name: 'Programming',
    skills: ['Python', 'C++', 'SQL', 'HTML'],
  },
  {
    name: 'Cybersecurity',
    skills: ['Cybersecurity Fundamentals', 'Security Analysis', 'Attack Path Analysis', 'Network Security Basics', 'Linux Basics'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'MySQL', 'Flask'],
  },
]
