/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  category: 'AI & ML' | 'Full Stack' | 'Academic & Hacks';
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  impactHighlight?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExtracurricularItem {
  id: string;
  title: string;
  role?: string;
  duration: string;
  bullets: string[];
  tags: string[];
  githubUrl?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
