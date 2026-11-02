import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      id="projects" 
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
            <span>My Projects</span>
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white">
            Turning Data Into{" "}
            <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Real-World Solutions.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Detailed analytical projects highlighting exploratory workflows, relational SQL modeling, and executive BI reporting.
          </p>
        </div>

        {/* Featured Projects Showcase List with Staggered Entrance */}
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => {
            const isFlagship = idx === 0;

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl bg-white dark:bg-[#0c1324] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-500/40 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-98'
                }`}
                style={{
                  transitionDelay: `${200 + idx * 150}ms`
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
                  
                  {/* Left: Project Details & Contributions (7 cols on desktop) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Badge & Category */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 shadow-sm">
                          {project.badge}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Key Metrics row */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 py-2">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 transition-all duration-200 group-hover:border-brand-500/20 group-hover:bg-slate-100/80 dark:group-hover:bg-white/10">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                          Dataset Scope
                        </span>
                        <div className="text-lg sm:text-xl font-extrabold text-brand-600 dark:text-brand-400 mt-0.5">
                          {project.highlightMetric}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 transition-all duration-200 group-hover:border-emerald-500/20 group-hover:bg-slate-100/80 dark:group-hover:bg-white/10">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                          Reported Outcome
                        </span>
                        <div className="text-lg sm:text-xl font-extrabold text-emerald-700 dark:text-emerald-400 mt-0.5">
                          {project.impactMetric}
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                        Tech Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5 hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-brand-500 transition-all duration-200 cursor-default"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider bg-brand-600 hover:bg-brand-500 text-white shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group/btn"
                      >
                        <span>Explore Full Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>

                  </div>

                  {/* Right: Rich Interactive Visual / Mockup (5 cols on desktop) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-5 sm:p-6 text-white border border-slate-800 shadow-xl relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                      
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="text-xs font-mono text-slate-400 ml-2">
                            {isFlagship ? 'food_sales_dashboard.pbix' : 'customer_rfm_analysis.py'}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-wider bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded border border-brand-500/30">
                          {isFlagship ? 'Power BI & SQL' : 'Python & Pandas'}
                        </span>
                      </div>

                      {/* Mockup Dashboard Body */}
                      <div className="space-y-3.5">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div>
                            <div className="text-[11px] text-slate-400">Target Output</div>
                            <div className="text-sm font-bold text-white">
                              {isFlagship ? 'Sales Velocity by Hour' : 'RFM Customer Segments'}
                            </div>
                          </div>
                          <span className="text-xs text-emerald-400 font-mono font-semibold">
                            {isFlagship ? '18% Gain' : '4 Tiers'}
                          </span>
                        </div>

                        {/* Chart Preview Representation */}
                        <div className="h-28 w-full bg-black/40 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>{isFlagship ? 'Transactional Velocity' : 'Cohort Distribution'}</span>
                            <span className="text-brand-400 font-mono">5k+ Records</span>
                          </div>
                          
                          {/* Mini bars with staggered hover responsiveness */}
                          <div className="flex items-end gap-1.5 h-14 pt-2">
                            <div className="w-full bg-brand-500/40 rounded-t h-[40%] hover:h-[50%] hover:bg-brand-400 transition-all duration-300"></div>
                            <div className="w-full bg-brand-500/50 rounded-t h-[55%] hover:h-[65%] hover:bg-brand-400 transition-all duration-300"></div>
                            <div className="w-full bg-brand-500/60 rounded-t h-[30%] hover:h-[40%] hover:bg-brand-400 transition-all duration-300"></div>
                            <div className="w-full bg-brand-500/70 rounded-t h-[80%] hover:h-[90%] hover:bg-brand-400 transition-all duration-300"></div>
                            <div className="w-full bg-brand-500/90 rounded-t h-[100%] hover:bg-sky-400 transition-all duration-300"></div>
                            <div className="w-full bg-brand-500/80 rounded-t h-[85%] hover:h-[95%] hover:bg-brand-400 transition-all duration-300"></div>
                            <div className="w-full bg-brand-500/45 rounded-t h-[50%] hover:h-[60%] hover:bg-brand-400 transition-all duration-300"></div>
                          </div>

                          <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                          </div>
                        </div>

                        {/* Summary List */}
                        <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>Calculated Peak Demand: 7:00 PM – 9:30 PM</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                            <span>Excel Pivot Tables &amp; Dynamic XLOOKUP queries</span>
                          </div>
                        </div>
                      </div>

                      {/* Click overlay prompt */}
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="mt-4 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <span>Click to View Full Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal with smooth fade & scale animation */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
