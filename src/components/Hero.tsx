import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { ArrowRight, Layers, Box, CheckCircle2, FileText, Send, PhoneCall, ShieldCheck, Wrench, Factory, Cpu, Flame, Wheat } from 'lucide-react';
import portraitHeroWebp from '../assets/images/vitaliy_engineer.webp';
import { BrandLogoBanner } from './BrandLogoBanner';

interface HeroProps {
  currentLang: Language;
  onOpenResume: () => void;
  onNavigate?: (sectionId: string) => void;
  /** Squeeze-page mode: whole hero fits the viewport on desktop (no scrolling) */
  fitScreen?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenResume, onNavigate, fitScreen = false }) => {
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
  const PortraitCard = ({ isMobile = false, fill = false }: { isMobile?: boolean; fill?: boolean }) => (
    <div className={`relative bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-2.5 sm:p-3 backdrop-blur-xl shadow-2xl group overflow-hidden ${isMobile ? 'max-w-md mx-auto my-5' : ''} ${fill ? 'h-full flex flex-col' : ''}`}>
      {/* Yellow ball running around the frame */}
      <span className="photo-orbit-ball" aria-hidden="true" />
      <div className={`relative rounded-2xl overflow-hidden bg-[var(--bg-surface-2)] ${fill ? 'flex-1 min-h-0' : 'aspect-[4/5]'}`}>
        <picture className={fill ? 'absolute inset-0 block' : 'w-full h-full block'}>
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

        {/* Bottom Spec Caption inside image */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black/70 sm:bg-black/85 backdrop-blur-md px-2.5 py-1.5 sm:p-4 rounded-lg sm:rounded-xl border border-white/20 sm:border-white/25 flex items-center justify-between shadow-lg">
          <div>
            <div className="hidden sm:block text-xs uppercase tracking-widest text-[var(--accent-blue)] font-extrabold font-gost-mono">
              {currentLang === 'uk' ? 'Кваліфікація & Нормативи' : currentLang === 'sk' ? 'Kvalifikácia & Normy' : 'Standards & CAD'}
            </div>
            <div className="text-[12px] sm:text-base text-white font-bold sm:mt-0.5 leading-snug">
              AutoCAD · SolidWorks · ISO / DIN / ДСТУ
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const heroDetails = (
    <>
            {/* 4. Core Value Proposition: Concrete outcome, not fluff */}
            <p className="hero-quote text-base sm:text-lg font-gost font-bold text-[var(--text-primary)] tracking-wide mb-3 sm:mb-4 leading-normal">
              &ldquo;{UI_TRANSLATIONS.heroCoreMessage[currentLang]}&rdquo;
            </p>

            {/* 5. Concrete Problem Scope: What problems I solve */}
            <p className="hero-desc text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4 sm:mb-5 font-normal">
              {UI_TRANSLATIONS.heroDesc[currentLang]}
            </p>

            {/* 6. Operational Track Record Badge */}
            <div className="hero-stat bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-5 backdrop-blur-xl mb-6 max-w-xl shadow-sm flex items-start gap-3 transition-colors hover:border-[var(--accent-blue)]">
              <ShieldCheck className="w-5 h-5 text-[#166534] dark:text-[#16a34a] mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm lg:text-base text-[var(--text-primary)] leading-relaxed font-semibold">
                {UI_TRANSLATIONS.heroImpact[currentLang]}
              </p>
            </div>

      {/* 6. Fast Domain Badges (moved below the track-record badge): 5-Second Scan */}
            <div className="hero-chips flex flex-wrap gap-2 mb-2">
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

          </>
  );

  return (
    <section className={`relative min-h-[85vh] pt-20 sm:pt-24 pb-14 sm:pb-16 flex items-start overflow-hidden bg-[var(--bg-primary)] ${fitScreen ? 'lg:flex-1 lg:min-h-min lg:pt-[88px] lg:pb-4' : 'lg:pt-28 lg:pb-20'}`}>
      {/* Light technical grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      {/* Ambient glowing artistic orbs */}
      <div className="absolute -top-24 -right-24 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-[var(--accent-blue)] opacity-15 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[var(--accent-pink)] opacity-10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 ${fitScreen ? 'lg:h-full' : ''}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 2xl:gap-16 items-start ${fitScreen ? 'lg:h-full lg:items-stretch' : ''}`}>
          
          {/* Left Column: Mobile Flow follows: Name -> Title -> Disciplines -> Problem Scope -> Photo -> Stats -> CTAs */}
          <div className={`lg:col-span-7 flex flex-col justify-start ${fitScreen ? 'hero-fit-left lg:justify-center lg:min-h-0' : ''}`}>
            
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

            {/* Mobile / Tablet Portrait: displayed right here on mobile & tablet (< lg), hidden on desktop */}
            <div className="lg:hidden w-full mb-4 sm:mb-5">
              <PortraitCard isMobile />
            </div>

            {/* Details: right under the subtitle (all screen sizes) */}
            <div className="mt-2 lg:mt-4">
              {heroDetails}
            </div>
          </div>

            {/* Desktop Portrait Column: Visible only on lg+ */}
          <div className={`hidden lg:flex lg:col-span-5 flex-col justify-start ${fitScreen ? 'lg:min-h-0' : ''}`}>
            <PortraitCard fill={fitScreen} />
          </div>

        </div>
      </div>
    </section>
  );
};
