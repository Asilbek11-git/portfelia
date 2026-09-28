import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download } from 'lucide-react';
import { ContactInfo } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactInfo: ContactInfo;
  isDark: boolean;
  lang: 'en' | 'uz';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  contactInfo,
  isDark,
  lang,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `ASILBEK OLIMJONOV
Python Backend Developer
Location: Uzbekistan (Open to Remote / Relocation)
Email: ${contactInfo.email}
Telegram: ${contactInfo.telegram}
GitHub: ${contactInfo.github}
LinkedIn: ${contactInfo.linkedin}

PROFILE SUMMARY
Python Backend Developer focused on building web applications, REST APIs and Telegram bots.
Mainly working with Python, Django, Django REST Framework, PostgreSQL and related backend technologies.

CORE TECHNOLOGIES
- Languages: Python
- Frameworks: Django, Django REST Framework, Aiogram
- Databases & Caching: PostgreSQL, Redis
- Async & Queues: Celery, Asyncio
- Security & Protocols: REST API, JWT Authentication, WebSocket
- Environment & Tools: Git, GitHub, Linux

KEY PROJECTS
1. DevTeam (https://github.com/Asilbek11-git/DevTeam-2)
   - Django-based backend project with REST API, authentication, PostgreSQL and other backend components.
   - Stack: Python, Django, DRF, PostgreSQL, JWT.

2. IMT Bot (https://github.com/Asilbek11-git/mini_Imt)
   - Asynchronous Telegram bot built with Aiogram for Body Mass Index calculation and health classification.
   - Stack: Python, Aiogram, Telegram Bot API, FSM.

3. Telegram Bot Solutions (https://github.com/Asilbek11-git)
   - Custom automated Telegram bots with FSM, inline keyboards, PostgreSQL/SQLite database storage.

AREAS OF WORK
- Django backend development
- REST API development
- Telegram bot development
- PostgreSQL integration
- Authentication and JWT
- API integration
- Basic deployment and Linux server work
- Bug fixing and improvements
`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className={`relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl border overflow-hidden ${
          isDark
            ? 'bg-[#121215] border-zinc-800 text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-zinc-800/40">
          <div>
            <h3 className="text-base font-bold">
              {lang === 'en' ? 'Curriculum Vitae / Resume' : 'Rezyume (CV)'}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === 'en' ? 'Authentic developer profile summary' : 'Haqiqiy dasturchi profili va maʼlumotlari'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-800 hover:bg-zinc-800/60 transition-colors text-zinc-300"
              title="Copy as Plain Text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-8 overflow-y-auto font-sans space-y-6 text-sm">
          {/* Header */}
          <div className="border-b border-zinc-800/60 pb-6">
            <h1 className="text-2xl font-extrabold tracking-tight">ASILBEK OLIMJONOV</h1>
            <p className="text-rose-500 font-semibold tracking-wide mt-0.5">
              PYTHON BACKEND DEVELOPER
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 mt-3">
              <span>{contactInfo.location} (Remote / Open to opportunities)</span>
              <span>·</span>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-rose-400">
                {contactInfo.email}
              </a>
              <span>·</span>
              <a href={contactInfo.telegram} target="_blank" rel="noreferrer" className="hover:text-rose-400">
                Telegram
              </a>
              <span>·</span>
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:text-rose-400">
                GitHub: Asilbek11-git
              </a>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
              Profile Summary
            </h2>
            <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
              I am a Python Backend Developer focused on building web applications, REST APIs and Telegram bots. I work mainly with Python, Django, Django REST Framework, PostgreSQL and related backend technologies. I enjoy building backend applications and solving practical programming problems.
            </p>
          </div>

          {/* Core Technologies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
              Technical Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              <div>
                <span className="font-semibold text-zinc-200">Core & Frameworks:</span> Python, Django, Django REST Framework, Aiogram
              </div>
              <div>
                <span className="font-semibold text-zinc-200">Databases & Caching:</span> PostgreSQL, Redis, Celery
              </div>
              <div>
                <span className="font-semibold text-zinc-200">Protocols & Security:</span> REST API, JWT Authentication, WebSocket
              </div>
              <div>
                <span className="font-semibold text-zinc-200">Environment & Tools:</span> Git, GitHub, Linux CLI
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-rose-500/60 pl-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-100 text-sm">DevTeam — Django REST API Backend</h3>
                  <a
                    href="https://github.com/Asilbek11-git/DevTeam-2"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-rose-400 hover:underline"
                  >
                    github.com/Asilbek11-git/DevTeam-2
                  </a>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  A Django-based backend project with REST API, authentication, PostgreSQL and other backend components.
                </p>
                <div className="text-xs text-zinc-300 mt-1 font-mono">
                  Stack: Python · Django · Django REST Framework · PostgreSQL · JWT
                </div>
              </div>

              <div className="border-l-2 border-rose-500/60 pl-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-zinc-100 text-sm">IMT Bot (mini_Imt) — Telegram Bot</h3>
                  <a
                    href="https://github.com/Asilbek11-git/mini_Imt"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-rose-400 hover:underline"
                  >
                    github.com/Asilbek11-git/mini_Imt
                  </a>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Telegram bot developed with Python and Aiogram to calculate Body Mass Index (IMT / BMI) with step-by-step state management (FSM) and classification.
                </p>
                <div className="text-xs text-zinc-300 mt-1 font-mono">
                  Stack: Python · Aiogram · Telegram Bot API · FSM
                </div>
              </div>
            </div>
          </div>

          {/* Services & Areas of Work */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
              Areas of Focus
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-300">
              <div>• Django backend development</div>
              <div>• REST API development</div>
              <div>• Telegram bot development</div>
              <div>• PostgreSQL integration</div>
              <div>• Authentication and JWT</div>
              <div>• API integration</div>
              <div>• Basic deployment and Linux server work</div>
              <div>• Bug fixing and improvements</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
