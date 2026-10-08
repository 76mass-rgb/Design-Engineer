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
  Download, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Ruler, 
  Camera, 
  Layers, 
  Cpu, 
  FileCode,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Interactive Inquiry Form State (Email-based, zero backend overhead)
  const [selectedCategory, setSelectedCategory] = useState<string>('machine-design');
  const [inquiryText, setInquiryText] = useState<string>('');
  const [senderContact, setSenderContact] = useState<string>('');
  const [isCopiedTemplate, setIsCopiedTemplate] = useState<boolean>(false);

  const categoryOptions = [
    {
      id: 'machine-design',
      label: {
        uk: 'Машинобудування & Приводи',
        sk: 'Strojný dizajn & Pohony',
        en: 'Machine Design & Drives'
      }
    },
    {
      id: 'piping-pumps',
      label: {
        uk: 'Трубопроводи & Насоси',
        sk: 'Potrubia & Čerpadlá',
        en: 'Piping & Pumping Skids'
      }
    },
    {
      id: 'steel-structures',
      label: {
        uk: 'Металоконструкції & Рами',
        sk: 'Oceľové konštrukcie & Rámy',
        en: 'Steel Structures & Frames'
      }
    },
    {
      id: 'tanks-vessels',
      label: {
        uk: 'Ємності & Резервуари',
        sk: 'Nádrže & Zásobníky',
        en: 'Tanks & Pressure Vessels'
      }
    },
    {
      id: 'cad-drawings',
      label: {
        uk: '3D CAD & Робочі креслення',
        sk: '3D CAD & Výrobná dokumentácia',
        en: '3D CAD & Shop Drawings'
      }
    },
    {
      id: 'modernization',
      label: {
        uk: 'Модернізація & Реверс-інжиніринг',
        sk: 'Modernizácia & Reverzné inžinierstvo',
        en: 'Modernization & Reverse Eng.'
      }
    }
  ];

  const currentCategoryLabel = categoryOptions.find(c => c.id === selectedCategory)?.label[currentLang] || categoryOptions[0].label[currentLang];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Generate structured inquiry text
  const generateInquiryBody = () => {
    const lines = [
      currentLang === 'uk' ? '--- ТЕХНІЧНИЙ ЗАПИТ НА ІНЖЕНЕРНЕ ПРОЄКТУВАННЯ ---' :
      currentLang === 'sk' ? '--- TECHNICKÝ DOPYT NA INŽINIERSKY NÁVRH ---' :
      '--- TECHNICAL ENGINEERING INQUIRY ---',
      '',
      `${currentLang === 'uk' ? 'Напрямок / Тип задачі' : currentLang === 'sk' ? 'Oblasť úlohy' : 'Task Domain'}: ${currentCategoryLabel}`,
      `${currentLang === 'uk' ? 'Контактні дані замовника' : currentLang === 'sk' ? 'Kontaktné údaje' : 'Sender Contact'}: ${senderContact.trim() || (currentLang === 'uk' ? 'Вказані у підписі листа' : currentLang === 'sk' ? 'Uvedené v podpise' : 'Provided in signature')}`,
      '',
      `${currentLang === 'uk' ? 'Опис задачі / вихідні дані' : currentLang === 'sk' ? 'Popis zadania / vstupné údaje' : 'Task Description & Available Data'}:`,
      inquiryText.trim() || (currentLang === 'uk' ? '(Короткий опис або прикріплені файли)' : currentLang === 'sk' ? '(Stručný popis alebo priložené súbory)' : '(Brief description or attached files)'),
      '',
      currentLang === 'uk' ? '--- ПРИКРІПЛЕНІ МАТЕРІАЛИ (за наявності) ---' :
      currentLang === 'sk' ? '--- PRILOŽENÉ MATERIÁLY (ak sú k dispozícii) ---' :
      '--- ATTACHED MATERIALS (if available) ---',
      currentLang === 'uk' ? '[ ] Креслення / Схеми (PDF, DWG, DXF)' :
      currentLang === 'sk' ? '[ ] Výkresy / Schémy (PDF, DWG, DXF)' :
      '[ ] Drawings / Layouts (PDF, DWG, DXF)',
      currentLang === 'uk' ? '[ ] Фотографії вузла / цеху / пошкоджень' :
      currentLang === 'sk' ? '[ ] Fotografie z prevádzky / poškodení' :
      '[ ] Photos of equipment / shop floor / worn parts',
      currentLang === 'uk' ? '[ ] Габаритні розміри / ТУ / Паспорт' :
      currentLang === 'sk' ? '[ ] Rozmery / Špecifikácia / Pasport' :
      '[ ] Dimensions / Datasheets / Manuals',
      ''
    ];
    return lines.join('\n');
  };

  const handleSendInquiry = () => {
    const subject = encodeURIComponent(`[Engineering Inquiry] ${currentCategoryLabel} - V. Dolynskyi`);
    const body = encodeURIComponent(generateInquiryBody());
    window.location.href = `mailto:${CONTACT_DATA.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(generateInquiryBody());
    setIsCopiedTemplate(true);
    setTimeout(() => setIsCopiedTemplate(false), 3000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `${currentLang === 'uk' ? 'Вітаю, Віталію! Маю інженерне завдання:' : currentLang === 'sk' ? 'Dobrý deň, Vitalii! Mám inžinierske zadanie:' : 'Hello Vitalii! I have an engineering inquiry:'} [${currentCategoryLabel}]. ${inquiryText.trim() ? inquiryText.trim() : ''}`
    );
    window.open(`https://wa.me/421905168884?text=${text}`, '_blank');
  };

  // What you can send items
  const whatToSendList = [
    {
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-blue)]" />,
      title: currentLang === 'uk' ? 'Опис проєкту' : currentLang === 'sk' ? 'Popis projektu' : 'Project Description',
      desc: UI_TRANSLATIONS.inquiryItemDesc[currentLang]
    },
    {
      icon: <FileCode className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />,
      title: currentLang === 'uk' ? 'Креслення & Ескізи' : currentLang === 'sk' ? 'Výkresy & Náčrty' : 'Drawings & Sketches',
      desc: UI_TRANSLATIONS.inquiryItemDrawings[currentLang]
    },
    {
      icon: <Ruler className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
      title: currentLang === 'uk' ? 'Габаритні розміри' : currentLang === 'sk' ? 'Rozmery & Priestor' : 'Dimensions & Limits',
      desc: UI_TRANSLATIONS.inquiryItemDimensions[currentLang]
    },
    {
      icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
      title: currentLang === 'uk' ? 'Технічні характеристики' : currentLang === 'sk' ? 'Špecifikácie' : 'Equipment Specs',
      desc: UI_TRANSLATIONS.inquiryItemSpecs[currentLang]
    },
    {
      icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
      title: currentLang === 'uk' ? 'Фотографії з об\'єкта' : currentLang === 'sk' ? 'Fotografie z prevádzky' : 'Photos & Site Pictures',
      desc: UI_TRANSLATIONS.inquiryItemPhotos[currentLang]
    },
    {
      icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
      title: currentLang === 'uk' ? 'Наявна документація' : currentLang === 'sk' ? 'Existujúca dokumentácia' : 'Existing Documentation',
      desc: UI_TRANSLATIONS.inquiryItemDocs[currentLang]
    }
  ];

  // What happens next steps
  const nextSteps = [
    {
      step: '01',
      title: UI_TRANSLATIONS.inquiryStep1Title[currentLang],
      desc: UI_TRANSLATIONS.inquiryStep1Desc[currentLang],
      badge: currentLang === 'uk' ? '≤ 24 години' : currentLang === 'sk' ? '≤ 24 hodín' : '≤ 24 hours'
    },
    {
      step: '02',
      title: UI_TRANSLATIONS.inquiryStep2Title[currentLang],
      desc: UI_TRANSLATIONS.inquiryStep2Desc[currentLang],
      badge: currentLang === 'uk' ? 'Прямий контакт' : currentLang === 'sk' ? 'Priamy kontakt' : 'Direct Call/Chat'
    },
    {
      step: '03',
      title: UI_TRANSLATIONS.inquiryStep3Title[currentLang],
      desc: UI_TRANSLATIONS.inquiryStep3Desc[currentLang],
      badge: currentLang === 'uk' ? 'Фіксований обсяг' : currentLang === 'sk' ? 'Fixný rozpočet' : 'Clear Milestones'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent-pink)] opacity-10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
              {UI_TRANSLATIONS.contactSecNum[currentLang]} // {UI_TRANSLATIONS.inquirySecBadge[currentLang]}
            </div>
            <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {UI_TRANSLATIONS.inquiryTitle[currentLang]}
            </h2>
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-gost-mono text-[var(--text-secondary)] bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full w-fit font-bold shadow-sm">
            {currentLang === 'uk' ? 'Відкритий для інженерних контрактів та консультацій' : currentLang === 'sk' ? 'Dostupný pre inžinierske projekty a zákazky' : 'Available for Engineering Contracts & Inquiries'}
          </div>
        </div>

        {/* Section Description & JTBD Positioning */}
        <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 sm:mb-12 max-w-3xl font-medium">
          {UI_TRANSLATIONS.inquirySubtitle[currentLang]}
        </p>

        {/* Main Grid: Left = Technical Inquiry Builder, Right = What You Can Send & Direct Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN (7 cols): Interactive Technical Inquiry Builder */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-blue)] opacity-5 blur-2xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center font-black">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-gost text-lg sm:text-xl font-black uppercase tracking-wide text-[var(--text-primary)]">
                    {UI_TRANSLATIONS.formSubmit[currentLang]}
                  </h3>
                  <div className="text-xs text-[var(--text-secondary)] font-gost-mono">
                    {currentLang === 'uk' ? 'Швидкий запит без зайвої бюрократії' : currentLang === 'sk' ? 'Rýchly dopyt bez zbytočnej byrokracie' : 'Direct engineering inquiry · Zero friction'}
                  </div>
                </div>
              </div>

              {/* 1. Category Chips */}
              <div className="mb-5">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-2.5 font-gost-mono">
                  {UI_TRANSLATIONS.inquiryFieldCategory[currentLang]}
                </label>
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl border transition-all cursor-pointer font-medium ${
                        selectedCategory === cat.id
                          ? 'bg-[var(--accent-blue)] text-white border-[var(--accent-blue)] shadow-md font-bold'
                          : 'bg-[var(--bg-surface-2)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent-blue)]/60 hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {cat.label[currentLang]}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Message textarea (Optional) */}
              <div className="mb-5">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-2 font-gost-mono">
                  {UI_TRANSLATIONS.inquiryFieldMessage[currentLang]}
                </label>
                <textarea
                  rows={4}
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  placeholder={UI_TRANSLATIONS.inquiryPlaceholderMessage[currentLang]}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border-color)] focus:border-[var(--accent-blue)] focus:outline-none text-sm sm:text-base text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 resize-y transition-colors"
                />
              </div>

              {/* 3. Sender Contact info (Optional) */}
              <div className="mb-6">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-2 font-gost-mono">
                  {UI_TRANSLATIONS.inquiryFieldContact[currentLang]}
                </label>
                <input
                  type="text"
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  placeholder={currentLang === 'uk' ? 'email@company.com або +380 / +421...' : currentLang === 'sk' ? 'email@firma.sk alebo +421...' : 'email@company.com or phone number...'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border-color)] focus:border-[var(--accent-blue)] focus:outline-none text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[var(--border-color)]">
                {/* Primary: Send Technical Inquiry */}
                <button
                  type="button"
                  onClick={handleSendInquiry}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/90 text-white font-gost-mono font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[var(--accent-blue)]/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{UI_TRANSLATIONS.inquiryBtnSend[currentLang]}</span>
                </button>

                {/* Secondary: Copy Template */}
                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="px-4 py-3.5 rounded-xl bg-[var(--bg-surface-2)] hover:bg-[var(--border-color)] text-[var(--text-primary)] border border-[var(--border-color)] font-gost-mono font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  title={UI_TRANSLATIONS.inquiryBtnCopy[currentLang]}
                >
                  {isCopiedTemplate ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">{UI_TRANSLATIONS.inquiryBtnCopied[currentLang]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[var(--text-secondary)]" />
                      <span>{UI_TRANSLATIONS.inquiryBtnCopy[currentLang]}</span>
                    </>
                  )}
                </button>

                {/* Tertiary: WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="px-4 py-3.5 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-500 border border-emerald-500/30 font-gost-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>

              {/* Helpful Hint on Email & No Form Overhead */}
              <div className="mt-4 flex items-start gap-2 text-xs text-[var(--text-secondary)] font-medium">
                <AlertCircle className="w-4 h-4 text-[var(--accent-blue)] flex-shrink-0 mt-0.5" />
                <span>
                  {currentLang === 'uk' 
                    ? `Запит надсилається напряму на ${CONTACT_DATA.email}. Ви можете вставити скопійований шаблон у ваш Gmail/Outlook та прикріпити наявні файли (креслення, фото, специфікації).`
                    : currentLang === 'sk'
                    ? `Dopyt smeruje priamo na ${CONTACT_DATA.email}. Šablónu môžete vložiť do svojho emailu a priložiť výkresy, fotografie či podklady.`
                    : `Inquiry is addressed directly to ${CONTACT_DATA.email}. You can paste the template into webmail and attach any project files.`
                  }
                </span>
              </div>
            </div>

            {/* 3-Step "What Happens Next" Banner */}
            <div className="p-6 sm:p-7 bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[var(--accent-blue)]" />
                <h4 className="font-gost text-sm sm:text-base font-black uppercase tracking-wider text-[var(--text-primary)]">
                  {UI_TRANSLATIONS.inquiryNextStepsHeading[currentLang]}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nextSteps.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border-color)] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-gost-mono text-xs font-black text-[var(--accent-blue)]">{step.step}</span>
                        <span className="text-[10px] font-gost-mono px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                          {step.badge}
                        </span>
                      </div>
                      <div className="font-gost text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1">
                        {step.title}
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] leading-snug font-medium">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN (5 cols): What You Can Send & Direct Contacts */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* "What You Can Send" Detailed Card */}
            <div className="p-6 sm:p-7 bg-[var(--bg-surface)] border-2 border-[var(--border-color)] rounded-2xl shadow-lg relative">
              <div className="mb-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent-blue)] font-gost-mono mb-1">
                  {UI_TRANSLATIONS.inquiryWhatToSendHeading[currentLang]}
                </div>
                <h4 className="font-gost text-base sm:text-lg font-black uppercase text-[var(--text-primary)]">
                  {UI_TRANSLATIONS.inquiryWhatToSendSub[currentLang]}
                </h4>
              </div>

              {/* 6 Acceptable Input Categories */}
              <div className="space-y-3 mb-5">
                {whatToSendList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-[var(--bg-surface-2)]/80 border border-[var(--border-color)]">
                    <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-gost text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                        {item.title}
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] leading-snug mt-0.5 font-medium">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reassurance Callout Box */}
              <div className="p-3.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--accent-blue)]/40 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-blue)] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[var(--text-primary)] leading-relaxed font-medium">
                  {UI_TRANSLATIONS.inquiryNoDetailsNote[currentLang]}
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Phone / WhatsApp */}
              <div className="p-4 sm:p-5 bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl transition-[transform,border-color] duration-300 ease-out hover:scale-[1.01] flex items-center justify-between group shadow-sm">
                <a
                  href={`tel:${CONTACT_DATA.phoneRaw}`}
                  className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 pr-2">
                    <div className="font-gost-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                      {currentLang === 'uk' ? 'Телефон / WhatsApp' : currentLang === 'sk' ? 'Telefón / WhatsApp' : 'Direct Phone & WhatsApp'}
                    </div>
                    <div className="font-gost-mono text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors truncate">
                      {CONTACT_DATA.phone}
                    </div>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.phone, 'phone')}
                  className="w-10 h-10 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm flex-shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="p-4 sm:p-5 bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl transition-[transform,border-color] duration-300 ease-out hover:scale-[1.01] flex items-center justify-between group shadow-sm">
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 pr-2">
                    <div className="font-gost-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                      Email
                    </div>
                    <div className="font-gost-mono text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors break-all">
                      {CONTACT_DATA.email}
                    </div>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.email, 'email')}
                  className="w-10 h-10 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm flex-shrink-0"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 sm:p-5 bg-[var(--glass-bg)] border border-[var(--border-color)] rounded-2xl backdrop-blur-xl flex items-center gap-3.5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-pink)] flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-gost-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] font-extrabold">
                    {currentLang === 'uk' ? 'Базова локація' : currentLang === 'sk' ? 'Lokalita' : 'Location Base'}
                  </div>
                  <div className="font-gost text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {CONTACT_DATA.location}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5 font-medium">
                    {CONTACT_DATA.locationDetails[currentLang]}
                  </div>
                </div>
              </div>

              {/* Download CV */}
              {onOpenResume && (
                <div 
                  onClick={onOpenResume}
                  className="p-4 sm:p-5 bg-[var(--badge-bg)] border border-[var(--accent-blue)]/50 hover:border-[var(--accent-blue)] rounded-2xl backdrop-blur-xl flex items-center justify-between gap-3 cursor-pointer group transition-[transform,border-color] duration-300 ease-out hover:scale-[1.01] shadow-md"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-[var(--accent-blue)] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-gost-mono text-[10px] sm:text-xs uppercase tracking-wider text-[var(--accent-blue)] font-black">
                        PDF // ISO 9001
                      </div>
                      <div className="font-gost text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                        {currentLang === 'uk' ? 'Завантажити повне резюме інженера' : currentLang === 'sk' ? 'Stiahnuť inžiniersky životopis (PDF)' : 'Download Engineering CV (PDF)'}
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] mt-0.5 font-medium truncate">
                        {currentLang === 'uk' ? 'Українська · Словацька · Англійська' : currentLang === 'sk' ? 'Slovenčina · Angličtina · Ukrajinčina' : 'English · Slovak · Ukrainian'}
                      </div>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[var(--accent-blue)] text-white flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
