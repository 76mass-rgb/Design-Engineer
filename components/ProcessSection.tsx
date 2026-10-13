import React, { useState } from 'react';
import { Language } from '../types';
import { HOW_I_WORK_STEPS, CONCEPT_TO_REALITY_STEPS, UI_TRANSLATIONS } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, FileCheck, Layers, Wrench, Shield, Compass, Sparkles } from 'lucide-react';

interface ProcessSectionProps {
  currentLang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ currentLang }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  // Unified 5-stage engineering lifecycle combining methodology + concrete deliverables
  const unifiedSteps = HOW_I_WORK_STEPS.map((hStep, idx) => {
    const conceptStep = CONCEPT_TO_REALITY_STEPS[idx];
    return {
      number: hStep.number,
      phase: hStep.phase,
      title: hStep.title,
      description: hStep.description,
      deliverables: hStep.deliverables,
      icon: conceptStep?.icon || '⚙️',
      highlights: conceptStep?.highlights || { uk: [], sk: [], en: [] },
      subtitle: conceptStep?.subtitle
    };
  });

  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-[var(--accent-blue)] opacity-5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              03 // {currentLang === 'uk' ? 'ІНЖЕНЕРНИЙ ПРОЦЕС ТА СТАНДАРТИ ЯКОСТІ' : currentLang === 'sk' ? 'INŽINIERSKY PROCES A ŠTANDARDY KVALITY' : 'ENGINEERING PROCESS & QUALITY STANDARDS'}
            </div>
            <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {currentLang === 'uk' && 'Як я працюю: Від ТЗ до пусконалагодження'}
              {currentLang === 'sk' && 'Ako pracujem: Od zadania po uvedenie do prevádzky'}
              {currentLang === 'en' && 'Engineering Workflow: From Scope to Commissioning'}
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-xl font-medium leading-relaxed">
            {currentLang === 'uk' && 'Прозорий інженерний регламент у 5 етапів. Замовник на кожному кроці точно знає статус, бачить проміжний результат і отримує перевірену документацію.'}
            {currentLang === 'sk' && 'Transparentný inžiniersky postup v 5 etapách. Zákazník v každom kroku presne pozná stav, vidí výsledky a preberá overenú dokumentáciu.'}
            {currentLang === 'en' && 'Transparent 5-stage engineering delivery. Clear milestone deliverables, zero surprise clashes, and documented compliance with European standards.'}
          </p>
        </div>

        {/* 5-Stage Interactive Engineering Process Cards */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          {unifiedSteps.map((step, idx) => {
            const isHovered = activeStepIndex === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStepIndex(idx)}
                onMouseLeave={() => setActiveStepIndex(null)}
                className={`p-5 sm:p-7 lg:p-8 rounded-3xl bg-[var(--glass-bg)] border transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out backdrop-blur-xl relative shadow-sm group ${
                  isHovered 
                    ? 'border-[var(--accent-blue)] bg-[var(--bg-surface)] shadow-2xl -translate-y-1' 
                    : 'border-[var(--border-color)] hover:border-[var(--accent-blue)]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
                  
                  {/* Column 1: Step Number, Icon, & Phase Name */}
                  <div className="lg:col-span-3 flex items-center lg:flex-col lg:items-start gap-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl p-2.5 sm:p-3 bg-[var(--badge-bg)] rounded-2xl border border-[var(--border-color)] group-hover:scale-110 transition-transform inline-block">
                        {step.icon}
                      </span>
                      <span className="font-gost text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--accent-blue)]">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[var(--text-secondary)] uppercase block">
                        {step.phase[currentLang]}
                      </span>
                      {step.subtitle && (
                        <span className="text-xs font-gost-mono text-[var(--accent-blue)] font-bold hidden lg:block mt-1">
                          {step.subtitle[currentLang]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Scope & Methodology */}
                  <div className="lg:col-span-5">
                    <h3 className="font-gost text-lg sm:text-xl lg:text-2xl font-black text-[var(--text-primary)] mb-2.5 group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {step.title[currentLang]}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal mb-3 sm:mb-4">
                      {step.description[currentLang]}
                    </p>

                    {/* Quality checks & methodology highlights */}
                    {step.highlights[currentLang] && step.highlights[currentLang].length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-color)]">
                        {step.highlights[currentLang].map((hl, hlIdx) => (
                          <span
                            key={hlIdx}
                            className="inline-flex items-center gap-1.5 text-xs font-gost-mono px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--text-primary)] border border-[var(--border-color)] font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Column 3: Tangible Deliverables (What the client receives) */}
                  <div className="lg:col-span-4 bg-[var(--bg-surface-2)] p-4 sm:p-5 lg:p-6 rounded-2xl border border-[var(--border-color)] shadow-inner">
                    <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--accent-blue)] font-extrabold mb-3 flex items-center justify-between">
                      <span>
                        {currentLang === 'uk' && 'Результат етапу (Deliverables):'}
                        {currentLang === 'sk' && 'Výstupy etapy (Deliverables):'}
                        {currentLang === 'en' && 'Stage Deliverables:'}
                      </span>
                      <FileCheck className="w-4 h-4 text-[#166534] dark:text-[#16a34a]" />
                    </div>

                    <ul className="space-y-2">
                      {step.deliverables[currentLang].map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-gost font-medium text-[var(--text-primary)]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#16a34a] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
