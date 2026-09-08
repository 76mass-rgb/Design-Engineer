import React from 'react';
import { Language } from '../types';
import { HOW_I_WORK_STEPS, ABOUT_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, Layers, FileCheck, Shield, Send } from 'lucide-react';

interface HowIWorkSectionProps {
  currentLang: Language;
}

export const HowIWorkSection: React.FC<HowIWorkSectionProps> = ({ currentLang }) => {
  return (
    <section id="workflow" className="py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              04 // {currentLang === 'uk' ? 'ЯК Я ПРАЦЮЮ // ПРОЦЕС' : currentLang === 'sk' ? 'AKO PRACUJEM // PROCES' : 'HOW I WORK // PROCESS'}
            </div>
            <h2 className="font-gost text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {currentLang === 'uk' && 'Як я працюю'}
              {currentLang === 'sk' && 'Ako pracujem'}
              {currentLang === 'en' && 'How I Work'}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-lg font-medium leading-relaxed">
            {currentLang === 'uk' && 'Структурований, прозорий та результативний інженерний процес від постановки задачі до готових креслень.'}
            {currentLang === 'sk' && 'Štruktúrovaný, transparentný a precízny inžiniersky proces od zadania po výrobné výkresy.'}
            {currentLang === 'en' && 'Structured, transparent, and rigorous engineering workflow from initial scope to fabrication.'}
          </p>
        </div>

        {/* 5-Phase Workflow Stack */}
        <div className="space-y-5 mb-16">
          {HOW_I_WORK_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-7 sm:p-9 rounded-3xl bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.025] hover:-translate-y-2 hover:shadow-2xl hover:z-20 hover:bg-[var(--bg-surface)] relative shadow-sm group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Step badge & Phase */}
                <div className="lg:col-span-3 flex items-center lg:flex-col lg:items-start gap-3">
                  <span className="font-gost text-4xl sm:text-5xl font-black text-[var(--accent-blue)]">
                    {step.number}
                  </span>
                  <div>
                    <span className="text-sm font-mono font-bold tracking-widest text-[var(--text-secondary)] uppercase block">
                      {step.phase[currentLang]}
                    </span>
                  </div>
                </div>

                {/* Content description */}
                <div className="lg:col-span-5">
                  <h3 className="font-gost text-xl sm:text-2xl font-black text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors">
                    {step.title[currentLang]}
                  </h3>
                  <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                    {step.description[currentLang]}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="lg:col-span-4 bg-[var(--bg-surface-2)] p-5 sm:p-6 rounded-2xl border border-[var(--border-color)]">
                  <div className="text-sm font-mono uppercase tracking-wider text-[var(--accent-blue)] font-extrabold mb-3">
                    {currentLang === 'uk' && 'Результат етапу (Deliverables):'}
                    {currentLang === 'sk' && 'Výstupy etapy (Deliverables):'}
                    {currentLang === 'en' && 'Stage Deliverables:'}
                  </div>
                  <ul className="space-y-2">
                    {step.deliverables[currentLang].map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-sm sm:text-base text-[var(--text-primary)] font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner after workflow */}
        <div className="bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-gost text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[var(--text-primary)] mb-2">
              {currentLang === 'uk' && 'Маєте інженерну задачу або проект обладнання?'}
              {currentLang === 'sk' && 'Máte inžiniersku úlohu alebo projekt zariadenia?'}
              {currentLang === 'en' && 'Have an engineering challenge or machine project?'}
            </h3>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
              {currentLang === 'uk' && 'Обговоримо технічні вимоги, навантаження та терміни розробки 3D CAD документації.'}
              {currentLang === 'sk' && 'Preberieme technické požiadavky, zaťaženia a termíny dodania 3D CAD dokumentácie.'}
              {currentLang === 'en' && 'Let’s discuss your technical requirements, load constraints, and 3D CAD documentation timeline.'}
            </p>
          </div>
          <a
            href="#contact"
            className="group cursor-pointer bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white px-9 py-4.5 rounded-full font-extrabold text-base sm:text-lg uppercase tracking-wider transition-all hover:scale-105 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl flex-shrink-0"
          >
            <span>{UI_TRANSLATIONS.btnConsultation[currentLang]}</span>
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
