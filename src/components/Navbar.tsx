import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe, FileText, Send } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  setIsDark,
  lang,
  setLang,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: lang === 'en' ? 'Projects' : 'Loyihalar' },
    { href: '#about', label: lang === 'en' ? 'About' : 'Haqimda' },
    { href: '#skills', label: lang === 'en' ? 'Skills & Focus' : 'Koʻnikmalar' },
    { href: '#experience', label: lang === 'en' ? 'Experience' : 'Tajriba' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Aloqa' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors backdrop-blur-md border-b ${
        isDark
          ? 'bg-[#09090b]/90 border-zinc-800/80 text-zinc-100'
          : 'bg-white/90 border-zinc-200 text-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight uppercase hover:text-rose-500 transition-colors whitespace-nowrap"
        >
          <span>Asilbek Olimjonov</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-rose-500 transition-colors ${
                isDark ? 'text-zinc-300' : 'text-zinc-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Status pill (desktop only) */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border border-zinc-800 bg-zinc-900/60 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="whitespace-nowrap">
              {lang === 'en' ? 'Open to Work' : 'Ishga Tayyor'}
            </span>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'uz' : 'en')}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
              isDark
                ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
            }`}
            title={lang === 'en' ? 'Switch to Uzbek' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-rose-500" />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg text-xs transition-colors border ${
              isDark
                ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>

          {/* Resume button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>CV</span>
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors whitespace-nowrap shadow-sm shadow-rose-900/30"
          >
            <span>{lang === 'en' ? "Let's Talk" : 'Bogʻlanish'}</span>
            <Send className="w-3.5 h-3.5 ml-0.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg md:hidden border border-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-b space-y-3 ${
            isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-zinc-300 hover:text-rose-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 text-xs text-zinc-300 font-medium py-1"
            >
              <FileText className="w-4 h-4 text-rose-500" />
              <span>{lang === 'en' ? 'View Resume (CV)' : 'Rezyumeni koʻrish (CV)'}</span>
            </button>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === 'en' ? 'Open to Work' : 'Ishga Tayyor'}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
