import React, { useState } from 'react';
import { X, ExternalLink, Code2, Check, Copy, Github, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  isDark: boolean;
  lang: 'en' | 'uz';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isDark,
  lang,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'code'>('overview');

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border overflow-hidden ${
          isDark
            ? 'bg-[#121215] border-zinc-800 text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-800/40">
          <div>
            <div className="flex items-center gap-2 text-xs text-rose-500 font-semibold tracking-wider uppercase mb-1">
              <span>{project.subtitle}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls (Functional tabs allowed) */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-zinc-800/30">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-rose-500 text-rose-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {lang === 'en' ? 'Architecture & Features' : 'Arxitektura va Funksiyalar'}
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'border-rose-500 text-rose-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Sample Code' : 'Kod Namunasi'}
            </button>
          )}
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {activeTab === 'overview' ? (
            <>
              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  {lang === 'en' ? 'Project Overview' : 'Loyiha Haqida'}
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {project.description[lang]}
                </p>
              </div>

              {/* Technologies unboxed */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  {lang === 'en' ? 'Technologies Implemented' : 'Qoʻllanilgan Texnologiyalar'}
                </h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-300">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="font-mono text-zinc-200">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span className="text-zinc-600 font-bold" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  {lang === 'en' ? 'Key Technical Components' : 'Asosiy Texnik Komponentlar'}
                </h4>
                <ul className="space-y-2">
                  {project.keyFeatures[lang].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300">
                      <span className="text-rose-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Source of truth badge */}
              <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 flex items-start gap-3">
                <Layers className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <div className="text-xs text-zinc-400 leading-normal">
                  <span className="text-zinc-200 font-medium">
                    {lang === 'en' ? 'Real Codebase:' : 'Haqiqiy Kod Ombori:'}
                  </span>{' '}
                  {lang === 'en'
                    ? 'All features listed reflect actual implementations in the repository without fabricated statistics or simulated production numbers.'
                    : 'Barcha sanab oʻtilgan funksiyalar ombordagi haqiqiy kodga asoslangan, sunʼiy koʻrsatkichlar yoki boʻrttirishlar yoʻq.'}
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400">
                  {project.codeSnippet?.filename}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy snippet</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet?.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-zinc-800/40 bg-zinc-950/40">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{lang === 'en' ? 'Open GitHub Repository' : 'GitHub Omborni Ochish'}</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {lang === 'en' ? 'Close' : 'Yopish'}
          </button>
        </div>
      </div>
    </div>
  );
};
