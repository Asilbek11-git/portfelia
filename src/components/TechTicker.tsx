import React from 'react';
import { technologiesList } from '../data/portfolioData';

export const TechTicker: React.FC = () => {
  // Repeat items for seamless infinite marquee loop
  const repeatedTech = [...technologiesList, ...technologiesList, ...technologiesList];

  return (
    <div className="w-full bg-rose-600 text-white py-3 overflow-hidden border-y border-rose-700/80 shadow-inner select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {repeatedTech.map((tech, index) => (
          <div key={index} className="flex items-center gap-4 mx-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest">
              {tech}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
