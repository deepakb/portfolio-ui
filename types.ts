import type { IconType } from 'react-icons';

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Education {
    degree: string;
    institution: string;
    period?: string;
}

export interface Certification {
    name: string;
    issuer: string;
}