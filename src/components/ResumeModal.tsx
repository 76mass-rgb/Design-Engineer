import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { CV_TRANSLATIONS } from '../data/cvData';
import { 
  X, 
  Download, 
  Printer, 
  Globe, 
  FileText, 
  Check, 
  Copy, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Layers,
  Cpu,
  Loader2,
  Award
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  defaultLang,
}) => {
  const [selectedLang, setSelectedLang] = useState<Language>(defaultLang);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const cvPrintRef = useRef<HTMLDivElement>(null);

  // Synchronize resume language with the active viewing language of the website
  useEffect(() => {
    if (isOpen) {
      setSelectedLang(defaultLang);
    }
  }, [defaultLang, isOpen]);

  if (!isOpen) return null;

  const cv = CV_TRANSLATIONS[selectedLang];

  const handleDownloadPDF = async () => {
    if (!cvPrintRef.current) return;
    setIsGenerating(true);

    try {
      // Temporarily ensure background styling for canvas capture
      const element = cvPrintRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution for crisp printing & text
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1024,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;

      // Additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }

      const fileName = selectedLang === 'uk' 
        ? 'CV_Vitaliy_Dolinskiy_UK.pdf' 
        : `CV_Vitalii_Dolynskyi_${selectedLang.toUpperCase()}.pdf`;

      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback: trigger print dialog
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    if (!cvPrintRef.current) {
      window.print();
      return;
    }

    try {
      // Create an isolated hidden iframe for printing to guarantee clean B&W preview without UI clutter
      const printFrame = document.createElement('iframe');
      printFrame.setAttribute('style', 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;');
      document.body.appendChild(printFrame);

      const frameDoc = printFrame.contentWindow?.document;
      if (!frameDoc) {
        window.print();
        return;
      }

      const cvClone = cvPrintRef.current.cloneNode(true) as HTMLElement;

      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html lang="${selectedLang}">
          <head>
            <meta charset="utf-8" />
            <title>${cv.name} - CV (${selectedLang.toUpperCase()})</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 12mm 15mm;
              }
              * {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              body {
                margin: 0;
                padding: 0;
                background: #ffffff !important;
                color: #000000 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                font-size: 13px;
                line-height: 1.45;
              }
              #printable-cv-document {
                width: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                box-shadow: none !important;
                background: #ffffff !important;
                color: #000000 !important;
              }
              .avoid-break {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
              }
              svg {
                stroke: currentColor !important;
              }
            </style>
          </head>
          <body>
            ${cvClone.outerHTML}
          </body>
        </html>
      `);
      frameDoc.close();

      setTimeout(() => {
        try {
          printFrame.contentWindow?.focus();
          printFrame.contentWindow?.print();
        } catch (err) {
          console.warn('Iframe print fallback to window.print', err);
          window.print();
        } finally {
          setTimeout(() => {
            if (document.body.contains(printFrame)) {
              document.body.removeChild(printFrame);
            }
          }, 2000);
        }
      }, 300);
    } catch (e) {
      console.error('Print execution error:', e);
      window.print();
    }
  };

  const handleCopyText = () => {
    const textSummary = `
========================================
${cv.name.toUpperCase()}
${cv.title}
========================================
Phone: ${cv.phone}
Email: ${cv.email}
Location: ${cv.location}
Experience: ${cv.experienceYears}+ Years
Completed Projects: ${cv.completedProjects}

EXECUTIVE SUMMARY:
${cv.summary}

CORE COMPETENCIES:
${cv.specializations.map(s => `• ${s}`).join('\n')}

STANDARDS & CODES:
${cv.standards.join(', ')}

SOFTWARE:
${cv.software.map(s => `• ${s.name} (${s.level}) - ${s.category}`).join('\n')}

WORK EXPERIENCE:
${cv.workExperience.map(w => `
[${w.period}] ${w.role}
${w.companyOrScope} | ${w.location}
${w.highlights.map(h => ` - ${h}`).join('\n')}
`).join('\n')}

EDUCATION:
${cv.education.map(e => `
[${e.year}] ${e.degree}
${e.institution} (${e.specialty})
`).join('\n')}

LANGUAGES:
${cv.languages.map(l => `• ${l.lang}: ${l.level}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const modalTitles = {
    uk: {
      title: 'Інженерне резюме (Curriculum Vitae)',
      subtitle: 'Офіційний профіль інженера-проектувальника · ISO / ГОСТ / Eurocodes',
      downloadBtn: 'Завантажити PDF',
      generating: 'Генерація PDF...',
      printBtn: 'Друк',
      copyBtn: 'Скопіювати текст',
      copied: 'Скопійовано!',
      langLabel: 'Мова документа:'
    },
    sk: {
      title: 'Inžiniersky životopis (Curriculum Vitae)',
      subtitle: 'Oficiálny profil projektového inžiniera · ISO / EN / Eurokódy',
      downloadBtn: 'Stiahnuť PDF',
      generating: 'Generujem PDF...',
      printBtn: 'Tlačiť',
      copyBtn: 'Kopírovať text',
      copied: 'Skopírované!',
      langLabel: 'Jazyk dokumentu:'
    },
    en: {
      title: 'Engineering Curriculum Vitae (Resume)',
      subtitle: 'Lead Industrial Design Engineer Profile · ASME / EN / ISO Compliant',
      downloadBtn: 'Download PDF',
      generating: 'Generating PDF...',
      printBtn: 'Print / Save',
      copyBtn: 'Copy Text',
      copied: 'Copied!',
      langLabel: 'Document Language:'
    }
  };

  const t = modalTitles[selectedLang];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto resume-modal-overlay h-[100dvh] w-full"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[100dvh] sm:h-auto sm:max-h-[94vh] bg-[var(--bg-surface)] border-0 sm:border border-[var(--border-color)] shadow-2xl rounded-none sm:rounded-3xl overflow-hidden flex flex-col z-10 my-0 sm:my-auto resume-modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-[var(--bg-surface-2)] border-b border-[var(--border-color)] no-print">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--accent-blue)] flex-shrink-0" />
              <h3 className="font-gost text-lg sm:text-2xl font-black uppercase tracking-tight text-[var(--text-primary)] truncate">
                {t.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-gost-mono mt-0.5 hidden sm:block font-medium">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Language Selector in Modal */}
            <div className="flex items-center bg-[var(--bg-surface-3)] p-1 rounded-full border border-[var(--border-color)]">
              <Globe className="w-4 h-4 text-[var(--text-muted)] ml-2.5 mr-1 hidden sm:inline-block" />
              {(['uk', 'sk', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`text-xs sm:text-sm font-black font-gost-mono px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all uppercase cursor-pointer min-h-[32px] ${
                    selectedLang === lang
                      ? 'bg-[var(--accent-blue)] text-white shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {lang === 'uk' ? 'УКР' : lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--bg-surface-3)] hover:bg-[var(--accent-blue)] text-[var(--text-primary)] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm flex-shrink-0"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-[var(--bg-surface)] border-b border-[var(--border-color)] text-xs sm:text-sm font-gost-mono font-bold no-print">
          <div className="hidden sm:flex items-center gap-2 text-[var(--text-secondary)] font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Format: ISO A4 Print / High-DPI PDF Ready (B&amp;W Clean)</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap w-full sm:w-auto justify-end">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] border border-[var(--border-color)] transition-all cursor-pointer font-bold text-xs sm:text-sm shadow-sm min-h-[40px]"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.copied : t.copyBtn}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] border border-[var(--border-color)] transition-all cursor-pointer font-bold text-xs sm:text-sm shadow-sm min-h-[40px]"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printBtn}</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white transition-all cursor-pointer font-black text-xs sm:text-base shadow-md hover:scale-105 disabled:opacity-50 disabled:pointer-events-none min-h-[40px]"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.generating}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{t.downloadBtn}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Document Preview Canvas (Styled cleanly in pure black-and-white A4 document layout) */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-6 bg-[var(--bg-canvas)] flex justify-center resume-modal-body">
          <div
            ref={cvPrintRef}
            id="printable-cv-document"
            className="w-full max-w-[820px] bg-white text-black p-4 sm:p-8 md:p-12 shadow-2xl rounded-none border border-black font-sans overflow-x-hidden"
            style={{
              fontFamily: "'Liberation Sans', Arial, Helvetica, sans-serif",
              color: '#000000',
              backgroundColor: '#ffffff'
            }}
          >
            {/* CV Header: Engineering Blueprint Stamp Layout */}
            <div className="border-b-2 border-black pb-5 mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold tracking-widest text-black uppercase mb-1">
                    CURRICULUM VITAE // INDUSTRIAL DESIGN ENGINEER
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase leading-none font-gost">
                    {cv.name}
                  </h1>
                  <p className="text-base sm:text-lg font-bold text-black mt-2 font-gost-mono leading-snug">
                    {cv.title}
                  </p>
                </div>

                <div className="bg-white p-3.5 border border-black text-sm font-mono space-y-1.5 sm:text-right">
                  <div className="flex sm:justify-end items-center gap-1.5 font-bold text-black">
                    <Phone className="w-4 h-4 text-black" />
                    <span>{cv.phone}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 font-semibold text-black">
                    <Mail className="w-4 h-4 text-black" />
                    <span>{cv.email}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 text-black font-medium">
                    <MapPin className="w-4 h-4 text-black" />
                    <span>Čadca, Slovakia</span>
                  </div>
                  <div className="text-xs text-black font-semibold pt-1 border-t border-black flex items-center justify-between sm:justify-end gap-2">
                    <span>{cv.experienceYears}+ Yrs Experience</span>
                    <span>•</span>
                    <span className="font-bold text-black">{cv.completedProjects} Built &amp; Operational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-5 avoid-break">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-black border-b-2 border-black pb-1 mb-2.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-black" />
                <span>{selectedLang === 'uk' ? 'ПРОФЕСІЙНИЙ ПРОФІЛЬ' : selectedLang === 'sk' ? 'PROFESIONÁLNY PROFIL' : 'PROFESSIONAL PROFILE & SUMMARY'}</span>
              </h2>
              <p className="text-sm sm:text-base text-black leading-relaxed text-justify font-normal">
                {cv.summary}
              </p>
            </div>

            {/* Two-Column Matrix: Specializations & Standards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 avoid-break">
              <div>
                <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-black border-b-2 border-black pb-1 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-black" />
                  <span>{selectedLang === 'uk' ? 'КЛЮЧОВА СПЕЦІАЛІЗАЦІЯ' : selectedLang === 'sk' ? 'HLAVNÉ ŠPECIALIZÁCIE' : 'CORE SPECIALIZATIONS'}</span>
                </h2>
                <ul className="space-y-1.5 text-sm text-black">
                  {cv.specializations.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-black font-bold mt-0.5">•</span>
                      <span className="leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-black border-b-2 border-black pb-1 mb-2.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-black" />
                  <span>{selectedLang === 'uk' ? 'НОРМАТИВНІ СТАНДАРТИ' : selectedLang === 'sk' ? 'NORMY A ŠTANDARDY' : 'CODES & STANDARDS'}</span>
                </h2>
                <ul className="space-y-1.5 text-sm text-black">
                  {cv.standards.map((std, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-black font-bold mt-0.5">✓</span>
                      <span className="leading-snug font-medium">{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Software Competencies Table */}
            <div className="mb-5 avoid-break">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-black border-b-2 border-black pb-1 mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-black" />
                <span>{selectedLang === 'uk' ? 'ІНЖЕНЕРНЕ ПРОГРАМНЕ ЗАБЕЗПЕЧЕННЯ' : selectedLang === 'sk' ? 'INŽINIERSKY SOFTVÉR' : 'ENGINEERING SOFTWARE & CAD SUITE'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {cv.software.map((sw, idx) => (
                  <div key={idx} className="p-2 bg-white border border-black text-sm">
                    <div className="font-bold text-black">{sw.name}</div>
                    <div className="text-xs text-black font-mono font-bold">{sw.level}</div>
                    <div className="text-xs text-neutral-800 truncate">{sw.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div className="mb-5">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-black border-b-2 border-black pb-1 mb-3 flex items-center gap-1.5 avoid-break">
                <Briefcase className="w-4 h-4 text-black" />
                <span>{selectedLang === 'uk' ? 'ДОСВІД РОБОТИ ТА ПРОЕКТУВАННЯ' : selectedLang === 'sk' ? 'PRACOVNÉ SKÚSENOSTI' : 'WORK EXPERIENCE & INDUSTRIAL MILESTONES'}</span>
              </h2>
              <div className="space-y-3.5">
                {cv.workExperience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-black pl-3.5 relative avoid-break">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h3 className="text-base font-bold text-black font-gost">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono font-bold text-black border border-black px-2 py-0.5 bg-white">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm text-black font-semibold mb-1">
                      {exp.companyOrScope} · <span className="italic">{exp.location}</span>
                    </div>
                    <ul className="space-y-1 text-sm text-black">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-black font-bold mt-0.5">-</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Education */}
            <div className="mb-5 avoid-break">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-black border-b-2 border-black pb-1 mb-2.5 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-black" />
                <span>{selectedLang === 'uk' ? 'ВИЩА ОСВІТА ТА НАУКОВА ДІЯЛЬНІСТЬ' : selectedLang === 'sk' ? 'VYSOKOŠKOLSKÉ VZDELANIE' : 'HIGHER EDUCATION & ACADEMIC CREDENTIALS'}</span>
              </h2>
              <div className="space-y-2.5">
                {cv.education.map((edu, idx) => (
                  <div key={idx} className="bg-white p-3 border border-black">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="text-sm font-bold text-black font-gost">
                        {edu.degree}
                      </div>
                      <span className="text-xs font-mono font-bold text-black border border-black px-2 py-0.5 bg-white">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-black mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="text-sm text-neutral-800 mt-0.5 italic">
                      {edu.specialty}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Footnote */}
            <div className="pt-3 border-t-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-black font-mono avoid-break">
              <div>
                <span className="font-bold text-black mr-2 uppercase">
                  {selectedLang === 'uk' ? 'Мови:' : selectedLang === 'sk' ? 'Jazyky:' : 'Languages:'}
                </span>
                <span className="text-black font-medium">
                  {cv.languages.map(l => `${l.lang} (${l.level})`).join(' · ')}
                </span>
              </div>
              <div className="text-neutral-800 text-xs">
                ISO 9001 / ГОСТ 2.304 · Document ID: VD-ENG-CV-{selectedLang.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
