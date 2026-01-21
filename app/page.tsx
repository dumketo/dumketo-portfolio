import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { getPortfolioData } from '@/lib/api';

export default async function Home() {
  const { profile, skills, projects, experiences } = await getPortfolioData();

  return (
    <main className="bg-slate-900 min-h-screen">
      <Navbar />
      <div>
        <Hero profile={profile} />
        <Skills skills={skills} profile={profile} />
        <Portfolio projects={projects} />
        <Experience experiences={experiences} />
        <Contact profile={profile} />
      </div>
      <Footer profile={profile} />
      <WhatsAppFloat whatsapp={profile?.whatsapp} />
    </main>
  );
}
