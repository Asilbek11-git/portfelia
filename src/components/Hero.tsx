import React from 'react';
import { ArrowDown, Github, Send, Terminal, Database, Bot, Server, MapPin } from 'lucide-react';
import { ContactInfo, Language } from '../types';
import profileImage from '../assets/images/asilbek_16yo_portrait_1790606115951.jpg';

interface HeroProps {
  contactInfo: ContactInfo;
  lang: Language;
  isDark: boolean;
  onOpenEditContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  contactInfo,
  lang,
  isDark,
  onOpenEditContact,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-950/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top subtle location badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-500">
            {lang === 'en' ? 'Available Worldwide · Uzbekistan & Remote' : 'Oʻzbekiston · Masofaviy & Hamkorlik'}
          </span>
        </div>

        {/* 3-Column Split Layout matching the design blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (5 cols): Intro, Main Heading, Paragraph, Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-medium text-zinc-400 tracking-wide">
                {lang === 'en' ? "Hello, I'm" : 'Assalomu alaykum, men'}
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
                Asilbek <br />
                <span className="text-rose-500">Olimjonov</span>
              </h1>
              <div className="pt-1">
                <p className="text-lg sm:text-xl font-bold uppercase tracking-wider text-zinc-300">
                  Python Backend Developer
                </p>
                <p className="text-xs sm:text-sm font-mono text-rose-400 tracking-wide mt-1">
                  Python • Django • REST API • Telegram Bots
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              {lang === 'en'
                ? 'I am a Python Backend Developer focused on building web applications, REST APIs and Telegram bots. I work mainly with Python, Django, Django REST Framework, PostgreSQL and related backend technologies.'
                : 'Men veb-ilovalar, REST API va Telegram botlar yaratishga ixtisoslashgan Python Backend dasturchisiman. Asosan Python, Django, Django REST Framework, PostgreSQL va tegishli backend texnologiyalari bilan ishlayman.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all shadow-lg shadow-rose-900/30"
              >
                <span>{lang === 'en' ? 'View Projects' : 'Loyihalarni Koʻrish'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white transition-all bg-zinc-900/40"
              >
                <span>{lang === 'en' ? 'Contact Me' : 'Bogʻlanish'}</span>
                <Send className="w-4 h-4" />
              </a>

              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider border border-sky-500/40 hover:border-sky-400 text-sky-400 hover:text-sky-300 transition-all bg-sky-950/20"
                title="Direct message on Telegram: @olimjonov67"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram: @olimjonov67</span>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-all bg-zinc-900/20"
                title="View GitHub profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Real Quote / Philosophy */}
            <div className="pt-4 border-t border-zinc-800/80">
              <p className="text-xs italic text-zinc-400">
                &ldquo;
                {lang === 'en'
                  ? 'Building practical backend systems with readable code, reliable database models, and functional Telegram automation.'
                  : 'Oʻqilishi oson kod, ishonchli maʼlumotlar bazasi va amaliy Telegram avtomatizatsiyasi bilan mustahkam backend tizimlari yaratish.'}
                &rdquo;
              </p>
            </div>
          </div>

          {/* Center Column (4 cols): Developer Portrait & Visual Framing */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/80 p-2 shadow-2xl group">
              {/* Inner container */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-950">
                <img
                  src={profileImage}
                  alt="Asilbek Olimjonov - Python Backend Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Floating bottom label */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Asilbek Olimjonov
                    </p>
                    <p className="text-[11px] text-rose-400 font-mono">
                      Python Backend Developer
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>Uzbekistan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 cols): Technical Focus Facts (Real, honest, no fake statistics!) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Fact Card 1 */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                  {lang === 'en' ? 'Primary Stack' : 'Asosiy Stek'}
                </span>
                <Server className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Python & Django</h3>
              <p className="text-xs text-zinc-400 mt-1">
                {lang === 'en'
                  ? 'Django REST Framework, clean serializers, MVC structure'
                  : 'Django REST Framework, toza serializerlar va MVC'}
              </p>
            </div>

            {/* Fact Card 2 */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                  {lang === 'en' ? 'Bot Engine' : 'Bot Arxitekturasi'}
                </span>
                <Bot className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Aiogram & Asyncio</h3>
              <p className="text-xs text-zinc-400 mt-1">
                {lang === 'en'
                  ? 'FSM dialogues, asynchronous event loops, webhook integration'
                  : 'FSM holatlari, asinxron tsikllar va webhooklar'}
              </p>
            </div>

            {/* Fact Card 3 */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                  {lang === 'en' ? 'Database & Storage' : 'Maʼlumotlar Bazasi'}
                </span>
                <Database className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-xl font-extrabold text-white">PostgreSQL & Redis</h3>
              <p className="text-xs text-zinc-400 mt-1">
                {lang === 'en'
                  ? 'Relational modeling, migrations, indexing, in-memory caching'
                  : 'Relyatsion modellar, migratsiyalar va tezkor kesh'}
              </p>
            </div>

            {/* Fact Card 4 */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {lang === 'en' ? 'Work Format' : 'Ish Tartibi'}
                </span>
                <Terminal className="w-4 h-4 text-zinc-400" />
              </div>
              <h3 className="text-base font-bold text-white">Remote & Full-time</h3>
              <p className="text-xs text-zinc-400 mt-1">
                {lang === 'en'
                  ? 'Open to backend roles, contract tasks & collaborative projects'
                  : 'Backend vakansiyalari va amaliy loyihalarga ochiq'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
