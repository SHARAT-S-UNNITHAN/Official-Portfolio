export type ProjectStatus = "Completed" | "In Development" | "Concept" | "Archived";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "Machine Learning" | "System Concept" | "Client Solution" | "Platform";
  featured: boolean;
  status: ProjectStatus;
  statusDescription?: string;
  overview: string;
  problemStatement: string;
  solution: string;
  role: string;
  technologies: string[];
  features: string[];
  metricsOrHighlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  accentColor?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  deliverables: string[];
  relevantProjects: string[];
  badge?: string;
}

export type SkillProficiency = "Working Knowledge" | "Familiar" | "Learning";

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
  icon?: string;
  note?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  period: string;
  admissionCycle?: string;
  status: "Completed" | "Currently pursuing";
  description: string;
  highlights: string[];
  location: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skillsAcquired: string[];
  summary: string;
  verified: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  businessAreas: string[];
  description: string;
  verifiedResponsibilities: string[];
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}
