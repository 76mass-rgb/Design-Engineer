import React, { useState } from 'react';
import { Language } from '../types';
import { CONTACT_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { Phone, Mail, MapPin, Check, Copy, FileText, Download } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-pink)] opacity-10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              {UI_TRANSLATIONS.contactSecNum[currentLang]} // {currentLang === 'uk' ? 'ПРЯМИЙ ЗВ\'ЯЗОК ТА СПІВПРАЦЯ' : currentLang === 'sk' ? 'PRIAMY KONTAKT A SPOLUPRÁCA' : 'DIRECT REACH & REQUISITION'}
            </div>
            <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {UI_TRANSLATIONS.contactTitle[currentLang]}
            </h2>
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-gost-mono text-[var(--text-secondary)] bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full w-fit font-bold shadow-sm">
            {currentLang === 'uk' ? 'Відкритий для інженерних контрактів та проєктів' : currentLang === 'sk' ? 'Dostupný pre inžinierske projekty a zákazky' : 'Available for Engineering Contracts & Projects'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Big Statement & Detailed Note */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-gost text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] leading-[1.1] mb-5 sm:mb-6">
                {UI_TRANSLATIONS.contactHeadingPre[currentLang]}<br />
                <span className="text-[var(--accent-blue)]">
                  {UI_TRANSLATIONS.contactHeadingAccent[currentLang]}
                </span><br />
                {UI_TRANSLATIONS.contactHeadingPost[currentLang]}
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 max-w-xl font-medium">
                {UI_TRANSLATIONS.contactSub[currentLang]}
              </p>
            </div>
          </div>

          {/* Right Column: Direct Contact Links & CV Download */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            {/* Phone Link */}
            <div className="p-4 sm:p-5 lg:p-6 bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl transition-[transform,background-color,border-color] duration-300 ease-out hover:scale-[1.01] sm:hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:z-20 hover:bg-[var(--bg-surface)] relative flex items-center justify-between group shadow-sm cursor-pointer">
              <a
                href={`tel:${CONTACT_DATA.phoneRaw}`}
                className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 pr-2">
                  <div className="font-gost-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                    {currentLang === 'uk' ? 'Телефон / WhatsApp' : currentLang === 'sk' ? 'Telefón / WhatsApp' : 'Direct Phone'}
                  </div>
                  <div className="font-gost-mono text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors truncate">
                    {CONTACT_DATA.phone}
                  </div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(CONTACT_DATA.phone, 'phone')}
                className="w-11 h-11 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm flex-shrink-0"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Email Link */}
            <div className="p-4 sm:p-5 lg:p-6 bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl transition-[transform,background-color,border-color] duration-300 ease-out hover:scale-[1.01] sm:hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:z-20 hover:bg-[var(--bg-surface)] relative flex items-center justify-between group shadow-sm cursor-pointer">
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 pr-2">
                  <div className="font-gost-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                    Email
                  </div>
                  <div className="font-gost-mono text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors break-all">
                    {CONTACT_DATA.email}
                  </div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(CONTACT_DATA.email, 'email')}
                className="w-11 h-11 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm flex-shrink-0"
                title="Copy Email Address"
              >
                {copiedField === 'email' ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Location badge */}
            <div className="p-4 sm:p-5 lg:p-6 bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl transition-[transform,background-color,border-color] duration-300 ease-out hover:scale-[1.01] sm:hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:z-20 hover:bg-[var(--bg-surface)] relative flex items-center gap-3.5 sm:gap-4 shadow-sm cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--badge-bg)] text-[var(--accent-pink)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-gost-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                  {currentLang === 'uk' ? 'Локація' : currentLang === 'sk' ? 'Lokalita' : 'Location Base'}
                </div>
                <div className="font-gost text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  {CONTACT_DATA.location}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-[var(--text-secondary)] mt-0.5 font-medium">
                  {CONTACT_DATA.locationDetails[currentLang]}
                </div>
              </div>
            </div>

            {/* Engineering CV Action Card */}
            {onOpenResume && (
              <div 
                onClick={onOpenResume}
                className="p-4 sm:p-5 lg:p-6 bg-[var(--badge-bg)] border border-[var(--accent-blue)]/50 hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl flex items-center justify-between gap-3 sm:gap-4 cursor-pointer group transition-[transform,border-color] duration-300 ease-out hover:scale-[1.01] sm:hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:z-20 relative shadow-md"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--accent-blue)] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-gost-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--accent-blue)] font-black">
                      PDF // ISO 9001
                    </div>
                    <div className="font-gost text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {currentLang === 'uk' ? 'Завантажити повне резюме інженера' : currentLang === 'sk' ? 'Stiahnuť inžiniersky životopis (PDF)' : 'Download Full Engineering CV (PDF)'}
                    </div>
                    <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 font-medium truncate">
                      {currentLang === 'uk' ? 'Вибір мови: Українська, Словацька, Англійська' : currentLang === 'sk' ? 'Voľba jazyka: Slovenčina, Angličtina, Ukrajinčina' : 'Multi-language: English, Slovak, Ukrainian'}
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--accent-blue)] text-white flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
