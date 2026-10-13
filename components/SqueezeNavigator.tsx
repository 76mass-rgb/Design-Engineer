import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  Wrench, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Send, 
  Maximize2, 
  Minimize2, 
  Compass, 
  ArrowUp,
  SlidersHorizontal,
  Eye,
  CheckCircle2
} from 'lucide-react';

export interface SqueezeNavigatorProps {
  currentLang: Language;
  activeSection: string;
  viewMode: 'all' | 'focus';
  focusedSection: string;
  onSelectSection: (sectionId: string) => void;
  onToggleViewMode: (mode: 'all' | 'focus') => void;
  onScrollToTop: () => void;
}

export const SqueezeNavigator: React.FC<SqueezeNavigatorProps> = ({
  currentLang,
  activeSection,
  viewMode,
  focusedSection,
  onSelectSection,
  onToggleViewMode,
  onScrollToTop,
}) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Becomes sticky once user scrolls down past the hero
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'skills',
      num: '01',
      title: currentLang === 'uk' ? 'КЛЮЧОВА ЕКСПЕРТИЗА' : currentLang === 'sk' ? 'KĽÚČOVÁ EXPERTÍZA' : 'CORE EXPERTISE',
      subtitle: currentLang === 'uk' ? '6 галузей · CAD · КД' : currentLang === 'sk' ? '6 oblastí · CAD · Výkresy' : '6 domains · CAD · Blueprints',
      icon: <Wrench className="w-4 h-4" />
    },
    {
      id: 'portfolio',
      num: '02',
      title: currentLang === 'uk' ? 'ДОКАЗИ КОМПЕТЕНТНОСТІ' : currentLang === 'sk' ? 'DÔKAZY ODBORNOSTI' : 'PROVEN COMPETENCE',
      subtitle: currentLang === 'uk' ? '16 реалізованих кейсів' : currentLang === 'sk' ? '16 overených projektov' : '16 proven industrial cases',
      icon: <Layers className="w-4 h-4" />
    },
    {
      id: 'about',
      num: '03',
      title: currentLang === 'uk' ? 'ПРОФЕСІЙНИЙ ДОСВІД' : currentLang === 'sk' ? 'PROFESIONÁLNA PRAX' : 'PROFESSIONAL EXPERIENCE',
      subtitle: currentLang === 'uk' ? '27+ років · DFMA · Біографія' : currentLang === 'sk' ? '27+ rokov · DFMA · Biografia' : '27+ years · DFMA pillars',
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: 'education',
      num: '04',
      title: currentLang === 'uk' ? 'АКАДЕМІЧНА ОСВІТА' : currentLang === 'sk' ? 'AKADEMICKÉ VZDELANIE' : 'ACADEMIC CREDENTIALS',
      subtitle: currentLang === 'uk' ? '2 дипломи · R&D · Сейсміка' : currentLang === 'sk' ? '2 diplomy · R&D · Seizmika' : '2 degrees · R&D · Seismic',
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      id: 'contact',
      num: '05',
      title: currentLang === 'uk' ? 'ТЕХНІЧНИЙ ЗАПИТ' : currentLang === 'sk' ? 'TECHNICKÝ DOPYT' : 'TECHNICAL INQUIRY',
      subtitle: currentLang === 'uk' ? 'Прямий контакт з інженером' : currentLang === 'sk' ? 'Priamy kontakt s inžinierom' : 'Direct engineering contact',
      icon: <Send className="w-4 h-4" />
    },
  ];

  const currentActiveId = viewMode === 'focus' ? focusedSection : activeSection;

  return (
    <div
      id="squeeze-navigator"
      className={`w-full transition-all duration-300 ${
        isSticky
          ? 'sticky top-[60px] sm:top-[68px] z-40 bg-[var(--bg-nav-scrolled)]/95 backdrop-blur-xl border-b border-[var(--border-color)] shadow-2xl py-2 sm:py-3'
          : 'relative z-20 py-4 sm:py-6 bg-[var(--bg-primary)]'
      }`}
    >
      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
          isSticky
            ? 'p-2 sm:p-3 bg-transparent border-transparent'
            : 'p-4 sm:p-6 bg-[var(--glass-bg)] border-[var(--border-color)] backdrop-blur-xl shadow-lg'
        }`}>
          {/* Header Row: Technical Console Status & Mode Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-3 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-black font-gost-mono uppercase tracking-[0.25em] text-[var(--accent-blue)]">
                  {currentLang === 'uk' ? 'НАВІГАТОР РОЗДІЛІВ' : currentLang === 'sk' ? 'NAVIGÁTOR SEKCIE' : 'PORTFOLIO NAVIGATOR'}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono hidden md:inline">
                  // {viewMode === 'all' 
                    ? (currentLang === 'uk' ? 'РЕЖИМ: ВСІ РОЗДІЛИ' : currentLang === 'sk' ? 'REŽIM: VŠETKY SEKCIE' : 'MODE: ALL SECTIONS')
                    : (currentLang === 'uk' ? 'РЕЖИМ: ФОКУС' : currentLang === 'sk' ? 'REŽIM: FOCUS' : 'MODE: FOCUS')}
                </span>
              </div>
            </div>

            {/* View Mode Controls: "All Sections" vs "Focus" */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <div className="inline-flex p-1 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border-color)] shadow-inner">
                <button
                  onClick={() => onToggleViewMode('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'all'
                      ? 'bg-[var(--accent-blue)] text-[var(--btn-primary-text)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  title={currentLang === 'uk' ? 'Переглянути всі розділи послідовно' : currentLang === 'sk' ? 'Zobraziť všetky sekcie postupne' : 'Show all sections continuously'}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{currentLang === 'uk' ? 'Усі розділи' : currentLang === 'sk' ? 'Všetky sekcie' : 'All Sections'}</span>
                </button>
                <button
                  onClick={() => onToggleViewMode('focus')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'focus'
                      ? 'bg-[var(--accent-blue)] text-[var(--btn-primary-text)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  title={currentLang === 'uk' ? 'Фокусний перегляд одного вибраного розділу' : currentLang === 'sk' ? 'Fokus na jednu vybranú sekciu' : 'Focus view on single selected section'}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{currentLang === 'uk' ? 'Фокусний' : currentLang === 'sk' ? 'Fokus' : 'Focus'}</span>
                </button>
              </div>

              {isSticky && (
                <button
                  onClick={onScrollToTop}
                  className="p-2 rounded-xl bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
                  title={currentLang === 'uk' ? 'Нагору до початку' : currentLang === 'sk' ? 'Hore na začiatok' : 'Scroll to top'}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* 5 Unified Interactive Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
            {sections.map((sec) => {
              const isActive = currentActiveId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onSelectSection(sec.id)}
                  aria-pressed={isActive}
                  className={`relative p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer group flex flex-col justify-between overflow-hidden hover-lift ${
                    isActive
                      ? 'bg-[var(--accent-blue)] text-[var(--btn-primary-text)] border-[var(--accent-blue)] shadow-lg shadow-[var(--accent-blue)]/20 scale-[1.02]'
                      : 'bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] border-[var(--border-color)] hover:border-[var(--accent-blue)]'
                  }`}
                >
                  {/* Top row: Number badge + Icon */}
                  <div className="flex items-center justify-between w-full mb-1.5 sm:mb-2">
                    <span className={`font-gost-mono font-black text-xs px-2 py-0.5 rounded-md border transition-colors ${
                      isActive
                        ? 'bg-black/25 border-white/40 text-white shadow-inner'
                        : 'bg-[var(--badge-bg)] border-[var(--border-color)] text-[var(--accent-blue)]'
                    }`}>
                      {sec.num}
                    </span>
                    <span className={`transition-transform duration-200 group-hover:scale-110 ${
                      isActive ? 'text-[var(--btn-primary-text)]' : 'text-[var(--text-muted)] group-hover:text-[var(--accent-blue)]'
                    }`}>
                      {sec.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="font-gost font-black text-xs sm:text-sm uppercase tracking-tight line-clamp-1 mb-0.5">
                    {sec.title}
                  </div>

                  {/* Subtitle / Stat Badge */}
                  <div className={`text-[10px] sm:text-[11px] font-medium line-clamp-1 ${
                    isActive ? 'text-[var(--btn-primary-text)]/85' : 'text-[var(--text-secondary)]'
                  }`}>
                    {sec.subtitle}
                  </div>

                  {/* Active bottom accent bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
