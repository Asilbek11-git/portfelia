import React from 'react';
import { Terminal, Shield, Check, Info } from 'lucide-react';
import { categorizedSkills } from '../data/portfolioData';
import { Language } from '../types';

interface TechStackProps {
  lang: Language;
  isDark: boolean;
}

export const TechStack: React.FC<TechStackProps> = ({ lang, isDark }) => {
  return (
    <section id="skills" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
              <span className="w-4 h-0.5 bg-rose-500" />
              <span>{lang === 'en' ? 'Core Capabilities' : 'Asosiy Koʻnikmalar'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              {lang === 'en' ? 'Technologies I Work With' : 'Men Ishlaydigan Texnologiyalar'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              {lang === 'en'
                ? 'These are the specific technologies and backend tools I use in my practical projects and codebases.'
                : 'Bu mening amaliy loyihalarim va kod omborlarimda foydalaniladigan aniq texnologiyalar va vositalardir.'}
            </p>
          </div>

          {/* Honest Notice */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-400 self-start md:self-auto">
            <Info className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>
              {lang === 'en'
                ? 'Skills presented honestly based on hands-on project implementation.'
                : 'Koʻnikmalar amaliy loyihalardagi haqiqiy tajribaga asoslangan.'}
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categorizedSkills.map((categoryGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {categoryGroup.category[lang]}
                </h3>
                <span className="font-mono text-xs text-rose-500">
                  {categoryGroup.items.length} tools
                </span>
              </div>

              <div className="space-y-3.5">
                {categoryGroup.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <span className="font-mono font-bold text-sm text-zinc-100">
                      {skill.name}
                    </span>
                    <span className="text-zinc-400 text-left sm:text-right max-w-xs">
                      {skill.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
