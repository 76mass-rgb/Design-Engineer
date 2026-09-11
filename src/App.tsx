import React, { useState, useEffect } from 'react';
import { Language, ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringTrustStats } from './components/EngineeringTrustStats';
import { SkillsSection } from './components/SkillsSection';
import { ConceptToRealitySection } from './components/ConceptToRealitySection';
import { PortfolioSection } from './components/PortfolioSection';
import { HowIWorkSection } from './components/HowIWorkSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const ResumeModal = React.lazy(() =>
  import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal }))
);
const BlueprintViewerModal = React.lazy(() =>
  import('./components/BlueprintViewerModal').then((m) => ({ default: m.BlueprintViewerModal }))
);

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('uk');
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('blueprint');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectProject = (projectId: string | null) => {
    setSelectedProjectId(projectId);
    if (projectId) {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  // State for Blueprint Deep-Zoom Modal
  const [blueprintModal, setBlueprintModal] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: ''
  });

  const handleOpenBlueprintZoom = (imageUrl: string, title: string) => {
    setBlueprintModal({
      isOpen: true,
      imageUrl,
      title
    });
  };

  const handleCloseBlueprintZoom = () => {
    setBlueprintModal(prev => ({ ...prev, isOpen: false }));
  };

  // Handle theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Handle language tag on html root
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute('lang', currentLang);
  }, [currentLang]);

  // IntersectionObserver for active section highlight in navbar
  useEffect(() => {
    const sectionIds = ['skills', 'process', 'portfolio', 'workflow', 'about', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors duration-300 flex flex-col selection:bg-[var(--accent-blue)] selection:text-[#0e1118]">
      {/* Top Fixed Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero: Positioning & Immediate CTA */}
        <Hero 
          currentLang={currentLang} 
          onOpenResume={() => setIsResumeOpen(true)}
        />
        
        {/* Verified Scale & Enterprise Track Record Bar */}
        <EngineeringTrustStats currentLang={currentLang} />

        {/* 2. Core Engineering Expertise (6 Domains & Software Logic) */}
        <SkillsSection currentLang={currentLang} />

        {/* 3. Methodology & Engineering Standards (5-Phase Lifecycle) */}
        <ConceptToRealitySection 
          currentLang={currentLang} 
        />

        {/* 4. Portfolio & Engineering Case Studies */}
        <PortfolioSection 
          currentLang={currentLang} 
          onOpenBlueprintZoom={handleOpenBlueprintZoom}
          selectedProjectId={selectedProjectId}
          onSelectProject={setSelectedProjectId}
        />

        {/* 5. How I Work (5 Phases & Structured Deliverables) */}
        <HowIWorkSection currentLang={currentLang} />

        {/* 6. About the Engineer (Philosophy, Experience & Pillars) */}
        <AboutSection 
          currentLang={currentLang} 
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 7. Academic Degrees & Higher Education Credentials */}
        <EducationSection currentLang={currentLang} />

        {/* 8. Direct Contact & Engineering Inquiry */}
        <ContactSection 
          currentLang={currentLang} 
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Technical Engineering Footer */}
      <Footer currentLang={currentLang} />

      {/* Multi-language PDF Resume / CV Modal */}
      <React.Suspense fallback={null}>
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
            defaultLang={currentLang}
          />
        )}

        {/* High-Resolution Deep-Zoom Blueprint Viewer */}
        {blueprintModal.isOpen && (
          <BlueprintViewerModal
            isOpen={blueprintModal.isOpen}
            onClose={handleCloseBlueprintZoom}
            imageUrl={blueprintModal.imageUrl}
            title={blueprintModal.title}
            currentLang={currentLang}
          />
        )}
      </React.Suspense>
    </div>
  );
}


