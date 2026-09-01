import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { ConnectWithMe } from './components/ConnectWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionMappings: { [key: string]: string } = {
        home: 'home',
        about: 'about',
        skills: 'skills',
        achievements: 'skills',
        projects: 'projects',
        certifications: 'certifications',
        connect: 'certifications',
        contact: 'contact',
      };

      const sectionIds = Object.keys(sectionMappings);
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionMappings[id]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1128] text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-300 relative overflow-x-hidden">
      {/* Dynamic Background Noise / Starry Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px]" />
      </div>

      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        {/* 1. Hero Section */}
        <Hero
          onViewProjects={() => scrollTo('projects')}
          onContactMe={() => scrollTo('contact')}
          onDownloadResume={() => setResumeModalOpen(true)}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Achievements Section */}
        <Achievements />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Certifications Section */}
        <Certifications />

        {/* 7. Connect With Me Section */}
        <ConnectWithMe />

        {/* 8. Contact Me Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable & Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
