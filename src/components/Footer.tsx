import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { ArrowUp, Compass } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayName = currentLang === 'uk' ? 'Віталій Долінський' : 'Dolynskyi Vitalii';

  return (
    <footer className="bg-[var(--bg-surface-2)] border-t border-[var(--border-color)] py-8 sm:py-12 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] text-center relative">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        
        {/* Left: Engineering ID */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center font-gost-mono text-sm sm:text-base font-black text-[var(--accent-blue)] shadow-sm flex-shrink-0">
            DV
          </div>
          <div className="text-left font-gost-mono text-xs sm:text-sm lg:text-base text-[var(--text-secondary)]">
            <span className="font-extrabold text-[var(--text-primary)] font-gost">{displayName}</span> {currentLang === 'uk' ? '· Інженер-конструктор (ГОСТ / ISO / EN)' : currentLang === 'sk' ? '· Inžinier-konštruktér (ISO / EN / STN)' : '· Industrial Design Engineer (ISO / ASME / EN)'}
          </div>
        </div>

        {/* Center: Copyright & Rights */}
        <div className="font-gost-mono text-xs sm:text-sm lg:text-base text-[var(--text-secondary)] tracking-wider uppercase font-bold">
          © {new Date().getFullYear()} {displayName} — {UI_TRANSLATIONS.copyright[currentLang]}
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 font-gost-mono text-xs sm:text-sm lg:text-base font-extrabold text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-blue)] transition-colors px-5 sm:px-6 py-2.5 sm:py-3 bg-[var(--bg-surface-3)] border border-[var(--border-color)] rounded-full cursor-pointer shadow-sm min-h-[44px]"
        >
          <span>{currentLang === 'uk' ? 'Вгору' : currentLang === 'sk' ? 'Hore' : 'Top'}</span>
          <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

      </div>
    </footer>
  );
};
