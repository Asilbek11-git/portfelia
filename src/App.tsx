import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { EditContactModal } from './components/EditContactModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectItem, ContactInfo, Language } from './types';
import { initialContactInfo } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('ao_theme');
    return saved !== null ? saved === 'dark' : true; // Default dark mode matching design blueprint
  });

  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('ao_lang') as Language;
    return saved === 'uz' ? 'uz' : 'en';
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('ao_contact_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialContactInfo;
      }
    }
    return initialContactInfo;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isEditContactOpen, setIsEditContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('ao_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('ao_lang', lang);
  }, [lang]);

  const handleSaveContact = (updated: ContactInfo) => {
    setContactInfo(updated);
    localStorage.setItem('ao_contact_info', JSON.stringify(updated));
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDark ? 'bg-[#09090b] text-[#f4f4f5]' : 'bg-[#fafafa] text-[#18181b]'
      }`}
    >
      {/* Top Bar Navigation */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {/* 1. Hero / Home */}
        <Hero
          contactInfo={contactInfo}
          lang={lang}
          isDark={isDark}
          onOpenEditContact={() => setIsEditContactOpen(true)}
        />

        {/* 2. Marquee Ticker */}
        <TechTicker />

        {/* 3. Selected Projects & Live GitHub */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          lang={lang}
          isDark={isDark}
        />

        {/* 4. About & Mindset & Services */}
        <About lang={lang} isDark={isDark} />

        {/* 5. Skills & Tech Stack */}
        <TechStack lang={lang} isDark={isDark} />

        {/* 6. Experience & Projects */}
        <Experience lang={lang} isDark={isDark} />

        {/* 7. Contact & Message Discussion */}
        <Contact
          contactInfo={contactInfo}
          onOpenEditContact={() => setIsEditContactOpen(true)}
          lang={lang}
          isDark={isDark}
        />
      </main>

      {/* Footer */}
      <Footer contactInfo={contactInfo} lang={lang} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
        lang={lang}
      />

      <EditContactModal
        isOpen={isEditContactOpen}
        onClose={() => setIsEditContactOpen(false)}
        contactInfo={contactInfo}
        onSave={handleSaveContact}
        isDark={isDark}
        lang={lang}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        contactInfo={contactInfo}
        isDark={isDark}
        lang={lang}
      />
    </div>
  );
}
