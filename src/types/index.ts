export type SkillCategory = 'all' | 'languages' | 'frontend' | 'backend' | 'architecture' | 'leadership' | 'tools';
export type ServiceCategory = 'all' | 'websites' | 'commerce' | 'apps' | 'backend' | 'ops' | 'growth' | 'support';

export interface Skill {
  icon: string;
  name: string;
  level: number; // 0-100
  category: Exclude<SkillCategory, 'all'>;
  summary: string;
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
  image?: string;
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
  price: string;
  category: Exclude<ServiceCategory, 'all'>;
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
  platform: 'github' | 'linkdin' | 'tt';
  platformLabel: string;
  title: string;
  meta: string;
  stat: string;
}
