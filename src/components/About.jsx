import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  Sparkles, 
  Building2, 
  CheckCircle,
  FileSpreadsheet,
  Database,
  BarChart,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const details = [
    { icon: User, label: "Full Name", value: personalInfo.name },
    { icon: GraduationCap, label: "Degree", value: personalInfo.degree },
    { icon: Calendar, label: "Graduation", value: personalInfo.graduation },
    { icon: Building2, label: "College", value: personalInfo.college },
    { icon: MapPin, label: "Location", value: personalInfo.location },
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: CheckCircle, label: "Status", value: personalInfo.availability, highlight: true },
  ];

  return (
    <section 
      id="about" 
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
            <span>About Me</span>
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white">
            Passionate About Data, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Driven by Insights.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Bridging analytical precision with business operational awareness.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Visual Profile Card (5 cols) with scale & fade entrance */}
          <div 
            className={`lg:col-span-5 transition-all duration-750 ease-out delay-150 ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
            }`}
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-[#0b1120] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-xl overflow-hidden group hover:shadow-2xl hover:border-brand-500/30 transition-all duration-300">
              
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-500/20 transition-all duration-500"></div>

              {/* Avatar Header Card with Portrait */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-brand-500/20 shrink-0 shadow-lg border border-slate-200 dark:border-white/10 bg-slate-900 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/akshay.jpg" 
                    alt="Peddi Akshay" 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors duration-200">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                    B.Tech CSE &bull; Class of 2027
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Bhaskar Engineering College
                  </p>
                </div>
              </div>

              {/* Analytical Focus Pillars */}
              <div className="py-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Core Analytics Focus
                </span>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 transition-all duration-200 hover:-translate-x-1 hover:border-brand-500/30 hover:bg-slate-100/80 dark:hover:bg-white/10">
                    <Database className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        SQL &amp; Relational Modeling
                      </h4>
                      <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        Complex joins, aggregations, schema validation, and database querying.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 transition-all duration-200 hover:-translate-x-1 hover:border-brand-500/30 hover:bg-slate-100/80 dark:hover:bg-white/10">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        Advanced Excel &amp; BI Dashboards
                      </h4>
                      <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        Pivot Tables, XLOOKUP, variance analysis, and interactive Power BI models.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 transition-all duration-200 hover:-translate-x-1 hover:border-brand-500/30 hover:bg-slate-100/80 dark:hover:bg-white/10">
                    <BarChart className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                        Python Data Transformation
                      </h4>
                      <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        Automated data cleaning with Pandas, computation with NumPy, visualization with Matplotlib.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Current Readiness</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Ready for Analyst Roles
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Biography & Info Grid (7 cols) */}
          <div 
            className={`lg:col-span-7 space-y-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Written Narrative */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.aboutDetailed.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="p-0 transition-opacity duration-500"
                  style={{ transitionDelay: `${250 + index * 80}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Information Rows Grid with sequential stagger */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3.5">
                Personal &amp; Academic Overview
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {details.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 flex items-center gap-3 transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-0.5 hover:shadow-sm ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${350 + idx * 40}ms` }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 transition-transform duration-200 group-hover:scale-110">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-brand-500 dark:hover:text-brand-400 truncate block transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className={`text-xs sm:text-sm font-semibold truncate ${item.highlight ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-900 dark:text-slate-200'}`}>
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact CTA banner with pulse interaction */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-500/10 via-sky-500/10 to-transparent border border-brand-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-brand-500/40 transition-colors duration-300">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  Looking for a dedicated Data Analyst intern or associate?
                </p>
                <p className="text-[12px] text-slate-500 dark:text-slate-400">
                  Open to full-time, contract, or internship opportunities in Hyderabad &amp; Remote.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white shrink-0 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 group"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
