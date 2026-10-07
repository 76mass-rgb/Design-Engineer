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
          aria-label="INZINIER - KONSTRUKTER / VITALII DOLYNSKYI"
        >
          <style>{`
            .dva-svg-text {
              font-family: 'PT Sans Narrow', 'ISOCPEUR', sans-serif;
              font-weight: 700;
            }
            .dva-svg-sub {
              font-size: 26px;
            }
            .dva-svg-main {
              font-size: 72px;
            }
            .dva-svg-base {
              fill: #3d4550;
            }
            html[data-theme="dark"] .dva-svg-base {
              fill: #e2e8f0;
            }
            .dva-svg-accent {
              fill: #d9531e;
            }
            .dva-svg-shadow {
              fill: #d9531e;
            }
            .dva-svg-accent-shadow {
              fill: #3d4550;
            }
            html[data-theme="dark"] .dva-svg-accent-shadow {
              fill: #0f172a;
            }
          `}</style>

          {/* 1. TOP LINE: INZINIER - KONSTRUKTER (stretched to 100% full width) */}
          <text
            x="2"
            y="25"
            textLength="996"
            lengthAdjust="spacing"
            className="dva-svg-text dva-svg-sub dva-svg-shadow"
          >
            INZINIER - KONSTRUKTER
          </text>
          <text
            x="0"
            y="23"
            textLength="1000"
            lengthAdjust="spacing"
            className="dva-svg-text dva-svg-sub dva-svg-base"
          >
            INZINIER - KONSTRUKTER
          </text>

          {/* 2. MIDDLE DIVIDER: Stretched to 100% full width */}
          <rect x="0" y="36" width="1000" height="4.5" fill="#d9531e" rx="1.5" />

          {/* 3. BOTTOM LINE: VITALII DOLYNSKYI (stretched to 100% full width) */}
          <text
            x="3"
            y="113"
            textLength="994"
            lengthAdjust="spacing"
            className="dva-svg-text dva-svg-main dva-svg-shadow"
          >
            VITALII <tspan className="dva-svg-accent-shadow">D</tspan>OLYNSKYI
          </text>
          <text
            x="0"
            y="110"
            textLength="1000"
            lengthAdjust="spacing"
            className="dva-svg-text dva-svg-main dva-svg-base"
          >
            VITALII <tspan className="dva-svg-accent">D</tspan>OLYNSKYI
          </text>
        </svg>
      </div>
    </div>
  );
};
