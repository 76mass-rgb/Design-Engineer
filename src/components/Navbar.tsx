import React, { useState, useEffect } from 'react';
import { Language, ThemeMode } from '../types';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { Menu, X, Sun, Moon, Compass, Phone, FileText } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  activeSection: string;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeChange,
  activeSection,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'process', label: UI_TRANSLATIONS.navProcess[currentLang], href: '#process' },
    { id: 'portfolio', label: UI_TRANSLATIONS.navProjects[currentLang], href: '#portfolio' },
    { id: 'workflow', label: UI_TRANSLATIONS.navHowIWork[currentLang], href: '#workflow' },
    { id: 'about', label: UI_TRANSLATIONS.navAbout[currentLang], href: '#about' },
  ];

  const cycleTheme = () => {
    if (currentTheme === 'dark') onThemeChange('light');
    else if (currentTheme === 'light') onThemeChange('blueprint');
    else onThemeChange('dark');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-color)] shadow-xl'
          : 'py-5 bg-[var(--bg-primary)]/60 backdrop-blur-md border-b border-[var(--border-color)]'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between">
        {/* Left Side: Logo & Direct Controls (Language & Theme) as indicated on diagram */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <a
            href="#"
            className="flex items-center group"
            title={currentLang === 'uk' ? 'Віталій Долінський — Головна' : 'Vitalii Dolynskyi — Home'}
            aria-label={currentLang === 'uk' ? 'Віталій Долінський — Головна' : 'Vitalii Dolynskyi — Home'}
          >
            <div className="w-10 h-10 rounded-full bg-[var(--badge-bg)] border border-[var(--border-color)] group-hover:border-[var(--accent-blue)] flex items-center justify-center transition-all group-hover:scale-105 shadow-sm">
              <span className="font-gost-mono text-base font-black text-[var(--accent-blue)]">DV</span>
            </div>
          </a>

          {/* Language Switcher Pill */}
          <div className="flex bg-[var(--bg-surface-2)] p-1 border border-[var(--border-color)] rounded-full shadow-sm">
            {(['uk', 'sk', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`text-xs sm:text-sm font-bold tracking-wider px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all uppercase cursor-pointer ${
                  currentLang === lang
                    ? 'bg-[var(--accent-blue)] text-white shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {lang === 'uk' ? 'УКР' : lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme switcher pill */}
          <button
            onClick={cycleTheme}
            title={`Current theme: ${currentTheme}. Click to cycle.`}
            className="p-1.5 sm:p-2 px-2 sm:px-3.5 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] text-[var(--text-primary)] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm"
          >
            {currentTheme === 'dark' && <Moon className="w-4 h-4 text-[var(--accent-blue)]" />}
            {currentTheme === 'light' && <Sun className="w-4 h-4 text-amber-600" />}
            {currentTheme === 'blueprint' && <Compass className="w-4 h-4 text-[#8f460a]" />}
            <span className="text-xs sm:text-sm uppercase font-gost-mono font-bold text-[var(--text-primary)] hidden sm:inline">
              {currentTheme === 'dark' ? 'Dark' : currentTheme === 'light' ? 'Light' : 'CAD'}
            </span>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-gost text-base font-bold uppercase tracking-[0.12em] transition-all duration-200 relative py-1 ${
                activeSection === item.id
                  ? 'text-[var(--text-primary)] font-black opacity-100'
                  : 'text-[var(--text-secondary)] opacity-85 hover:opacity-100 hover:text-[var(--text-primary)]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-[var(--accent-blue)] shadow-[0_0_8px_var(--accent-blue)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Controls: Resume + Direct Call + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume / CV PDF Trigger Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs sm:text-sm font-extrabold font-gost-mono uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-md cursor-pointer"
            title="Generate & Download Engineering CV in PDF"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">{UI_TRANSLATIONS.navResume[currentLang]}</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Direct Call button */}
          <a
            href={`tel:${CONTACT_DATA.phoneRaw}`}
            className="hidden xl:flex items-center gap-2 px-4 py-2.5 bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-primary)] text-sm font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[var(--accent-blue)]" />
            <span>{CONTACT_DATA.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-[var(--bg-surface-2)] border border-[var(--border-color)] text-[var(--text-primary)] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-5 pt-4 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-gost text-base font-bold uppercase py-2.5 px-3.5 border-l-3 transition-colors ${
                activeSection === item.id
                  ? 'border-[var(--accent-blue)] text-[var(--accent-blue)] bg-[var(--bg-surface-2)]'
                  : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[var(--accent-blue)] text-white text-sm font-bold font-gost-mono uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
          >
            <FileText className="w-4.5 h-4.5" />
            <span>{UI_TRANSLATIONS.navResume[currentLang]} (PDF)</span>
          </button>

          <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="flex items-center gap-2 text-[var(--accent-blue)] font-mono text-sm font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_DATA.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>{CONTACT_DATA.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
