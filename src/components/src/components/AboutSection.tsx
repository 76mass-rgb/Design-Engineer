import React from 'react';
import { Language } from '../types';
import { ABOUT_DATA, UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { ShieldCheck, MapPin, Award, CheckCircle2, Send, FileText } from 'lucide-react';
import portraitJpg from '../assets/images/vitaliy_engineer_petrochem_1799912340001.webp';
import { EngineeringTrustStats } from './EngineeringTrustStats';

interface AboutSectionProps {
  currentLang: Language;
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenResume }) => {
  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 relative bg-[var(--bg-primary)]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              03 // {currentLang === 'uk' ? 'ПРОФЕСІЙНИЙ ДОСВІД' : currentLang === 'sk' ? 'PROFESIONÁLNY PROFIL' : 'PROFESSIONAL BACKGROUND'}
            </div>
            <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {currentLang === 'uk' && 'Професійний досвід інженера'}
              {currentLang === 'sk' && 'Profesionálna inžinierska prax'}
              {currentLang === 'en' && 'Professional Engineering Background'}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md font-medium leading-relaxed">
            {currentLang === 'uk' && '27+ років практичного машинобудівного проектування, авторського нагляду та супроводу виробництва.'}
            {currentLang === 'sk' && '27+ rokov praktického strojného navrhovania, autorského dozoru a výrobnej realizácie.'}
            {currentLang === 'en' && '27+ years of turnkey mechanical engineering design, shop liaison, and field commissioning.'}
          </p>
        </div>

        {/* 2. Detailed Biography, Photo & DFMA Pillars */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start mb-12 sm:mb-16">

          {/* Left Column (xl+): Portrait + 3 engineering pillars. On phones/tablets the order stays: photo, text, pillars, buttons */}
          <div className="contents xl:flex xl:col-span-5 xl:flex-col xl:gap-8">
            <div className="order-1 w-full max-w-md mx-auto xl:max-w-none">
            <div className="relative bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-2.5 sm:p-3 backdrop-blur-xl shadow-xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-surface-2)]">
                <picture className="w-full h-full block">
                  <img
                    src={portraitJpg}
                    alt={currentLang === 'uk' ? 'Віталій Долінський — Інженер на виробничому об’єкті' : 'Vitalii Dolynskyi — Site & Mechanical Engineering'}
                    width={960}
                    height={1141}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/75 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/20">
                  <div className="text-xs text-[var(--accent-blue)] font-mono font-bold uppercase tracking-wider">
                    {currentLang === 'uk' ? 'Локація & Охоплення' : currentLang === 'sk' ? 'Lokalita & Pôsobenie' : 'Location & Mobility'}
                  </div>
                  <div className="text-xs sm:text-sm text-white font-semibold flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
                    <span>Čadca, Žilinský kraj, Slovakia / EU</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="order-3">
            {/* 3 Core Engineering Pillars */}
            <div className="space-y-2.5 sm:space-y-3">
              {ABOUT_DATA.pillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] flex items-start gap-3 backdrop-blur-xl hover:border-[var(--accent-blue)] transition-colors shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-blue)] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#166534] dark:text-[#16a34a]" />
                  </div>
                  <div>
                    <h4 className="font-gost text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                      {pillar.title[currentLang]}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 font-normal leading-relaxed">
                      {pillar.desc[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Right Column (xl+): Quote, biography, action buttons */}
          <div className="contents xl:flex xl:col-span-7 xl:flex-col">
            <div className="order-2">
            {/* Engineer's Creed / Quote Card */}
            <div className="p-5 sm:p-8 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] backdrop-blur-xl shadow-sm mb-6 sm:mb-8">
              <p className="font-gost text-base sm:text-xl font-bold text-[var(--text-primary)] leading-relaxed italic">
                {ABOUT_DATA.quote[currentLang]}
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                  {p[currentLang]}
                </p>
              ))}
            </div>
            </div>
            <div className="order-4">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-[var(--border-color)]">
              <a
                href="#contact"
                className="group cursor-pointer bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-[var(--btn-primary-text)] px-7 py-3.5 sm:py-4 rounded-full font-extrabold text-sm sm:text-base uppercase tracking-wider transition-[transform,background-color] hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg min-h-[46px]"
              >
                <Send className="w-4 h-4" />
                <span>{UI_TRANSLATIONS.btnConsultation[currentLang]}</span>
              </a>

              <button
                onClick={onOpenResume}
                className="group cursor-pointer bg-[var(--badge-bg)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] px-6 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider transition-colors text-[var(--text-primary)] inline-flex items-center justify-center gap-2 shadow-sm min-h-[46px]"
              >
                <FileText className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>{UI_TRANSLATIONS.btnDownloadCV[currentLang]}</span>
              </button>
            </div>
            </div>
          </div>

        </div>

        {/* Verified Industrial Track Record & Scale — moved below the biography / photo / buttons */}
        <div>
          <EngineeringTrustStats currentLang={currentLang} />
        </div>

      </div>
    </section>
  );
};
