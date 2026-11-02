import React from 'react';
import { 
  Linkedin, 
  Mail, 
  Github, 
  Sun, 
  Moon, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const tools = [
    "Python", "SQL", "Microsoft Excel", "Power BI", "Pandas", "NumPy", "MySQL", "Matplotlib"
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#070b14] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-100 dark:border-white/5">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-sm ring-2 ring-brand-500/20 group-hover:scale-105 group-hover:shadow-brand-500/25 transition-all duration-300">
                AP
              </div>
              <div>
                <span className="font-bold text-lg text-slate-900 dark:text-white block group-hover:text-brand-500 transition-colors duration-200">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {personalInfo.roleTitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {personalInfo.tagline} Focused on transforming raw datasets into actionable intelligence through clean queries, robust models, and dynamic reporting.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-200 shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-200 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sections & Credentials (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Profile
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tools Stack (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Core Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((t) => (
                <span 
                  key={t}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/5 hover:border-brand-500/30 hover:text-brand-500 transition-colors duration-200 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Developer Credit + Theme Controls + Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
            <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">&bull;</span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
              Design &amp; Code with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-pulse" /> by <strong className="font-semibold text-slate-900 dark:text-white hover:text-brand-500 transition-colors">Uday Kumbhar</strong>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle in Footer */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-brand-500/40 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Switch Theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 hover:rotate-90 transition-transform duration-300" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700 hover:-rotate-45 transition-transform duration-300" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:border-brand-500/40 text-slate-700 dark:text-slate-300 hover:text-brand-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm active:scale-90"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
