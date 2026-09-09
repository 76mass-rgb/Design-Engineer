import React from 'react';

interface BrandLogoBannerProps {
  className?: string;
}

export const BrandLogoBanner: React.FC<BrandLogoBannerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-[760px] transition-all duration-300 ease-out hover:scale-[1.03] cursor-pointer ${className}`} id="engineer-brand-identity">
      <svg
        viewBox="0 -10 960 156"
        className="w-full h-auto select-none overflow-visible block"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="INZINIER ⌖ KONSTRUKTER - VITALII DOLYNSKYI"
        role="img"
      >
        {/* ============================================================== */}
        {/* 1. TOP LINE: "INZINIER"  [CAD CROSSHAIR ⌖]  "KONSTRUKTER"      */}
        {/* ============================================================== */}
        
        {/* Technical drafting text in secondary gray color */}
        <g
          fill="var(--text-secondary)"
          style={{
            fontFamily: "'PT Mono', 'JetBrains Mono', 'Share Tech Mono', monospace",
            fontSize: '25px',
            fontWeight: 700,
            letterSpacing: '0.26em'
          }}
        >
          <text x="6" y="27" textLength="432" lengthAdjust="spacing">
            INZINIER
          </text>
          <text x="520" y="27" textLength="432" lengthAdjust="spacing">
            KONSTRUKTER
          </text>
        </g>

        {/* CAD Technical Target / Datum Crosshair Symbol ⌖ */}
        <g
          stroke="var(--text-secondary)"
          strokeWidth="1.3"
          strokeLinecap="square"
          fill="none"
        >
          {/* Vertical alignment axis line extending above letters and down to near the orange bar */}
          <line x1="479" y1="-5" x2="479" y2="40" />
          {/* Horizontal cross-line */}
          <line x1="452" y1="20" x2="506" y2="20" />
          {/* Central target square */}
          <rect x="472.5" y="13.5" width="13" height="13" strokeWidth="1.3" />
        </g>

        {/* ============================================================== */}
        {/* 2. MIDDLE DIVIDER: Cadmium / Terracotta Orange-Red Bar        */}
        {/* ============================================================== */}
        <rect
          x="6"
          y="44"
          width="946"
          height="6.5"
          rx="2"
          fill="#c83a12"
        />

        {/* ============================================================== */}
        {/* 3. BOTTOM LINE: "V I T A L I I   D O L Y N S K Y I"            */}
        {/* ============================================================== */}

        {/* VITALII: Precision Technical Gray matching site tone & thickness matching D */}
        <text
          x="6"
          y="124"
          textLength="394"
          lengthAdjust="spacing"
          fill="var(--text-secondary, #475569)"
          stroke="var(--text-secondary, #475569)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          paintOrder="stroke fill"
          style={{
            fontFamily: "'Exo 2', 'Plus Jakarta Sans', sans-serif",
            fontSize: '78px',
            fontWeight: 800,
            letterSpacing: '0.04em'
          }}
        >
          VITALII
        </text>

        {/* Monogram Stencil D: Solid Cadmium / Terracotta Orange-Red (#c83a12) with precision stencil slits */}
        <g id="stencil-letter-d">
          {/* Vertical stem */}
          <path
            d="M 433 68.5 L 433 117.5"
            stroke="#c83a12"
            strokeWidth="11"
            strokeLinecap="round"
          />
          {/* Curved bowl with top & bottom open stencil slits */}
          <path
            d="M 449 63.5 C 473 63.5, 481 76.5, 481 93 C 481 109.5, 473 122.5, 449 122.5"
            stroke="#c83a12"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* OLYNSKYI: Precision Technical Gray matching site tone & thickness matching D */}
        <text
          x="508"
          y="124"
          textLength="444"
          lengthAdjust="spacing"
          fill="var(--text-secondary, #475569)"
          stroke="var(--text-secondary, #475569)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          paintOrder="stroke fill"
          style={{
            fontFamily: "'Exo 2', 'Plus Jakarta Sans', sans-serif",
            fontSize: '78px',
            fontWeight: 800,
            letterSpacing: '0.04em'
          }}
        >
          OLYNSKYI
        </text>
      </svg>
    </div>
  );
};
