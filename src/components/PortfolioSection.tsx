import React, { useState } from 'react';
import { ProjectItem, ProjectCategory, Language } from '../types';
import { PROJECTS_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ChevronLeft, ChevronRight, Eye, Layers, FileText, Camera, ShieldCheck } from 'lucide-react';

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
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});
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

  const handleSlide = (projectId: string, total: number, dir: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlides((prev) => {
      const current = prev[projectId] || 0;
      const nextIndex = (current + dir + total) % total;
      return { ...prev, [projectId]: nextIndex };
    });
  };

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
    <section id="portfolio" className="py-24 md:py-32 relative border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-5">
            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.25em] text-[var(--accent-blue)] mb-2 font-gost-mono">
                {currentLang === 'uk' ? 'ВИБРАНІ ПРОЄКТИ ТА КРЕСЛЕННЯ' : currentLang === 'sk' ? 'VYBRANÉ PROJEKTY A VÝKRESY' : 'SELECTED WORKS & DRAWINGS'}
              </div>
              <h2 className="font-gost text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)] mb-2">
                {currentLang === 'uk' && 'Інженерний архів проєктів та креслень'}
                {currentLang === 'sk' && 'Inžiniersky archív projektov a výkresov'}
                {currentLang === 'en' && 'Engineering Portfolio & Technical Blueprints'}
              </h2>
              <div className="text-xl sm:text-2xl font-gost font-bold text-[var(--accent-blue)]">
                {currentLang === 'uk' && 'Спроєктоване обладнання в реальній експлуатації'}
                {currentLang === 'sk' && 'Navrhnuté stroje a zariadenia v reálnej prevádzke'}
                {currentLang === 'en' && 'Engineered Machinery & Plants in Active Operation'}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
              <div className="text-sm sm:text-base font-gost-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2.5 rounded-full font-bold shadow-sm flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                <span>100% Operational Track Record</span>
              </div>

              <div className="text-sm sm:text-base font-gost-mono text-[var(--text-secondary)] flex items-center gap-2 bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-5 py-2.5 rounded-full w-fit font-bold shadow-sm">
                <Layers className="w-4.5 h-4.5 text-[var(--accent-blue)]" />
                <span>{filteredProjects.length} / {PROJECTS_DATA.length} {currentLang === 'uk' ? 'проєктів' : currentLang === 'sk' ? 'projektov' : 'projects'}</span>
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-4xl font-medium leading-relaxed">
            {currentLang === 'uk' && 'Фотографії реалізованих промислових об\'єктів, діючих резервуарних парків, змонтованих нафтових та газових комплексів, трубопроводів та спеціального обладнання.'}
            {currentLang === 'sk' && 'Fotografie zrealizovaných priemyselných objektov, zásobníkových parkov, zmontovaných ropných a plynových terminálov, potrubí a strojov.'}
            {currentLang === 'en' && 'Photographs of commissioned industrial plants, operating bulk tank farms, rail & river gas/oil terminals, process piping manifolds, and custom machinery.'}
          </p>
        </div>

        {/* Filter Category Tabs (Pills) */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`font-gost text-sm sm:text-base font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[var(--accent-blue)] text-white shadow-lg scale-105'
                  : 'bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface-3)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project) => {
            const currentSlide = activeSlides[project.id] || 0;
            const totalSlides = project.images.length;
            const currentImg = project.images[currentSlide] || project.coverImage;

            const drawingsCount = project.drawings?.length || 0;
            const photosCount = project.photos?.length || 0;

            // Calculate grid span for desktop bento layout
            let colSpanClass = 'lg:col-span-4';
            if (project.gridSpan === 7) colSpanClass = 'lg:col-span-7';
            else if (project.gridSpan === 6) colSpanClass = 'lg:col-span-6';
            else if (project.gridSpan === 5) colSpanClass = 'lg:col-span-5';
            else if (project.gridSpan === 4) colSpanClass = 'lg:col-span-4';

            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-3xl transition-all duration-300 group cursor-pointer flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 ${colSpanClass}`}
              >
                {/* Slideshow Container */}
                <div className="relative aspect-[16/10] bg-[#0c1017] overflow-hidden">
                  <img
                    src={currentImg}
                    alt={project.title[currentLang]}
                    className="w-full h-full object-cover filter brightness-[0.92] group-hover:brightness-[1] group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Year Pill Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 font-mono text-sm font-extrabold text-white shadow-md">
                    {project.year}
                  </div>

                  {/* Top Right Media Counts */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                    {drawingsCount > 0 && (
                      <span className="bg-blue-900/80 backdrop-blur-md border border-blue-400/40 px-2.5 py-1 rounded-full text-xs font-mono font-bold text-blue-200 flex items-center gap-1 shadow-md">
                        <FileText className="w-3 h-3" />
                        <span>{drawingsCount} DWG</span>
                      </span>
                    )}
                    {photosCount > 0 && (
                      <span className="bg-emerald-900/80 backdrop-blur-md border border-emerald-400/40 px-2.5 py-1 rounded-full text-xs font-mono font-bold text-emerald-200 flex items-center gap-1 shadow-md">
                        <Camera className="w-3 h-3" />
                        <span>{photosCount} FOTO</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-sm uppercase tracking-widest text-white bg-[var(--accent-blue)] px-6 py-3 rounded-full font-extrabold flex items-center gap-2 shadow-2xl transform scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4" />
                      {currentLang === 'uk' ? 'Переглянути креслення та деталі' : currentLang === 'sk' ? 'Zobraziť výkresy a detaily' : 'View Blueprints & Case Study'}
                    </span>
                  </div>

                  {/* Slideshow Controls (Only if multiple images) */}
                  {totalSlides > 1 && (
                    <div
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full z-10 shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={(e) => handleSlide(project.id, totalSlides, -1, e)}
                        className="text-white hover:text-[#818cf8] p-1 transition-colors cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="font-mono text-xs text-white px-2 font-bold">
                        {currentSlide + 1}/{totalSlides}
                      </span>
                      <button
                        onClick={(e) => handleSlide(project.id, totalSlides, 1, e)}
                        className="text-white hover:text-[#818cf8] p-1 transition-colors cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Project Metadata Card Body */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs text-[var(--accent-blue)] font-gost-mono font-extrabold uppercase tracking-[0.2em] mb-2.5">
                      {project.category[currentLang]}
                    </div>
                    <h3 className="font-gost text-xl sm:text-2xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {project.title[currentLang]}
                    </h3>
                    {project.description && (
                      <p className="text-sm text-[var(--text-secondary)] mt-2 line-clamp-2 leading-relaxed">
                        {project.description[currentLang]}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                    <span className="font-gost-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-3.5 py-1.5 rounded-full font-bold">
                      {drawingsCount} {currentLang === 'uk' ? 'креслень' : currentLang === 'sk' ? 'výkresov' : 'drawings'} • {photosCount} {currentLang === 'uk' ? 'фото' : currentLang === 'sk' ? 'fotiek' : 'photos'}
                    </span>

                    <span className="w-9 h-9 rounded-full bg-[var(--bg-surface-2)] border border-[var(--border-color)] group-hover:bg-[var(--accent-blue)] group-hover:text-white flex items-center justify-center text-sm font-bold text-[var(--text-primary)] transition-all group-hover:scale-110 shadow-sm">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full Resolution Project Details Modal */}
      <ProjectModal
        project={modalProject}
        currentLang={currentLang}
        onClose={handleCloseModal}
        onOpenBlueprintZoom={onOpenBlueprintZoom}
      />
    </section>
  );
};
