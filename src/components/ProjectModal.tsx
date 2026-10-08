import React, { useState, useEffect, useRef } from 'react';
import { ProjectItem, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { getWebpUrl } from '../utils/imageOptimizer';
import { X, ChevronLeft, ChevronRight, Maximize2, CheckCircle, ZoomIn, FileText, Camera, Layers, Wrench, ShieldCheck, HelpCircle, Building2, Briefcase, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  currentLang: Language;
  onClose: () => void;
  onOpenBlueprintZoom?: (imageUrl: string, title: string) => void;
  initialBlockId?: string | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  currentLang,
  onClose,
  onOpenBlueprintZoom,
  initialBlockId,
}) => {
  const [mediaTab, setMediaTab] = useState<'all' | 'drawings' | 'photos'>('all');
  const [selectedBlockId, setSelectedBlockId] = useState<string | 'all'>(initialBlockId || 'all');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
    setMediaTab('all');
    setSelectedBlockId(initialBlockId || 'all');
  }, [project, initialBlockId]);

  // Lock background scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!project) return null;

  // Compute active media list based on block and tab
  const getActiveMediaList = () => {
    let list = project.images;
    if (selectedBlockId !== 'all' && project.mediaBlocks) {
      const block = project.mediaBlocks.find((b) => b.id === selectedBlockId);
      if (block && block.images.length > 0) {
        list = block.images;
      }
    }

    if (mediaTab === 'drawings') {
      const dwg = list.filter((img) => project.drawings?.includes(img));
      return dwg.length > 0 ? dwg : list;
    }
    if (mediaTab === 'photos') {
      const pht = list.filter((img) => project.photos?.includes(img));
      return pht.length > 0 ? pht : list;
    }
    return list;
  };

  const activeMediaList = getActiveMediaList();
  const currentImage = activeMediaList[activeImageIndex] || activeMediaList[0] || project.coverImage;
  const currentBlock = project.mediaBlocks?.find((b) => b.images.includes(currentImage));
  const currentDrawingCaption = project.drawingCaptions?.[currentImage]?.[currentLang];
  const fullZoomTitle = currentDrawingCaption 
    ? `${project.title[currentLang]} — ${currentDrawingCaption}`
    : project.title[currentLang];

  // Handle keyboard events: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && activeMediaList.length > 1) {
        setActiveImageIndex((prev) => (prev + 1) % activeMediaList.length);
      } else if (e.key === 'ArrowLeft' && activeMediaList.length > 1) {
        setActiveImageIndex((prev) => (prev - 1 + activeMediaList.length) % activeMediaList.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, activeMediaList.length]);

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
        role="dialog"
        aria-modal="true"
        aria-label={project.title[currentLang]}
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
            className="w-10 h-10 rounded-full bg-[var(--bg-surface-3)] hover:bg-[var(--accent-blue)] text-[var(--text-primary)] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            title={UI_TRANSLATIONS.closeModal?.[currentLang] || 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two columns */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Visual / Media Viewer with Tabs */}
          <div ref={viewerRef} className="lg:col-span-7 xl:col-span-8 bg-[#060608] relative flex flex-col justify-between min-h-[420px] sm:min-h-[520px] p-4 group">
            
            {/* Media Stages Selector (if project has distinct process stages) */}
            {project.mediaBlocks && project.mediaBlocks.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-black/75 backdrop-blur-md rounded-xl border border-white/15 mb-2.5 z-10">
                <span className="text-[10px] font-gost-mono uppercase tracking-wider text-amber-400/90 px-2 font-black">
                  {currentLang === 'uk' ? 'СТАДІЇ ОБ\'ЄКТА:' : currentLang === 'sk' ? 'ETAPY PROJEKTU:' : 'PROCESS STAGES:'}
                </span>
                <button
                  onClick={() => { setSelectedBlockId('all'); setActiveImageIndex(0); }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-gost-mono font-bold transition-colors cursor-pointer ${
                    selectedBlockId === 'all'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {currentLang === 'uk' ? 'Всі стадії' : currentLang === 'sk' ? 'Všetky etapy' : 'All Stages'}
                </button>
                {project.mediaBlocks.map((block) => (
                  <button
                    key={block.id}
                    onClick={() => { setSelectedBlockId(block.id); setActiveImageIndex(0); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-gost-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                      selectedBlockId === block.id
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{block.title[currentLang]}</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px]">{block.images.length}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Media Category Toggle Tabs */}
            <div className="flex items-center justify-between gap-2 mb-3 z-10">
              <div className="flex items-center gap-1.5 p-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/15">
                <button
                  onClick={() => handleTabChange('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-gost-mono font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
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
              <div className="flex items-center gap-2">
                {currentBlock && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-gost-mono bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    {currentBlock.title[currentLang]}
                  </span>
                )}
                {currentDrawingCaption ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-gost-mono bg-blue-500/25 text-blue-200 border border-blue-400/40 shadow-sm max-w-[260px] sm:max-w-md truncate" title={currentDrawingCaption}>
                    <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{currentDrawingCaption}</span>
                  </span>
                ) : isCurrentDrawing ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-gost-mono bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    <FileText className="w-3.5 h-3.5" />
                    {currentLang === 'uk' ? 'Технічне креслення' : currentLang === 'sk' ? 'Technický výkres' : 'Technical Drawing'}
                  </span>
                ) : null}
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
                    onOpenBlueprintZoom(currentImage, fullZoomTitle);
                  }}
                  className="absolute top-3 right-3 z-20 px-3.5 py-1.5 bg-blue-600/90 hover:bg-blue-500 text-white border border-blue-400/50 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md transition-[transform,background-color] shadow-lg hover:scale-105 cursor-pointer"
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
                  alt={currentDrawingCaption 
                    ? `${project.title[currentLang]} — ${currentDrawingCaption}` 
                    : `${project.title[currentLang]} — ${isCurrentDrawing ? (currentLang === 'uk' ? 'креслення' : currentLang === 'sk' ? 'výkres' : 'drawing') : (currentLang === 'uk' ? 'фото' : currentLang === 'sk' ? 'foto' : 'photo')}`}
                  width={1920}
                  height={1080}
                  className="max-h-[64vh] lg:max-h-[76vh] w-auto max-w-full object-contain transition-transform duration-300 rounded-xl cursor-zoom-in hover:brightness-105"
                  onClick={() => {
                    if (onOpenBlueprintZoom) {
                      onOpenBlueprintZoom(currentImage, fullZoomTitle);
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/75 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer shadow-lg z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/75 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer shadow-lg z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="mt-3 flex items-center justify-between text-sm font-mono text-white/90 bg-black/75 px-4 py-2 backdrop-blur-md rounded-full border border-white/20 shadow-md">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-bold shrink-0">
                  {activeImageIndex + 1} / {activeMediaList.length}
                </span>
                {currentDrawingCaption && (
                  <span className="hidden sm:inline text-xs font-gost-mono text-blue-300 font-bold truncate max-w-xs md:max-w-md">
                    • {currentDrawingCaption}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {onOpenBlueprintZoom && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBlueprintZoom(currentImage, fullZoomTitle);
                    }}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-full transition-[transform,background-color] cursor-pointer font-bold text-xs sm:text-sm shadow-md hover:scale-105"
                    title={currentLang === 'uk' ? 'Змасштабувати на всю сторінку' : currentLang === 'sk' ? 'Na celú stranu' : 'Full Page'}
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>{currentLang === 'uk' ? 'На всю сторінку' : currentLang === 'sk' ? 'Na celú stranu' : 'Full Page'}</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    if (onOpenBlueprintZoom) {
                      onOpenBlueprintZoom(currentImage, fullZoomTitle);
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
                  const thumbCaption = project.drawingCaptions?.[imgUrl]?.[currentLang];
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      title={thumbCaption || (isDw ? 'Drawing' : 'Photo')}
                      className={`relative w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden transition-[transform,opacity] cursor-pointer ${
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
                          alt={thumbCaption || `Thumbnail ${idx + 1}`}
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

              {/* JTBD Complete Engineering Architecture (Client -> Problem -> Role -> Engineered Solution -> Implementation -> Result -> Proofs) */}
              <div className="mb-6 space-y-3">
                {/* 1. CLIENT / PROJECT TYPE */}
                {project.clientType && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-[var(--accent-blue)] font-bold text-xs mb-1.5">
                      <Building2 className="w-4 h-4 text-[var(--accent-blue)]" />
                      <span>{currentLang === 'uk' ? '1. Замовник / Тип об’єкта (Client & Facility):' : currentLang === 'sk' ? '1. Klient / Typ prevádzky:' : '1. Client & Facility Type:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-semibold leading-relaxed">
                      {project.clientType[currentLang]}
                    </div>
                  </div>
                )}

                {/* 2. ENGINEERING PROBLEM */}
                {(project.engineeringProblem || project.engineeringChallenge) && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-amber-400 font-bold text-xs mb-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      <span>{currentLang === 'uk' ? '2. Інженерна задача / Проблема (Engineering Problem):' : currentLang === 'sk' ? '2. Inžinierska úloha / Problém:' : '2. Engineering Problem:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {(project.engineeringProblem || project.engineeringChallenge)?.[currentLang]}
                    </div>
                  </div>
                )}

                {/* 3. MY ROLE */}
                {project.myRole && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-indigo-400 font-bold text-xs mb-1.5">
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                      <span>{currentLang === 'uk' ? '3. Моя роль у проєкті (My Role):' : currentLang === 'sk' ? '3. Moja inžinierska rola:' : '3. My Engineering Role:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.myRole[currentLang]}
                    </div>
                  </div>
                )}

                {/* 4. WHAT I DESIGNED / ENGINEERED */}
                {(project.whatIDesigned || project.workPerformed) && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-sky-400 font-bold text-xs mb-1.5">
                      <FileText className="w-4 h-4 text-sky-400" />
                      <span>{currentLang === 'uk' ? '4. Що спроєктовано / Розраховано (What I Designed):' : currentLang === 'sk' ? '4. Čo bolo navrhnuté a vypočítané:' : '4. What I Designed / Engineered:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {(project.whatIDesigned || project.workPerformed)?.[currentLang]}
                    </div>
                  </div>
                )}

                {/* 5. IMPLEMENTATION */}
                {project.implementation && (
                  <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-amber-500 font-bold text-xs mb-1.5">
                      <Wrench className="w-4 h-4 text-amber-500" />
                      <span>{currentLang === 'uk' ? '5. Виготовлення & Монтаж (Implementation):' : currentLang === 'sk' ? '5. Výroba & Montáž:' : '5. Implementation & Erection:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.implementation[currentLang]}
                    </div>
                  </div>
                )}

                {/* 6. RESULT */}
                {project.result && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-2 font-gost-mono uppercase text-emerald-400 font-bold text-xs mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{currentLang === 'uk' ? '6. Реальний результат в експлуатації (Result):' : currentLang === 'sk' ? '6. Reálny výsledok v prevádzke:' : '6. Measurable Result:'}</span>
                    </div>
                    <div className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                      {project.result[currentLang]}
                    </div>
                  </div>
                )}
              </div>

              {/* Media Stages Section in Right Sidebar */}
              {project.mediaBlocks && project.mediaBlocks.length > 0 && (
                <div className="mb-6 p-4 rounded-2xl bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
                  <div className="text-xs font-gost-mono uppercase tracking-wider text-amber-500 font-extrabold mb-3 flex items-center justify-between">
                    <span>
                      {currentLang === 'uk' ? 'Технологічні стадії реконструкції (3 стадії):' : currentLang === 'sk' ? 'Technologické etapy rekonštrukcie (3 etapy):' : 'Reconstruction Process Stages (3 Stages):'}
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                      {project.mediaBlocks.length} {currentLang === 'uk' ? 'стадії' : currentLang === 'sk' ? 'etapy' : 'stages'}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {project.mediaBlocks.map((blk) => (
                      <div
                        key={blk.id}
                        onClick={() => {
                          setSelectedBlockId(blk.id);
                          setActiveImageIndex(0);
                          viewerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }}
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          selectedBlockId === blk.id
                            ? 'bg-amber-500/15 border-amber-500 shadow-md ring-1 ring-amber-500/40'
                            : 'bg-[var(--badge-bg)] border-[var(--border-color)] hover:border-amber-500/50'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-gost text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                            {blk.title[currentLang]}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-amber-400 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 shrink-0">
                            {blk.images.length} {currentLang === 'uk' ? 'файлів' : 'files'}
                          </span>
                        </div>
                        {blk.description && (
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
                            {blk.description[currentLang]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                className="w-full py-4 px-6 bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white font-gost font-extrabold text-base uppercase tracking-wider text-center block transition-[transform,background-color] rounded-full hover:scale-105 shadow-xl cursor-pointer"
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
