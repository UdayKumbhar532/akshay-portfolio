import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Building2 
} from 'lucide-react';
import { educationList } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      id="education" 
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
            <span>Academic Background</span>
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white">
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Qualifications.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Formal technical education combining Computer Science fundamentals, quantitative measurement, and engineering discipline.
          </p>
        </div>

        {/* Education Cards Grid with Sequential Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
              }`}
              style={{
                transitionDelay: `${150 + idx * 100}ms`
              }}
            >
              <div>
                {/* Degree & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <GraduationCap className="w-5 h-5 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-500 transition-colors duration-200">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 mt-2">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{edu.institution}</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              {/* CGPA / Score Badge */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/5 mt-6 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Score / Grade</span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  {edu.cgpa}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
