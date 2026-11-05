import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'lotus' | 'mandala' | 'simple' | 'kalash';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'lotus',
}) => {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      {/* Left Flourish Line */}
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#C5A45C] to-[#C5A45C]" />
      
      {/* Center Motif */}
      <div className="text-[#C5A45C] flex items-center justify-center">
        {variant === 'lotus' && (
          <svg className="w-8 h-8 fill-current drop-shadow-md" viewBox="0 0 100 100">
            <path d="M50 20 C40 35 35 50 50 75 C65 50 60 35 50 20 Z" opacity="0.9" />
            <path d="M50 75 C30 65 20 50 25 35 C32 48 40 60 50 75 Z" opacity="0.75" />
            <path d="M50 75 C70 65 80 50 75 35 C68 48 60 60 50 75 Z" opacity="0.75" />
            <path d="M50 75 C15 75 10 55 12 45 C18 60 32 70 50 75 Z" opacity="0.6" />
            <path d="M50 75 C85 75 90 55 88 45 C82 60 68 70 50 75 Z" opacity="0.6" />
            <circle cx="50" cy="78" r="3" fill="#D8C49A" />
          </svg>
        )}

        {variant === 'mandala' && (
          <svg className="w-7 h-7 fill-none stroke-current stroke-1" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth="0.8" />
            <circle cx="12" cy="12" r="5" strokeWidth="0.8" strokeDasharray="1 1" />
            <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M5 19 L19 5" strokeWidth="0.6" />
            <circle cx="12" cy="12" r="2" fill="#C5A45C" />
          </svg>
        )}

        {variant === 'kalash' && (
          <svg className="w-8 h-8 fill-current" viewBox="0 0 64 64">
            {/* Coconut top */}
            <circle cx="32" cy="18" r="8" fill="#C5A45C" opacity="0.9" />
            {/* Mango leaves */}
            <path d="M24 20 C18 14 26 8 32 18 C38 8 46 14 40 20 Z" fill="#D8C49A" />
            {/* Pot body */}
            <path d="M22 26 L42 26 C46 36 44 48 32 50 C20 48 18 36 22 26 Z" fill="#C5A45C" />
            {/* Base */}
            <path d="M26 50 L38 50 L36 54 L28 54 Z" fill="#D8C49A" />
          </svg>
        )}

        {variant === 'simple' && (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A45C]" />
            <span className="w-2.5 h-2.5 rotate-45 border border-[#C5A45C] bg-[#641F2B]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A45C]" />
          </div>
        )}
      </div>

      {/* Right Flourish Line */}
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#C5A45C] to-[#C5A45C]" />
    </div>
  );
};

