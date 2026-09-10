import React, { useState, useEffect, useRef } from 'react';
import { Language, ThemeMode } from '../types';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { Menu, X, Sun, Moon, Compass, Phone, FileText, ArrowUpRight, Mail } from 'lucide-react';

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
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key press & return focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'skills', label: currentLang === 'uk' ? 'Компетенції' : currentLang === 'sk' ? 'Zručnosti' : 'Skills', href: '#skills' },
    { id: 'process', label: UI_TRANSLATIONS.navProcess[currentLang], href: '#process' },
    { id: 'portfolio', label: UI_TRANSLATIONS.navProjects[currentLang], href: '#portfolio' },
    { id: 'workflow', label: UI_TRANSLATIONS.navHowIWork[currentLang], href: '#workflow' },
    { id: 'about', label: UI_TRANSLATIONS.navAbout[currentLang], href: '#about' },
    { id: 'education', label: currentLang === 'uk' ? 'Освіта' : currentLang === 'sk' ? 'Vzdelanie' : 'Education', href: '#education' },
    { id: 'contact', label: currentLang === 'uk' ? 'Контакти' : currentLang === 'sk' ? 'Kontakt' : 'Contact', href: '#contact' },
  ];

  const cycleTheme = () => {
    if (currentTheme === 'dark') onThemeChange('light');
    else if (currentTheme === 'light') onThemeChange('blueprint');
    else onThemeChange('dark');
  };

  const displayName = currentLang === 'uk' ? 'Віталій Долінський' : 'Vitalii Dolynskyi';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3.5 bg-[var(--bg-primary)]/92 backdrop-blur-xl border-b border-[var(--border-color)] shadow-xl'
          : 'py-3 sm:py-4.5 bg-[var(--bg-primary)]/75 backdrop-blur-md border-b border-[var(--border-color)]'
      }`}
    >
      <div className="w-full px-2.5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between gap-1.5 sm:gap-4">
        
        {/* Left Side: Brand Logo + Language Switcher + CAD Theme Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            href="#"
            className="flex items-center gap-2 group shrink-0"
            title={`${displayName} — Home`}
            aria-label={`${displayName} — Home`}
          >
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[var(--badge-bg)] border border-[var(--border-color)] group-hover:border-[var(--accent-blue)] flex items-center justify-center transition-all group-hover:scale-105 shadow-sm shrink-0">
              <span className="font-gost-mono text-xs sm:text-base font-black text-[var(--accent-blue)]">DV</span>
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-gost text-sm font-black text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-blue)] transition-colors">
                {displayName}
              </span>
              <span className="font-gost-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">
                Industrial CAD
              </span>
            </div>
          </a>

          {/* Language Switcher Pill (Equal height h-9 sm:h-10) */}
          <div className="h-9 sm:h-10 flex items-center bg-[var(--bg-surface-2)] p-0.5 sm:p-1 border border-[var(--border-color)] rounded-full shadow-sm shrink-0">
            {(['uk', 'sk', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`h-full flex items-center justify-center text-[11px] sm:text-xs font-bold tracking-wider px-2 sm:px-2.5 rounded-full transition-all uppercase cursor-pointer ${
                  currentLang === lang
                    ? 'bg-[var(--accent-blue)] text-white shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                aria-label={`Switch language to ${lang.toUpperCase()}`}
              >
                {lang === 'uk' ? 'УКР' : lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme switcher pill (Equal height h-9 sm:h-10) */}
          <button
            onClick={cycleTheme}
            title={`Current theme: ${currentTheme}. Click to switch.`}
            aria-label={`Toggle theme: current is ${currentTheme}`}
            className="h-9 sm:h-10 flex items-center justify-center px-2.5 sm:px-3 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] text-[var(--text-primary)] transition-all gap-1 sm:gap-1.5 cursor-pointer shadow-sm shrink-0"
          >
            {currentTheme === 'dark' && <Moon className="w-3.5 h-3.5 text-[var(--accent-blue)]" />}
            {currentTheme === 'light' && <Sun className="w-3.5 h-3.5 text-amber-600" />}
            {currentTheme === 'blueprint' && <Compass className="w-3.5 h-3.5 text-[#8f460a]" />}
            <span className="text-[11px] sm:text-xs uppercase font-gost-mono font-bold text-[var(--text-primary)]">
              {currentTheme === 'dark' ? 'Dark' : currentTheme === 'light' ? 'Light' : 'CAD'}
            </span>
          </button>
        </div>

        {/* Center: Desktop Navigation Bar (Visible on large desktop) */}
        <nav 
          aria-label="Main Navigation"
          className="hidden xl:flex items-center space-x-1"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-gost text-xs 2xl:text-sm font-bold uppercase tracking-wider px-3 py-2 rounded-full transition-all relative whitespace-nowrap ${
                activeSection === item.id
                  ? 'text-[var(--accent-blue)] bg-[var(--bg-surface-2)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-2)]/60'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-2 right-2 h-[2.5px] rounded-full bg-[var(--accent-blue)] shadow-[0_0_8px_var(--accent-blue)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Controls: Resume + Direct Call + Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Resume / CV PDF Trigger Button (Equal height h-9 sm:h-10) */}
          <button
            onClick={onOpenResume}
            className="h-9 sm:h-10 flex items-center justify-center gap-1.5 px-3 sm:px-4 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs sm:text-sm font-extrabold font-gost-mono uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-md cursor-pointer touch-target shrink-0"
            title="Generate & Download Engineering CV in PDF"
            aria-label={UI_TRANSLATIONS.navResume[currentLang]}
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{UI_TRANSLATIONS.navResume[currentLang]}</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Direct Call button on Desktop */}
          <a
            href={`tel:${CONTACT_DATA.phoneRaw}`}
            className="hidden 2xl:flex items-center gap-2 px-3.5 py-2 bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-primary)] text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            <span>{CONTACT_DATA.phone}</span>
          </a>

          {/* Mobile / Tablet Hamburger Button (Equal height h-9 sm:h-10) */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] text-[var(--text-primary)] cursor-pointer touch-target flex items-center justify-center transition-transform active:scale-95 shrink-0"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            ref={menuRef}
            id="mobile-navigation-drawer"
            className="absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-5 pt-5 pb-8 space-y-5 shadow-2xl safe-bottom"
          >
            {/* Quick Controls: Language & Theme */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-2xl bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
              {/* Language Segmented Control */}
              <div className="flex items-center justify-between sm:justify-start gap-1">
                <span className="font-gost-mono text-xs uppercase font-extrabold text-[var(--text-secondary)] mr-2">
                  {currentLang === 'uk' ? 'Мова:' : currentLang === 'sk' ? 'Jazyk:' : 'Lang:'}
                </span>
                <div className="flex bg-[var(--bg-surface-3)] p-1 rounded-xl border border-[var(--border-color)]">
                  {(['uk', 'sk', 'en'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => onLanguageChange(lang)}
                      className={`text-xs font-bold font-gost-mono px-3.5 py-2 rounded-lg transition-all uppercase touch-target flex items-center justify-center ${
                        currentLang === lang
                          ? 'bg-[var(--accent-blue)] text-white shadow-sm'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {lang === 'uk' ? 'UA' : lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Selector */}
              <div className="flex items-center justify-between sm:justify-end gap-1">
                <span className="font-gost-mono text-xs uppercase font-extrabold text-[var(--text-secondary)] mr-2">
                  {currentLang === 'uk' ? 'Тема:' : currentLang === 'sk' ? 'Téma:' : 'Theme:'}
                </span>
                <div className="flex bg-[var(--bg-surface-3)] p-1 rounded-xl border border-[var(--border-color)]">
                  {(['dark', 'light', 'blueprint'] as ThemeMode[]).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => onThemeChange(theme)}
                      className={`text-xs font-bold font-gost-mono px-3.5 py-2 rounded-lg transition-all uppercase touch-target flex items-center justify-center ${
                        currentTheme === theme
                          ? 'bg-[var(--accent-blue)] text-white shadow-sm'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'CAD'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links (Full List) */}
            <nav aria-label="Mobile Drawer Navigation" className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between font-gost text-base font-bold uppercase py-3 px-4 rounded-xl transition-colors min-h-[46px] ${
                    activeSection === item.id
                      ? 'border-l-4 border-[var(--accent-blue)] text-[var(--accent-blue)] bg-[var(--bg-surface-2)]'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface-2)]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </nav>

            {/* Primary Action Button: CV */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-base font-black font-gost-mono uppercase tracking-wider rounded-2xl shadow-lg cursor-pointer min-h-[48px] active:scale-[0.99] transition-all"
            >
              <FileText className="w-5 h-5" />
              <span>{UI_TRANSLATIONS.navResume[currentLang]} (PDF)</span>
            </button>

            {/* Direct Contact Links */}
            <div className="pt-3 border-t border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-mono font-bold">
              <a
                href={`tel:${CONTACT_DATA.phoneRaw}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-surface-2)] text-[var(--text-primary)] hover:text-[var(--accent-blue)] touch-target"
              >
                <Phone className="w-4 h-4 text-[var(--accent-blue)] flex-shrink-0" />
                <span className="truncate">{CONTACT_DATA.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-surface-2)] text-[var(--text-primary)] hover:text-[var(--accent-blue)] touch-target"
              >
                <Mail className="w-4 h-4 text-[var(--accent-blue)] flex-shrink-0" />
                <span className="truncate">{CONTACT_DATA.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
