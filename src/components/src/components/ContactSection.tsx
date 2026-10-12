import React, { useState } from 'react';
import { Language } from '../types';
import { CONTACT_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  FileText, 
  Download 
} from 'lucide-react';

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
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-pink)] opacity-10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              {UI_TRANSLATIONS.contactSecNum[currentLang]} // {UI_TRANSLATIONS.inquirySecBadge[currentLang]}
            </div>
            <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {UI_TRANSLATIONS.contactTitle ? UI_TRANSLATIONS.contactTitle[currentLang] : UI_TRANSLATIONS.inquiryTitle[currentLang]}
            </h2>
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-gost-mono text-[var(--text-secondary)] bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full w-fit font-bold shadow-sm">
            {currentLang === 'uk' ? 'Відкритий для контрактів та консультацій' : currentLang === 'sk' ? 'Dostupný pre kontrakty a konzultácie' : 'Available for Contracts & Consultations'}
          </div>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* Phone / WhatsApp */}
          <div className="p-5 sm:p-6 bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl transition-[transform,border-color] duration-300 ease-out hover:scale-[1.01] flex items-center justify-between group shadow-sm">
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 pr-2">
                <div className="font-gost-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                  {currentLang === 'uk' ? 'Телефон / WhatsApp' : currentLang === 'sk' ? 'Telefón / WhatsApp' : 'Direct Phone & WhatsApp'}
                </div>
                <div className="font-gost-mono text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors truncate">
                  {CONTACT_DATA.phone}
                </div>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard(CONTACT_DATA.phone, 'phone')}
              className="w-10 h-10 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm flex-shrink-0"
              title="Copy Phone Number"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#166534] dark:text-[#16a34a]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Email */}
          <div className="p-5 sm:p-6 bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl transition-[transform,border-color] duration-300 ease-out hover:scale-[1.01] flex items-center justify-between group shadow-sm">
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 pr-2">
                <div className="font-gost-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                  Email
                </div>
                <div className="font-gost-mono text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors break-all">
                  {CONTACT_DATA.email}
                </div>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard(CONTACT_DATA.email, 'email')}
              className="w-10 h-10 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm flex-shrink-0"
              title="Copy Email Address"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-[#166534] dark:text-[#16a34a]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-5 sm:p-6 bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl backdrop-blur-xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-pink)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-gost-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                {currentLang === 'uk' ? 'Базова локація' : currentLang === 'sk' ? 'Lokalita' : 'Location Base'}
              </div>
              <div className="font-gost text-base sm:text-lg font-bold text-[var(--text-primary)]">
                {CONTACT_DATA.location}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 font-medium">
                {CONTACT_DATA.locationDetails[currentLang]}
              </div>
            </div>
          </div>

          {/* Download CV */}
          {onOpenResume && (
            <div 
              onClick={onOpenResume}
              className="p-5 sm:p-6 bg-[var(--badge-bg)] border border-[var(--accent-blue)]/50 hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl flex items-center justify-between gap-4 cursor-pointer group transition-[transform,border-color] duration-300 ease-out hover:scale-[1.01] shadow-md"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-blue)] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-gost-mono text-xs sm:text-xs uppercase tracking-wider text-[var(--accent-blue)] font-black">
                    PDF // ISO 9001
                  </div>
                  <div className="font-gost text-sm sm:text-base lg:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                    {currentLang === 'uk' ? 'Завантажити повне резюме інженера' : currentLang === 'sk' ? 'Stiahnuť inžiniersky životopis (PDF)' : 'Download Engineering CV (PDF)'}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 font-medium truncate">
                    {currentLang === 'uk' ? 'Українська · Словацька · Англійська' : currentLang === 'sk' ? 'Slovenčina · Angličtina · Ukrajinčina' : 'English · Slovak · Ukrainian'}
                  </div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--accent-blue)] text-white flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
