import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS, CONTACT_DATA } from '../data/portfolioData';
import { ArrowRight, Sparkles, Layers, Box, CheckCircle2, FileText } from 'lucide-react';
import portraitWebp from '../assets/images/vitaliy_portrait_1787830489312.webp';
import portraitJpg from '../assets/images/vitaliy_portrait_1787830489312.jpg';
import { BrandLogoBanner } from './BrandLogoBanner';

interface HeroProps {
  currentLang: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenResume }) => {
  // Common Portrait Card Element for clean responsive reuse
  const PortraitCard = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`relative bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-2.5 sm:p-3 backdrop-blur-xl shadow-2xl group overflow-hidden ${isMobile ? 'max-w-md mx-auto my-5' : ''}`}>
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-surface-2)]">
        <picture className="w-full h-full block">
          <source srcSet={portraitWebp} type="image/webp" />
          <img
            src={portraitJpg}
            alt={currentLang === 'uk' ? 'Віталій Долінський' : 'Dolynskyi Vitalii'}
            className="w-full h-full object-cover object-top filter grayscale-[8%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </picture>

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

        {/* Floating Location Status Badge */}
        <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/25 text-xs sm:text-sm text-white font-mono flex items-center gap-2 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-extrabold">Čadca, Slovakia / EU</span>
        </div>

        {/* Bottom Spec Caption inside image */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/80 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/25 flex items-center justify-between shadow-lg">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[var(--accent-blue)] font-extrabold">
              {UI_TRANSLATIONS.specTitle1[currentLang]}
            </div>
            <div className="text-sm sm:text-base text-white font-bold mt-0.5 leading-snug">
              {currentLang === 'uk' ? 'Машинобудування · Обладнання · 3D CAD' : currentLang === 'sk' ? 'Konštrukcia strojov · Zariadenia · 3D CAD' : 'Machine Design · Equipment · 3D CAD'}
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
          
          {/* Left Column: Mobile Flow follows: Name -> Title -> Description -> Photo -> Stats -> CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* 1. Engineer Brand Identity Banner */}
            <div className="w-full mb-3.5 sm:mb-5">
              <BrandLogoBanner />
            </div>

            {/* 2. Subtitle / Discipline */}
            <h2 className="text-base sm:text-lg lg:text-xl font-gost-mono uppercase tracking-wider text-[var(--text-primary)] font-black mb-2 sm:mb-3 leading-snug">
              {UI_TRANSLATIONS.heroSubtitle[currentLang]}
            </h2>

            {/* Core Message */}
            <p className="text-base sm:text-lg font-gost font-semibold text-[var(--accent-blue)] tracking-wide mb-4 sm:mb-5 leading-snug">
              &ldquo;{UI_TRANSLATIONS.heroCoreMessage[currentLang]}&rdquo;
            </p>

            {/* 3. Short Description / Philosophy */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4 sm:mb-6 font-medium">
              {UI_TRANSLATIONS.heroDesc[currentLang]}
            </p>

            {/* 4. Mobile Portrait: displayed right here on mobile (< lg), hidden on desktop */}
            <div className="lg:hidden w-full mb-5">
              <PortraitCard isMobile />
            </div>

            {/* 5. Operational Proof Quote */}
            <div className="bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-6 backdrop-blur-xl mb-6 max-w-xl shadow-sm flex items-start gap-3.5 transition-all duration-300 ease-out hover:scale-[1.02] sm:hover:scale-[1.03] hover:-translate-y-1 sm:hover:-translate-y-1.5 hover:shadow-2xl hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] cursor-pointer">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 animate-pulse" />
              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-primary)] leading-relaxed font-bold">
                {UI_TRANSLATIONS.heroImpact[currentLang]}
              </p>
            </div>

            {/* 6. Bento Statistics Grid with GOST Numbers */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-7 sm:mb-8 max-w-xl">
              <div className="rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] p-3 sm:p-4.5 flex flex-col justify-end shadow-sm relative group hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 text-[var(--text-secondary)] font-gost-mono font-bold leading-tight line-clamp-2">
                  {UI_TRANSLATIONS.statProjects[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] font-gost">
                  {CONTACT_DATA.completedProjects}
                </span>
              </div>

              <div className="rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] p-3 sm:p-4.5 flex flex-col justify-end shadow-sm relative group hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 text-[var(--text-secondary)] font-gost-mono font-bold leading-tight line-clamp-2">
                  {UI_TRANSLATIONS.statExp[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] font-gost">
                  {CONTACT_DATA.experienceYears}{currentLang === 'uk' ? 'р' : currentLang === 'sk' ? 'r' : 'y'}
                </span>
              </div>

              <div className="rounded-2xl bg-[var(--accent-blue)] p-3 sm:p-4.5 flex flex-col justify-end text-white shadow-md relative group hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider font-black opacity-95 mb-1 font-gost-mono leading-tight line-clamp-2">
                  {UI_TRANSLATIONS.statEdu[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-gost">
                  {CONTACT_DATA.degreesCount}
                </span>
              </div>
            </div>

            {/* 7 & 8. Standardized CTAs: Full-width on mobile, row on tablet/desktop */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center max-w-xl">
              <a
                href="#portfolio"
                className="group cursor-pointer bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-extrabold text-sm sm:text-base lg:text-lg uppercase tracking-wider transition-all hover:scale-105 inline-flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl min-h-[46px]"
              >
                <span>{UI_TRANSLATIONS.btnViewProjects[currentLang]}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="group cursor-pointer bg-[var(--badge-bg)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wider transition-all text-[var(--text-primary)] hover:text-[var(--accent-blue)] inline-flex items-center justify-center gap-2.5 backdrop-blur-sm shadow-sm min-h-[46px]"
                title="Generate & Download Engineering Resume in PDF (EN / SK / UK)"
              >
                <FileText className="w-5 h-5 text-[var(--accent-blue)]" />
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
