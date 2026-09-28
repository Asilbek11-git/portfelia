import React, { useState } from 'react';
import { X, Check, Save, RotateCcw } from 'lucide-react';
import { ContactInfo } from '../types';
import { initialContactInfo } from '../data/portfolioData';

interface EditContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactInfo: ContactInfo;
  onSave: (updated: ContactInfo) => void;
  isDark: boolean;
  lang: 'en' | 'uz';
}

export const EditContactModal: React.FC<EditContactModalProps> = ({
  isOpen,
  onClose,
  contactInfo,
  onSave,
  isDark,
  lang,
}) => {
  const [formData, setFormData] = useState<ContactInfo>(contactInfo);
  const [savedAlert, setSavedAlert] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialContactInfo);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-lg p-6 rounded-2xl border ${
          isDark
            ? 'bg-[#121214] border-zinc-800 text-zinc-100'
            : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/40">
          <div>
            <h3 className="text-lg font-bold">
              {lang === 'en' ? 'Edit Contact & Profile Links' : 'Bogʻlanish va Havolalarni Tahrirlash'}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {lang === 'en'
                ? 'Update your Telegram, Email, and social links dynamically.'
                : 'Telegram, Email va boshqa havolalaringizni oʻzgartiring.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-sm">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">
              Telegram URL / Username
            </label>
            <input
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="https://t.me/your_username"
              className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-100 focus:border-rose-500'
                  : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-rose-500'
              } outline-none`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="developer@example.com"
              className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-100 focus:border-rose-500'
                  : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-rose-500'
              } outline-none`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">
              LinkedIn Profile URL
            </label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/your_profile"
              className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-100 focus:border-rose-500'
                  : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-rose-500'
              } outline-none`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1">
              GitHub Profile URL
            </label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/Asilbek11-git"
              className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors ${
                isDark
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-100 focus:border-rose-500'
                  : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-rose-500'
              } outline-none`}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-lg border text-sm ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-100'
                    : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                } outline-none`}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">
                Work Format
              </label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-lg border text-sm ${
                  isDark
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-100'
                    : 'bg-zinc-50 border-zinc-300 text-zinc-900'
                } outline-none`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-zinc-800/40">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Reset Defaults' : 'Asliga Qaytarish'}
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${
                  isDark
                    ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800/50'
                    : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                {lang === 'en' ? 'Cancel' : 'Bekor Qilish'}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors"
              >
                {savedAlert ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Saved!' : 'Saqlandi!'}
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Save Changes' : 'Saqlash'}
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
