import React from 'react';
import { 
  Sparkles, 
  Award, 
  ShieldCheck
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Certifications() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 md:py-28 relative"
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
            <span>Credentials</span>
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white">
            Certifications &amp;{" "}
            <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Continuous Learning.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Verified credentials in Python programming, algorithm implementation, and automation script workflows.
          </p>
        </div>

        {/* Certification Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className={`group relative rounded-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
              }`}
              style={{
                transitionDelay: `${150 + idx * 120}ms`
              }}
            >
              <div>
                {/* Header Icon + Organization */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Award className="w-6 h-6 transition-transform duration-300" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <div className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1">
                  Issued by {cert.organization}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/5 mt-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Skills Evaluated:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5 group-hover:border-brand-500/20 hover:scale-105 hover:bg-brand-500/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
