import React from 'react';
import { Language } from '../types';
import { ABOUT_DATA, UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { ShieldCheck, MapPin, Award, CheckCircle2, Send, FileText } from 'lucide-react';
import portraitWebp from '../assets/images/vitaliy_portrait_1787830489312.webp';
import portraitJpg from '../assets/images/vitaliy_portrait_1787830489312.jpg';

interface AboutSectionProps {
  currentLang: Language;
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenResume }) => {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              05 // {currentLang === 'uk' ? 'ПРОФЕСІЙНИЙ ДОСВІД' : currentLang === 'sk' ? 'PROFESIONÁLNY PROFIL' : 'PROFESSIONAL BACKGROUND'}
            </div>
            <h2 className="font-gost text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {currentLang === 'uk' && 'Про інженера'}
              {currentLang === 'sk' && 'O inžinierovi'}
              {currentLang === 'en' && 'About the Engineer'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md font-medium">
            {currentLang === 'uk' && 'Практичний машинобудівний інженер з 27+ роками досвіду проектування.'}
            {currentLang === 'sk' && 'Praktický strojný inžinier s viac ako 27 rokmi skúseností s konštruovaním.'}
            {currentLang === 'en' && 'Practical mechanical design engineer with over 27 years of industrial track record.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Portrait & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-3 backdrop-blur-xl shadow-xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-surface-2)]">
                <picture className="w-full h-full block">
                  <source srcSet={portraitWebp} type="image/webp" />
                  <img
                    src={portraitJpg}
                    alt={currentLang === 'uk' ? 'Віталій Долінський' : 'Dolynskyi Vitalii'}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <div className="text-xs text-[var(--accent-blue)] font-mono font-bold uppercase tracking-wider">
                    {currentLang === 'uk' ? 'Локація & Охоплення' : currentLang === 'sk' ? 'Lokalita & Pôsobenie' : 'Location & Mobility'}
                  </div>
                  <div className="text-sm text-white font-semibold flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Čadca, Žilinský kraj, Slovakia / EU</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Core Engineering Pillars */}
            <div className="space-y-3">
              {ABOUT_DATA.pillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] flex items-start gap-3 backdrop-blur-xl"
                >
                  <div className="w-8 h-8 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-blue)] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-gost text-sm font-bold text-[var(--text-primary)]">
                      {pillar.title[currentLang]}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5 font-normal">
                      {pillar.desc[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio, Statement & Qualifications */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            
            {/* Engineer's Creed / Quote Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] backdrop-blur-xl shadow-sm mb-8">
              <p className="font-gost text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-relaxed italic">
                {ABOUT_DATA.quote[currentLang]}
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 mb-8">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                  {p[currentLang]}
                </p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border-color)]">
              <a
                href="#contact"
                className="group cursor-pointer bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white px-7 py-3.5 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>{UI_TRANSLATIONS.btnConsultation[currentLang]}</span>
              </a>

              <button
                onClick={onOpenResume}
                className="group cursor-pointer bg-[var(--badge-bg)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] px-6 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all text-[var(--text-primary)] inline-flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>{UI_TRANSLATIONS.btnDownloadCV[currentLang]}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
