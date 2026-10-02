
export type SkillLevel = 'beginner' | 'average' | 'above average' | 'good' | 'expert';

export interface Project {
  title: string;
  category: string;
  description: string;
  icon: string;
  githubUrl?: string;
  demoUrl?: string;
  extendedDetails?: {
    overview: string;
    technicalDeepDive: string;
    milestone?: string;
    skills: string[];
  };
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
  level: SkillLevel;
  kind: 'technical' | 'soft';
  proficiency?: number;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  duration?: string;
  completionDate?: string;
  description: string;
  location?: string;
  tags?: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  category: string;
  date?: string;
  description: string;
  score?: string;
  highlight?: string;
  icon: string;
  badgeColor?: string;
  tags?: string[];
}


