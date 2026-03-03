import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", theme = "dark" }) => {
  // Theme determines the color of the "CIS" text. 
  // "CONTROL" is always the brand red #C8102E.
  const baseColor = theme === "light" ? "text-white" : "text-slate-900";
  
  return (
    <div className={`flex items-baseline leading-none select-none ${className}`}>
      <span className={`font-extrabold text-2xl tracking-tight ${baseColor}`}>CIS-</span>
      <span className="font-extrabold text-2xl tracking-tight text-[#C8102E]">CONTROL</span>
      <span className={`font-semibold text-lg ml-0.5 ${baseColor}`}>c.a.</span>
    </div>
  );
};
