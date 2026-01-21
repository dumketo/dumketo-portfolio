export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string;
  image_full_url: string;
  link: string;
  sort_order: number;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
}

export interface Profile {
  id: number;
  name: string;
  title: string;
  tagline: string;
  phone: string;
  email: string;
  location: string;
  whatsapp: string;
  resume_url: string;
  resume_full_url: string;
  about: string;
  technical_expertise?: string;
  linkedin_url: string;
  facebook_url: string;
  turnstile_site_key?: string;
  image?: string;
  image_full_url?: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  experiences: ExperienceItem[];
}

export interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}