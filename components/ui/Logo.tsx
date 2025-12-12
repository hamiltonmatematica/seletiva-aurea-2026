import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", light = true }) => {
  const color = light ? "white" : "#150f1d";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Symbol approximation based on PDF: Golden ratio circles with vertical line */}
      <svg viewBox="0 0 100 100" className="h-full w-auto fill-none stroke-current" style={{ color }}>
        <circle cx="50" cy="50" r="45" strokeWidth="6" />
        <circle cx="50" cy="65" r="30" strokeWidth="6" />
        <circle cx="50" cy="75" r="15" strokeWidth="6" />
        <line x1="50" y1="5" x2="50" y2="95" strokeWidth="6" />
      </svg>
      <span className={`font-logo font-medium tracking-tight text-2xl lowercase`} style={{ color }}>
        áurea
      </span>
    </div>
  );
};