import React, { useState, lazy, Suspense } from 'react';
import { ProjectItem, ProjectCategory, Language } from '../types';
import { PROJECTS_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { getWebpUrl } from '../utils/imageOptimizer';
import { Eye, Layers, FileText, Camera, ShieldCheck, ArrowUpRight } from 'lucide-react';

const ProjectModal = lazy(() =>
  import('./ProjectModal').then((m) => ({ default: m.ProjectModal }))
);

interface PortfolioSectionProps {
  currentLang: Language;
  onOpenBlueprintZoom?: (imageUrl: string, title: string) => void;
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

  const handleProjectClick = (project: ProjectItem) => {
    setLocalSelectedProject(project);
    if (onSelectProject) {
      onSelectProject(project.id);
    }
  };

  const handleCloseModal = () => {
    setLocalSelectedProject(null);
    if (onSelectProject) {
      onSelectProject(null);
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6 mb-4 sm:mb-5">
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
                {currentLang === 'uk' ? 'ВИБРАНІ ПРОЄКТИ ТА КРЕСЛЕННЯ' : currentLang === 'sk' ? 'VYBRANÉ PROJEKTY A VÝKRESY' : 'SELECTED WORKS & DRAWINGS'}
              </div>
              <h2 className="font-gost text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)] mb-2">
                {currentLang === 'uk' && 'Інженерний архів проєктів та креслень'}
                {currentLang === 'sk' && 'Inžiniersky archív projektov a výkresov'}
                {currentLang === 'en' && 'Engineering Portfolio & Technical Blueprints'}
              </h2>
              <div className="text-lg sm:text-2xl font-gost font-bold text-[var(--accent-blue)]">
                {currentLang === 'uk' && 'Спроєктоване обладнання в реальній експлуатації'}
                {currentLang === 'sk' && 'Navrhnuté stroje a zariadenia v reálnej prevádzke'}
                {currentLang === 'en' && 'Engineered Machinery & Plants in Active Operation'}
              </div>
            </div>

            <div className="flex items-center self-start lg:self-center mt-2 lg:mt-0">
              <div 
                className="text-xs sm:text-sm lg:text-base font-gost-mono text-emerald-100 bg-emerald-900/95 border border-emerald-400/60 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold shadow-md backdrop-blur-md flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                title={
                  currentLang === 'uk'
                    ? '100% спроєктованих об\'єктів успішно змонтовано та введено в постійну експлуатацію'
                    : currentLang === 'sk'
                    ? '100% navrhnutých strojov a zariadení v trvalej prevádzke bez havárií'
                    : '100% engineered machines & plants operating reliably with zero failures'
                }
              >
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 flex-shrink-0" />
                <span>
                  {currentLang === 'uk' && '100% Безаварійна експлуатація'}
                  {currentLang === 'sk' && '100% Prevádzková spoľahlivosť'}
                  {currentLang === 'en' && '100% Operational Track Record'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-4xl font-medium leading-relaxed">
            {currentLang === 'uk' && 'Фотографії реалізованих промислових об\'єктів, діючих резервуарних парків, змонтованих нафтових та газових комплексів, трубопроводів та спеціального обладнання.'}
            {currentLang === 'sk' && 'Fotografie zrealizovaných priemyselných objektov, zásobníkových parkov, zmontovaných ropných a plynových terminálov, potrubí a strojov.'}
            {currentLang === 'en' && 'Photographs of commissioned industrial plants, operating bulk tank farms, rail & river gas/oil terminals, process piping manifolds, and custom machinery.'}
          </p>
        </div>

        {/* Filter Category Tabs (Pills) - Responsive wrap on mobile/tablet, fully readable & easy to tap */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-12 items-center" role="tablist" aria-label="Project categories">
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
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-gost text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 sm:px-4.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 touch-target select-none ${
                  isSelected
                    ? 'bg-[var(--accent-blue)] text-white shadow-md shadow-[var(--accent-blue)]/25 scale-[1.02] border border-[var(--accent-blue)] ring-2 ring-[var(--accent-blue)]/30'
                    : 'bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] border border-[var(--border-color)] active:scale-95'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] sm:text-xs font-mono font-black px-2 py-0.5 rounded-full transition-colors ${
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

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-10 2xl:gap-12">
          {filteredProjects.map((project) => {
            const drawingsCount = project.drawings?.length || 0;
            const photosCount = project.photos?.length || 0;

            // Collect all drawings and photos for expanded horizontal scrolling
            const mediaItems: { url: string; isDrawing: boolean; index: number }[] = [];
            (project.drawings || []).forEach((url, idx) => {
              mediaItems.push({ url, isDrawing: true, index: idx + 1 });
            });
            (project.photos || []).forEach((url, idx) => {
              mediaItems.push({ url, isDrawing: false, index: idx + 1 });
            });
            if (mediaItems.length === 0) {
              const fallback = project.images && project.images.length > 0 ? project.images : [project.coverImage];
              fallback.forEach((url, idx) => {
                mediaItems.push({ url, isDrawing: false, index: idx + 1 });
              });
            }

            return (
              <article
                key={project.id}
                className="w-full bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl sm:rounded-3xl transition-all duration-300 group flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-md hover:shadow-2xl hover:-translate-y-1"
              >
                {/* 1. TOP SECTION: Text info with badges aligned at top */}
                <div 
                  onClick={() => handleProjectClick(project)}
                  className="p-4 sm:p-7 xl:p-8 cursor-pointer transition-colors"
                >
                  {/* Top Bar: Year (dark red) on left, Media Count Pills moved up to the right as indicated by arrows */}
                  <div className="flex items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
                    {/* Dark Red Year Badge */}
                    <span className="bg-[#851d1d] hover:bg-[#991b1b] border border-red-500/40 text-white font-mono text-xs sm:text-sm font-black px-3 sm:px-3.5 py-1 rounded-full shadow-sm shrink-0">
                      {project.year}
                    </span>

                    {/* Media Count Pills (1 DWG, 1 FOTO) in the top row */}
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                      {drawingsCount > 0 && (
                        <span className="bg-blue-900/80 border border-blue-400/50 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold text-blue-200 flex items-center gap-1 shadow-sm">
                          <FileText className="w-3.5 h-3.5" />
                          <span>{drawingsCount} DWG</span>
                        </span>
                      )}
                      {photosCount > 0 && (
                        <span className="bg-emerald-900/80 border border-emerald-400/50 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold text-emerald-200 flex items-center gap-1 shadow-sm">
                          <Camera className="w-3.5 h-3.5" />
                          <span>{photosCount} FOTO</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category Title */}
                  <div className="text-xs sm:text-sm text-[var(--accent-blue)] font-gost-mono font-extrabold uppercase tracking-[0.2em] mb-2 sm:mb-2.5">
                    {project.category[currentLang]}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-gost text-xl sm:text-2xl xl:text-3xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                    {project.title[currentLang]}
                  </h3>

                  {/* Project Description */}
                  {project.description && (
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 sm:mt-2.5 line-clamp-3 leading-relaxed font-normal">
                      {project.description[currentLang]}
                    </p>
                  )}
                </div>

                {/* 2. VERTICAL LIST OF BLUEPRINTS AND PHOTOS (maximized width & height on mobile & tablet) */}
                <div className="w-full flex flex-col gap-2.5 sm:gap-5 px-1.5 sm:px-4 md:px-6 pb-4 sm:pb-6">
                  {mediaItems.map((media, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (media.isDrawing && onOpenBlueprintZoom) {
                          onOpenBlueprintZoom(media.url, `${project.title[currentLang]} - DWG #${media.index}`);
                        } else {
                          handleProjectClick(project);
                        }
                      }}
                      className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#0c1017] rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-all cursor-pointer group/item shadow-md"
                      title={
                        media.isDrawing
                          ? (currentLang === 'uk' ? 'Натисніть для перегляду креслення' : currentLang === 'sk' ? 'Kliknite pre zobrazenie výkresu' : 'Click to view blueprint')
                          : (currentLang === 'uk' ? 'Натисніть для перегляду фото' : currentLang === 'sk' ? 'Kliknite pre zobrazenie fotky' : 'Click to view photo')
                      }
                    >
                      <picture className="w-full h-full block">
                        {getWebpUrl(media.url) && (
                          <source srcSet={getWebpUrl(media.url)} type="image/webp" />
                        )}
                        <img
                          src={media.url}
                          alt={`${project.title[currentLang]} - ${media.isDrawing ? 'DWG' : 'Photo'} ${media.index}`}
                          width={1200}
                          height={900}
                          className="w-full h-full object-cover filter brightness-[0.94] group-hover/item:brightness-100 group-hover/item:scale-[1.02] transition-all duration-500"
                          loading="lazy"
                        />
                      </picture>

                      {/* Clean hover overlay with Eye icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="bg-[var(--accent-blue)] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform scale-95 group-hover/item:scale-100 transition-transform">
                          <Eye className="w-4 h-4" />
                          <span>
                            {media.isDrawing 
                              ? (currentLang === 'uk' ? 'Переглянути креслення' : currentLang === 'sk' ? 'Zobraziť výkres' : 'View Blueprint')
                              : (currentLang === 'uk' ? 'Збільшити фото' : currentLang === 'sk' ? 'Zväčšiť foto' : 'Enlarge Photo')
                            }
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Bottom Button to Open Full Project */}
                <div className="px-3 sm:px-7 pb-5 sm:pb-7">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="w-full py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[var(--bg-surface-2)] hover:bg-[var(--accent-blue)] text-[var(--text-primary)] hover:text-white border border-[var(--border-color)] hover:border-[var(--accent-blue)] font-gost-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{currentLang === 'uk' ? 'Відкрити проєкт повністю' : currentLang === 'sk' ? 'Otvoriť celý projekt' : 'Open Full Project'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Full Resolution Project Details Modal */}
      {modalProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={modalProject}
            currentLang={currentLang}
            onClose={handleCloseModal}
            onOpenBlueprintZoom={onOpenBlueprintZoom}
          />
        </Suspense>
      )}
    </section>
  );
};
