import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const displayName = currentLang === 'uk' ? 'Віталій Долінський' : 'Dolynskyi Vitalii';

  return (
    <footer className="bg-[var(--bg-surface-2)] border-t border-[var(--border-color)] py-3 sm:py-3.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] text-center relative">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Engineering ID */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center font-gost-mono text-xs font-black text-[var(--accent-blue)] shadow-sm flex-shrink-0">
            DV
          </div>
          <div className="text-left font-gost-mono text-xs sm:text-xs text-[var(--text-secondary)]">
            <span className="font-extrabold text-[var(--text-primary)] font-gost">{displayName}</span> {currentLang === 'uk' ? '· Інженер-конструктор (ГОСТ / ISO / EN)' : currentLang === 'sk' ? '· Inžinier-konštruktér (ISO / EN / STN)' : '· Industrial Design Engineer (ISO / ASME / EN)'}
          </div>
        </div>

        {/* Center: Copyright & Rights */}
        <div className="font-gost-mono text-xs sm:text-xs text-[var(--text-secondary)] tracking-wider uppercase font-bold">
          © {new Date().getFullYear()} {displayName} — {UI_TRANSLATIONS.copyright[currentLang]}
        </div>


      </div>
    </footer>
  );
};
