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
    window.print();
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-2xl rounded-3xl overflow-hidden flex flex-col z-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[var(--bg-surface-2)] border-b border-[var(--border-color)]">
          <div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--accent-blue)]" />
              <h3 className="font-gost text-xl sm:text-2xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                {t.title}
              </h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] font-gost-mono mt-0.5 hidden sm:block font-medium">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector in Modal */}
            <div className="flex items-center bg-[var(--bg-surface-3)] p-1 rounded-full border border-[var(--border-color)]">
              <Globe className="w-4 h-4 text-[var(--text-muted)] ml-2.5 mr-1 hidden sm:inline-block" />
              {(['uk', 'sk', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`text-sm font-black font-gost-mono px-3.5 py-1.5 rounded-full transition-all uppercase cursor-pointer ${
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
              className="w-10 h-10 rounded-full bg-[var(--bg-surface-3)] hover:bg-[var(--accent-blue)] text-[var(--text-primary)] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 bg-[var(--bg-surface)] border-b border-[var(--border-color)] text-sm font-gost-mono font-bold">
          <div className="flex items-center gap-2 text-[var(--text-secondary)] font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Format: ISO A4 Print / High-DPI PDF Ready</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] border border-[var(--border-color)] transition-all cursor-pointer font-bold text-sm shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.copied : t.copyBtn}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] border border-[var(--border-color)] transition-all cursor-pointer font-bold text-sm shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>{t.printBtn}</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white transition-all cursor-pointer font-black text-sm sm:text-base shadow-md hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
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

        {/* Scrollable Document Preview Canvas (Styled cleanly in white A4 document theme for crisp output) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/50 flex justify-center">
          <div
            ref={cvPrintRef}
            id="printable-cv-document"
            className="w-full max-w-[820px] bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-sm border border-slate-300 font-sans"
            style={{
              fontFamily: "'Liberation Sans', Arial, Helvetica, sans-serif",
              color: '#0f172a',
            }}
          >
            {/* CV Header: Engineering Blueprint Stamp Layout */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-mono font-extrabold tracking-widest text-blue-700 uppercase mb-1">
                    CURRICULUM VITAE // INDUSTRIAL DESIGN ENGINEER
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 uppercase leading-none font-gost">
                    {cv.name}
                  </h1>
                  <p className="text-base sm:text-lg font-bold text-blue-800 mt-2 font-gost-mono leading-snug">
                    {cv.title}
                  </p>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg border border-slate-300 text-sm font-mono space-y-1.5 sm:text-right">
                  <div className="flex sm:justify-end items-center gap-1.5 font-bold text-slate-900">
                    <Phone className="w-4 h-4 text-blue-700" />
                    <span>{cv.phone}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 font-semibold text-slate-800">
                    <Mail className="w-4 h-4 text-blue-700" />
                    <span>{cv.email}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 text-slate-700 font-medium">
                    <MapPin className="w-4 h-4 text-blue-700" />
                    <span>Čadca, Slovakia</span>
                  </div>
                  <div className="text-xs text-slate-700 font-semibold pt-1 border-t border-slate-200 flex items-center justify-between sm:justify-end gap-2">
                    <span>{cv.experienceYears}+ Yrs Experience</span>
                    <span>•</span>
                    <span className="font-bold text-blue-800">{cv.completedProjects} Built &amp; Operational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-6">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-slate-900 bg-slate-100 px-3 py-1.5 border-l-4 border-blue-700 mb-2.5">
                {selectedLang === 'uk' ? 'ПРОФЕСІЙНИЙ ПРОФІЛЬ' : selectedLang === 'sk' ? 'PROFESIONÁLNY PROFIL' : 'PROFESSIONAL PROFILE & SUMMARY'}
              </h2>
              <p className="text-base text-slate-800 leading-relaxed text-justify font-normal">
                {cv.summary}
              </p>
            </div>

            {/* Two-Column Matrix: Specializations & Standards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-slate-900 bg-slate-100 px-3 py-1.5 border-l-4 border-blue-700 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-700" />
                  <span>{selectedLang === 'uk' ? 'КЛЮЧОВА СПЕЦІАЛІЗАЦІЯ' : selectedLang === 'sk' ? 'HLAVNÉ ŠPECIALIZÁCIE' : 'CORE SPECIALIZATIONS'}</span>
                </h2>
                <ul className="space-y-1.5 text-sm text-slate-800">
                  {cv.specializations.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-700 font-bold mt-0.5">•</span>
                      <span className="leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-slate-900 bg-slate-100 px-3 py-1.5 border-l-4 border-blue-700 mb-2.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-700" />
                  <span>{selectedLang === 'uk' ? 'НОРМАТИВНІ СТАНДАРТИ' : selectedLang === 'sk' ? 'NORMY A ŠTANDARDY' : 'CODES & STANDARDS'}</span>
                </h2>
                <ul className="space-y-1.5 text-sm text-slate-800">
                  {cv.standards.map((std, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-700 font-bold mt-0.5">✓</span>
                      <span className="leading-snug font-medium">{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Software Competencies Table */}
            <div className="mb-6">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-slate-900 bg-slate-100 px-3 py-1.5 border-l-4 border-blue-700 mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-700" />
                <span>{selectedLang === 'uk' ? 'ІНЖЕНЕРНЕ ПРОГРАМНЕ ЗАБЕЗПЕЧЕННЯ' : selectedLang === 'sk' ? 'INŽINIERSKY SOFTVÉR' : 'ENGINEERING SOFTWARE & CAD SUITE'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {cv.software.map((sw, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded text-sm">
                    <div className="font-bold text-slate-950">{sw.name}</div>
                    <div className="text-xs text-blue-700 font-mono font-bold">{sw.level}</div>
                    <div className="text-xs text-slate-600 truncate">{sw.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div className="mb-6">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-slate-900 bg-slate-100 px-3 py-1.5 border-l-4 border-blue-700 mb-3 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-blue-700" />
                <span>{selectedLang === 'uk' ? 'ДОСВІД РОБОТИ ТА ПРОЕКТУВАННЯ' : selectedLang === 'sk' ? 'PRACOVNÉ SKÚSENOSTI' : 'WORK EXPERIENCE & INDUSTRIAL MILESTONES'}</span>
              </h2>
              <div className="space-y-4">
                {cv.workExperience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-slate-300 pl-4 relative">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <h3 className="text-base font-bold text-slate-950 font-gost">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm text-slate-700 font-medium mb-1.5">
                      {exp.companyOrScope} · <span className="italic">{exp.location}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-slate-800">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-slate-400 mt-0.5">-</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Education */}
            <div className="mb-6">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-slate-900 bg-slate-100 px-3 py-1.5 border-l-4 border-blue-700 mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>{selectedLang === 'uk' ? 'ВИЩА ОСВІТА ТА НАУКОВА ДІЯЛЬНІСТЬ' : selectedLang === 'sk' ? 'VYSOKOŠKOLSKÉ VZDELANIE' : 'HIGHER EDUCATION & ACADEMIC CREDENTIALS'}</span>
              </h2>
              <div className="space-y-3">
                {cv.education.map((edu, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="text-sm font-bold text-slate-950 font-gost">
                        {edu.degree}
                      </div>
                      <span className="text-sm font-mono font-bold text-blue-700">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-800 mt-0.5">
                      {edu.institution}
                    </div>
                    <div className="text-sm text-slate-600 mt-0.5 italic">
                      {edu.specialty}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Representative Projects */}
            <div className="mb-6">
              <h2 className="text-sm font-bold font-mono tracking-widest uppercase text-slate-900 bg-slate-100 px-3 py-1.5 border-l-4 border-blue-700 mb-3">
                {selectedLang === 'uk' ? 'ВИБРАНІ РЕАЛІЗОВАНІ ОБ\'ЄКТИ' : selectedLang === 'sk' ? 'VYBRANÉ REALIZOVANÉ PROJEKTY' : 'SELECTED MAJOR ENGINEERING PROJECTS'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {cv.keyProjects.map((proj, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <div className="flex items-center justify-between font-bold text-slate-900 mb-0.5">
                      <span className="font-gost text-sm font-bold">{proj.name}</span>
                      <span className="font-mono text-blue-700 text-sm">{proj.year}</span>
                    </div>
                    <div className="text-xs font-mono text-blue-800 font-bold mb-1">{proj.type}</div>
                    <p className="text-xs text-slate-700 leading-snug">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Footnote */}
            <div className="pt-4 border-t border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <div>
                <span className="font-bold text-slate-900 mr-2 font-mono uppercase">
                  {selectedLang === 'uk' ? 'Мови:' : selectedLang === 'sk' ? 'Jazyky:' : 'Languages:'}
                </span>
                <span className="text-slate-700 font-medium">
                  {cv.languages.map(l => `${l.lang} (${l.level})`).join(' · ')}
                </span>
              </div>
              <div className="text-slate-500 font-mono text-xs">
                ISO 9001 / ГОСТ 2.304 · Document ID: VD-ENG-CV-{selectedLang.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
