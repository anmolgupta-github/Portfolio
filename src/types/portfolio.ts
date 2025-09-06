export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'data' | 'game' | 'other';
  featured: boolean;
  completedAt: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools' | 'coursework';
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  description: string;
}