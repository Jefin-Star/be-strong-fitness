import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';

interface GymLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const GymLogo: React.FC<GymLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false
}) => {
  const [imgError, setImgError] = useState(false);

  const containerSizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-28 h-28 sm:w-32 sm:h-32'
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Exact Uploaded Brand Emblem Container */}
      <div 
        className={`relative flex items-center justify-center rounded-xl bg-white p-1 border border-[#d4af37]/40 shadow-xl shadow-black/70 overflow-hidden flex-shrink-0 group hover:border-[#d4af37] transition-all ${containerSizes[size]}`}
      >
        {!imgError ? (
          <img
            src={logoImg}
            alt="BE STRONG FITNESS STUDIO"
            className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          /* SVG Vector Fallback matching the exact uploaded logo structure */
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* White Background */}
            <rect width="200" height="200" rx="16" fill="#ffffff" />

            {/* Fire Flames */}
            <g id="flames">
              <path
                d="M100 15 C85 35 60 50 60 85 C60 115 80 130 100 135 C120 130 140 115 140 85 C140 50 115 35 100 15Z"
                fill="#ff4d00"
              />
              <path
                d="M50 55 C40 70 35 85 45 105 C55 125 75 130 85 135 C65 125 55 105 60 85 C65 65 80 50 70 40 C60 45 55 50 50 55Z"
                fill="#e63900"
              />
              <path
                d="M150 55 C160 70 165 85 155 105 C145 125 125 130 115 135 C135 125 145 105 140 85 C135 65 120 50 130 40 C140 45 145 50 150 55Z"
                fill="#e63900"
              />
              <path
                d="M100 35 C90 50 75 65 75 90 C75 110 90 120 100 125 C110 120 125 110 125 90 C125 65 110 50 100 35Z"
                fill="#ffaa00"
              />
              <path
                d="M100 55 C95 65 88 75 88 95 C88 108 95 115 100 118 C105 115 112 108 112 95 C112 75 105 65 100 55Z"
                fill="#ffe600"
              />
            </g>

            {/* Dumbbell / Barbell Bar */}
            <rect x="25" y="85" width="150" height="12" rx="3" fill="#2b2d30" stroke="#111" strokeWidth="1.5" />
            <rect x="25" y="87" width="150" height="3" fill="#888" opacity="0.6" />

            {/* Left Weight Plates */}
            <g id="left-plates">
              <rect x="35" y="58" width="10" height="66" rx="3" fill="#2b2d30" stroke="#111" strokeWidth="2" />
              <rect x="45" y="65" width="8" height="52" rx="2" fill="#3a3d42" stroke="#111" strokeWidth="1.5" />
              <rect x="53" y="73" width="7" height="36" rx="2" fill="#4a4e54" stroke="#111" strokeWidth="1.5" />
            </g>

            {/* Right Weight Plates */}
            <g id="right-plates">
              <rect x="155" y="58" width="10" height="66" rx="3" fill="#2b2d30" stroke="#111" strokeWidth="2" />
              <rect x="147" y="65" width="8" height="52" rx="2" fill="#3a3d42" stroke="#111" strokeWidth="1.5" />
              <rect x="140" y="73" width="7" height="36" rx="2" fill="#4a4e54" stroke="#111" strokeWidth="1.5" />
            </g>

            {/* Muscular Arm & Fist */}
            <g id="fist">
              {/* Forearm */}
              <path d="M85 140 L88 105 L112 105 L115 140 Z" fill="#d49b6a" stroke="#222" strokeWidth="2" />
              {/* Muscle shading */}
              <path d="M92 110 L94 135" stroke="#9e663a" strokeWidth="2" strokeLinecap="round" />
              <path d="M106 110 L104 135" stroke="#9e663a" strokeWidth="2" strokeLinecap="round" />

              {/* Clenched Fingers around bar */}
              <rect x="86" y="78" width="28" height="26" rx="7" fill="#d49b6a" stroke="#222" strokeWidth="2" />
              {/* Finger segments */}
              <line x1="93" y1="78" x2="93" y2="104" stroke="#222" strokeWidth="1.5" />
              <line x1="100" y1="78" x2="100" y2="104" stroke="#222" strokeWidth="1.5" />
              <line x1="107" y1="78" x2="107" y2="104" stroke="#222" strokeWidth="1.5" />
              {/* Thumb */}
              <path d="M82 85 C82 78 89 78 95 80 L95 90 L85 92 Z" fill="#c48a58" stroke="#222" strokeWidth="1.5" />
            </g>

            {/* BE STRONG Text (Bold Red Arched Style) */}
            <text
              x="100"
              y="165"
              textAnchor="middle"
              fill="#d9252a"
              fontWeight="900"
              fontSize="24"
              fontFamily="Impact, 'Arial Black', sans-serif"
              letterSpacing="1"
            >
              BE STRONG
            </text>

            {/* FITNESS STUDIO Text (Bold Gold Style) */}
            <text
              x="100"
              y="182"
              textAnchor="middle"
              fill="#f5a623"
              fontWeight="800"
              fontSize="11.5"
              fontFamily="'Arial Black', sans-serif"
              letterSpacing="2.5"
            >
              FITNESS STUDIO
            </text>
          </svg>
        )}
      </div>

      {/* Optional Side Label for Desktop Header if requested */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-cinzel font-black tracking-wider text-base sm:text-lg text-white leading-none">
            BE STRONG
          </span>
          <span className="text-[11px] font-outfit tracking-[0.18em] font-bold text-[#f5d061] mt-0.5 uppercase">
            FITNESS STUDIO
          </span>
        </div>
      )}
    </div>
  );
};
