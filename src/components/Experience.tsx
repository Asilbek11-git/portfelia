import React from 'react';
import { Layers, CheckCircle, GitCommit, Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { Language } from '../types';

interface ExperienceProps {
  lang: Language;
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ lang, isDark }) => {
  return (
    <section id="experience" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
            <span className="w-4 h-0.5 bg-rose-500" />
            <span>{lang === 'en' ? 'Practical Journey' : 'Amaliy Yoʻnalish'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            Experience & Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            {lang === 'en'
              ? 'My experience is forged through hands-on personal projects, client freelance work, and continuous practical backend development rather than fabricated corporate titles.'
              : 'Mening tajribam soxta lavozimlar oʻrniga shaxsiy loyihalar, frilans mijoz buyurtmalari va doimiy amaliy backend dasturlash orqali shakllangan.'}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/60 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-rose-400 mt-0.5">
                    {item.focus[lang]}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                {item.description[lang]}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  {lang === 'en' ? 'Key Deliverables & Implementations' : 'Asosiy Bajarilgan Ishlar'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                  {item.deliverables[lang].map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold mt-0.5">•</span>
                      <span className="leading-snug">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Recruiter Note */}
        <div className="mt-8 p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 flex items-start gap-3">
          <GitCommit className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
          <p className="text-xs text-zinc-400 leading-relaxed">
            <span className="text-zinc-200 font-semibold">
              {lang === 'en' ? 'For Recruiters & Hiring Managers:' : 'HR mutaxassislari va jamoa rahbarlari uchun:'}
            </span>{' '}
            {lang === 'en'
              ? 'I believe in honest presentation. I do not invent previous employers or inflate tenures. You are evaluating a passionate Python backend engineer with real code in production-ready GitHub repositories, disciplined database modeling skills, and an eager appetite to contribute to your engineering team.'
              : 'Men halol taqdimotga ishonaman. Oldingi kompaniyalar yoki ish stajini boʻrttirmayman. Siz haqiqiy GitHub omborlarida kodi boʻlgan, maʼlumotlar bazasi bilan ishlay oladigan va jamoangizga foyda keltirishga tayyor intiluvchan Python backend dasturchisini baholamoqdasiz.'}
          </p>
        </div>
      </div>
    </section>
  );
};
