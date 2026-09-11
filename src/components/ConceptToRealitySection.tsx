import React from 'react';
import { Language } from '../types';
import { CONCEPT_TO_REALITY_STEPS } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

interface ConceptToRealitySectionProps {
  currentLang: Language;
  onSelectProject?: (projectId: string) => void;
  onOpenBlueprintZoom?: (imageUrl: string, title: string) => void;
}

export const ConceptToRealitySection: React.FC<ConceptToRealitySectionProps> = ({
  currentLang,
}) => {
  return (
    <section id="process" className="py-14 sm:py-20 md:py-28 lg:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header: Methodology & Quality Standards */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
          <div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              {currentLang === 'uk' ? 'МЕТОДОЛОГІЯ ТА СТАНДАРТИ ЯКОСТІ' : currentLang === 'sk' ? 'METODOLÓGIA A ŠTANDARDY KVALITY' : 'METHODOLOGY & QUALITY STANDARDS'}
            </div>
            <h2 className="font-gost text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {currentLang === 'uk' && 'Від концепту та креслення до пусконалагодження'}
              {currentLang === 'sk' && 'Od konceptu a výkresu po uvedenie do prevádzky'}
              {currentLang === 'en' && 'From Concept & Blueprint to Full Commissioning'}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-lg font-medium leading-relaxed mt-2 sm:mt-0">
            {currentLang === 'uk' && 'Повний життєвий цикл інженерного проєкту: від першого ескізу до 100% працюючого обладнання.'}
            {currentLang === 'sk' && 'Kompletný životný cyklus inžinierskeho projektu: od prvej skice až po 100 % funkčné zariadenie.'}
            {currentLang === 'en' && 'Complete lifecycle of engineering delivery: from initial concept and CAD to physical commissioning.'}
          </p>
        </div>

        {/* 5-Step Methodology Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {CONCEPT_TO_REALITY_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative bg-[var(--glass-bg)] p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-blue)] backdrop-blur-xl group flex flex-col justify-between shadow-sm transition-[transform,background-color,border-color] duration-300 ease-out hover:scale-[1.02] sm:hover:scale-[1.04] sm:hover:-translate-y-2 hover:shadow-2xl hover:bg-[var(--bg-surface)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl p-2 sm:p-2.5 bg-[var(--badge-bg)] rounded-xl border border-[var(--border-color)] inline-block">
                    {step.icon}
                  </span>
                  <span className="font-gost text-xl sm:text-2xl font-black text-[var(--accent-blue)]">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-gost text-base sm:text-lg lg:text-xl font-black text-[var(--text-primary)] mb-1 sm:mb-1.5 leading-snug">
                  {step.title[currentLang]}
                </h3>

                <div className="text-[11px] sm:text-xs font-gost-mono text-[var(--accent-blue)] font-bold mb-2 sm:mb-3">
                  {step.subtitle[currentLang]}
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3 sm:mb-4 font-normal">
                  {step.description[currentLang]}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] flex flex-col gap-1.5 sm:gap-2">
                {step.highlights[currentLang].map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[var(--text-primary)] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
