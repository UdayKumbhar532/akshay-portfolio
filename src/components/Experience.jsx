import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Building
} from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div 
          className={`max-w-3xl mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase bg-brand-500/10 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Experience</span>
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white">
            My Professional{" "}
            <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Journey.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hands-on technical internships, automation script development, and practical operational experience.
          </p>
        </div>

        {/* Vertical Timeline with Progressive Reveal */}
        <div className="relative max-w-4xl mx-auto">
          {/* Continuous Vertical Connecting Line with Height Animation */}
          <div 
            className={`absolute left-3.5 sm:left-5 top-3 bottom-6 w-0.5 bg-gradient-to-b from-brand-500 via-sky-500 to-indigo-500/30 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
            style={{ transformOrigin: 'top' }}
          ></div>

          <div className="space-y-10 sm:space-y-12">
            {experienceTimeline.map((item, idx) => (
              <div 
                key={item.id} 
                className={`relative pl-9 sm:pl-14 group transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${200 + idx * 120}ms`
                }}
              >
                
                {/* Timeline Marker Node with pulse on enter */}
                <div className="absolute left-[7px] sm:left-[13px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white dark:bg-[#070b14] border-2 border-brand-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 ring-4 ring-brand-500/20 -translate-x-1/2 shadow-sm">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-500 group-hover:bg-sky-400 transition-colors"></div>
                </div>

                {/* Timeline Card */}
                <div className="rounded-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-white/10 p-5 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Header: Role + Company + Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-white/5">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 mb-1">
                        {item.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                        <Building className="w-3.5 h-3.5 text-brand-500" />
                        <span>{item.organization}</span>
                        <span className="text-slate-400 dark:text-slate-500">&bull;</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="pt-4 space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
