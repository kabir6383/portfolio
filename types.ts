
export interface Project {
  title: string;
  category: string;
  description: string;
  icon: string;
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
  category: 'Programming' | 'Web' | 'Engineering' | 'IoT' | 'Learning';
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
}
