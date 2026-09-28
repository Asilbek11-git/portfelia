import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { ContactInfo, Language } from '../types';

interface FooterProps {
  contactInfo: ContactInfo;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ contactInfo, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#09090b] text-zinc-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-bold text-white uppercase tracking-wider">
              Asilbek Olimjonov
            </span>
            <span className="mx-2 text-zinc-600">·</span>
            <span>Python Backend Developer</span>
            <span className="mx-2 text-zinc-600">·</span>
            <span>Uzbekistan</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={contactInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Telegram
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>{lang === 'en' ? 'Back to top' : 'Yuqoriga'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} Asilbek Olimjonov. All rights reserved.</p>
          <p className="font-mono">
            Verified backend code · Real repositories · Zero exaggerated claims
          </p>
        </div>
      </div>
    </footer>
  );
};
