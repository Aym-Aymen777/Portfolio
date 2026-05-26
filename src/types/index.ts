export type SkillCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'tools';

export interface Skill {
  icon: string;
  name: string;
  level: number; // 1-5
  category: Exclude<SkillCategory, 'all'>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyId?: string;
}

export interface TimelineStep {
  label: string;
  value: string;
}

export interface DetailBlock {
  icon: string;
  title: string;
  content: string | string[];
}

export interface CaseStudy {
  id: string;
  label: string;
  timeline: TimelineStep[];
  details: DetailBlock[];
}

export interface ExperienceItem {
  period: string;
  duration: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface BlogPost {
  num: string;
  category: string;
  title: string;
  excerpt?: string;
  meta: string;
  featured?: boolean;
}

export interface CertItem {
  icon: string;
  name: string;
  issuer: string;
  date: string;
}

export interface ContentItem {
  platform: 'github' | 'yt' | 'tt';
  platformLabel: string;
  title: string;
  meta: string;
  stat: string;
}
