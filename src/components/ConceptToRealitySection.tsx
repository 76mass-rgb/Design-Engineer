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
    <section id="process" className="py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header: Methodology & Quality Standards */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              {currentLang === 'uk' ? 'МЕТОДОЛОГІЯ ТА СТАНДАРТИ ЯКОСТІ' : currentLang === 'sk' ? 'METODOLÓGIA A ŠTANDARDY KVALITY' : 'METHODOLOGY & QUALITY STANDARDS'}
            </div>
            <h2 className="font-gost text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {currentLang === 'uk' && 'Від концепту та креслення до пусконалагодження'}
              {currentLang === 'sk' && 'Od konceptu a výkresu po uvedenie do prevádzky'}
              {currentLang === 'en' && 'From Concept & Blueprint to Full Commissioning'}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-lg font-medium leading-relaxed">
            {currentLang === 'uk' && 'Повний життєвий цикл інженерного проєкту: від першого ескізу до 100% працюючого обладнання.'}
            {currentLang === 'sk' && 'Kompletný životný cyklus inžinierskeho projektu: od prvej skice až po 100 % funkčné zariadenie.'}
            {currentLang === 'en' && 'Complete lifecycle of engineering delivery: from initial concept and CAD to physical commissioning.'}
          </p>
        </div>

        {/* 5-Step Methodology Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CONCEPT_TO_REALITY_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative bg-[var(--glass-bg)] p-6 sm:p-7 rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-blue)] backdrop-blur-xl group flex flex-col justify-between shadow-sm transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl hover:bg-[var(--bg-surface)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-2.5 bg-[var(--badge-bg)] rounded-xl border border-[var(--border-color)] inline-block">
                    {step.icon}
                  </span>
                  <span className="font-gost text-2xl font-black text-[var(--accent-blue)]">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-gost text-lg sm:text-xl font-black text-[var(--text-primary)] mb-1.5 leading-snug">
                  {step.title[currentLang]}
                </h3>

                <div className="text-xs font-gost-mono text-[var(--accent-blue)] font-bold mb-3">
                  {step.subtitle[currentLang]}
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 font-normal">
                  {step.description[currentLang]}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-color)] flex flex-col gap-2">
                {step.highlights[currentLang].map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[var(--text-primary)] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
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
