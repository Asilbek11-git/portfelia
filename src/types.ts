export type Language = 'en' | 'uz';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'django' | 'telegram' | 'api' | 'all';
  githubUrl: string;
  description: {
    en: string;
    uz: string;
  };
  technologies: string[];
  keyFeatures: {
    en: string[];
    uz: string[];
  };
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface SkillCategory {
  title: {
    en: string;
    uz: string;
  };
  skills: {
    name: string;
    role: string;
  }[];
}

export interface ServiceArea {
  number: string;
  title: {
    en: string;
    uz: string;
  };
  description: {
    en: string;
    uz: string;
  };
  iconName: string;
}

export interface ExperienceItem {
  period: string;
  title: {
    en: string;
    uz: string;
  };
  focus: {
    en: string;
    uz: string;
  };
  description: {
    en: string;
    uz: string;
  };
  deliverables: {
    en: string[];
    uz: string[];
  };
}

export interface ContactInfo {
  telegram: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}
