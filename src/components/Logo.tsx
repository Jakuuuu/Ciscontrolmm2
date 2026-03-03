import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true, theme = "dark" }) => {
  // Theme determines the color of the "CIS" text. 
  // "CONTROL" is always the brand red #C8102E.
  const cisColor = theme === "light" ? "text-white" : "text-slate-900";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: Stylized C with control node */}
      <svg viewBox="0 0 100 100" className="h-10 w-10 text-[#C8102E] fill-current flex-shrink-0">
        {/* Outer C shape */}
        <path d="M50 10 C27.909 10 10 27.909 10 50 C10 72.091 27.909 90 50 90 C68.5 90 84.1 77.5 88.5 60 L77.5 60 C73.5 71.5 62.5 80 50 80 C33.431 80 20 66.569 20 50 C20 33.431 33.431 20 50 20 C62.5 20 73.5 28.5 77.5 40 L88.5 40 C84.1 22.5 68.5 10 50 10 Z" />
        {/* Center Node */}
        <circle cx="50" cy="50" r="12" />
        {/* Connection Line */}
        <rect x="60" y="46" width="30" height="8" rx="4" />
      </svg>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center leading-none">
            <span className={`font-extrabold text-2xl tracking-tight ${cisColor}`}>CIS</span>
            <span className="font-extrabold text-2xl tracking-tight text-[#C8102E] ml-1">CONTROL</span>
          </div>
        </div>
      )}
    </div>
  );
};
