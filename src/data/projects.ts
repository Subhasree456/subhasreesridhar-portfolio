import { links } from './profile'

export type Project = {
  slug: string
  number: string
  title: string
  category: string
  summary: string
  overview: string
  problem: string
  approach: string
  features: string[]
  // Only confirmed technologies/domains are listed here.
  domains: string[]
  image: { src: string; width: number; height: number; alt: string }
  links: { github: string; githubLabel: string; live?: string }
}

export const projects: Project[] = [
  {
    slug: 'attackpathai',
    number: '01',
    title: 'AttackPathAI',
    category: 'Cybersecurity · AI',
    summary:
      'A cybersecurity-focused system that analyses relationships between assets, vulnerabilities and potential attack paths, helping users understand how an attacker could move through a system.',
    overview:
      'AttackPathAI is a security command center built around a simple idea: individual vulnerabilities matter most in the context of what they connect to. It maps assets, weaknesses and entry points into multi-hop attack paths and presents the overall security posture in one place.',
    problem:
      'Vulnerability lists on their own rarely show which weaknesses actually chain together into a route from the internet to a critical system. Without that context it is hard to know what to fix first.',
    approach:
      'Model the environment as connected assets and vulnerabilities, compute the reachable attack paths across network hops, and surface the highest-priority route with a plain-language explanation of why it matters. The analysis is simulation-only — no active attacks are executed.',
    features: [
      'Security overview with an environment-level contextual risk score',
      'Reachable multi-hop attack paths with severity ranking',
      'Identification of critical “crown jewel” assets at risk',
      'Exploitable weaknesses with CVSS severity',
      'Internet-facing ingress gateway tracking',
      'Top-priority threat path with a “why this matters” explanation',
      'Attack graph, path breaker, fix simulation and AI analyst modules',
    ],
    domains: ['Cybersecurity', 'Attack Path Analysis', 'Vulnerability Analysis', 'Graph-Based Risk Modelling', 'Applied AI'],
    image: {
      src: '/img/attackpathai.png',
      width: 1351,
      height: 643,
      alt: 'AttackPathAI security overview dashboard showing a contextual risk score of 77, six reachable attack paths, one crown jewel at risk and the top-priority threat path from the internet to the database.',
    },
    links: { github: links.github, githubLabel: 'GitHub Profile' },
  },
  {
    slug: 'listening-lens',
    number: '02',
    title: 'Listening Lens',
    category: 'Data Science · AI · Analytics',
    summary:
      'A Spotify-focused analytics experience that transforms listening data into meaningful visual insights and helps users understand their listening patterns.',
    overview:
      'Listening Lens turns Spotify listening history into an interactive listening profile — a “music DNA” — with trends, insights and explainable predictions. It is designed to be private by design, so users can explore their own data without handing over a password.',
    problem:
      'Streaming platforms collect rich listening data, but most people only see it once a year in a summary. There is little room to explore your own patterns — when you listen, how varied your taste is, or what you tend to replay.',
    approach:
      'Take the user’s listening history, analyse it for behavioural patterns, and present the results as clear visual scores and trends. Users can connect Spotify with minimal permissions, upload their exported history, or explore with demo data first.',
    features: [
      'Music DNA profile with Discovery, Diversity and Replay scores',
      'Next likely genre prediction',
      'Peak listening time insight',
      'Dashboard, Insights and Prediction views',
      'Connect Spotify or upload Spotify listening history',
      'Demo data mode for exploring without an account',
      'Privacy-first: no Spotify password, minimal permissions, local-first analysis',
    ],
    domains: ['Data Science', 'Data Analytics', 'Data Visualization', 'Predictive Analytics', 'Behaviour Analytics'],
    image: {
      src: '/img/listening-lens.png',
      width: 1057,
      height: 495,
      alt: 'Listening Lens landing page with the headline “Your listening. Your patterns.” and a music DNA preview card showing Discovery 82, Diversity 67 and Replay 74 scores.',
    },
    links: { github: links.github, githubLabel: 'GitHub Profile' },
  },
  {
    slug: 'edureview-ai',
    number: '03',
    title: 'EduReview AI',
    category: 'AI · Education · Data',
    summary: 'An AI-focused educational feedback analysis platform designed to turn student feedback into useful insights.',
    overview:
      'EduReview AI is an AI learning studio with a dedicated teacher workspace. It brings courses, assignments and student feedback together, and uses an AI pipeline to help teachers see what needs attention next.',
    problem:
      'Teachers collect a lot of student feedback and work, but turning it into clear next steps takes time. Useful signals — such as where learners are struggling — can get lost across courses and assignments.',
    approach:
      'Organise the teacher’s work into one workspace, pass feedback through an AI pipeline, and present the results as review queues, analytics and learning gaps so the next action for a class is easy to find.',
    features: [
      'Teacher workspace with an overview of what needs review',
      'Course and assignment organisation',
      'Analytics view for class-level insight',
      'Learning gaps module to highlight where learners struggle',
      'AI pipeline with live provider status',
      'Suggested next steps for the class',
    ],
    domains: ['Artificial Intelligence', 'Education Technology', 'Feedback Analysis', 'Data Analytics'],
    image: {
      src: '/img/edureview-ai.png',
      width: 1003,
      height: 709,
      alt: 'EduReview AI teacher workspace with navigation for Overview, Platform, Courses, Assignments, Analytics and Learning gaps, and an AI pipeline status panel.',
    },
    links: { github: links.github, githubLabel: 'GitHub Profile' },
  },
]
