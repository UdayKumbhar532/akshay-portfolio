import React from 'react';
import { 
  BarChart3, 
  Code2, 
  Database, 
  LayoutDashboard, 
  FileSpreadsheet, 
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map icon string to Lucide component
const iconMap = {
  BarChart3,
  Code2,
  Database,
  LayoutDashboard,
  FileSpreadsheet,
  Lightbulb,
};

export default function Skills() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      id="skills" 
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
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white">
            Tools I Use to{" "}
            <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Transform Data Into Insights.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Structured competencies covering exploratory processing, relational databases, business intelligence, and reporting.
          </p>
        </div>

        {/* 6 Skills Cards: Staggered Entrance & Dynamic Hover States */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || BarChart3;

            return (
              <div
                key={category.id}
                className={`group relative rounded-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
                }`}
                style={{
                  transitionDelay: `${150 + idx * 80}ms`
                }}
              >
                {/* Top: Icon + Titles */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 transition-transform duration-300" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {category.subtitle}
                    </span>
                  </div>

                  <h3 className="card-title font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200">
                    {category.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Bottom: Skill Pills with subtle hover response */}
                <div>
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5 group-hover:border-brand-500/20 hover:scale-105 hover:bg-brand-500/10 hover:text-brand-500 dark:hover:text-brand-300 transition-all duration-200 cursor-default"
                        >
                          <span className="w-1 h-1 rounded-full bg-brand-500"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner Glow Highlight */}
                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-brand-500/5 rounded-full blur-xl group-hover:bg-brand-500/15 transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
