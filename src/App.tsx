import React, { useState, useEffect } from 'react';
import { Language, ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringTrustStats } from './components/EngineeringTrustStats';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
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
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('app_lang') as Language | null;
        if (saved === 'en' || saved === 'sk' || saved === 'uk') {
          return saved;
        }
      } catch {
        // Ignore localStorage access issues
      }
    }
    return 'en';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('app_lang', lang);
    } catch {
      // Ignore localStorage access issues
    }
  };

  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('app_theme') as ThemeMode | null;
        if (saved === 'dark' || saved === 'light' || saved === 'blueprint') {
          return saved;
        }
      } catch {
        // Ignore localStorage access issues
      }
    }
    return 'blueprint';
  });

  const handleThemeChange = (theme: ThemeMode) => {
    setCurrentTheme(theme);
    try {
      localStorage.setItem('app_theme', theme);
    } catch {
      // Ignore localStorage access issues
    }
  };

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

  // Handle language tag on html root & dynamic SEO document title / meta description
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute('lang', currentLang);

    const seoMetadata: Record<Language, { title: string; description: string }> = {
      en: {
        title: 'Vitalii Dolynskyi — Mechanical & Industrial Design Engineer | 3D CAD & Machinery',
        description: 'Mechanical & industrial design engineer with 27+ years experience. Custom machine design, process piping, structural steel, 3D CAD modeling, and manufacturing drawings.'
      },
      sk: {
        title: 'Vitalii Dolynskyi — Strojný & Priemyselný Inžinier Konštruktér | 3D CAD Slovensko',
        description: 'Strojný a priemyselný inžinier-konštruktér s 27+ rokmi praxe. Konštrukcia strojov, potrubné rozvody, oceľové konštrukcie, 3D CAD a výrobná dokumentácia.'
      },
      uk: {
        title: 'Віталій Долінський — Механічний & Промисловий Інженер-Конструктор | 3D CAD & КД',
        description: 'Інженер-конструктор з 27+ роками досвіду. Проєктування машин, промислового обладнання, технологічних трубопроводів, 3D CAD моделювання та випуск робочих креслень.'
      }
    };

    const currentSeo = seoMetadata[currentLang] || seoMetadata.en;
    document.title = currentSeo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSeo.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSeo.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', currentSeo.description);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', currentSeo.title);
    }

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', currentSeo.description);
    }
  }, [currentLang]);

  // IntersectionObserver for active section highlight in navbar
  useEffect(() => {
    const sectionIds = ['skills', 'portfolio', 'process', 'about', 'education', 'contact'];
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
        onLanguageChange={handleLanguageChange}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
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

        {/* 2. Core Engineering Expertise (6 Domains & CAD Software Tools) */}
        <SkillsSection currentLang={currentLang} />

        {/* 3. Portfolio & Engineering Case Studies (JTBD Proof: Immediately show real work) */}
        <PortfolioSection 
          currentLang={currentLang} 
          onOpenBlueprintZoom={handleOpenBlueprintZoom}
          selectedProjectId={selectedProjectId}
          onSelectProject={setSelectedProjectId}
        />

        {/* 4. Engineering Workflow & Standards (5 Phases & Concrete Deliverables) */}
        <ProcessSection currentLang={currentLang} />

        {/* 5. About the Engineer (Philosophy, Experience & Pillars) */}
        <AboutSection 
          currentLang={currentLang} 
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 6. Academic Degrees & Higher Education Credentials */}
        <EducationSection currentLang={currentLang} />

        {/* 7. Direct Contact & Engineering Inquiry */}
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


