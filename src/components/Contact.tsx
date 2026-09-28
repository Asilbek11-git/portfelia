import React, { useState } from 'react';
import {
  Send,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Edit3,
  MessageSquare,
} from 'lucide-react';
import { ContactInfo, Language } from '../types';

interface ContactProps {
  contactInfo: ContactInfo;
  onOpenEditContact: () => void;
  lang: Language;
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({
  contactInfo,
  onOpenEditContact,
  lang,
  isDark,
}) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Backend Development',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Build mailto link as practical action
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formState.topic} from ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Asilbek,\n\nName: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.topic}\n\nMessage:\n${formState.message}\n`
    );
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
                <span className="w-4 h-0.5 bg-rose-500" />
                <span>{lang === 'en' ? 'Start a Conversation' : 'Aloqa Oʻrnatish'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {lang === 'en' ? 'Let’s Work Together' : 'Birga Ishlaylik'}
              </h2>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'I am currently open to backend developer roles, remote contract projects, and Telegram bot engineering tasks. Feel free to reach out directly.'
                  : 'Men hozirda backend dasturchisi vakansiyalari, masofaviy loyihalar va Telegram bot yaratish buyurtmalariga ochiqman.'}
              </p>
            </div>

            {/* Direct Contact Blocks */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 text-rose-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-rose-400 transition-colors truncate block"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Telegram */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 text-rose-500 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                      Telegram
                    </span>
                    <a
                      href={contactInfo.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-rose-400 transition-colors truncate flex items-center gap-1.5"
                    >
                      <span>@olimjonov67</span>
                      <span className="text-zinc-500 font-sans text-[11px]">({contactInfo.telegram})</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopy(contactInfo.telegram, 'telegram')}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title="Copy Telegram link"
                  >
                    {copiedType === 'telegram' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={contactInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 text-rose-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-200">
                      {contactInfo.location} (UTC+5)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Uzbekistan Time</span>
                </div>
              </div>
            </div>

            {/* Social Links & Edit Button */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {contactInfo.linkedin && (
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>

              {/* Dynamic Edit Contacts Button */}
              <button
                onClick={onOpenEditContact}
                className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-rose-400 transition-colors underline underline-offset-4"
              >
                <Edit3 className="w-3 h-3" />
                <span>{lang === 'en' ? 'Edit contact links' : 'Havolalarni oʻzgartirish'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-1">
                {lang === 'en' ? 'Send a Direct Message' : 'Xabar Yuborish'}
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                {lang === 'en'
                  ? 'Fill out the form below to initiate an inquiry or project discussion.'
                  : 'Loyiha yoki taklif boʻyicha quyidagi formani toʻldiring.'}
              </p>

              {formSent && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-900/60 bg-emerald-950/30 text-emerald-300 text-xs flex items-center justify-between">
                  <span>
                    {lang === 'en'
                      ? 'Thank you! Your email client has been prepared with your message.'
                      : 'Rahmat! Xabaringiz tayyorlandi va email dasturingiz orqali joʻnatiladi.'}
                  </span>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-emerald-400 hover:underline font-semibold ml-2"
                  >
                    Reset
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      {lang === 'en' ? 'Your Name' : 'Ismingiz'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'en' ? 'e.g. Alex Morgan' : 'Masalan: Sardor'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-600 text-xs sm:text-sm focus:border-rose-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      {lang === 'en' ? 'Your Email' : 'Email Manzilingiz'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-600 text-xs sm:text-sm focus:border-rose-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    {lang === 'en' ? 'Subject / Project Topic' : 'Mavzu / Loyiha Yoʻnalishi'}
                  </label>
                  <select
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white text-xs sm:text-sm focus:border-rose-500 outline-none transition-colors"
                  >
                    <option value="Django Backend Development">Django Backend Development</option>
                    <option value="REST API Engineering">REST API Engineering</option>
                    <option value="Telegram Bot Development">Telegram Bot Development (Aiogram)</option>
                    <option value="PostgreSQL & Database Setup">PostgreSQL & Database Setup</option>
                    <option value="Full-time / Remote Opportunity">Full-time / Remote Opportunity</option>
                    <option value="Other Technical Collaboration">Other Technical Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    {lang === 'en' ? 'Message' : 'Xabar Matni'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      lang === 'en'
                        ? 'Briefly describe your project, technical requirements, or job role...'
                        : 'Loyihangiz, texnik talablar yoki ish taklifi haqida qisqacha yozing...'
                    }
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white placeholder-zinc-600 text-xs sm:text-sm focus:border-rose-500 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-lg shadow-rose-900/30"
                >
                  <span>{lang === 'en' ? 'Send Inquiry' : 'Xabarni Joʻnatish'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
