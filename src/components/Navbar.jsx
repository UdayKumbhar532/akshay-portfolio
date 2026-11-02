import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileDown, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 dark:bg-[#070b14]/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-white/10 py-3.5' 
          : 'bg-transparent py-5'
      } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
      style={{ transition: 'opacity 500ms ease, transform 500ms ease, background-color 300ms ease, padding 300ms ease' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Name with Slide-in from Left */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Peddi Akshay Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 group-hover:shadow-brand-500/25 transition-all duration-300 ring-2 ring-brand-500/20">
              <span>AP</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#070b14] rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#070b14] rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase transition-colors">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Staggered Entrance & Smooth Underline */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative group/link ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10 dark:bg-brand-400/10 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${idx * 40}ms`
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-brand-500 rounded-full transition-all duration-300"></span>
                  )}
                  {/* Subtle hover underline */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-400/50 rounded-full transition-all duration-200 group-hover/link:w-3"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-45 transition-transform duration-500" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-slate-900 hover:bg-brand-600 text-white dark:bg-white/10 dark:hover:bg-brand-500/20 dark:hover:text-brand-300 dark:hover:border-brand-500/40 border border-transparent dark:border-white/10 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 group/resume"
            >
              <FileDown className="w-3.5 h-3.5 text-brand-400 group-hover/resume:translate-y-0.5 transition-transform duration-200" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Right Controls: Theme + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all duration-300 active:scale-90"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-transform active:scale-90"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className={`absolute transition-all duration-300 transform ${isOpen ? 'rotate-90 opacity-100 scale-100' : 'rotate-0 opacity-0 scale-50'}`}>
                  <X className="w-5 h-5" />
                </span>
                <span className={`absolute transition-all duration-300 transform ${isOpen ? '-rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                  <Menu className="w-5 h-5" />
                </span>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu with Staggered Entrance */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 lg:hidden flex justify-end animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full max-w-xs sm:max-w-sm bg-white dark:bg-[#0c1222] border-l border-slate-200 dark:border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                    AP
                  </div>
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Indicator */}
              <div className="py-3 px-3.5 my-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open to Data Analyst Opportunities</span>
              </div>

              {/* Navigation Links with sequential stagger */}
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 transform hover:translate-x-1 ${
                        isActive
                          ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold border-l-4 border-brand-500'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                      style={{
                        animation: `fadeIn 300ms ease-out forwards ${idx * 40}ms`
                      }}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'text-brand-500 translate-x-1' : 'text-slate-400 dark:text-slate-500'}`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
                <span>Theme Mode</span>
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium hover:border-brand-500/50 transition-colors"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-slate-700" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-brand-600 to-sky-500 text-white shadow-lg shadow-brand-500/25 active:scale-95 transition-all duration-200 hover:shadow-brand-500/40"
              >
                <FileDown className="w-4 h-4" />
                View &amp; Download Resume
              </button>

              <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
