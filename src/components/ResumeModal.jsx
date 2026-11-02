import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Calendar, 
  Building,
  GraduationCap,
  Award,
  Database,
  FileSpreadsheet
} from 'lucide-react';
import { personalInfo, experienceTimeline, educationList, certifications, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden my-6 print:m-0 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-slate-800 dark:text-slate-200 space-y-6">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1">
                {personalInfo.roleTitle}
              </p>
            </div>

            <div className="mt-4 sm:mt-0 text-xs text-slate-600 dark:text-slate-400 space-y-1 sm:text-right">
              <div>{personalInfo.location}</div>
              <div>{personalInfo.email} &bull; {personalInfo.phone}</div>
              <a href={personalInfo.linkedin} className="text-brand-500 hover:underline">
                linkedin.com/in/akshay-peddi
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.bioShort}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10 pb-1 mb-2.5">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Languages &amp; Libraries:</span> Python (Pandas, NumPy, Matplotlib)
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Databases:</span> SQL, MySQL, Relational Schema Queries
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">BI &amp; Spreadsheets:</span> Microsoft Power BI, Advanced Excel (Pivot Tables, XLOOKUP)
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Analytics:</span> Data Cleaning, EDA, KPI Reporting, Variance Analysis
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceTimeline.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {exp.role} &mdash; <span className="font-medium text-brand-600 dark:text-brand-400">{exp.organization}</span>
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 list-disc list-inside text-xs text-slate-600 dark:text-slate-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Flagship Project */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10 pb-1 mb-2">
              Featured Analytics Case Study
            </h2>
            <div className="text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-white">
                  Food Stall Sales Analytics &amp; Business Reporting
                </span>
                <span className="text-xs text-brand-500 font-semibold">Python | SQL | Excel | Power BI</span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Processed 5,000+ transactional records, resolved data anomalies, designed analytical SQL queries for peak-hour velocity, and created interactive dashboards reporting an 18% improvement in inventory forecasting.
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10 pb-1 mb-3">
              Education &amp; Qualifications
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{edu.degree}</span>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{edu.institution}</div>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold sm:text-right mt-1 sm:mt-0">
                    <div>{edu.cgpa}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-white/10 pb-1 mb-2">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <div className="font-bold text-slate-900 dark:text-white">{cert.title}</div>
                  <div className="text-[11px] text-brand-500 font-medium">Issued by {cert.organization} &bull; Completed</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

