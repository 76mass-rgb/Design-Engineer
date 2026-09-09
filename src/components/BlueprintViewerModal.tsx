import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Language } from '../types';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Download, 
  Move, 
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-1 sm:p-2 animate-fade-in select-none">
      <div 
        ref={containerRef}
        className="relative w-full h-full max-w-[99vw] bg-[#0d131f] border border-blue-500/30 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Top Control Bar with CAD Stamp aesthetics */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#080d16] border-b border-blue-500/20 text-white z-20">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="font-gost-mono text-xs text-blue-400 uppercase tracking-widest font-black">
                {currentLang === 'uk' ? 'Інженерне креслення // Детальний перегляд' : currentLang === 'sk' ? 'Inžiniersky výkres // Detailné zobrazenie' : 'Engineering Blueprint // Deep-Zoom'}
              </div>
              <div className="font-gost text-base sm:text-lg font-black text-slate-100 truncate">
                {title}
              </div>
            </div>
          </div>

          {/* Quick Zoom & Control Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center bg-[#141d2e] border border-blue-500/30 rounded-xl p-1">
              <button
                onClick={handleZoomOut}
                disabled={scale <= 0.6}
                className="p-2 sm:p-2.5 text-slate-300 hover:text-white hover:bg-blue-600/30 rounded-lg transition-all disabled:opacity-30 cursor-pointer"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <div className="px-2.5 font-gost-mono text-sm font-extrabold text-blue-400 min-w-[56px] text-center">
                {Math.round(scale * 100)}%
              </div>
              <button
                onClick={handleZoomIn}
                disabled={scale >= 4}
                className="p-2 sm:p-2.5 text-slate-300 hover:text-white hover:bg-blue-600/30 rounded-lg transition-all disabled:opacity-30 cursor-pointer"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleReset}
              className="p-2 sm:p-2.5 bg-[#141d2e] hover:bg-blue-600/30 border border-blue-500/30 text-slate-300 hover:text-white rounded-xl transition-all cursor-pointer hidden sm:flex items-center gap-1.5 text-sm font-gost-mono font-bold"
              title="Reset Zoom (100%)"
            >
              <RotateCcw className="w-4 h-4" />
              <span>100%</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-2 sm:p-2.5 bg-[#141d2e] hover:bg-blue-600/30 border border-blue-500/30 text-slate-300 hover:text-white rounded-xl transition-all cursor-pointer hidden md:block"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-2.5 sm:p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-md flex items-center gap-1.5 text-sm font-gost-mono font-black cursor-pointer"
              title="Open full-resolution file"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">HD</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 bg-red-500/20 hover:bg-red-500/40 border border-red-500/40 text-red-300 hover:text-white rounded-xl transition-all ml-1 cursor-pointer"
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
          className={`relative flex-1 overflow-hidden flex items-center justify-center bg-[#070b12] ${
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
            <img
              ref={imageRef}
              src={imageUrl}
              alt={title}
              referrerPolicy="no-referrer"
              className="max-h-[88vh] max-w-[96vw] w-auto h-auto object-contain rounded-lg shadow-2xl border border-blue-500/20 bg-white"
              draggable={false}
            />
          </div>

          {/* Navigation Helper overlay */}
          <div className="absolute bottom-4 left-4 z-10 px-4 py-2 rounded-xl bg-[#080d16]/85 backdrop-blur-md border border-blue-500/20 text-slate-200 text-sm font-gost-mono flex items-center gap-2 pointer-events-none shadow-lg">
            <Move className="w-4 h-4 text-blue-400" />
            <span>
              {currentLang === 'uk'
                ? 'Коліщатко миші — масштаб · Перетягування — панорамування'
                : currentLang === 'sk'
                ? 'Kolečko myši — zoom · Ťahanie — posun výkresu'
                : 'Mouse wheel — zoom · Click & drag — pan blueprint'}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 z-10 px-4 py-2 rounded-xl bg-[#080d16]/85 backdrop-blur-md border border-blue-500/20 text-blue-400 text-xs font-gost-mono font-black pointer-events-none shadow-lg">
            ISO 9001 · EN 13480 · ASME B31.3 · {currentLang === 'uk' ? 'ГОСТ 2.304' : 'GOST 2.304'}
          </div>
        </div>

      </div>
    </div>
  );
};
