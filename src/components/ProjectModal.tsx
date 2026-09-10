import React, { useState, useEffect } from 'react';
import { ProjectItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { getWebpUrl } from '../utils/imageOptimizer';
import { X, ChevronLeft, ChevronRight, Maximize2, CheckCircle, ZoomIn, FileText, Camera, Layers, Wrench, ShieldCheck, HelpCircle } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  currentLang: Language;
  onClose: () => void;
  onOpenBlueprintZoom?: (imageUrl: string, title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  currentLang,
  onClose,
  onOpenBlueprintZoom,
}) => {
  const [mediaTab, setMediaTab] = useState<'all' | 'drawings' | 'photos'>('all');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
    setMediaTab('all');
  }, [project]);

  if (!project) return null;

  // Compute active media list based on tab
  const getActiveMediaList = () => {
    if (mediaTab === 'drawings') {
      return (project.drawings && project.drawings.length > 0) ? project.drawings : project.images;
    }
    if (mediaTab === 'photos') {
      return (project.photos && project.photos.length > 0) ? project.photos : project.images;
    }
    return project.images;
  };

  const activeMediaList = getActiveMediaList();
  const currentImage = activeMediaList[activeImageIndex] || activeMediaList[0] || project.coverImage;

  // Determine if current image is a drawing or photo
  const isCurrentDrawing = project.drawings?.includes(currentImage);
  const isCurrentPhoto = project.photos?.includes(currentImage);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % activeMediaList.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + activeMediaList.length) % activeMediaList.length);
  };

  const handleTabChange = (tab: 'all' | 'drawings' | 'photos') => {
    setMediaTab(tab);
    setActiveImageIndex(0);
    setIsZoomed(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[96vw] 2xl:max-w-[1720px] h-[94vh] max-h-[94vh] bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-2xl rounded-3xl overflow-hidden flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[var(--bg-surface-2)] border-b border-[var(--border-color)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm sm:text-base text-[var(--text-primary)] font-bold px-4 py-1 bg-[var(--badge-bg)] rounded-full border border-[var(--border-color)]">
              {project.year}
            </span>
            <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--accent-blue)] font-black">
              {project.category[currentLang]}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[var(--bg-surface-3)] hover:bg-[var(--accent-blue)] text-[var(--text-primary)] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
            title={UI_TRANSLATIONS.closeModal?.[currentLang] || 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two columns */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Visual / Media Viewer with Tabs */}
          <div className="lg:col-span-7 xl:col-span-8 bg-[#060608] relative flex flex-col justify-between min-h-[420px] sm:min-h-[520px] p-4 group">
            
            {/* Media Category Toggle Tabs */}
            <div className="flex items-center justify-between gap-2 mb-3 z-10">
              <div className="flex items-center gap-1.5 p-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/15">
                <button
                  onClick={() => handleTabChange('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                    mediaTab === 'all'
                      ? 'bg-[var(--accent-blue)] text-white shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{currentLang === 'uk' ? 'Всі матеріали' : currentLang === 'sk' ? 'Všetko' : 'All Media'}</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px]">{project.images.length}</span>
                </button>

                {project.drawings && project.drawings.length > 0 && (
                  <button
                    onClick={() => handleTabChange('drawings')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                      mediaTab === 'drawings'
                        ? 'bg-[var(--accent-blue)] text-white shadow-md'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{currentLang === 'uk' ? 'Креслення / CAD' : currentLang === 'sk' ? 'Výkresy' : 'Drawings & CAD'}</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px]">{project.drawings.length}</span>
                  </button>
                )}

                {project.photos && project.photos.length > 0 && (
                  <button
                    onClick={() => handleTabChange('photos')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                      mediaTab === 'photos'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>{currentLang === 'uk' ? 'Фото об\'єкта' : currentLang === 'sk' ? 'Fotografie' : 'Site Photos'}</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px]">{project.photos.length}</span>
                  </button>
                )}
              </div>

              {/* Badge indicating type of current image */}
              <div className="flex items-center">
                {isCurrentDrawing && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-gost-mono bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    <FileText className="w-3.5 h-3.5" />
                    {currentLang === 'uk' ? 'Технічне креслення' : currentLang === 'sk' ? 'Technický výkres' : 'Technical Drawing'}
                  </span>
                )}
                {isCurrentPhoto && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-gost-mono bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <Camera className="w-3.5 h-3.5" />
                    {currentLang === 'uk' ? 'Реальне фото об\'єкта' : currentLang === 'sk' ? 'Reálna fotografia' : 'Operating Photo'}
                  </span>
                )}
              </div>
            </div>

            {/* Main Active Image Container */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[300px]">
              {/* Full Page Button Badge on Image */}
              {onOpenBlueprintZoom && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBlueprintZoom(currentImage, project.title[currentLang]);
                  }}
                  className="absolute top-3 right-3 z-20 px-3.5 py-1.5 bg-blue-600/90 hover:bg-blue-500 text-white border border-blue-400/50 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg hover:scale-105 cursor-pointer"
                  title={currentLang === 'uk' ? 'Змасштабувати на всю сторінку' : currentLang === 'sk' ? 'Na celú stranu' : 'Scale to Full Page'}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{currentLang === 'uk' ? 'На всю сторінку' : currentLang === 'sk' ? 'Na celú stranu' : 'Full Page'}</span>
                </button>
              )}

              <picture className="flex items-center justify-center max-w-full max-h-full">
                {getWebpUrl(currentImage) && (
                  <source srcSet={getWebpUrl(currentImage)} type="image/webp" />
                )}
                <img
                  src={currentImage}
                  alt={project.title[currentLang]}
                  width={1920}
                  height={1080}
                  className="max-h-[64vh] lg:max-h-[76vh] w-auto max-w-full object-contain transition-transform duration-300 rounded-xl cursor-zoom-in hover:brightness-105"
                  onClick={() => {
                    if (onOpenBlueprintZoom) {
                      onOpenBlueprintZoom(currentImage, project.title[currentLang]);
                    } else {
                      setIsZoomed(!isZoomed);
                    }
                  }}
                />
              </picture>

              {/* Prev / Next navigation arrows */}
              {activeMediaList.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/75 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/75 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="mt-3 flex items-center justify-between text-sm font-mono text-white/90 bg-black/75 px-4 py-2 backdrop-blur-md rounded-full border border-white/20 shadow-md">
              <span className="font-bold">
                {activeImageIndex + 1} / {activeMediaList.length}
              </span>

              <div className="flex items-center gap-3">
                {onOpenBlueprintZoom && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBlueprintZoom(currentImage, project.title[currentLang]);
                    }}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-bold text-xs sm:text-sm shadow-md hover:scale-105"
                    title={currentLang === 'uk' ? 'Змасштабувати на всю сторінку' : currentLang === 'sk' ? 'Na celú stranu' : 'Full Page'}
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>{currentLang === 'uk' ? 'На всю сторінку' : currentLang === 'sk' ? 'Na celú stranu' : 'Full Page'}</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    if (onOpenBlueprintZoom) {
                      onOpenBlueprintZoom(currentImage, project.title[currentLang]);
                    } else {
                      setIsZoomed(!isZoomed);
                    }
                  }}
                  className="flex items-center gap-1.5 hover:text-[#818cf8] transition-colors cursor-pointer font-bold text-xs sm:text-sm"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>{isZoomed ? 'Reset' : 'Zoom'}</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {activeMediaList.length > 1 && (
              <div className="w-full flex gap-2 overflow-x-auto pt-3 px-1 scrollbar-thin">
                {activeMediaList.map((imgUrl, idx) => {
                  const isDw = project.drawings?.includes(imgUrl);
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'ring-2 ring-[var(--accent-blue)] scale-105'
                          : 'opacity-50 hover:opacity-100 border border-white/20'
                      }`}
                    >
                      <picture className="w-full h-full block">
                        {getWebpUrl(imgUrl) && (
                          <source srcSet={getWebpUrl(imgUrl)} type="image/webp" />
                        )}
                        <img
                          src={imgUrl}
                          alt={`Thumbnail ${idx + 1}`}
                          width={64}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </picture>
                      <span className="absolute bottom-0.5 right-0.5 text-[8px] font-mono px-1 rounded bg-black/80 text-white font-bold">
                        {isDw ? 'DWG' : 'FOTO'}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Comprehensive Engineering Case Study */}
          <div className="lg:col-span-5 xl:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[var(--bg-surface)] overflow-y-auto max-h-[85vh]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="text-sm font-gost-mono text-[var(--accent-blue)] uppercase tracking-[0.2em] font-extrabold">
                  {currentLang === 'uk' ? 'ТЕХНІЧНИЙ ПАСПОРТ ОБ\'ЄКТА' : currentLang === 'sk' ? 'TECHNICKÝ LIST PROJEKTU' : 'ENGINEERING PASSPORT'} // {project.id}
                </div>
                <span className="text-xs font-gost-mono px-3 py-1 rounded bg-[var(--bg-surface-2)] text-[var(--text-secondary)] font-extrabold border border-[var(--border-color)]">
                  {currentLang === 'uk' ? 'ДСТУ / ISO 3098' : 'GOST / ISO 3098'}
                </span>
              </div>

              <h3 className="font-gost text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--text-primary)] mb-4 leading-snug">
                {project.title[currentLang]}
              </h3>

              {project.description && (
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
                  {project.description[currentLang]}
                </p>
              )}

              {/* Engineering Workflow (Problem -> Solution -> Implementation -> Result) */}
              <div className="mb-6 space-y-3">
                {project.engineeringChallenge && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-[var(--accent-blue)] font-bold text-xs mb-1.5">
                      <HelpCircle className="w-4 h-4" />
                      <span>{currentLang === 'uk' ? '1. Інженерне завдання (Challenge):' : currentLang === 'sk' ? '1. Inžinierska úloha (Zadanie):' : '1. Engineering Challenge:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.engineeringChallenge[currentLang]}
                    </div>
                  </div>
                )}

                {project.workPerformed && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-indigo-400 font-bold text-xs mb-1.5">
                      <FileText className="w-4 h-4" />
                      <span>{currentLang === 'uk' ? '2. Проєктування & Креслення (CAD & Design):' : currentLang === 'sk' ? '2. Projektovanie & Výkresy (CAD):' : '2. Design & Blueprints:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.workPerformed[currentLang]}
                    </div>
                  </div>
                )}

                {project.implementation && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-amber-500 font-bold text-xs mb-1.5">
                      <Wrench className="w-4 h-4" />
                      <span>{currentLang === 'uk' ? '3. Виготовлення & Монтаж (Fabrication & Assembly):' : currentLang === 'sk' ? '3. Výroba & Montáž:' : '3. Fabrication & Assembly:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.implementation[currentLang]}
                    </div>
                  </div>
                )}

                {project.result && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-emerald-500 font-bold text-xs mb-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{currentLang === 'uk' ? '4. Результат експлуатації (Operation Result):' : currentLang === 'sk' ? '4. Výsledok v prevádzke:' : '4. Operational Result:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.result[currentLang]}
                    </div>
                  </div>
                )}
              </div>

              {/* Technical Specifications CAD Table */}
              {project.specs && (
                <div className="mb-6 p-5 rounded-2xl bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
                  <div className="text-xs font-gost-mono uppercase tracking-wider text-[var(--accent-blue)] font-extrabold mb-3 flex items-center justify-between">
                    <span>{currentLang === 'uk' ? 'Технічні характеристики (CAD Specifications):' : currentLang === 'sk' ? 'Technické parametre:' : 'Technical Specifications:'}</span>
                    <span className="text-[var(--text-secondary)] text-[10px] font-black">ISO SPEC</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.specs[currentLang].map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--text-primary)] font-gost font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Inquire about similar project CTA */}
            <div className="pt-6 border-t border-[var(--border-color)]">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full py-4 px-6 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white font-gost font-extrabold text-base uppercase tracking-wider text-center block transition-all rounded-full hover:scale-105 shadow-xl cursor-pointer"
              >
                {UI_TRANSLATIONS.btnConsultation?.[currentLang] || 'Contact Engineer'}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
