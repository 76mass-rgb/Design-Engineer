import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { ArrowRight, Layers, Box, CheckCircle2, FileText, Send, PhoneCall, ShieldCheck, Wrench, Factory, Cpu, Flame, Wheat } from 'lucide-react';
import portraitHeroWebp from '../assets/images/vitaliy_engineer_petrochem_1799912340001.webp';
import { BrandLogoBanner } from './BrandLogoBanner';

interface HeroProps {
  currentLang: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenResume }) => {
  // Industrial Domain Tags for immediate 5-second cognitive recognition
  const domainBadges = [
    {
      icon: <Factory className="w-3.5 h-3.5 text-[#0284c7]" />,
      label: currentLang === 'uk' ? 'Машинобудування' : currentLang === 'sk' ? 'Strojárstvo' : 'Machinery & Drives'
    },
    {
      icon: <Flame className="w-3.5 h-3.5 text-[#b45309] dark:text-[#d97706]" />,
      label: currentLang === 'uk' ? 'Нафтогаз & ЗВГ' : currentLang === 'sk' ? 'Plynárenstvo & LPG' : 'Oil, Gas & LPG'
    },
    {
      icon: <Wrench className="w-3.5 h-3.5 text-[#0284c7]" />,
      label: currentLang === 'uk' ? 'Трубопроводи & Насоси' : currentLang === 'sk' ? 'Potrubia & Čerpadlá' : 'Piping & Pumping'
    },
    {
      icon: <Wheat className="w-3.5 h-3.5 text-[#166534] dark:text-[#16a34a]" />,
      label: currentLang === 'uk' ? 'Елеватори & Агро' : currentLang === 'sk' ? 'Silá & Agro' : 'Grain Silos & Agro'
    },
    {
      icon: <Cpu className="w-3.5 h-3.5 text-[#6b21a8] dark:text-[#9333ea]" />,
      label: currentLang === 'uk' ? 'Нестандартне обладнання' : currentLang === 'sk' ? 'Zákazkové zariadenia' : 'Custom Process Units'
    }
  ];

  // Common Portrait Card Element for clean responsive reuse
  const PortraitCard = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`relative bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-2.5 sm:p-3 backdrop-blur-xl shadow-2xl group overflow-hidden ${isMobile ? 'max-w-md mx-auto my-5' : ''}`}>
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-surface-2)]">
        <picture className="w-full h-full block">
          <source srcSet={portraitHeroWebp} type="image/webp" />
          <img
            src={portraitHeroWebp}
            alt={currentLang === 'uk' ? 'Віталій Долінський — Інженер-конструктор' : 'Vitalii Dolynskyi — Mechanical Design Engineer'}
            width={960}
            height={1141}
            className="w-full h-full object-cover object-top filter grayscale-[8%] group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-105"
            loading="eager"
          />
        </picture>

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

        {/* Floating Location Status Badge */}
        <div className="absolute top-3.5 left-3.5 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/25 text-xs sm:text-sm text-white font-mono flex items-center gap-2 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-extrabold">Čadca, Slovakia / EU (On-Site & Remote)</span>
        </div>

        {/* Bottom Spec Caption inside image */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/85 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/25 flex items-center justify-between shadow-lg">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[var(--accent-blue)] font-extrabold font-gost-mono">
              {currentLang === 'uk' ? 'Кваліфікація & Нормативи' : currentLang === 'sk' ? 'Kvalifikácia & Normy' : 'Standards & CAD'}
            </div>
            <div className="text-sm sm:text-base text-white font-bold mt-0.5 leading-snug">
              AutoCAD · SolidWorks · ISO / DIN / ДСТУ
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[85vh] pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-16 lg:pb-20 flex items-start overflow-hidden bg-[var(--bg-primary)]">
      {/* Ambient glowing artistic orbs */}
      <div className="absolute -top-24 -right-24 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-[var(--accent-blue)] opacity-15 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[var(--accent-pink)] opacity-10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 2xl:gap-16 items-start">
          
          {/* Left Column: Mobile Flow follows: Name -> Title -> Disciplines -> Problem Scope -> Photo -> Stats -> CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Real semantic H1 for search engines & accessibility matching search intent and active language */}
            <h1 className="sr-only">
              {currentLang === 'uk' && 'Віталій Долінський — Механічний & Промисловий Інженер-Конструктор | Проєктування машин, обладнання та 3D CAD'}
              {currentLang === 'sk' && 'Vitalii Dolynskyi — Strojný & Priemyselný Inžinier Konštruktér | Konštrukcia strojov, potrubí a 3D CAD'}
              {currentLang === 'en' && 'Vitalii Dolynskyi — Mechanical & Industrial Design Engineer | Custom Machinery, Equipment & 3D CAD'}
            </h1>

            {/* 1. Engineer Brand Identity Banner */}
            <div className="w-full mb-3.5 sm:mb-4">
              <BrandLogoBanner />
            </div>

            {/* 2. Subtitle / Concrete Engineering Specialization */}
            <h2 className="text-base sm:text-lg lg:text-xl font-gost-mono uppercase tracking-wider text-[var(--accent-blue)] font-black mb-2.5 sm:mb-3 leading-snug">
              {UI_TRANSLATIONS.heroSubtitle[currentLang]}
            </h2>

            {/* 3. Fast Domain Badges: 5-Second Scan */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
              {domainBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-surface-2)] border border-[var(--border-color)] text-xs font-gost-mono font-bold text-[var(--text-primary)] shadow-sm"
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>

            {/* 4. Core Value Proposition: Concrete outcome, not fluff */}
            <p className="text-base sm:text-lg font-gost font-bold text-[var(--text-primary)] tracking-wide mb-3 sm:mb-4 leading-snug">
              &ldquo;{UI_TRANSLATIONS.heroCoreMessage[currentLang]}&rdquo;
            </p>

            {/* 5. Concrete Problem Scope: What problems I solve */}
            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4 sm:mb-5 font-normal">
              {UI_TRANSLATIONS.heroDesc[currentLang]}
            </p>

            {/* Mobile Portrait: displayed right here on mobile (< lg), hidden on desktop */}
            <div className="lg:hidden w-full mb-5">
              <PortraitCard isMobile />
            </div>

            {/* 6. Operational Track Record Badge */}
            <div className="bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-5 backdrop-blur-xl mb-6 max-w-xl shadow-sm flex items-start gap-3 transition-colors hover:border-[var(--accent-blue)]">
              <ShieldCheck className="w-5 h-5 text-[#166534] dark:text-[#16a34a] mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm lg:text-base text-[var(--text-primary)] leading-relaxed font-semibold">
                {UI_TRANSLATIONS.heroImpact[currentLang]}
              </p>
            </div>

            {/* 7. Bento Statistics Grid with GOST Numbers */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-7 sm:mb-8 max-w-xl">
              <div className="rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] p-3 sm:p-4.5 flex flex-col justify-end shadow-sm relative group hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] hover:scale-105 hover:-translate-y-1 transition-[transform,background-color,border-color] duration-300 ease-out cursor-pointer">
                <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 text-[var(--text-secondary)] font-gost-mono font-bold leading-tight line-clamp-2">
                  {UI_TRANSLATIONS.statProjects[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] font-gost">
                  {CONTACT_DATA.completedProjects}
                </span>
              </div>

              <div className="rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] p-3 sm:p-4.5 flex flex-col justify-end shadow-sm relative group hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] hover:scale-105 hover:-translate-y-1 transition-[transform,background-color,border-color] duration-300 ease-out cursor-pointer">
                <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 text-[var(--text-secondary)] font-gost-mono font-bold leading-tight line-clamp-2">
                  {UI_TRANSLATIONS.statExp[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] font-gost">
                  {CONTACT_DATA.experienceYears}{currentLang === 'uk' ? 'р' : currentLang === 'sk' ? 'r' : 'y'}
                </span>
              </div>

              <div className="rounded-2xl bg-[var(--accent-blue)] p-3 sm:p-4.5 flex flex-col justify-end text-white shadow-md relative group hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out cursor-pointer">
                <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider font-black opacity-95 mb-1 font-gost-mono leading-tight line-clamp-2">
                  {UI_TRANSLATIONS.statEdu[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-gost">
                  {CONTACT_DATA.degreesCount}
                </span>
              </div>
            </div>

            {/* 8. Clear JTBD Action Pair: Explore Proven Cases (Proof) OR Submit Technical Inquiry (Next Step) */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 items-stretch sm:items-center max-w-xl">
              {/* Primary CTA: Proof of Similar Problems Solved */}
              <a
                href="#portfolio"
                className="group cursor-pointer bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-extrabold text-sm sm:text-base uppercase tracking-wider transition-[transform,background-color] hover:scale-105 inline-flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl min-h-[46px]"
              >
                <span>{UI_TRANSLATIONS.btnViewProjects[currentLang]}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Direct Technical Problem Discussion */}
              <a
                href="#contact"
                className="group cursor-pointer bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] text-[var(--text-primary)] hover:text-[var(--accent-blue)] px-6 py-3.5 sm:px-6.5 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm min-h-[46px]"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                <span>{UI_TRANSLATIONS.btnContact[currentLang]}</span>
              </a>

              {/* Tertiary CTA: Formal CV Download */}
              <button
                onClick={onOpenResume}
                className="group cursor-pointer bg-[var(--badge-bg)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] px-5 py-3.5 sm:px-5.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center justify-center gap-2 backdrop-blur-sm shadow-sm min-h-[46px]"
                title="Generate & Download Engineering Resume in PDF (EN / SK / UK)"
              >
                <FileText className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>{UI_TRANSLATIONS.btnDownloadCV[currentLang]}</span>
              </button>
            </div>

          </div>

            {/* Desktop Portrait Column: Visible only on lg+ */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-start">
            <PortraitCard />
          </div>

        </div>
      </div>
    </section>
  );
};
