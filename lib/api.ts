import { PortfolioData } from '@/types';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE } from '@/constants';

export async function getPortfolioData() {
  try {
    const res = await fetch('http://localhost:8000/api/portfolio', {
      cache: 'no-store', // Always fetch fresh data for now
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('API Fetch failed, falling back to constants:', error);
    return {
      profile: PERSONAL_INFO,
      skills: SKILLS,
      projects: PROJECTS,
      experiences: EXPERIENCE
    };
  }
}
