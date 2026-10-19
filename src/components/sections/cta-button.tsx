"use client";

import React from 'react';
import { Star } from 'lucide-react';

/**
 * CTAButton Component (Popeyes Gold Edition #ffc600)
 * 
 * High-converting primary CTA button styled with rich Popeyes Gold (#ffc600),
 * high-contrast dark text, gold star accents, and ambient glow.
 */
export default function CTAButton() {
  const url = "https://giftclick.org/aff_c?offer_id=4522&aff_id=200438&source=POPEYES";

  const handleClick = (e: React.MouseEvent) => {
    // For Orchids preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center mt-5 mb-2">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-full h-[52px] sm:h-[58px] bg-[#ffc600] hover:bg-[#e6b200] text-gray-950 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,198,0,0.55)] hover:shadow-[0_0_28px_rgba(255,198,0,0.75)] ring-2 ring-[#ffc600]/60 hover:ring-[#ffc600] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline border border-white/60 animate-pulse"
      >
        {/* Continuous Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -left-full group-hover:animate-shine pointer-events-none" />

        <div className="flex items-center justify-center gap-2.5 sm:gap-3 relative z-10">
          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-gray-950 text-gray-950 flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.25))' }}
          />

          <span className="text-[14px] sm:text-[16px] font-black uppercase text-gray-950 tracking-[0.14em] drop-shadow-sm">
            START REVIEW
          </span>

          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-gray-950 text-gray-950 flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.25))' }}
          />
        </div>
      </a>

      {/* Enhanced Floor Glow */}
      <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-4/5 h-7 bg-[#ffc600]/40 blur-2xl -z-10 rounded-full pointer-events-none" />
    </div>
  );
}
