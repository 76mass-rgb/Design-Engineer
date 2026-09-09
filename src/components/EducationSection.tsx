import React from 'react';
import { Language } from '../types';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, Car, CheckCircle2, BookmarkCheck } from 'lucide-react';

interface EducationSectionProps {
  currentLang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ currentLang }) => {
  return (
    <section id="education" className="py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              {UI_TRANSLATIONS.educationSecNum[currentLang]} // {currentLang === 'uk' ? 'АКАДЕМІЧНА ТА ПРОФЕСІЙНА ОСВІТА' : currentLang === 'sk' ? 'AKADEMICKÉ A ODBORNÉ VZDELANIE' : 'ACADEMIC & PROFESSIONAL CREDENTIALS'}
            </div>
            <h2 className="font-gost text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {UI_TRANSLATIONS.educationTitle[currentLang]}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-sm sm:text-base font-gost-mono text-[var(--text-secondary)] bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-5 py-2.5 rounded-full font-bold shadow-sm">
              {currentLang === 'uk' ? '3 Інженерні дипломи · Аспірантура R&D' : currentLang === 'sk' ? '3 inžinierske tituly · Postgraduálny výskum' : '3 Engineering Degrees · Postgraduate R&D'}
            </div>
            <div className="text-sm sm:text-base font-gost-mono text-[var(--accent-blue)] bg-[var(--badge-bg)] border border-[var(--border-color)] px-5 py-2.5 rounded-full font-bold shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5" />
              {currentLang === 'uk' ? 'Сейсміка & НПЗ Сертифіковано' : currentLang === 'sk' ? 'Seizmika & Rafinérie' : 'Seismic & Refinery Certified'}
            </div>
          </div>
        </div>

        {/* Timeline Academic Grid */}
        <div className="mb-16">
          <div className="text-sm sm:text-base font-black uppercase tracking-wider text-[var(--text-secondary)] mb-6 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-blue)]"></span>
            {currentLang === 'uk' ? 'Вища академічна та наукова освіта' : currentLang === 'sk' ? 'Vysokoškolské a vedecké vzdelanie' : 'Higher Academic & Research Degrees'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((item, index) => (
              <div
                key={item.id}
                className="bg-[var(--glass-bg)] hover:bg-[var(--bg-surface)] p-7 sm:p-8 rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-all duration-300 ease-out hover:scale-[1.04] sm:hover:scale-[1.05] backdrop-blur-xl group hover:-translate-y-2 relative shadow-sm hover:shadow-2xl hover:z-20 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-sm font-gost-mono text-[var(--accent-blue)] font-black bg-[var(--badge-bg)] border border-[var(--border-color)] px-3.5 py-1 rounded-full">
                      {item.year}
                    </span>
                    <span className="text-xs sm:text-sm font-gost-mono uppercase tracking-wider text-[var(--text-secondary)] px-3 py-1 bg-[var(--bg-surface-2)] rounded-full border border-[var(--border-color)] font-bold">
                      {index === 1 ? 'R&D Level' : 'Specialist / MSc'}
                    </span>
                  </div>

                  <h3 className="font-gost text-xl sm:text-2xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors mb-2">
                    {item.school[currentLang]}
                  </h3>

                  <div className="text-sm sm:text-base font-bold text-[var(--accent-blue)] mb-3 leading-snug">
                    {item.spec[currentLang]}
                  </div>

                  {item.details && (
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-3.5 border-t border-[var(--border-color)] font-normal">
                      {item.details[currentLang]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications Section */}
        <div className="mb-16">
          <div className="text-sm sm:text-base font-black uppercase tracking-wider text-[var(--text-secondary)] mb-6 flex items-center gap-2.5">
            <BookmarkCheck className="w-5 h-5 text-[var(--accent-blue)]" />
            {currentLang === 'uk' ? 'Сертифікація та підвищення кваліфікації' : currentLang === 'sk' ? 'Odborná certifikácia a kurzy' : 'Professional Certifications & Specialized Training'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                className="bg-[var(--glass-bg)] hover:bg-[var(--bg-surface)] p-7 sm:p-8 rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-all duration-300 ease-out hover:scale-[1.04] sm:hover:scale-[1.05] backdrop-blur-xl group hover:-translate-y-2 relative shadow-sm hover:shadow-2xl hover:z-20 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-sm font-gost-mono text-[var(--accent-blue)] font-black bg-[var(--badge-bg)] border border-[var(--border-color)] px-3.5 py-1 rounded-full">
                      {cert.year}
                    </span>
                    <span className="text-xs sm:text-sm font-gost-mono text-[var(--text-secondary)] bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-3 py-1 rounded-full font-bold">
                      {cert.badge[currentLang]}
                    </span>
                  </div>

                  <h3 className="font-gost text-lg sm:text-xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors mb-1.5">
                    {cert.name[currentLang]}
                  </h3>

                  <div className="text-sm sm:text-base font-bold text-[var(--accent-blue)] mb-3">
                    {cert.institution[currentLang]}
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-3.5 border-t border-[var(--border-color)] font-normal">
                    {cert.description[currentLang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Degree Engineering Strength & Driver License Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 sm:p-8 bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm transition-all duration-300 ease-out hover:scale-[1.025] hover:-translate-y-1.5 hover:shadow-2xl hover:border-[var(--accent-blue)] cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--badge-bg)] text-[var(--accent-blue)] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm font-mono uppercase text-[var(--accent-blue)] font-black tracking-wider mb-1">
                  {currentLang === 'uk' ? 'Синтез двох інженерних дисциплін' : currentLang === 'sk' ? 'Kombinácia dvoch inžinierskych odborov' : 'Dual Engineering Competence'}
                </div>
                <div className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed">
                  {currentLang === 'uk' 
                    ? 'Інженер-механік хімічного обладнання + Цивільний інженер-будівельник промислових споруд'
                    : currentLang === 'sk'
                    ? 'Strojný inžinier chemických zariadení + Stavebný inžinier priemyselných stavieb'
                    : 'Process & Mechanical Equipment Engineer + Civil & Structural Industrial Engineer'}
                </div>
              </div>
            </div>
            <span className="text-sm sm:text-base font-mono text-[var(--text-secondary)] bg-[var(--bg-surface-2)] px-4.5 py-2.5 rounded-full border border-[var(--border-color)] whitespace-nowrap font-bold">
              Eurocodes &amp; ASME Ready
            </span>
          </div>

          <div className="p-6 sm:p-8 bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl backdrop-blur-xl flex items-center gap-4 shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-2xl hover:border-[var(--accent-blue)] cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-[var(--badge-bg)] text-[var(--accent-blue)] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Car className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm font-mono uppercase text-[var(--accent-blue)] font-black tracking-wider mb-1">
                {currentLang === 'uk' ? 'Мобільність та посвідчення водія' : currentLang === 'sk' ? 'Mobilita & Vodičský preukaz' : 'Mobility & Driving License'}
              </div>
              <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                {currentLang === 'uk'
                  ? 'Категорії A, B, C · Власне авто · Готовий до виїздів на об\'єкти'
                  : currentLang === 'sk'
                  ? 'Kategórie A, B, C · Vlastné vozidlo · Pripravený na služobné cesty'
                  : 'Categories A, B, C · Personal vehicle · Available for site visits'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
