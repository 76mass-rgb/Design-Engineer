import React from 'react';
import { Language } from '../types';
import { SKILLS_DATA, UI_TRANSLATIONS, ENGINEERING_TOOLS_DATA } from '../data/portfolioData';
import { Wrench, CheckCircle, Cpu, FileSpreadsheet, Box, Compass, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              {UI_TRANSLATIONS.skillsSecNum[currentLang]} // {currentLang === 'uk' ? 'КЛЮЧОВА ІНЖЕНЕРНА ЕКСПЕРТИЗА' : currentLang === 'sk' ? 'KĽÚČOVÁ INŽINIERSKA EXPERTÍZA' : 'CORE ENGINEERING EXPERTISE'}
            </div>
            <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {UI_TRANSLATIONS.skillsTitle[currentLang]}
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-lg font-medium leading-relaxed">
            {currentLang === 'uk' && '6 ключових напрямків машинобудування, проектування промислового обладнання та спеціальних механізмів.'}
            {currentLang === 'sk' && '6 kľúčových oblastí konštrukcie strojov, priemyselných zariadení a jednoúčelových mechanizmov.'}
            {currentLang === 'en' && '6 core domains of machine design, industrial equipment, mechanical systems, and manufacturing engineering.'}
          </p>
        </div>

        {/* 6 Core Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              className="relative bg-[var(--glass-bg)] p-6 sm:p-8 lg:p-9 rounded-3xl border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-all duration-300 ease-out hover:scale-[1.02] sm:hover:scale-[1.04] hover:-translate-y-1.5 hover:shadow-2xl hover:z-30 hover:bg-[var(--bg-surface)] backdrop-blur-xl group shadow-sm flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Icon & ID */}
                <div className="flex items-start justify-between mb-4 sm:mb-5">
                  <span className="text-2xl sm:text-3xl p-3 sm:p-3.5 bg-[var(--badge-bg)] rounded-2xl border border-[var(--border-color)] group-hover:scale-110 transition-transform inline-block">
                    {skill.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[var(--accent-blue)] uppercase tracking-wider font-extrabold bg-[var(--badge-bg)] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[var(--border-color)]">
                    {skill.id.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[var(--text-primary)] mb-2.5 sm:mb-3 group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                  {skill.name[currentLang]}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed transition-colors mb-5 sm:mb-6 font-normal">
                  {skill.desc[currentLang]}
                </p>
              </div>

              {/* Technical tags */}
              {skill.tags && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-[var(--border-color)]">
                  {skill.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm font-mono uppercase tracking-wider px-2.5 sm:px-3 py-1 bg-[var(--badge-bg)] text-[var(--text-primary)] rounded-md border border-[var(--border-color)] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CAD & Engineering Software Stack Banner with Engineering Statement */}
        <div className="bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-sm">
          
          {/* Engineering statement quote */}
          <div className="mb-6 p-4 sm:p-6 rounded-2xl bg-[var(--bg-surface-2)] border border-[var(--border-color)] transition-all duration-300 ease-out hover:scale-[1.01] sm:hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:border-[var(--accent-blue)] cursor-pointer">
            <p className="italic text-sm sm:text-base lg:text-lg text-[var(--text-primary)] font-bold leading-relaxed">
              {ENGINEERING_TOOLS_DATA.statement[currentLang]}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 pb-5 sm:pb-6 border-b border-[var(--border-color)]">
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[var(--accent-blue)] font-extrabold mb-1 font-gost-mono">
                {UI_TRANSLATIONS.softwareProficiency[currentLang]}
              </div>
              <h4 className="font-gost text-lg sm:text-xl lg:text-2xl font-bold uppercase text-[var(--text-primary)] tracking-tight">
                {UI_TRANSLATIONS.cadIsometrics[currentLang]}
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-[var(--text-secondary)] font-gost-mono bg-[var(--bg-surface-2)] px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full border border-[var(--border-color)] w-fit font-bold">
              <Compass className="w-4 h-4 text-[var(--accent-blue)]" />
              <span>ISO · DIN · EN · ASME · {currentLang === 'uk' ? 'ГОСТ' : 'GOST'}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {ENGINEERING_TOOLS_DATA.tools.map((tool, index) => {
              const toolName = 'nameLocalized' in tool && tool.nameLocalized 
                ? (tool.nameLocalized as Record<Language, string>)[currentLang] 
                : tool.name;
              const toolCategory = typeof tool.category === 'object' 
                ? (tool.category as Record<Language, string>)[currentLang] 
                : tool.category;
              const toolDesc = typeof tool.desc === 'object' 
                ? (tool.desc as Record<Language, string>)[currentLang] 
                : tool.desc;

              return (
                <div
                  key={index}
                  className="relative p-3.5 sm:p-5 bg-[var(--bg-surface-2)] border border-[var(--border-color)] rounded-2xl transition-all duration-300 ease-out hover:scale-[1.05] sm:hover:scale-[1.12] hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--accent-blue)] hover:bg-[var(--bg-surface)] hover:z-30 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="font-gost text-sm sm:text-base lg:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {toolName}
                    </div>
                    <div className="text-xs sm:text-sm text-[var(--accent-blue)] mt-1 leading-snug font-bold">
                      {toolCategory}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] mt-2 line-clamp-2 group-hover:line-clamp-none leading-relaxed font-medium transition-colors">
                    {toolDesc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

