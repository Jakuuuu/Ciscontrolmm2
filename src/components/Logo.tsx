import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", theme = "dark" }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="CIS-CONTROL"
        className={`h-14 w-auto object-contain transition-all duration-300 ${theme === 'light' ? 'brightness-0 invert' : ''
          }`}
      />
    </div>
  );
};
