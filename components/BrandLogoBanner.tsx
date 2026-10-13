import React from 'react';

interface BrandLogoBannerProps {
  className?: string;
}

export const BrandLogoBanner: React.FC<BrandLogoBannerProps> = ({ className = '' }) => {
  return (
    <div
      className={`dva-logo w-full select-none transition-transform duration-300 hover:scale-[1.01] cursor-pointer ${className}`}
      id="engineer-brand-identity"
    >
      <div className="dva-wrap w-full">
        <svg
          viewBox="0 0 1000 126"
          className="w-full h-auto block select-none overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="INZINIER · KONSTRUKTER / VITALII DOLYNSKYI"
        >
          {/* 1. TOP LINE: INZINIER · KONSTRUKTER (stretched 100% from start to end of line) */}
          {/* 3D Shadow Layer (offset +2, +2) */}
          <text
            x="2"
            y="25"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="dva-svg-text dva-svg-sub dva-svg-shadow"
            fontWeight="bold"
          >
            INZINIER · KONSTRUKTER
          </text>
          {/* Base Layer */}
          <text
            x="0"
            y="23"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="dva-svg-text dva-svg-sub dva-svg-base"
            fontWeight="normal"
            style={{ fontWeight: 'normal' }}
          >
            INZINIER · KONSTRUKTER
          </text>

          {/* 2. MIDDLE DIVIDER: 100% full width divider from 0 to 1000 */}
          <rect x="0" y="36" width="1000" height="4.5" fill="var(--accent-blue)" rx="1.5" />

          {/* 3. BOTTOM LINE: VITALII DOLYNSKYI (stretched 100% from start to end of line) */}
          {/* 3D Shadow Layer (offset +2.5, +2.5) */}
          <text
            x="2.5"
            y="112.5"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="dva-svg-text dva-svg-main dva-svg-shadow"
            fontWeight="bold"
          >
            VITALII <tspan className="dva-svg-accent-shadow">D</tspan>OLYNSKYI
          </text>
          {/* Base Layer */}
          <text
            x="0"
            y="110"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="dva-svg-text dva-svg-main dva-svg-base"
            fontWeight="normal"
            style={{ fontWeight: 'normal' }}
          >
            VITALII <tspan className="dva-svg-accent">D</tspan>OLYNSKYI
          </text>
        </svg>
      </div>
    </div>
  );
};
