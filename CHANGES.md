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
- Header: full menu from 1200px (font-size 16.4px), hamburger below.
- Start state: default starts in English language ('en') and 'navy' theme.
- Section 02 (Portfolio): Project cards arranged in evenly distributed columns (equal 50% width on desktop).
- Section 03 (About): The 3 engineering pillars («Практична реалізованість», «Виробнича логіка», «Швидка комунікація») arranged horizontally in one single row across 3 equal columns below the photo and biography.
- SVG Logo: Foreground letters in 'normal' font-weight with bold 3D background shadow letters.
- `src/components/SqueezeNavigator.tsx` is no longer used (can be deleted).

Run: `npm install` -> `npm run dev` / `npm run build`.
