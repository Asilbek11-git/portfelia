import React from 'react';
import {
  Server,
  Code,
  Bot,
  Database,
  ShieldCheck,
  Workflow,
  Terminal,
  Wrench,
  CheckCircle2,
  FileCode2,
  Layers,
} from 'lucide-react';
import { serviceAreas } from '../data/portfolioData';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ lang, isDark }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-rose-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-rose-500" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-rose-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-rose-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-rose-500" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-rose-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-rose-500" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="about" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Editorial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500">
              <span className="w-4 h-0.5 bg-rose-500" />
              <span>{lang === 'en' ? 'About Developer' : 'Dasturchi Haqida'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {lang === 'en' ? 'Practical & Honest Backend Engineering' : 'Amaliy va Halol Backend Dasturlash'}
            </h2>
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'No Exaggerated Claims' : 'Boʻrttirishlarsiz Haqiqiy Tajriba'}</span>
              </div>
              <p>
                {lang === 'en'
                  ? 'I prioritize genuine code quality, working GitHub repositories, and clear documentation over buzzwords or inflated years of experience.'
                  : 'Men balandparvoz soʻzlardan koʻra sifatli kod, ishlayotgan GitHub omborlari va aniq arxitekturani ustun qoʻyaman.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {lang === 'en' ? 'Introduction & Mindset' : 'Tanishtiruv va Yondashuv'}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                &ldquo;
                {lang === 'en'
                  ? 'I enjoy building backend applications and solving practical programming problems. My main focus is Python development, Django, REST APIs and Telegram bots. I am continuously improving my knowledge of backend architecture, databases and software development.'
                  : 'Men backend ilovalarini yaratish va amaliy dasturlash muammolarini hal qilishdan zavq olaman. Asosiy eʼtiborim Python dasturlash, Django, REST API va Telegram botlariga qaratilgan. Backend arxitekturasi, maʼlumotlar bazalari va dasturiy taʼminotni ishlab chiqish boʻyicha bilimlarimni muntazam boyitib bormoqdaman.'}
                &rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-400">
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <span className="font-bold text-white block mb-1">
                  {lang === 'en' ? 'Database Discipline' : 'Maʼlumotlar Bazasi Intizomi'}
                </span>
                {lang === 'en'
                  ? 'Designing normalized schemas in PostgreSQL, writing efficient SQL queries via Django ORM, and executing migrations safely.'
                  : 'PostgreSQL-da toza relieshion sxemalar, Django ORM bilan samarali soʻrovlar va xavfsiz migratsiyalar.'}
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <span className="font-bold text-white block mb-1">
                  {lang === 'en' ? 'Asynchronous Workflows' : 'Asinxron Ish Oqimlari'}
                </span>
                {lang === 'en'
                  ? 'Handling high-concurrency Telegram bot updates with Aiogram, event loops, and non-blocking I/O.'
                  : 'Aiogram, event loop va bloklanmaydigan I/O bilan Telegram bot yangilanishlarini asinxron qayta ishlash.'}
              </div>
            </div>
          </div>
        </div>

        {/* Services / Areas of Work */}
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
              <span className="w-4 h-0.5 bg-rose-500" />
              <span>{lang === 'en' ? 'Areas of Competence' : 'Ish Yoʻnalishlari'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              {lang === 'en' ? 'Areas I Work On' : 'Men Bajaradigan Ish Sohalari'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              {lang === 'en'
                ? 'Practical backend and automation services I can deliver for your team or product.'
                : 'Jamoangiz yoki mahsulotingiz uchun men taqdim eta oladigan aniq backend va avtomatlashtirish yoʻnalishlari.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area.number}
                className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-rose-500">
                      {area.number}
                    </span>
                    {getIcon(area.iconName)}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {area.title[lang]}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {area.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
