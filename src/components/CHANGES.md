# Changes (squeeze-page + readability update)

Changed files (all under `src/`):
- `src/App.tsx`
- `src/components/AboutSection.tsx`
- `src/components/BlueprintViewerModal.tsx`
- `src/components/ConceptToRealitySection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/EducationSection.tsx`
- `src/components/EngineeringTrustStats.tsx`
- `src/components/Footer.tsx`
- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`
- `src/components/PortfolioSection.tsx`
- `src/components/ProcessSection.tsx`
- `src/components/ProjectModal.tsx`
- `src/components/SqueezeNavigator.tsx`
- `src/index.css`

Highlights
- Sections 01-05 collapsed; the header menu expands them one at a time; in-page links like #contact open the right section.
- Hero fits the screen without scrolling on desktop (falls back to normal scrolling if text would get smaller than ~16px).
- Low-vision typography: root 112.5% (18px), smallest text ~16px, body 17-19px, line length capped at 70ch, no horizontal overflow.
- Header: full menu from 1200px, hamburger below. Footer without "Top" button. Blueprint viewer without zoom/HD toolbar.
- Section 03: stats / track-record block moved below the photo + buttons; photo column now also holds the 3 pillars.
- `src/components/SqueezeNavigator.tsx` is no longer used (can be deleted).

Run: `npm install` -> `npm run dev` / `npm run build`.
