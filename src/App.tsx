import React, { useState, useEffect } from 'react';
import { Language, ThemeMode, TextSize, BlueprintMediaItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Sections 01-05 are collapsed on first load, so they are loaded on demand
const SkillsSection = React.lazy(() =>
  import('./components/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const PortfolioSection = React.lazy(() =>
  import('./components/PortfolioSection').then((m) => ({ default: m.PortfolioSection }))
);
const AboutSection = React.lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const EducationSection = React.lazy(() =>
  import('./components/EducationSection').then((m) => ({ default: m.EducationSection }))
);
const ContactSection = React.lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);

const SectionFallback = () => (
  <div
    role="status"
    aria-live="polite"
    className="w-full py-16 flex justify-center font-gost-mono text-sm uppercase tracking-widest text-[var(--text-secondary)]"
  >
    Loading…
  </div>
);

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
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang') as Language | null;
        if (urlLang === 'en' || urlLang === 'sk' || urlLang === 'uk') {
          return urlLang;
        }
        const sessionLang = sessionStorage.getItem('app_lang') as Language | null;
        if (sessionLang === 'en' || sessionLang === 'sk' || sessionLang === 'uk') {
          return sessionLang;
        }
      } catch {
        // Ignore storage access issues
      }
    }
    return 'en';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      sessionStorage.setItem('app_lang', lang);
      localStorage.setItem('app_lang', lang);
    } catch {
      // Ignore storage access issues
    }
  };

  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlTheme = urlParams.get('theme') as ThemeMode | null;
        if (urlTheme === 'navy' || urlTheme === 'dark' || urlTheme === 'light' || urlTheme === 'blueprint') {
          return urlTheme;
        }
        const sessionTheme = sessionStorage.getItem('app_theme') as ThemeMode | null;
        if (sessionTheme === 'navy' || sessionTheme === 'dark' || sessionTheme === 'light' || sessionTheme === 'blueprint') {
          return sessionTheme;
        }
      } catch {
        // Ignore storage access issues
      }
    }
    return 'navy';
  });

  const handleThemeChange = (theme: ThemeMode) => {
    setCurrentTheme(theme);
    try {
      sessionStorage.setItem('app_theme', theme);
      localStorage.setItem('app_theme', theme);
    } catch {
      // Ignore storage access issues
    }
  };

  const [textSize, setTextSize] = useState<TextSize>(() => {
    if (typeof document !== 'undefined') {
      const attr = document.documentElement.getAttribute('data-text-size');
      if (attr === 'compact' || attr === 'comfortable' || attr === 'large') return attr;
    }
    return 'comfortable';
  });

  const handleTextSizeChange = (size: TextSize) => {
    setTextSize(size);
    document.documentElement.setAttribute('data-text-size', size);
    try {
      localStorage.setItem('app_text_size', size);
    } catch {
      // Ignore storage access issues
    }
  };

  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Squeeze-page navigation: sections 01–05 are collapsed; the header menu expands one at a time
  const [openSection, setOpenSection] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const handleNavigate = (sectionId: string) => {
    if (openSection === sectionId) {
      setOpenSection(null); // second click collapses
    } else {
      setOpenSection(sectionId);
      scrollToSection(sectionId);
    }
  };

  // In-page links like href="#contact" (buttons inside sections / modals) open the collapsed section first
  useEffect(() => {
    const SECTION_IDS = ['skills', 'portfolio', 'about', 'education', 'contact'];
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a || e.defaultPrevented || a.closest('header')) return; // header menu has its own toggle logic
      const id = (a.getAttribute('href') || '').slice(1);
      if (!SECTION_IDS.includes(id)) return;
      e.preventDefault();
      setOpenSection(id);
      scrollToSection(id);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const handleSelectProject = (projectId: string | null) => {
    setSelectedProjectId(projectId);
    if (projectId) {
      setOpenSection('portfolio');
      scrollToSection('portfolio');
    }
  };
  
  // State for Blueprint Deep-Zoom Modal
  const [blueprintModal, setBlueprintModal] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    mediaList?: BlueprintMediaItem[];
    initialIndex?: number;
    projectTitle?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: ''
  });

  const handleOpenBlueprintZoom = (
    imageUrl: string, 
    title: string,
    mediaList?: BlueprintMediaItem[],
    initialIndex?: number,
    projectTitle?: string
  ) => {
    setBlueprintModal({
      isOpen: true,
      imageUrl,
      title,
      mediaList,
      initialIndex,
      projectTitle
    });
  };

  const handleCloseBlueprintZoom = () => {
    setBlueprintModal(prev => ({ ...prev, isOpen: false }));
  };

  // Handle theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const colorScheme = currentTheme === 'light' || currentTheme === 'blueprint' ? 'light' : 'dark';
    document.documentElement.style.colorScheme = colorScheme;

    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', colorScheme);
    }

    const themeColors: Record<ThemeMode, string> = {
      navy: '#0d1117',
      dark: '#080808',
      light: '#f1f4f9',
      blueprint: '#efe2c8'
    };
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColors[currentTheme] || '#0d1117');
    }
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

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors duration-300 flex flex-col overflow-x-clip selection:bg-[var(--accent-blue)] selection:text-[#0e1118] ${openSection ? '' : 'lg:h-dvh lg:min-h-0 lg:overflow-y-auto'}`}>
      {/* Top Fixed Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        currentTextSize={textSize}
        onTextSizeChange={handleTextSizeChange}
        activeSection={openSection ?? 'hero'}
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area: Squeeze Page Architecture */}
      <main className="flex-grow flex flex-col lg:min-h-0">
        {/* 1. Hero: Positioning, CTAs & Swapped Portrait */}
        <Hero 
          fitScreen={!openSection}
          currentLang={currentLang} 
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Sections 01–05: collapsed by default, expanded from the header menu (one at a time) */}
        {openSection && (
          <div key={openSection} className="w-full animate-slideUp border-t border-[var(--border-color)]">
            <React.Suspense fallback={<SectionFallback />}>
            {openSection === 'skills' && (
              <div id="skills" className="scroll-mt-28">
                <SkillsSection currentLang={currentLang} />
              </div>
            )}
            {openSection === 'portfolio' && (
              <div id="portfolio" className="scroll-mt-28">
                <PortfolioSection
                  currentLang={currentLang}
                  onOpenBlueprintZoom={handleOpenBlueprintZoom}
                  selectedProjectId={selectedProjectId}
                  onSelectProject={handleSelectProject}
                />
              </div>
            )}
            {openSection === 'about' && (
              <div id="about" className="scroll-mt-28">
                <AboutSection
                  currentLang={currentLang}
                  onOpenResume={() => setIsResumeOpen(true)}
                />
              </div>
            )}
            {openSection === 'education' && (
              <div id="education" className="scroll-mt-28">
                <EducationSection currentLang={currentLang} />
              </div>
            )}
            {openSection === 'contact' && (
              <div id="contact" className="scroll-mt-28">
                <ContactSection
                  currentLang={currentLang}
                  onOpenResume={() => setIsResumeOpen(true)}
                />
              </div>
            )}

            </React.Suspense>

            {/* Collapse bar */}
            <div className="w-full px-4 py-5 flex justify-center bg-[var(--bg-surface-2)]/60 border-t border-[var(--border-color)]">
              <button
                onClick={() => setOpenSection(null)}
                className="px-5 py-2 rounded-full text-xs sm:text-sm font-gost-mono font-bold uppercase tracking-wider bg-[var(--badge-bg)] text-[var(--accent-blue)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-colors cursor-pointer"
              >
                {currentLang === 'uk' ? 'Згорнути розділ ▲' : currentLang === 'sk' ? 'Zbaliť sekciu ▲' : 'Collapse section ▲'}
              </button>
            </div>
          </div>
        )}
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
            mediaList={blueprintModal.mediaList}
            initialIndex={blueprintModal.initialIndex}
            projectTitle={blueprintModal.projectTitle}
          />
        )}
      </React.Suspense>
    </div>
  );
}


