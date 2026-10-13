import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Language, BlueprintMediaItem } from '../types';
import { getWebpUrl } from '../utils/imageOptimizer';
import { 
  X, 
  FileText,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export interface BlueprintViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  currentLang: Language;
  mediaList?: BlueprintMediaItem[];
  initialIndex?: number;
  projectTitle?: string;
}

export const BlueprintViewerModal: React.FC<BlueprintViewerModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  currentLang,
  mediaList = [],
  initialIndex = 0,
  projectTitle
}) => {
  // Build a normalized list of media items
  const fullList: BlueprintMediaItem[] = useMemo(() => {
    if (mediaList && mediaList.length > 0) {
      return mediaList;
    }
    return [{
      url: imageUrl,
      title: title,
      isDrawing: true
    }];
  }, [mediaList, imageUrl, title]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Sync initial index
  useEffect(() => {
    if (isOpen) {
      const targetIdx = initialIndex >= 0 && initialIndex < fullList.length ? initialIndex : 0;
      setCurrentIndex(targetIdx);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex, fullList]);

  const currentMedia = fullList[currentIndex] || fullList[0] || {
    url: imageUrl,
    title: title,
    isDrawing: true
  };

  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const [touchStartDist, setTouchStartDist] = useState<number | null>(null);
  const [initialTouchScale, setInitialTouchScale] = useState<number>(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const thumbsContainerRef = useRef<HTMLDivElement>(null);

  // Reset scale and position when changing image
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentMedia.url]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbsContainerRef.current) {
      const activeBtn = thumbsContainerRef.current.children[currentIndex] as HTMLElement | undefined;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (fullList.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % fullList.length);
  };

  const handlePrev = () => {
    if (fullList.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + fullList.length) % fullList.length);
  };

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, fullList.length]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.35, 4));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.35, 0.6);
      if (newScale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale((prev) => {
      const nextScale = Math.min(Math.max(prev + delta, 0.6), 4);
      if (nextScale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
      return nextScale;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1 && position.x === 0 && position.y === 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile pan & pinch-zoom
  const getDistance = (t1: React.Touch, t2: React.Touch) => {
    return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    } else if (e.touches.length === 2) {
      setIsDragging(false);
      const dist = getDistance(e.touches[0], e.touches[1]);
      setTouchStartDist(dist);
      setInitialTouchScale(scale);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    } else if (e.touches.length === 2 && touchStartDist !== null) {
      const dist = getDistance(e.touches[0], e.touches[1]);
      const factor = dist / touchStartDist;
      setScale(Math.min(Math.max(initialTouchScale * factor, 0.6), 4));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTouchStartDist(null);
  };

  if (!isOpen) return null;

  const currentItemTitle = currentMedia.title || title;
  const displayHeading = projectTitle ? `${projectTitle} // ${currentItemTitle}` : currentItemTitle;
  const isDwg = currentMedia.isDrawing !== false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-0 sm:p-2 animate-fade-in select-none h-[100dvh] w-full">
      <div 
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label={displayHeading}
        className="relative w-full h-full max-w-[100vw] sm:max-w-[99vw] bg-[#090d16] border-0 sm:border border-blue-500/30 rounded-none sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Top Header & Engineering Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-[#060a12] border-b border-blue-500/20 text-white z-20 gap-2 sm:gap-4">
          
          {/* Left Side: CAD Stamp + Title + Media Counter */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${
              isDwg 
                ? 'bg-blue-600/20 border-blue-500/40 text-blue-400' 
                : 'bg-emerald-600/20 border-emerald-500/40 text-emerald-400'
            }`}>
              {isDwg ? <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> : <Camera className="w-4 h-4 sm:w-5 sm:h-5" />}
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`font-gost-mono text-[11px] sm:text-xs uppercase tracking-widest font-black px-2 py-0.5 rounded-md border ${
                  isDwg 
                    ? 'bg-blue-500/15 text-blue-300 border-blue-500/30' 
                    : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                }`}>
                  {isDwg 
                    ? (currentLang === 'uk' ? 'Креслення DWG' : currentLang === 'sk' ? 'Výkres DWG' : 'CAD Blueprint')
                    : (currentLang === 'uk' ? 'Фото об’єкта' : currentLang === 'sk' ? 'Fotografia' : 'Field Photo')
                  }
                </span>

                {fullList.length > 1 && (
                  <span className="font-gost-mono text-xs sm:text-xs text-slate-400 font-bold">
                    [{currentIndex + 1} / {fullList.length}]
                  </span>
                )}
                
                <span className="font-gost-mono text-xs text-blue-400/80 hidden md:inline">
                  // {Math.round(scale * 100)}%
                </span>
              </div>

              <div className="font-gost text-sm sm:text-base lg:text-lg font-black text-slate-100 truncate mt-0.5" title={displayHeading}>
                {displayHeading}
              </div>
            </div>
          </div>

          {/* Right Side: Only the Close Button (Zoom, Fullscreen, HD and filter buttons removed per user screenshot) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 bg-red-500/20 hover:bg-red-500/40 border border-red-500/40 text-red-300 hover:text-white rounded-xl transition-colors cursor-pointer flex items-center justify-center"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blueprint Canvas Viewport */}
        <div 
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`relative flex-1 overflow-hidden flex items-center justify-center bg-[#070b12] touch-none ${
            isDragging ? 'cursor-grabbing' : scale > 1 ? 'cursor-grab' : 'cursor-default'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          {/* Left Arrow Button for Previous Media Item (Desktop side position) */}
          {fullList.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/80 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-400 text-white items-center justify-center backdrop-blur-md transition-[transform,background-color] shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
              title={currentLang === 'uk' ? 'Попереднє креслення/фото (←)' : currentLang === 'sk' ? 'Predchádzajúci súbor (←)' : 'Previous Media File (←)'}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Right Arrow Button for Next Media Item (Desktop side position) */}
          {fullList.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/80 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-400 text-white items-center justify-center backdrop-blur-md transition-[transform,background-color] shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
              title={currentLang === 'uk' ? 'Наступне креслення/фото (→)' : currentLang === 'sk' ? 'Ďalší súbor (→)' : 'Next Media File (→)'}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Transforming Image Container */}
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.15s ease-out'
            }}
            className="flex items-center justify-center w-full h-full p-2 sm:p-4"
          >
            <picture className="flex items-center justify-center max-w-full max-h-full">
              {getWebpUrl(currentMedia.url) && (
                <source srcSet={getWebpUrl(currentMedia.url)} type="image/webp" />
              )}
              <img
                ref={imageRef}
                src={currentMedia.url}
                alt={currentItemTitle}
                width={1920}
                height={1080}
                className="max-h-[72vh] sm:max-h-[78vh] max-w-[96vw] sm:max-w-[92vw] w-auto h-auto object-contain rounded-lg shadow-2xl border border-blue-500/30 bg-[#060a12]"
                draggable={false}
              />
            </picture>
          </div>
        </div>

        {/* Mobile Navigation bar under the image (sm:hidden) */}
        {fullList.length > 1 && (
          <div className="flex sm:hidden items-center justify-between px-4 py-2 bg-[#060a12] border-t border-blue-500/20 z-20 shadow-md">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-600 border border-blue-500/40 text-white font-gost-mono text-xs font-bold active:scale-95 transition-all shadow cursor-pointer"
              title={currentLang === 'uk' ? 'Попереднє креслення/фото' : currentLang === 'sk' ? 'Predchádzajúci súbor' : 'Previous file'}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{currentLang === 'uk' ? 'Назад' : currentLang === 'sk' ? 'Dozadu' : 'Prev'}</span>
            </button>

            <span className="font-gost-mono text-xs text-slate-200 font-bold px-2.5 py-1 rounded bg-black/60 border border-blue-500/30">
              {currentIndex + 1} / {fullList.length}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-600 border border-blue-500/40 text-white font-gost-mono text-xs font-bold active:scale-95 transition-all shadow cursor-pointer"
              title={currentLang === 'uk' ? 'Наступне креслення/фото' : currentLang === 'sk' ? 'Ďalší súbor' : 'Next file'}
              aria-label="Next image"
            >
              <span>{currentLang === 'uk' ? 'Вперед' : currentLang === 'sk' ? 'Dopredu' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Interactive Thumbnail Strip */}
        {fullList.length > 1 && (
          <div className="px-3 sm:px-6 py-2 sm:py-2.5 bg-[#060a12] border-t border-blue-500/20 z-20 flex items-center gap-2 overflow-x-auto scrollbar-thin">
            <div ref={thumbsContainerRef} className="flex items-center gap-2 sm:gap-2.5 mx-auto">
              {fullList.map((media, idx) => {
                const isActive = idx === currentIndex;
                const isThumbDwg = media.isDrawing !== false;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-14 h-10 sm:w-18 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'ring-2 ring-blue-400 border-blue-300 scale-105 shadow-lg shadow-blue-500/30'
                        : 'border-white/15 opacity-60 hover:opacity-100 hover:border-blue-400/60'
                    }`}
                    title={media.title || (isThumbDwg ? `Blueprint #${idx + 1}` : `Photo #${idx + 1}`)}
                  >
                    <picture className="w-full h-full block">
                      {getWebpUrl(media.url) && (
                        <source srcSet={getWebpUrl(media.url)} type="image/webp" />
                      )}
                      <img
                        src={media.url}
                        alt={`Thumb ${idx + 1}`}
                        width={72}
                        height={48}
                        className="w-full h-full object-cover bg-[#070b12]"
                      />
                    </picture>
                    <span className={`absolute bottom-0.5 right-0.5 text-[9px] font-mono font-bold px-1 rounded shadow ${
                      isThumbDwg ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'
                    }`}>
                      {isThumbDwg ? 'DWG' : 'FOTO'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
