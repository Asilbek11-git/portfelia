import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Star, GitFork, BookOpen, RefreshCw, Layers } from 'lucide-react';
import { ProjectItem, GitHubRepo, Language } from '../types';
import { realProjects } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  lang: Language;
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
  lang,
  isDark,
}) => {
  const [filter, setFilter] = useState<'all' | 'django' | 'telegram' | 'github'>('all');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [repoError, setRepoError] = useState<string | null>(null);

  // Fetch live repos from GitHub API
  const fetchGitHubRepos = async () => {
    setLoadingRepos(true);
    setRepoError(null);
    try {
      const res = await fetch('https://api.github.com/users/Asilbek11-git/repos?sort=updated&per_page=12');
      if (!res.ok) {
        throw new Error(`GitHub API returned status ${res.status}`);
      }
      const data: GitHubRepo[] = await res.json();
      setRepos(data);
    } catch (err: any) {
      setRepoError(err.message || 'Could not fetch live repositories');
    } finally {
      setLoadingRepos(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const filteredProjects = realProjects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
              <span className="w-4 h-0.5 bg-rose-500" />
              <span>{lang === 'en' ? 'Verified Codebases' : 'Tasdiqlangan Kod Omborlari'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              {lang === 'en' ? 'Selected Projects' : 'Tanlangan Loyihalar'}
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
              {lang === 'en'
                ? 'Real projects built with Python, Django, DRF, PostgreSQL, and Aiogram. Codebases verified directly from GitHub without simulated production statistics.'
                : 'Python, Django, DRF, PostgreSQL va Aiogram yordamida yaratilgan haqiqiy loyihalar. Sunʼiy koʻrsatkichlarsiz, GitHub kodiga asoslangan.'}
            </p>
          </div>

          {/* Filter Tabs (Interactive functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-rose-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {lang === 'en' ? 'All Real Works' : 'Barcha Loyihalar'}
            </button>
            <button
              onClick={() => setFilter('django')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap ${
                filter === 'django'
                  ? 'bg-rose-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Django & API
            </button>
            <button
              onClick={() => setFilter('telegram')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap ${
                filter === 'telegram'
                  ? 'bg-rose-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Telegram Bots
            </button>
            <button
              onClick={() => setFilter('github')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'github'
                  ? 'bg-rose-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>Live GitHub ({repos.length || '...'})</span>
            </button>
          </div>
        </div>

        {/* Content based on filter */}
        {filter !== 'github' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/80"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                    <span className="font-mono text-rose-500 font-semibold uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <span className="font-mono">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Clean unboxed metadata with dot separators (Zero-Pill discipline) */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/60">
                    <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Core Stack' : 'Asosiy Stek'}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400">
                      {project.technologies.map((t, i) => (
                        <React.Fragment key={t}>
                          <span className="text-zinc-200 font-mono">{t}</span>
                          {i < project.technologies.length - 1 && (
                            <span className="text-zinc-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Feature preview */}
                  <div className="mt-4 space-y-1.5 text-xs text-zinc-400">
                    {project.keyFeatures[lang].slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-500 leading-tight">•</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Architecture & Code' : 'Arxitektura va Kod'}</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                    title="View GitHub repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Live GitHub Repos View */
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Github className="w-4 h-4 text-zinc-300" />
                <span>
                  {lang === 'en'
                    ? 'Live public repositories from GitHub account'
                    : 'GitHub hisobidagi ochiq omborlar'}{' '}
                  (<strong className="text-zinc-200">Asilbek11-git</strong>)
                </span>
              </div>
              <button
                onClick={fetchGitHubRepos}
                disabled={loadingRepos}
                className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingRepos ? 'animate-spin' : ''}`} />
                <span>{lang === 'en' ? 'Refresh' : 'Yangilash'}</span>
              </button>
            </div>

            {loadingRepos && (
              <div className="p-12 text-center text-zinc-400 text-sm">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-rose-500" />
                <span>{lang === 'en' ? 'Loading repositories from GitHub...' : 'GitHub omborlari yuklanmoqda...'}</span>
              </div>
            )}

            {repoError && (
              <div className="p-4 rounded-xl border border-rose-900/50 bg-rose-950/20 text-rose-300 text-xs">
                <span>{repoError}. Displaying featured verified projects below.</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                      <div className="flex items-center gap-1.5 font-mono text-white group-hover:text-rose-400 font-semibold truncate">
                        <BookOpen className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span className="truncate">{repo.name}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white shrink-0 ml-1" />
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 mt-1 min-h-[32px]">
                      {repo.description || (lang === 'en' ? 'Python / backend project repository.' : 'Python / backend loyiha ombori.')}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="font-mono text-rose-400">
                      {repo.language || 'Python'}
                    </span>
                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3 text-zinc-400" />
                          <span>{repo.forks_count}</span>
                        </span>
                      )}
                      <span className="text-zinc-500">
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Direct Link Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Github className="w-8 h-8 text-white shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {lang === 'en' ? 'Explore Asilbek’s Full GitHub' : 'Asilbekning GitHub Profilini Koʻrish'}
              </h4>
              <p className="text-xs text-zinc-400">
                https://github.com/Asilbek11-git — {lang === 'en' ? 'View commits, branches, and backend repositories' : 'Kommitlar, tarmoqlar va barcha omborlar'}
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Asilbek11-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-zinc-800 hover:bg-zinc-700 transition-colors shrink-0"
          >
            <span>{lang === 'en' ? 'Open GitHub Profile' : 'GitHub Profilga Oʻtish'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
