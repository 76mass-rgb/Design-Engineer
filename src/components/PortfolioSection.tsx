import React, { useState, lazy, Suspense } from 'react';
import { ProjectItem, ProjectCategory, Language } from '../types';
import { PROJECTS_DATA, UI_TRANSLATIONS } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Eye, Layers, FileText, Camera, ShieldCheck } from 'lucide-react';

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

            <div className="flex items-center self-start lg:self-center mt-2 lg:mt-0">
              <div 
                className="text-sm sm:text-base font-gost-mono text-emerald-100 bg-emerald-900/95 border border-emerald-400/60 px-5 py-2.5 rounded-full font-bold shadow-md backdrop-blur-md flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
                title={
                  currentLang === 'uk'
                    ? '100% спроєктованих об\'єктів успішно змонтовано та введено в постійну експлуатацію'
                    : currentLang === 'sk'
                    ? '100% navrhnutých strojov a zariadení v trvalej prevádzke bez havárií'
                    : '100% engineered machines & plants operating reliably with zero failures'
                }
              >
                <ShieldCheck className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <span>
                  {currentLang === 'uk' && '100% Безаварійна експлуатація'}
                  {currentLang === 'sk' && '100% Prevádzková spoľahlivosť'}
                  {currentLang === 'en' && '100% Operational Track Record'}
                </span>
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

        {/* Portfolio Bento Grid - 2 cards per row stretching full width without right margin gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 2xl:gap-12">
          {filteredProjects.map((project) => {
            const currentSlide = activeSlides[project.id] || 0;
            const totalSlides = project.images.length;
            const currentImg = project.images[currentSlide] || project.coverImage;

            const drawingsCount = project.drawings?.length || 0;
            const photosCount = project.photos?.length || 0;

            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="w-full bg-[var(--glass-bg)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-3xl transition-all duration-300 group cursor-pointer flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-md hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2"
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
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-4.5 py-2 rounded-full border border-white/20 font-mono text-sm sm:text-base font-black text-white shadow-lg">
                    {project.year}
                  </div>

                  {/* Top Right Media Counts */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {drawingsCount > 0 && (
                      <span className="bg-blue-900/85 backdrop-blur-md border border-blue-400/50 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold text-blue-200 flex items-center gap-1.5 shadow-lg">
                        <FileText className="w-4 h-4" />
                        <span>{drawingsCount} DWG</span>
                      </span>
                    )}
                    {photosCount > 0 && (
                      <span className="bg-emerald-900/85 backdrop-blur-md border border-emerald-400/50 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold text-emerald-200 flex items-center gap-1.5 shadow-lg">
                        <Camera className="w-4 h-4" />
                        <span>{photosCount} FOTO</span>
                      </span>
                    )}
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-sm sm:text-base uppercase tracking-wider text-white bg-[var(--accent-blue)] px-7 py-3.5 rounded-full font-black flex items-center gap-2.5 shadow-2xl transform scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                      {currentLang === 'uk' ? 'Переглянути креслення та деталі' : currentLang === 'sk' ? 'Zobraziť výkresy a detaily' : 'View Blueprints & Case Study'}
                    </span>
                  </div>

                  {/* Slideshow Controls (Only if multiple images) */}
                  {totalSlides > 1 && (
                    <div
                      className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full z-10 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={(e) => handleSlide(project.id, totalSlides, -1, e)}
                        className="text-white hover:text-[#818cf8] p-1 transition-colors cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="font-mono text-sm text-white px-2 font-black">
                        {currentSlide + 1}/{totalSlides}
                      </span>
                      <button
                        onClick={(e) => handleSlide(project.id, totalSlides, 1, e)}
                        className="text-white hover:text-[#818cf8] p-1 transition-colors cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Project Metadata Card Body - Proportionally Enlarged */}
                <div className="p-7 sm:p-9 xl:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs sm:text-sm text-[var(--accent-blue)] font-gost-mono font-extrabold uppercase tracking-[0.22em] mb-3">
                      {project.category[currentLang]}
                    </div>
                    <h3 className="font-gost text-2xl sm:text-3xl xl:text-4xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {project.title[currentLang]}
                    </h3>
                    {project.description && (
                      <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-3 line-clamp-3 leading-relaxed font-normal">
                        {project.description[currentLang]}
                      </p>
                    )}
                  </div>

                  <div className="mt-7 pt-5 border-t border-[var(--border-color)] flex items-center justify-between">
                    <span className="font-gost-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text-secondary)] bg-[var(--bg-surface-2)] border border-[var(--border-color)] px-4 py-2 rounded-full font-bold">
                      {drawingsCount} {currentLang === 'uk' ? 'креслень' : currentLang === 'sk' ? 'výkresov' : 'drawings'} • {photosCount} {currentLang === 'uk' ? 'фото' : currentLang === 'sk' ? 'fotiek' : 'photos'}
                    </span>

                    <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--bg-surface-2)] border border-[var(--border-color)] group-hover:bg-[var(--accent-blue)] group-hover:text-white flex items-center justify-center text-base sm:text-lg font-bold text-[var(--text-primary)] transition-all group-hover:scale-110 shadow-sm">
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
