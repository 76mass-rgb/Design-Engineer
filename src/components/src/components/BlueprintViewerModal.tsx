import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Language } from '../types';
import { getWebpUrl } from '../utils/imageOptimizer';
import { 
  X, 
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';

interface BlueprintViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  currentLang: Language;
}

export const BlueprintViewerModal: React.FC<BlueprintViewerModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  currentLang
}) => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'blueprint' | 'normal'>('normal');

  const [touchStartDist, setTouchStartDist] = useState<number | null>(null);
  const [initialTouchScale, setInitialTouchScale] = useState<number>(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset viewport when opened with new image
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, imageUrl]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
    setScale(prev => Math.min(prev + 0.35, 4));
  };

  const handleZoomOut = () => {
    setScale(prev => {
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
    setScale(prev => Math.min(Math.max(prev + delta, 0.6), 4));
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

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-0 sm:p-2 animate-fade-in select-none h-[100dvh] w-full">
      <div 
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full h-full max-w-[100vw] sm:max-w-[99vw] bg-[#0d131f] border-0 sm:border border-blue-500/30 rounded-none sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Top Control Bar with CAD Stamp aesthetics */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3.5 bg-[#080d16] border-b border-blue-500/20 text-white z-20 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="font-gost-mono text-xs sm:text-xs text-blue-400 uppercase tracking-widest font-black truncate">
                {currentLang === 'uk' ? 'Інженерне креслення' : currentLang === 'sk' ? 'Inžiniersky výkres' : 'Blueprint'} // {Math.round(scale * 100)}%
              </div>
              <div className="font-gost text-sm sm:text-base lg:text-lg font-black text-slate-100 truncate">
                {title}
              </div>
            </div>
          </div>

          {/* Close button only (zoom / reset / fullscreen / HD controls removed) */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-auto sm:h-auto p-2 sm:p-2.5 bg-red-500/20 hover:bg-red-500/40 border border-red-500/40 text-red-300 hover:text-white rounded-xl transition-colors cursor-pointer flex items-center justify-center"
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
              linear-gradient(to right, rgba(59, 130, 246, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          {/* Transforming Image Container */}
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.15s ease-out'
            }}
            className="flex items-center justify-center w-full h-full p-2"
          >
            <picture className="flex items-center justify-center max-w-full max-h-full">
              {getWebpUrl(imageUrl) && (
                <source srcSet={getWebpUrl(imageUrl)} type="image/webp" />
              )}
              <img
                ref={imageRef}
                src={imageUrl}
                alt={title}
                width={1920}
                height={1080}
                className="max-h-[85vh] sm:max-h-[88vh] max-w-[98vw] sm:max-w-[96vw] w-auto h-auto object-contain rounded-lg shadow-2xl border border-blue-500/20 bg-white"
                draggable={false}
              />
            </picture>
          </div>
        </div>

      </div>
    </div>
  );
};
