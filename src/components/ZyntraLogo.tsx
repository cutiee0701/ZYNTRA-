import React from 'react';

interface ZyntraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showGadgetIcons?: boolean;
}

export const ZyntraLogo: React.FC<ZyntraLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  showGadgetIcons = false,
}) => {
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 60 : 44;

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic 3D Tech Orbit Emblem in Brand Red */}
      <div 
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-sm overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Brand Red Gradient */}
            <linearGradient id="zyntra-red-main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A20B1A" />
              <stop offset="60%" stopColor="#810916" />
              <stop offset="100%" stopColor="#5E050E" />
            </linearGradient>

            {/* Orbit Highlight Glow */}
            <linearGradient id="zyntra-orbit-red" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#D92839" />
              <stop offset="60%" stopColor="#A20B1A" />
              <stop offset="100%" stopColor="#810916" />
            </linearGradient>

            {/* Facet Shadow */}
            <linearGradient id="zyntra-facet-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E050E" />
              <stop offset="100%" stopColor="#380208" />
            </linearGradient>
          </defs>

          {/* 1. Orbit Ring - Back Arc (Behind Z) */}
          <path
            d="M 28,108 C 22,126 50,148 100,154 C 138,158 172,146 182,128 C 187,118 181,108 168,98"
            stroke="url(#zyntra-orbit-red)"
            strokeWidth="11"
            strokeLinecap="round"
            opacity="0.95"
          />

          {/* 2. Bold Stylized 3D "Z" Emblem */}
          {/* Top Bar of Z */}
          <path
            d="M 38,44 L 148,44 L 132,68 L 74,68 L 38,44 Z"
            fill="url(#zyntra-red-main)"
          />
          {/* Main Diagonal Spine of Z */}
          <polygon
            points="148,44 116,68 58,152 90,152 144,72 148,44"
            fill="url(#zyntra-red-main)"
          />

          {/* 3. Orbit Ring - Front Swoop Arc */}
          <path
            d="M 26,112 C 34,76 86,52 140,58 C 162,60 178,70 180,82 C 182,94 170,108 148,118"
            stroke="url(#zyntra-orbit-red)"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Bottom Bar of Z */}
          <path
            d="M 44,152 L 158,152 L 142,128 L 84,128 L 44,152 Z"
            fill="url(#zyntra-red-main)"
          />
          {/* 3D Under-Facet / Crease fold */}
          <path
            d="M 44,152 L 78,138 L 84,128 L 44,152 Z"
            fill="url(#zyntra-facet-red)"
            opacity="0.8"
          />

          {/* 4. Transmission / Radio Waves */}
          <path
            d="M 166,54 C 176,64 180,76 180,86"
            stroke="url(#zyntra-orbit-red)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M 178,40 C 192,54 198,70 198,84"
            stroke="url(#zyntra-orbit-red)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography & Slogan */}
      <div className="flex flex-col justify-center">
        {/* ZYNTRA Wordmark */}
        <div className="flex items-center tracking-tight leading-none">
          <span 
            className="font-black text-[#A20B1A] tracking-tighter"
            style={{ fontSize: size === 'sm' ? '1.25rem' : size === 'lg' ? '2.1rem' : '1.55rem' }}
          >
            Z
          </span>
          <span 
            className="font-black text-[#232429] tracking-tight ml-0.5"
            style={{ fontSize: size === 'sm' ? '1.25rem' : size === 'lg' ? '2.1rem' : '1.55rem' }}
          >
            YNT
          </span>
          <span 
            className="font-black text-[#232429] tracking-tight"
            style={{ fontSize: size === 'sm' ? '1.25rem' : size === 'lg' ? '2.1rem' : '1.55rem' }}
          >
            R
          </span>
          {/* 'A' with red triangular chevron counter */}
          <span className="relative inline-flex items-center">
            <span 
              className="font-black text-[#232429] tracking-tight"
              style={{ fontSize: size === 'sm' ? '1.25rem' : size === 'lg' ? '2.1rem' : '1.55rem' }}
            >
              A
            </span>
            <span 
              className="absolute left-1/2 -translate-x-1/2 bottom-[18%] w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] border-b-[#A20B1A]"
              aria-hidden="true"
            />
          </span>
        </div>

        {/* Tagline: — CONNECTING YOUR WORLD — */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5 text-[#A20B1A]">
            <span className="w-2.5 h-[1.5px] bg-[#A20B1A] opacity-80 inline-block" />
            <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.16em] uppercase text-[#777777] whitespace-nowrap">
              Connecting Your World
            </span>
            <span className="w-2.5 h-[1.5px] bg-[#A20B1A] opacity-80 inline-block" />
          </div>
        )}
      </div>
    </div>
  );
};
