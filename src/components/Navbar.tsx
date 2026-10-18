import React, { useState, useEffect, useRef } from 'react';
import { Language, ThemeMode, TextSize } from '../types';
import { TextSizePopover, TextSizeSegmented } from './TextSizeControl';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { Menu, X, Sun, Moon, Compass, Phone, FileText, ArrowUpRight, Mail, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  currentTextSize: TextSize;
  onTextSizeChange: (size: TextSize) => void;
  activeSection: string;
  onOpenResume: () => void;
  onNavigate?: (sectionId: string) => void;
  showSectionNav?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeChange,
  currentTextSize,
  onTextSizeChange,
  activeSection,
  onOpenResume,
  onNavigate,
  showSectionNav = true,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const [drawerLangOpen, setDrawerLangOpen] = useState(false);

  // Close language dropdown on outside click / Escape
  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

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

  const navItems = !showSectionNav ? [] : [
    { id: 'skills', label: UI_TRANSLATIONS.navSkills[currentLang], href: '#skills' },
    { id: 'portfolio', label: UI_TRANSLATIONS.navProjects[currentLang], href: '#portfolio' },
    { id: 'about', label: UI_TRANSLATIONS.navAbout[currentLang], href: '#about' },
    { id: 'education', label: UI_TRANSLATIONS.navEducation[currentLang], href: '#education' },
    { id: 'contact', label: UI_TRANSLATIONS.navContact[currentLang], href: '#contact' },
  ];

  const cycleTheme = () => {
    if (currentTheme === 'navy') onThemeChange('dark');
    else if (currentTheme === 'dark') onThemeChange('blueprint');
    else if (currentTheme === 'blueprint') onThemeChange('light');
    else onThemeChange('navy');
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayName = currentLang === 'uk' ? 'Віталій Долінський' : 'Vitalii Dolynskyi';

  return (
    <header
      style={{ backgroundColor: scrolled ? 'var(--bg-nav-scrolled)' : 'var(--bg-nav)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-300 border-b border-[var(--border-color)] ${
        scrolled
          ? 'py-2.5 sm:py-3.5 backdrop-blur-xl shadow-xl'
          : 'py-3 sm:py-4.5 backdrop-blur-md'
      }`}
    >
      <div className="w-full px-2.5 sm:px-6 md:px-8 lg:px-6 xl:px-10 min-[1700px]:px-16 flex items-center justify-between gap-1.5 sm:gap-4 lg:gap-3">
        
        {/* Left Side: Brand Logo + Language Switcher + CAD Theme Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Hamburger Button (left edge, mobile / tablet) (Equal height h-9 sm:h-10) */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1200px]:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] text-[var(--text-primary)] cursor-pointer touch-target flex items-center justify-center transition-transform active:scale-95 shrink-0"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          {/* Language dropdown */}
          <div ref={langRef} className="relative shrink-0">
            <button
              onClick={() => setLangOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
              className="h-9 sm:h-10 flex items-center gap-1 px-3 rounded-full bg-emerald-900/90 border border-emerald-400/60 text-emerald-50 text-xs sm:text-xs font-bold tracking-wider uppercase cursor-pointer shadow-sm"
            >
              {currentLang === 'uk' ? 'УКР' : currentLang.toUpperCase()}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute left-0 top-full mt-2 w-24 flex flex-col gap-0.5 p-1 rounded-2xl bg-emerald-900 border border-emerald-400/60 shadow-xl z-[60]"
              >
                {(['en', 'sk', 'uk'] as Language[]).map((lang) => (
                  <li key={lang} role="option" aria-selected={currentLang === lang}>
                    <button
                      onClick={() => {
                        onLanguageChange(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full h-9 flex items-center justify-center rounded-full text-xs font-bold tracking-wider uppercase cursor-pointer transition-colors ${
                        currentLang === lang
                          ? 'bg-[#851d1d] border border-red-500/40 text-white'
                          : 'text-emerald-100 hover:text-white hover:bg-emerald-800/50'
                      }`}
                    >
                      {lang === 'uk' ? 'УКР' : lang.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Theme switcher pill (Equal height h-9 sm:h-10) */}
          <button
            onClick={cycleTheme}
            title={`Current theme: ${currentTheme}. Click to switch.`}
            aria-label={`Toggle theme: current is ${currentTheme}`}
            className="h-9 sm:h-10 flex items-center justify-center px-2.5 sm:px-3 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] text-[var(--text-primary)] transition-colors gap-1 sm:gap-1.5 cursor-pointer shadow-sm shrink-0"
          >
            {currentTheme === 'navy' && <Compass className="w-3.5 h-3.5 text-[#d98c2b]" />}
            {currentTheme === 'dark' && <Moon className="w-3.5 h-3.5 text-[var(--accent-blue)]" />}
            {currentTheme === 'blueprint' && <FileText className="w-3.5 h-3.5 text-[var(--accent-blue)]" />}
            {currentTheme === 'light' && <Sun className="w-3.5 h-3.5 text-amber-600" />}
            <span className="text-xs sm:text-xs uppercase font-gost-mono font-bold text-[var(--text-primary)]">
              {currentTheme === 'navy' ? 'Navy' : currentTheme === 'dark' ? 'Dark' : currentTheme === 'blueprint' ? 'CAD' : 'Light'}
            </span>
          </button>

          {/* Text size (desktop header; on phones it lives in the menu drawer) */}
          <div className="hidden min-[1200px]:block">
            <TextSizePopover currentLang={currentLang} value={currentTextSize} onChange={onTextSizeChange} />
          </div>
        </div>

        {/* Center: Desktop Navigation Bar (Visible on large desktop) */}
        <nav 
          aria-label="Main Navigation"
          className="hidden min-[1200px]:flex items-center space-x-0 min-[1700px]:space-x-1 min-w-0"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{ fontSize: '16.4px' }}
              className={`font-gost text-[16.4px] font-bold uppercase tracking-wide min-[1700px]:tracking-wider px-1.5 xl:px-2 min-[1700px]:px-3 py-2 rounded-full transition-colors relative whitespace-nowrap ${
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
            className="h-9 sm:h-10 flex items-center justify-center gap-1.5 px-3 sm:px-4 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-[var(--btn-primary-text)] text-xs sm:text-sm font-extrabold font-gost-mono uppercase tracking-wider rounded-full transition-[transform,background-color] hover:scale-105 shadow-md cursor-pointer touch-target shrink-0"
            title="Generate & Download Engineering CV in PDF"
            aria-label={UI_TRANSLATIONS.navResume[currentLang]}
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden min-[1700px]:inline">{UI_TRANSLATIONS.navResume[currentLang]}</span>
            <span className="min-[1700px]:hidden">CV</span>
          </button>

        </div>
      </div>

      {/* Mobile / Tablet Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 min-[1200px]:hidden"
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
              {/* Language Dropdown (expands vertically) */}
              <div className="flex items-start justify-between sm:justify-start gap-1">
                <span className="font-gost-mono text-xs uppercase font-extrabold text-[var(--text-secondary)] mr-2 mt-3">
                  {currentLang === 'uk' ? 'Мова:' : currentLang === 'sk' ? 'Jazyk:' : 'Lang:'}
                </span>
                <div className="flex flex-col gap-0.5 bg-emerald-900/90 border border-emerald-400/60 p-1 rounded-xl min-w-[96px]">
                  <button
                    onClick={() => setDrawerLangOpen((o) => !o)}
                    aria-expanded={drawerLangOpen}
                    className="text-xs font-bold font-gost-mono px-3.5 py-2 rounded-lg uppercase touch-target flex items-center justify-between gap-2 bg-[#851d1d] border border-red-500/40 text-white shadow-sm"
                  >
                    {currentLang === 'uk' ? 'УКР' : currentLang.toUpperCase()}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${drawerLangOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {drawerLangOpen &&
                    (['en', 'sk', 'uk'] as Language[])
                      .filter((lang) => lang !== currentLang)
                      .map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            onLanguageChange(lang);
                            setDrawerLangOpen(false);
                          }}
                          className="text-xs font-bold font-gost-mono px-3.5 py-2 rounded-lg uppercase touch-target flex items-center justify-center text-emerald-100 hover:text-white hover:bg-emerald-800/50 transition-colors"
                        >
                          {lang === 'uk' ? 'УКР' : lang.toUpperCase()}
                        </button>
                      ))}
                </div>
              </div>

              {/* Theme Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-end gap-2 sm:gap-1">
                <span className="font-gost-mono text-xs uppercase font-extrabold text-[var(--text-secondary)] sm:mr-2">
                  {currentLang === 'uk' ? 'Тема:' : currentLang === 'sk' ? 'Téma:' : 'Theme:'}
                </span>
                <div className="flex w-full sm:w-auto bg-[var(--bg-surface-3)] p-1 rounded-xl border border-[var(--border-color)]">
                  {(['navy', 'dark', 'blueprint', 'light'] as ThemeMode[]).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => onThemeChange(theme)}
                      className={`flex-1 sm:flex-none text-xs font-bold font-gost-mono px-2 sm:px-3 py-2 rounded-lg transition-colors uppercase touch-target flex items-center justify-center ${
                        currentTheme === theme
                          ? 'bg-[var(--accent-blue)] text-[var(--btn-primary-text)] shadow-sm'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {theme === 'navy' ? 'Navy' : theme === 'dark' ? 'Dark' : theme === 'blueprint' ? 'CAD' : 'Light'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text size selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-end gap-2 sm:gap-1">
                <span className="font-gost-mono text-xs uppercase font-extrabold text-[var(--text-secondary)] sm:mr-2">
                  {currentLang === 'uk' ? 'Розмір тексту:' : currentLang === 'sk' ? 'Veľkosť textu:' : 'Text size:'}
                </span>
                <TextSizeSegmented currentLang={currentLang} value={currentTextSize} onChange={onTextSizeChange} />
              </div>
            </div>

            {/* Navigation Links (Full List) */}
            <nav aria-label="Mobile Drawer Navigation" className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
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
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-base font-black font-gost-mono uppercase tracking-wider rounded-2xl shadow-lg cursor-pointer min-h-[48px] active:scale-[0.99] transition-[transform,background-color]"
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
