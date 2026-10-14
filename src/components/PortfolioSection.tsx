import React, { useState, lazy, Suspense } from 'react';
import { ProjectItem, ProjectCategory, Language, BlueprintMediaItem } from '../types';
import { PROJECTS_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { getWebpUrl } from '../utils/imageOptimizer';
import { Eye, Layers, FileText, Camera, ShieldCheck, ArrowUpRight, Building2, Briefcase, AlertCircle, Wrench, CheckCircle2, Award, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectModal = lazy(() =>
  import('./ProjectModal').then((m) => ({ default: m.ProjectModal }))
);

interface PortfolioSectionProps {
  currentLang: Language;
  onOpenBlueprintZoom?: (
    imageUrl: string, 
    title: string,
    mediaList?: BlueprintMediaItem[],
    initialIndex?: number,
    projectTitle?: string
  ) => void;
  selectedProjectId?: string | null;
  onSelectProject?: (projectId: string | null) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  currentLang,
  onOpenBlueprintZoom,
  selectedProjectId,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [localSelectedProject, setLocalSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);
  const [selectedMediaTab, setSelectedMediaTab] = useState<'all' | 'drawings' | 'photos'>('all');
  const [isGridExpanded, setIsGridExpanded] = useState<boolean>(Boolean(selectedProjectId));

  // If parent passed selectedProjectId, find it
  const modalProject = selectedProjectId
    ? PROJECTS_DATA.find((p) => p.id === selectedProjectId) || localSelectedProject
    : localSelectedProject;

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: UI_TRANSLATIONS.allFilter?.[currentLang] || 'All' },
    { id: 'industrial', label: UI_TRANSLATIONS.filterIndustrial?.[currentLang] || 'Industrial Facilities' },
    { id: 'piping', label: UI_TRANSLATIONS.filterPiping?.[currentLang] || 'Piping & Pumping' },
    { id: 'steel', label: UI_TRANSLATIONS.filterSteel?.[currentLang] || 'Steel Structures' },
    { id: 'tanks', label: UI_TRANSLATIONS.filterTanks?.[currentLang] || 'Tanks & Bulk Storage' },
    { id: 'equipment', label: UI_TRANSLATIONS.filterEquipment?.[currentLang] || 'Machinery & Equipment' },
    { id: 'grain', label: UI_TRANSLATIONS.filterGrain?.[currentLang] || 'Grain & Agro' },
    { id: 'special', label: UI_TRANSLATIONS.filterSpecial?.[currentLang] || 'Special Projects' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categoryId === selectedCategory);

  const handleProjectClick = (
    project: ProjectItem,
    stageId?: string | null,
    mediaTab: 'all' | 'drawings' | 'photos' = 'all'
  ) => {
    setSelectedStageId(stageId || null);
    setSelectedMediaTab(mediaTab);
    setLocalSelectedProject(project);
    if (onSelectProject) {
      onSelectProject(project.id);
    }
  };

  const handleCloseModal = () => {
    setLocalSelectedProject(null);
    setSelectedStageId(null);
    setSelectedMediaTab('all');
    if (onSelectProject) {
      onSelectProject(null);
    }
  };

  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 relative bg-[var(--bg-primary)]">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6 mb-4 sm:mb-5">
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
                {UI_TRANSLATIONS.portfolioSecNum[currentLang]} // {currentLang === 'uk' ? 'ДОКАЗИ КОМПЕТЕНТНОСТІ' : currentLang === 'sk' ? 'DÔKAZY ODBORNOSTI' : 'PROVEN COMPETENCE'}
              </div>
              <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)] mb-2">
                {currentLang === 'uk' && 'Докази компетентності: Реалізовані інженерні кейси'}
                {currentLang === 'sk' && 'Dôkazy odbornosti: Realizované inžinierske projekty'}
                {currentLang === 'en' && 'Proven Competence: Implemented Engineering Cases'}
              </h2>
              <div className="text-base sm:text-xl font-gost font-bold text-[var(--accent-blue)]">
                {currentLang === 'uk' && 'Докази розв’язання інженерних задач: від розрахунків і креслень до працюючого обладнання'}
                {currentLang === 'sk' && 'Dôkazy riešenia úloh: od výpočtov a výkresov po reálne fungujúce zariadenia'}
                {currentLang === 'en' && 'Documented problem-solving: from FEA & CAD drawings to operating industrial equipment'}
              </div>
            </div>

            <div className="flex items-center self-start lg:self-center mt-2 lg:mt-0">
              <div 
                className="text-xs sm:text-sm lg:text-base font-gost-mono text-emerald-100 bg-emerald-900/95 border border-emerald-400/60 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold shadow-md backdrop-blur-md flex items-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
                title={
                  currentLang === 'uk'
                    ? 'Спроєктоване обладнання успішно виготовлено, змонтовано та експлуатується в промислових умовах'
                    : currentLang === 'sk'
                    ? 'Navrhnuté stroje a zariadenia úspešne vyrobené, zmontované a overené v prevádzke'
                    : 'Engineering designs successfully fabricated, erected, and operating in industrial facilities'
                }
              >
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 flex-shrink-0" />
                <span>
                  {currentLang === 'uk' && 'Реалізовано в промисловості'}
                  {currentLang === 'sk' && 'Overené v reálnej prevádzke'}
                  {currentLang === 'en' && 'Implemented in Industrial Environments'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-[70ch] font-medium leading-relaxed">
            {currentLang === 'uk' && 'Виберіть категорію вашої задачі (машинобудування, трубопроводи, металоконструкції, резервуари або елеватори), щоб за 30 секунд переконатися в наявності релевантного досвіду та ознайомитися з реальними кресленнями і фотографіями об’єктів.'}
            {currentLang === 'sk' && 'Zvoľte kategóriu vašej úlohy (strojárstvo, potrubia, oceľové konštrukcie, nádrže alebo silá) a behom 30 sekúnd overte skúsenosti s podobnými technickými výzvami prostredníctvom reálnych výkresov a fotodokumentácie.'}
            {currentLang === 'en' && 'Filter by your domain (machinery, process piping, structural steel, tanks, or grain elevators) to quickly verify relevant track record against your technical problem via authentic CAD blueprints and field photos.'}
          </p>
        </div>

        {/* Pinned Filter Category Toolbar (sticky on mobile, tablet & desktop so it doesn't run away when scrolling) */}
        <div className="sticky top-[58px] sm:top-[68px] z-30 bg-[var(--bg-primary)]/95 backdrop-blur-md -mx-2 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2.5 sm:py-3 border-b border-[var(--border-color)]/80 mb-6 sm:mb-8 shadow-sm transition-all">
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none flex-nowrap lg:flex-wrap" role="tablist" aria-label="Project categories">
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.categoryId === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setIsGridExpanded(true);
                  }}
                  className={`font-gost text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-[transform,background-color,border-color,color] duration-200 cursor-pointer shrink-0 flex items-center gap-2 touch-target select-none ${
                    isSelected
                      ? 'bg-[var(--accent-blue)] text-white shadow-md shadow-[var(--accent-blue)]/25 scale-[1.02] border border-[var(--accent-blue)] ring-2 ring-[var(--accent-blue)]/30'
                      : 'bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] border border-[var(--border-color)] active:scale-95'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-xs sm:text-xs font-mono font-black px-2 py-0.5 rounded-full transition-colors ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-[var(--bg-surface-3)] text-[var(--text-muted)]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Squeeze Toggle Bar (Screenshot 1: Grid hidden until activated) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-2)] border border-[var(--border-color)] mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center font-gost-mono font-black text-sm shrink-0 border border-[var(--border-color)]">
              {filteredProjects.length}
            </div>
            <div>
              <div className="font-gost text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                {currentLang === 'uk' ? `Кейси у категорії: ${categories.find(c => c.id === selectedCategory)?.label || ''}` : currentLang === 'sk' ? `Projekty v kategórii: ${categories.find(c => c.id === selectedCategory)?.label || ''}` : `Cases in: ${categories.find(c => c.id === selectedCategory)?.label || ''}`}
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-0.5 font-medium">
                {isGridExpanded
                  ? (currentLang === 'uk' ? 'Всі деталізовані кейси, креслення та фотографії розгорнуті нижче' : currentLang === 'sk' ? 'Všetky výkresy a fotodokumentácia sú zobrazené nižšie' : 'All blueprints, 3D CAD details and site photos are expanded below')
                  : (currentLang === 'uk' ? 'Оберіть категорію вище або натисніть кнопку праворуч, щоб переглянути кейси' : currentLang === 'sk' ? 'Zvoľte kategóriu alebo kliknite na tlačidlo pre zobrazenie projektov' : 'Choose a category above or click the button to reveal case studies')}
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsGridExpanded(!isGridExpanded)}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-[var(--btn-primary-text)] font-gost-mono font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-transform hover:scale-105 shrink-0"
          >
            <span>
              {isGridExpanded
                ? (currentLang === 'uk' ? 'Сховати кейси ▲' : currentLang === 'sk' ? 'Skryť projekty ▲' : 'Collapse Cases ▲')
                : (currentLang === 'uk' ? `Показати кейси (${filteredProjects.length}) ▼` : currentLang === 'sk' ? `Zobraziť projekty (${filteredProjects.length}) ▼` : `Show Cases (${filteredProjects.length}) ▼`)}
            </span>
          </button>
        </div>

        {/* Portfolio Grid - Evenly Distributed Columns */}
        {isGridExpanded && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-8 2xl:gap-10 animate-fadeIn">
            {filteredProjects.map((project) => {
            const drawingsCount = project.drawings?.length || 0;
            const photosCount = project.photos?.length || 0;

            // Collect all drawings and photos for expanded horizontal scrolling
            const mediaItems: { url: string; isDrawing: boolean; index: number; blockName?: string; blockId?: string }[] = [];
            
            // Always ensure the project cover image is present first
            if (project.coverImage) {
              const isDwg = project.drawings?.includes(project.coverImage) || false;
              mediaItems.push({
                url: project.coverImage,
                isDrawing: isDwg,
                index: 1,
                blockName: currentLang === 'uk' ? 'Обкладинка проєкту' : currentLang === 'sk' ? 'Titulný výkres' : 'Project Cover',
                blockId: project.mediaBlocks?.[0]?.id || 'cover'
              });
            }

            if (project.mediaBlocks && project.mediaBlocks.length > 0) {
              project.mediaBlocks.forEach((b) => {
                b.images.forEach((url, uIdx) => {
                  if (url === project.coverImage) return; // avoid duplicate
                  const isDwg = project.drawings?.includes(url) || false;
                  mediaItems.push({
                    url,
                    isDrawing: isDwg,
                    index: mediaItems.length + 1,
                    blockName: b.title[currentLang],
                    blockId: b.id
                  });
                });
              });
            } else {
              (project.drawings || []).forEach((url) => {
                if (url !== project.coverImage) {
                  mediaItems.push({ url, isDrawing: true, index: mediaItems.length + 1 });
                }
              });
              (project.photos || []).forEach((url) => {
                if (url !== project.coverImage) {
                  mediaItems.push({ url, isDrawing: false, index: mediaItems.length + 1 });
                }
              });
              if (mediaItems.length === 0) {
                const fallback = project.images && project.images.length > 0 ? project.images : (project.coverImage ? [project.coverImage] : []);
                fallback.forEach((url) => {
                  if (url !== project.coverImage) {
                    mediaItems.push({ url, isDrawing: false, index: mediaItems.length + 1 });
                  }
                });
              }
            }

            // Prepare full media playlist for BlueprintViewerModal
            const projectMediaList: BlueprintMediaItem[] = mediaItems.map((m) => {
              const cap = project.drawingCaptions?.[m.url]?.[currentLang];
              const isCov = m.url === project.coverImage && m.index === 1;
              return {
                url: m.url,
                title: cap 
                  ? `${project.title[currentLang]} — ${cap}` 
                  : (m.isDrawing
                      ? `${project.title[currentLang]} - DWG #${m.index}`
                      : (isCov
                          ? `${project.title[currentLang]} - Cover`
                          : `${project.title[currentLang]} - Photo #${m.index}`
                        )
                    ),
                isDrawing: m.isDrawing,
                caption: cap
              };
            });

            return (
              <article
                key={project.id}
                className="w-full bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl sm:rounded-3xl transition-[transform,border-color] duration-300 group flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-md hover:-translate-y-1"
              >
                {/* 1. TOP SECTION: Text info with badges aligned at top */}
                <div 
                  onClick={() => handleProjectClick(project)}
                  className="p-4 sm:p-7 xl:p-8 cursor-pointer transition-colors"
                >
                  {/* Top Bar: Year (dark red) on left, Media Count Pills moved up to the right as indicated by arrows */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
                    {/* Dark Red Year Badge */}
                    <span className="bg-[#851d1d] hover:bg-[#991b1b] border border-red-500/40 text-white font-mono text-xs sm:text-sm font-black px-3 sm:px-3.5 py-1 rounded-full shadow-sm shrink-0">
                      {project.year}
                    </span>

                    {/* Media Count Pills in the top row */}
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      {drawingsCount > 0 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const firstDwgIdx = mediaItems.findIndex((m) => m.isDrawing);
                            if (firstDwgIdx >= 0 && onOpenBlueprintZoom) {
                              onOpenBlueprintZoom(
                                mediaItems[firstDwgIdx].url,
                                `${project.title[currentLang]} — DWG`,
                                projectMediaList,
                                firstDwgIdx,
                                project.title[currentLang]
                              );
                            } else {
                              handleProjectClick(project, null, 'drawings');
                            }
                          }}
                          className="bg-[#0284c7] hover:bg-[#0369a1] active:scale-95 border border-[#38bdf8]/40 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-xs font-mono font-black text-white flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer select-none"
                          title={
                            currentLang === 'uk'
                              ? `Переглянути креслення (${drawingsCount} DWG)`
                              : currentLang === 'sk'
                              ? `Zobraziť výkresy (${drawingsCount} DWG)`
                              : `View Blueprints (${drawingsCount} DWG)`
                          }
                        >
                          <FileText className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{drawingsCount} DWG</span>
                        </button>
                      )}
                      {photosCount > 0 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const firstPhotoIdx = mediaItems.findIndex((m) => !m.isDrawing);
                            if (firstPhotoIdx >= 0 && onOpenBlueprintZoom) {
                              onOpenBlueprintZoom(
                                mediaItems[firstPhotoIdx].url,
                                `${project.title[currentLang]} — Photo`,
                                projectMediaList,
                                firstPhotoIdx,
                                project.title[currentLang]
                              );
                            } else {
                              handleProjectClick(project, null, 'photos');
                            }
                          }}
                          className="bg-[#16a34a] hover:bg-[#15803d] active:scale-95 border border-[#4ade80]/40 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-xs font-mono font-black text-white flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer select-none"
                          title={
                            currentLang === 'uk'
                              ? `Переглянути фотографії (${photosCount} FOTO)`
                              : currentLang === 'sk'
                              ? `Zobraziť fotografie (${photosCount} FOTO)`
                              : `View Photos (${photosCount} FOTO)`
                          }
                        >
                          <Camera className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{photosCount} FOTO</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Category Title */}
                  <div className="text-xs sm:text-sm text-[var(--accent-blue)] font-gost-mono font-extrabold uppercase tracking-[0.2em] mb-1.5">
                    {project.category[currentLang]}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-gost text-xl sm:text-2xl xl:text-3xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug mb-3">
                    {project.title[currentLang]}
                  </h3>

                  {/* JTBD Structured Breakdown (Client Type -> Role -> Problem -> Engineered Solution -> Result) */}
                  <div className="space-y-2 text-xs sm:text-sm bg-[var(--badge-bg)]/80 p-3.5 sm:p-4 rounded-xl border border-[var(--border-color)]">
                    {/* 1. Client / Project Type */}
                    {project.clientType && (
                      <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                        <Building2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                        <div className="leading-snug">
                          <span className="font-gost-mono font-bold text-[var(--text-primary)] uppercase mr-1.5">
                            {currentLang === 'uk' ? 'Тип об’єкта:' : currentLang === 'sk' ? 'Objekt / Klient:' : 'Facility / Client:'}
                          </span>
                          <span>{project.clientType[currentLang]}</span>
                        </div>
                      </div>
                    )}

                    {/* 2. My Role */}
                    {project.myRole && (
                      <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                        <Briefcase className="w-4 h-4 text-[#7e22ce] dark:text-[#9333ea] shrink-0 mt-0.5" />
                        <div className="leading-snug">
                          <span className="font-gost-mono font-black text-[#6b21a8] dark:text-[#9333ea] uppercase mr-1.5 tracking-wide">
                            {currentLang === 'uk' ? 'Роль:' : currentLang === 'sk' ? 'Moja rola:' : 'My Role:'}
                          </span>
                          <span className="text-[var(--text-primary)] font-semibold">{project.myRole[currentLang]}</span>
                        </div>
                      </div>
                    )}

                    {/* 3. Engineering Problem */}
                    {(project.engineeringProblem || project.engineeringChallenge) && (
                      <div className="flex items-start gap-2 pt-1 border-t border-[var(--border-color)]/60">
                        <AlertCircle className="w-4 h-4 text-[#b45309] dark:text-[#d97706] shrink-0 mt-0.5" />
                        <div className="leading-snug">
                          <span className="font-gost-mono font-black text-[#92400e] dark:text-[#d97706] uppercase mr-1.5 tracking-wide">
                            {currentLang === 'uk' ? 'Задача / Проблема:' : currentLang === 'sk' ? 'Problém:' : 'Problem:'}
                          </span>
                          <span className="text-[var(--text-primary)] font-semibold">
                            {(project.engineeringProblem || project.engineeringChallenge)?.[currentLang]}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* 4. What I Designed / Engineered */}
                    {(project.whatIDesigned || project.workPerformed) && (
                      <div className="flex items-start gap-2 pt-1 border-t border-[var(--border-color)]/60">
                        <Wrench className="w-4 h-4 text-[#0369a1] dark:text-[#0284c7] shrink-0 mt-0.5" />
                        <div className="leading-snug">
                          <span className="font-gost-mono font-black text-[#075985] dark:text-[#0284c7] uppercase mr-1.5 tracking-wide">
                            {currentLang === 'uk' ? 'Спроєктовано:' : currentLang === 'sk' ? 'Navrhnuté:' : 'Engineered:'}
                          </span>
                          <span className="text-[var(--text-primary)] font-semibold">
                            {(project.whatIDesigned || project.workPerformed)?.[currentLang]}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* 5. Result */}
                    {project.result && (
                      <div className="flex items-start gap-2 pt-1 border-t border-[var(--border-color)]/60">
                        <CheckCircle2 className="w-4 h-4 text-[#15803d] dark:text-[#16a34a] shrink-0 mt-0.5" />
                        <div className="leading-snug">
                          <span className="font-gost-mono font-black text-[#166534] dark:text-[#16a34a] uppercase mr-1.5 tracking-wide">
                            {currentLang === 'uk' ? 'Результат:' : currentLang === 'sk' ? 'Výsledok:' : 'Result:'}
                          </span>
                          <span className="text-[#166534] dark:text-[#16a34a] font-bold">{project.result[currentLang]}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Process Stages Pills if available */}
                  {!project.hideStageButtons && project.mediaBlocks && project.mediaBlocks.length > 0 && (
                    <div className="flex flex-col gap-2.5 mt-3.5 pt-3 border-t border-[var(--border-color)]">
                      {project.mediaBlocks.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(project, b.id);
                          }}
                          className="group/stage text-left text-base sm:text-lg md:text-[19px] font-gost-mono font-bold leading-snug px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-amber-900/85 hover:bg-amber-800 border border-amber-400/60 hover:border-amber-300 text-amber-100 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer block active:scale-[0.99]"
                          title={
                            currentLang === 'uk'
                              ? `Натисніть для перегляду: ${b.title[currentLang]}`
                              : currentLang === 'sk'
                              ? `Kliknite pre zobrazenie: ${b.title[currentLang]}`
                              : `Click to view: ${b.title[currentLang]}`
                          }
                        >
                          {b.title[currentLang]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. VERTICAL LIST OF BLUEPRINTS AND PHOTOS (maximized width & height on mobile & tablet) */}
                <div className="w-full flex flex-col gap-2.5 sm:gap-5 px-1.5 sm:px-4 md:px-6 pb-4 sm:pb-6">
                  {mediaItems.map((media, idx) => {
                    const isCover = media.url === project.coverImage && idx === 0;
                    const caption = project.drawingCaptions?.[media.url]?.[currentLang];
                    const zoomTitle = caption 
                      ? `${project.title[currentLang]} — ${caption}` 
                      : (media.isDrawing
                          ? `${project.title[currentLang]} - DWG #${media.index}`
                          : (isCover
                              ? `${project.title[currentLang]} - Cover`
                              : `${project.title[currentLang]} - Photo #${media.index}`
                            )
                        );

                    return (
                      <div
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenBlueprintZoom) {
                            onOpenBlueprintZoom(
                              media.url, 
                              zoomTitle, 
                              projectMediaList, 
                              idx, 
                              project.title[currentLang]
                            );
                          } else {
                            handleProjectClick(project, media.blockId);
                          }
                        }}
                        className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#070b14] rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-colors cursor-pointer group/item shadow-md flex items-center justify-center"
                        title={
                          caption ||
                          (isCover
                            ? (currentLang === 'uk' ? 'Головна обкладинка проєкту' : currentLang === 'sk' ? 'Titulná fotografia' : 'Project Cover')
                            : (media.isDrawing
                              ? (currentLang === 'uk' ? 'Натисніть для перегляду креслення' : currentLang === 'sk' ? 'Kliknite pre zobrazenie výkresu' : 'Click to view blueprint')
                              : (currentLang === 'uk' ? 'Натисніть для перегляду фото' : currentLang === 'sk' ? 'Kliknite pre zobrazenie fotky' : 'Click to view photo')))
                        }
                      >
                        {/* Top CAD badge indicating DWG or FOTO */}
                        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 pointer-events-none">
                          <span className={`text-[10px] sm:text-xs font-mono font-black px-2 py-0.5 rounded-md border shadow-md ${
                            media.isDrawing 
                              ? 'bg-blue-600/90 text-white border-blue-400/50' 
                              : 'bg-emerald-600/90 text-white border-emerald-400/50'
                          }`}>
                            {media.isDrawing ? `DWG #${media.index}` : `FOTO #${media.index}`}
                          </span>
                          {caption && (
                            <span className="text-[10px] sm:text-xs font-gost-mono font-bold px-2 py-0.5 rounded-md bg-black/85 text-white border border-white/20 truncate max-w-[200px] sm:max-w-xs shadow hidden sm:inline-block">
                              {caption}
                            </span>
                          )}
                        </div>

                        <picture className="w-full h-full flex items-center justify-center">
                          {getWebpUrl(media.url) && (
                            <source srcSet={getWebpUrl(media.url)} type="image/webp" />
                          )}
                          <img
                            src={media.url}
                            alt={caption 
                              ? `${project.title[currentLang]} — ${caption} (${media.isDrawing ? (currentLang === 'uk' ? 'креслення CAD' : currentLang === 'sk' ? 'výkres CAD' : 'CAD drawing') : (currentLang === 'uk' ? 'фото вузла' : currentLang === 'sk' ? 'foto z prevádzky' : 'operating unit photo')})` 
                              : `${project.title[currentLang]} — ${isCover ? (currentLang === 'uk' ? 'загальний вигляд об’єкта' : currentLang === 'sk' ? 'celkový pohľad' : 'general assembly overview') : (media.isDrawing ? (currentLang === 'uk' ? `робоче креслення №${media.index}` : currentLang === 'sk' ? `výrobný výkres č.${media.index}` : `shop drawing #${media.index}`) : (currentLang === 'uk' ? `фотографія реалізації №${media.index}` : currentLang === 'sk' ? `fotodokumentácia č.${media.index}` : `operating installation photo #${media.index}`))}`}
                            width={1200}
                            height={900}
                            className={`w-full h-full ${media.isDrawing ? 'object-contain p-1.5 sm:p-2 bg-[#060a12]' : 'object-cover'} filter brightness-[0.96] group-hover/item:brightness-100 group-hover/item:scale-[1.02] transition-[filter,transform] duration-500`}
                            loading="lazy"
                          />
                        </picture>

                        {/* Clean hover overlay with Eye icon */}
                        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="bg-[var(--accent-blue)] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform scale-95 group-hover/item:scale-100 transition-transform">
                            <Eye className="w-4 h-4" />
                            <span>
                              {media.isDrawing 
                                ? (currentLang === 'uk' ? 'Переглянути креслення' : currentLang === 'sk' ? 'Zobraziť výkres' : 'View Blueprint')
                                : (currentLang === 'uk' ? 'Переглянути фото' : currentLang === 'sk' ? 'Zväčšiť fotku' : 'View Photo')
                              }
                            </span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 3. Bottom Button to Open Full Project */}
                <div className="px-3 sm:px-7 pb-5 sm:pb-7 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex-1 py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-primary)] hover:text-white border border-[var(--border-color)] hover:border-[var(--accent-blue)] font-gost-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-[transform,background-color,border-color,color] cursor-pointer shadow-sm active:scale-[0.99]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{currentLang === 'uk' ? 'Переглянути кейс і креслення' : currentLang === 'sk' ? 'Otvoriť prípad a výkresy' : 'View Case Study & Blueprints'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#contact"
                    className="py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[var(--badge-bg)] hover:bg-[var(--bg-surface-3)] text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 font-gost-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
                    title={currentLang === 'uk' ? 'Обговорити схожу задачу' : currentLang === 'sk' ? 'Konzultovať podobnú úlohu' : 'Discuss similar challenge'}
                  >
                    <span>{currentLang === 'uk' ? 'Схожа задача' : currentLang === 'sk' ? 'Podobná úloha' : 'Similar Task'}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        )}

      </div>

      {/* Full Resolution Project Details Modal */}
      {modalProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={modalProject}
            currentLang={currentLang}
            onClose={handleCloseModal}
            onOpenBlueprintZoom={onOpenBlueprintZoom}
            initialBlockId={selectedStageId}
            initialMediaTab={selectedMediaTab}
          />
        </Suspense>
      )}
    </section>
  );
};
