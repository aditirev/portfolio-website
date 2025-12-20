
import { Project, Skill, Achievement, Activity } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ocr-system',
    title: 'Handwritten Text Recognition System',
    description: 'Current final year project focusing on OCR using CNN to recognize handwritten text accurately.',
    tags: ['CNN', 'Deep Learning', 'Python'],
    category: 'AI & ML',
    isCurrent: true
  },
  {
    id: 'mun-website',
    title: 'MUN Club Website',
    description: 'Designed and built the official website for the Model United Nations club to manage delegates and content.',
    tags: ['Web Development', 'UI/UX', 'MUN'],
    demoUrl: 'https://rnsitmun.vercel.app/',
    category: 'Web Dev'
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing data science and engineering projects.',
    tags: ['React', 'Tailwind CSS', 'Portfolio'],
    githubUrl: 'https://github.com/aditirev',
    category: 'Web Dev'
  },
  {
    id: 'enlightera-website',
    title: 'Enlightera Club Website',
    description: 'Developing a platform for the literature club to publish articles and manage literary events.',
    tags: ['Web Dev', 'CMS', 'Literature'],
    demoUrl: '#',
    category: 'Web Dev'
  },
  {
    id: 'safe-mail',
    title: 'Safe Mail',
    description: 'Intelligent Fraud Email Detection Tool tested on the Enron dataset using Random Forest and NLP.',
    tags: ['Random Forest', 'NLP', 'Scikit-learn'],
    githubUrl: 'https://github.com/aditirev/safe-mail',
    demoUrl: 'https://safemail-rneh.onrender.com',
    category: 'AI & ML'
  },
  {
    id: 'insight-tube',
    title: 'InsightTube',
    description: 'A system that extracts YouTube comments, analyzes sentiment, and provides graphical reports.',
    tags: ['Python', 'Sentiment Analysis', 'Web'],
    githubUrl: 'https://github.com/aditirev/insight-tube',
    demoUrl: 'https://yt-check.onrender.com',
    category: 'AI & ML'
  },
  {
    id: 'neon-flames',
    title: 'NeonFlames',
    description: 'Calming drawing tool developed for a hackathon, allowing users to draw nebula structures.',
    tags: ['HTML5', 'CSS3', 'Canvas'],
    githubUrl: 'https://github.com/aditirev/neonflames',
    demoUrl: 'https://neonflames.netlify.app/',
    category: 'Web Dev'
  },
  {
    id: 'password-toolkit',
    title: 'Password Toolkit',
    description: 'A suite of tools for password strength checking and security auditing.',
    tags: ['Security', 'JavaScript', 'Logic'],
    githubUrl: 'https://github.com/aditirev/password-toolkit',
    category: 'Web Dev'
  },
  {
    id: 'pixel-battle',
    title: 'Pixel Battle',
    description: 'Real-time competitive game featuring image processing and interactive mechanics.',
    tags: ['Game Dev', 'Real-time', 'Interaction'],
    githubUrl: 'https://github.com/aditirev/pixel-battle',
    demoUrl: 'https://pixel-battle01.onrender.com',
    category: 'Game Dev'
  },
  {
    id: 'logic-grid',
    title: 'Logic Grid',
    description: 'Grid-based puzzle game challenging users with logical deduction and pattern matching.',
    tags: ['Game Logic', 'Puzzles', 'Web'],
    githubUrl: 'https://github.com/aditirev/logic-grid',
    demoUrl: 'https://logic-grid1.netlify.app/',
    category: 'Game Dev'
  },
  {
    id: 'titanic-analysis',
    title: 'Data Visualization (Titanic)',
    description: 'Statistical analysis and visualization of the Titanic dataset to uncover demographic survival patterns.',
    tags: ['Pandas', 'Matplotlib', 'Tableau'],
    githubUrl: 'https://github.com/aditirev/Titanic-Dataset-Statistical-Analysis',
    category: 'Data Science'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'R', category: 'Language' },
  { name: 'MongoDB', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'HTML5', category: 'Language' },
  { name: 'CSS3', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'PowerBI', category: 'Data & Big Data' },
  { name: 'Tableau', category: 'Data & Big Data' },
  { name: 'Hadoop', category: 'Data & Big Data' },
  { name: 'Pig', category: 'Data & Big Data' },
  { name: 'Windows', category: 'Operating System' },
  { name: 'Linux', category: 'Operating System' },
  { name: 'Streamlit', category: 'Framework' },
  { name: 'Vercel', category: 'Framework' },
  { name: 'Scikit-learn', category: 'Framework' },
  { name: 'Visual Studio Code', category: 'Tool' },
  { name: 'Git', category: 'Tool' },
  { name: 'Jupyter Notebook', category: 'Tool' },
  { name: 'Microsoft Office', category: 'Tool' },
  { name: 'TypeScript', category: 'Currently Learning' },
  { name: 'REACT', category: 'Currently Learning' }
];

export const ACHIEVEMENTS_DATA = {
  achievements: [
    {
      category: "Hackathons and Competitions",
      items: [
        "Social Summer of Code Online Hackathon",
        "NoCode Hackathon by Bosch at BMS College",
        "PM's Mentoring Yuva Scheme by MyGov India - Writing Competition"
      ]
    },
    {
      category: "Seminars",
      items: [
        "Conducted a Firebase workshop for juniors, featuring a guest speaker, a senior developer from Rupeezy"
      ]
    },
    {
      category: "Published Researcher",
      items: [
        "International Journal - Wrote a research paper titled, 'Divine Healing', published in the book 'Luminaire' on the Garden City University website. ISSN: 2249-2542."
      ],
      researchUrl: "/research-paper.pdf"
    }
  ],
  certifications: [
    { title: "Sahitya Certification", issuer: "United Latino Students Association" },
    { title: "NPTEL - Data Science for Engineers", issuer: "IIT Madras / NPTEL" },
    { title: "Google Developer Student Club", issuer: "DevTown" },
    { title: "Infosys Springboard Certificates", issuer: "Infosys" }
  ]
};

export const ACTIVITIES_LIST: Activity[] = [
  {
    id: 'act1',
    title: 'Esponica and C.O.D.E',
    role: 'Event Manager - Design and Technical',
    description: 'Clubs of Data Science. Managing technical events and organizing workshops. Worked on the department magazine as well.'
  },
  {
    id: 'act2',
    title: 'Enlightera',
    role: 'Writer and Member',
    description: 'Literature club of RNSIT. Active participant in writing projects and literary discussions.'
  },
  {
    id: 'act3',
    title: 'MUN',
    role: 'Content Writer and Delegate',
    description: 'Model United Nations Club. Built a website for the club and represented the institution as a delegate.'
  },
  {
    id: 'act4',
    title: 'Music',
    role: 'Creative Pursuit',
    description: 'Exploring various musical styles and personal artistic expression.'
  },
  {
    id: 'act5',
    title: 'Reading & Creative Writing',
    role: 'Interest',
    description: 'Passionate about creative storytelling and continuous learning through books.'
  },
  {
    id: 'act6',
    title: 'Public Speaking',
    role: 'Communication',
    description: 'Developing articulation and leadership through public addresses and seminars.'
  },
  {
    id: 'act7',
    title: 'Sports',
    role: 'Athletics',
    description: 'Participation in physical wellness activities and competitive team sports.'
  }
];
