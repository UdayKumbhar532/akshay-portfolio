import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Linkedin, 
  BarChart2, 
  TrendingUp, 
  Database, 
  Sparkles,
  CheckCircle2,
  Activity,
  Layers
} from 'lucide-react';
import { personalInfo, techBadges } from '../data/portfolioData';
import { useCountUp } from '../hooks/useScrollReveal';

export default function Hero({ onOpenResume }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance sequence after initial mount
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Animated KPI numbers
  const recordsCount = useCountUp(5000, 1800, mounted, 0);
  const forecastCount = useCountUp(18.0, 1600, mounted, 1);

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40 dark:opacity-20"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-500/20 via-sky-400/15 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-[-100px] w-[500px] h-[500px] bg-amber-500/10 dark:bg-amber-500/15 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Step 1: Availability Pill & Location (delay-100) */}
            <div 
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-300 shadow-sm hover:scale-105 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{personalInfo.availability}</span>
              </div>
              <span className="hidden sm:inline-block text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Hyderabad, India
              </span>
            </div>

            {/* Step 2: Main Headline & Role Label (delay-150 & delay-200) */}
            <div className="space-y-3">
              <span 
                className={`text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 flex items-center gap-2 transition-all duration-700 ease-out delay-100 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                {personalInfo.roleTitle}
              </span>
              <h1 
                className={`hero-title font-extrabold text-slate-950 dark:text-white transition-all duration-700 ease-out delay-150 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Turning Raw Data Into{" "}
                <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
                  Meaningful Business Insights.
                </span>
              </h1>
            </div>

            {/* Step 3: Supporting Intro (delay-250) */}
            <p 
              className={`text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl transition-all duration-700 ease-out delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {personalInfo.bioShort}
            </p>

            {/* Step 4: 4 Small Professional Value Indicators (delay-300) */}
            <div 
              className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full pt-1 transition-all duration-700 ease-out delay-250 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {personalInfo.values.map((v, i) => (
                <div 
                  key={i} 
                  className="p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-500/30 group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-slate-200">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-500 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="truncate">{v.label}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Step 5: Primary Action Buttons with Hover Dynamics (delay-350) */}
            <div 
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto transition-all duration-700 ease-out delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-sky-600 to-brand-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 min-h-[48px] group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenResume}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-brand-500 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 min-h-[48px] group"
                >
                  <FileDown className="w-4 h-4 text-brand-500 group-hover:translate-y-0.5 transition-transform duration-200" />
                  <span>Download Resume</span>
                </button>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Akshay Peddi LinkedIn Profile"
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 hover:text-brand-500 hover:border-brand-500/50 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 flex items-center justify-center min-h-[48px] min-w-[48px]"
                >
                  <Linkedin className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Step 6: Tech Badges List appearing sequentially (delay-400) */}
            <div 
              className={`pt-3 w-full transition-all duration-700 ease-out delay-350 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                Tech I love working with:
              </span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, bIdx) => (
                  <span
                    key={badge.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 hover:border-brand-500/40 hover:bg-brand-500/5 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default"
                    style={{ transitionDelay: `${bIdx * 35}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Akshay's Profile Photo & Live Analytics Dashboard Visual (5 cols) */}
          <div 
            className={`lg:col-span-5 relative transition-all duration-1000 ease-out delay-200 ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none animate-float-gentle">
              
              {/* Outer Glow Halo matching warm amber & cyan lighting */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-500/30 via-sky-400/20 to-amber-500/30 blur-2xl opacity-75 animate-pulse-glow"></div>

              {/* Main Profile Card Container */}
              <div className="relative rounded-3xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-white/10 shadow-2xl p-3 sm:p-4 backdrop-blur-xl overflow-hidden group">
                
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/60 dark:border-white/10 shadow-inner aspect-[4/5] max-h-[480px] w-full">
                  <img
                    src="/images/akshay.jpg"
                    alt="Peddi Akshay - Aspiring Data Analyst & Business Intelligence"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Vignette Overlay at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                  {/* Overlaid Name & Role tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group-hover:bg-black/70">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold tracking-tight">Peddi Akshay</div>
                        <div className="text-[11px] text-brand-300 font-medium">B.Tech CSE &bull; Class of 2027</div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Top KPI Pill */}
                <div className="absolute -top-3 -right-2 sm:-right-4 p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                  <div className="w-8 h-8 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Specialization
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Python &bull; SQL &bull; Power BI
                    </div>
                  </div>
                </div>

                {/* Micro Analytics Dashboard Row below image */}
                <div className="mt-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
                      <BarChart2 className="w-3.5 h-3.5" />
                      Sales Velocity Model
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                      +{forecastCount.toFixed(1)}% FORECAST ACCURACY
                    </span>
                  </div>

                  {/* Progressive Draw Line Chart SVG */}
                  <div className="h-10 w-full">
                    <svg viewBox="0 0 280 40" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="heroPhotoGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,35 Q35,30 70,20 T140,22 T200,8 T240,12 T280,4 L280,40 L0,40 Z" 
                        fill="url(#heroPhotoGradient)" 
                      />
                      <path 
                        d="M0,35 Q35,30 70,20 T140,22 T200,8 T240,12 T280,4" 
                        fill="none" 
                        stroke="#0ea5e9" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className={mounted ? "animate-draw-line" : ""}
                      />
                      <circle cx="200" cy="8" r="3" fill="#38bdf8" className="animate-ping opacity-75" />
                      <circle cx="200" cy="8" r="3" fill="#0ea5e9" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-white/5 font-mono">
                    <span>{recordsCount.toLocaleString()}+ Records Analyzed</span>
                    <span>Peak Rush: 7:00 PM</span>
                  </div>
                </div>

              </div>

              {/* Floating Bottom Metric Badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 p-3 rounded-2xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                    Analytics Impact
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    18% Inventory Improvement
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Bottom Hero Statistics Bar */}
        <div 
          className={`mt-16 sm:mt-20 pt-10 border-t border-slate-200 dark:border-white/10 transition-all duration-700 ease-out delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/50 dark:bg-slate-900/30 border border-slate-200/80 dark:border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-500/30 group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200 inline-block">
                  {idx === 0 ? `${recordsCount.toLocaleString()}+` : idx === 2 ? `${forecastCount.toFixed(0)}%` : stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
