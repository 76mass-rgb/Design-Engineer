# Vitalii Dolynskyi — Mechanical & Industrial Design Engineer Portfolio

Production portfolio website for Vitalii Dolynskyi, mechanical and industrial design engineer with 27+ years of experience across machine design, industrial equipment, custom machinery, process piping, storage tanks, and manufacturing documentation.

Built with **React 19**, **Vite 6**, **Tailwind CSS 4**, and **TypeScript**.

## Tech Stack & Architecture

- **Framework:** React 19 SPA with TypeScript (ES2022)
- **Bundler:** Vite 6 with `@tailwindcss/vite`
- **Styling:** Tailwind CSS 4 with CSS variables and custom CAD blueprint themes
- **Icons:** Lucide React
- **Documents:** jsPDF & html2canvas for resume generation

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run at `http://localhost:3000`.

### Production Build & Linting

```bash
# Type check without emitting
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The application is deployed to GitHub Pages and served under a custom domain (`https://dolynskyi.engineering/`):
- Deployment runs automatically on push to `main`/`master` via `.github/workflows/deploy.yml`.
- Build output is generated to `dist/` with relative asset paths (`base: './'`).

## Architecture & UX Highlights

- **Interactive Engineering Showcase:** 10 verified industrial projects with authenticated CAD blueprints, shop drawings, 3D models, and operating field photographs.
- **Blueprint Viewer Modal:** Dedicated high-resolution CAD viewer with pan, zoom, touch pinch-zoom, and responsive pinned navigation toolbar across mobile, tablet, and desktop.
- **Squeeze-Page Flow:** Collapsible section architecture where the top navigation expands sections smoothly, with deep-linking support (`#contact`, etc.).
- **Low-Vision & High-Contrast Typography:** Root font scaling at 112.5% (18px), strict minimum 16px typography, max 70ch line lengths, and high-contrast color tokens.
- **Multilingual Support:** Native three-language localization (English, Slovak, Ukrainian) with browser URL and storage state persistence.
