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
  return (
    <section className="relative min-h-[85vh] pt-24 sm:pt-28 lg:pt-28 pb-16 lg:pb-20 flex items-start overflow-hidden bg-[var(--bg-primary)]">
      {/* Ambient glowing artistic orbs */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] bg-[var(--accent-blue)] opacity-15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-[var(--accent-pink)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[var(--accent-purple)] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 2xl:gap-16 items-start">
          
          {/* Left Hero Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Engineer Brand Identity Banner (from user's custom design) */}
            <div className="mb-4 sm:mb-5">
              <BrandLogoBanner />
            </div>

            {/* Subtitle / Discipline */}
            <p className="text-base sm:text-lg font-gost-mono uppercase tracking-wider text-[var(--text-primary)] font-extrabold mb-3">
              {UI_TRANSLATIONS.heroSubtitle[currentLang]}
            </p>

            {/* Core Message */}
            <p className="text-base sm:text-lg font-gost font-semibold text-[var(--accent-blue)] tracking-wide mb-5">
              &ldquo;{UI_TRANSLATIONS.heroCoreMessage[currentLang]}&rdquo;
            </p>

            {/* Main Philosophy paragraph */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-6 font-medium">
              {UI_TRANSLATIONS.heroDesc[currentLang]}
            </p>

            {/* Operational Proof quote */}
            <div className="bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 backdrop-blur-xl mb-6 max-w-xl shadow-sm flex items-start gap-3.5 transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-2xl hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 animate-pulse" />
              <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-bold">
                {UI_TRANSLATIONS.heroImpact[currentLang]}
              </p>
            </div>

            {/* Bento Statistics Grid with GOST Numbers (Moved above buttons as requested) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-xl">
              <div className="rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] p-3.5 sm:p-5 flex flex-col justify-end shadow-sm relative group hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer">
                <span className="text-xs sm:text-sm uppercase tracking-wider mb-1 text-[var(--text-secondary)] font-gost-mono font-bold leading-tight">
                  {UI_TRANSLATIONS.statProjects[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] font-gost">
                  {CONTACT_DATA.completedProjects}
                </span>
              </div>

              <div className="rounded-2xl bg-[var(--glass-bg)] border border-[var(--border-color)] p-3.5 sm:p-5 flex flex-col justify-end shadow-sm relative group hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer">
                <span className="text-xs sm:text-sm uppercase tracking-wider mb-1 text-[var(--text-secondary)] font-gost-mono font-bold leading-tight">
                  {UI_TRANSLATIONS.statExp[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-primary)] font-gost">
                  {CONTACT_DATA.experienceYears}{currentLang === 'uk' ? 'р' : currentLang === 'sk' ? 'r' : 'y'}
                </span>
              </div>

              <div className="rounded-2xl bg-[var(--accent-blue)] p-3.5 sm:p-5 flex flex-col justify-end text-white shadow-md relative group hover:scale-105 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-out cursor-pointer">
                <span className="text-xs sm:text-sm uppercase tracking-wider font-black opacity-95 mb-1 font-gost-mono leading-tight">
                  {UI_TRANSLATIONS.statEdu[currentLang]}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-gost">
                  {CONTACT_DATA.degreesCount}
                </span>
              </div>
            </div>

            {/* Standardized CTAs (Moved to the bottom) */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#portfolio"
                className="group cursor-pointer bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white px-8 py-4 sm:px-9 sm:py-4.5 rounded-full font-extrabold text-base sm:text-lg uppercase tracking-wider transition-all hover:scale-105 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl"
              >
                <span>{UI_TRANSLATIONS.btnViewProjects[currentLang]}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="group cursor-pointer bg-[var(--badge-bg)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] px-6 py-4 sm:px-7 sm:py-4.5 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider transition-all text-[var(--text-primary)] hover:text-[var(--accent-blue)] inline-flex items-center gap-2.5 backdrop-blur-sm shadow-sm"
                title="Generate & Download Engineering Resume in PDF (EN / SK / UK)"
              >
                <FileText className="w-5 h-5 text-[var(--accent-blue)]" />
                <span>{UI_TRANSLATIONS.btnDownloadCV[currentLang]}</span>
              </button>
            </div>

          </div>

          {/* Right Hero Column: Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Portrait Frame with Rounded Glass Card & Overlays */}
            <div className="relative bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-3 backdrop-blur-xl shadow-2xl group overflow-hidden">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-surface-2)]">
                <picture className="w-full h-full block">
                  <source srcSet={portraitWebp} type="image/webp" />
                  <img
                    src={portraitJpg}
                    alt={currentLang === 'uk' ? 'Віталій Долінський' : 'Dolynskyi Vitalii'}
                    className="w-full h-full object-cover object-top filter grayscale-[8%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </picture>

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Status Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/25 text-sm text-white font-mono flex items-center gap-2.5 shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-extrabold">Čadca, Slovakia / EU</span>
                </div>

                {/* Bottom spec caption inside image */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/25 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--accent-blue)] font-extrabold">
                      {UI_TRANSLATIONS.specTitle1[currentLang]}
                    </div>
                    <div className="text-base text-white font-bold mt-0.5">
                      {currentLang === 'uk' ? 'Машинобудування · Обладнання · 3D CAD' : currentLang === 'sk' ? 'Konštrukcia strojov · Zariadenia · 3D CAD' : 'Machine Design · Equipment · 3D CAD'}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono font-extrabold text-white bg-white/25 px-3.5 py-1.5 rounded-full">
                      {currentLang === 'uk' ? '27+ Років' : currentLang === 'sk' ? '27+ Rokov' : '27+ Yrs'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

