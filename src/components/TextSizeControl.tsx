import React, { useEffect, useRef, useState } from 'react';
import { Language, TextSize } from '../types';

export const TEXT_SIZES: TextSize[] = ['compact', 'comfortable', 'large'];

const LABELS: Record<TextSize, Record<Language, string>> = {
  compact: { en: 'Compact text', sk: 'Kompaktný text', uk: 'Компактний текст' },
  comfortable: { en: 'Comfortable text (default)', sk: 'Pohodlný text (predvolené)', uk: 'Комфортний текст (за замовчуванням)' },
  large: { en: 'Large text', sk: 'Veľký text', uk: 'Великий текст' },
};

const TITLE: Record<Language, string> = {
  en: 'Text size',
  sk: 'Veľkosť textu',
  uk: 'Розмір тексту',
};

// Visual size of the "A" glyph inside each option
const GLYPH: Record<TextSize, string> = {
  compact: 'text-[13px]',
  comfortable: 'text-[17px]',
  large: 'text-[22px]',
};

interface ControlProps {
  currentLang: Language;
  value: TextSize;
  onChange: (size: TextSize) => void;
}

/** Three-option segmented control (A / A / A) */
export const TextSizeSegmented: React.FC<ControlProps> = ({ currentLang, value, onChange }) => (
  <div
    role="group"
    aria-label={TITLE[currentLang]}
    className="flex w-full sm:w-auto bg-[var(--bg-surface-3)] p-1 rounded-xl border border-[var(--border-color)]"
  >
    {TEXT_SIZES.map((size) => (
      <button
        key={size}
        type="button"
        onClick={() => onChange(size)}
        aria-pressed={value === size}
        aria-label={LABELS[size][currentLang]}
        title={LABELS[size][currentLang]}
        className={`flex-1 sm:flex-none px-3 py-1 rounded-lg transition-colors touch-target flex items-center justify-center font-gost-mono font-extrabold leading-none cursor-pointer ${GLYPH[size]} ${
          value === size
            ? 'bg-[var(--accent-blue)] text-[var(--btn-primary-text)] shadow-sm'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        A
      </button>
    ))}
  </div>
);

/** "Aa" header button that opens a small popover with the segmented control */
export const TextSizePopover: React.FC<ControlProps> = ({ currentLang, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative shrink-0">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={TITLE[currentLang]}
        title={TITLE[currentLang]}
        className="h-9 sm:h-10 min-w-[44px] flex items-center justify-center px-2.5 rounded-full bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] border border-[var(--border-color)] text-[var(--text-primary)] transition-colors cursor-pointer shadow-sm font-gost-mono font-extrabold leading-none"
      >
        <span className="text-[13px]">A</span>
        <span className="text-[19px] -ml-px">A</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 z-[60] p-2 rounded-2xl bg-[var(--bg-surface-2)] border border-[var(--border-color)] shadow-2xl min-w-[190px]">
          <div className="px-1 pb-1.5 font-gost-mono text-xs uppercase font-extrabold text-[var(--text-secondary)]">
            {TITLE[currentLang]}
          </div>
          <TextSizeSegmented currentLang={currentLang} value={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
