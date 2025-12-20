
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  category: 'Web Dev' | 'AI & ML' | 'Data Science' | 'Game Dev';
  isCurrent?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  type: 'achievement' | 'certification';
  researchUrl?: string;
}

export interface Activity {
  id: string;
  title: string;
  role: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Data & Big Data' | 'Operating System' | 'Framework' | 'Tool' | 'Currently Learning';
}
