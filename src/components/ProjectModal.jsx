import React, { useState } from 'react';
import { 
  X, 
  Database, 
  FileSpreadsheet, 
  BarChart2, 
  TrendingUp, 
  CheckCircle2, 
  Code2, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const handleCopyCode = () => {
    if (project.sqlSnippet) {
      navigator.clipboard.writeText(project.sqlSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
              {project.badge}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium hidden sm:inline-block">
              {project.period}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          
          {/* Title & High Level Summary */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Key Metrics Highlight Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-500/10 to-transparent border border-brand-500/20">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Volume Processed
              </span>
              <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 mt-1">
                {project.highlightMetric}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Cleaned, validated, and normalized transactional records.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Forecast Performance
              </span>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                {project.impactMetric}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Reported project model result in inventory forecasting.
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-2.5">
              Tools &amp; Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex border-b border-slate-200 dark:border-white/10 gap-4 sm:gap-6 text-sm font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 transition-colors relative ${
                activeTab === 'overview'
                  ? 'text-brand-600 dark:text-brand-400 border-b-2 border-brand-500'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Contributions &amp; Workflow
            </button>
            <button
              onClick={() => setActiveTab('sql')}
              className={`pb-2.5 transition-colors relative ${
                activeTab === 'sql'
                  ? 'text-brand-600 dark:text-brand-400 border-b-2 border-brand-500'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              SQL Query Analysis
            </button>
            <button
              onClick={() => setActiveTab('findings')}
              className={`pb-2.5 transition-colors relative ${
                activeTab === 'findings'
                  ? 'text-brand-600 dark:text-brand-400 border-b-2 border-brand-500'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Key Findings &amp; Outcomes
            </button>
          </div>

          {/* Tab 1: Overview & Contributions */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Project Problem Statement &amp; Objectives
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Food stall operations typically suffer from unpredictable demand fluctuations, perishable stock spoilage during quiet afternoon periods, and order bottlenecks during evening rush hours. The objective of this project was to ingest raw transactional sales slips, clean missing and inconsistent entries, model sales velocities in SQL, and construct interactive Excel and Power BI dashboards to drive inventory predictability.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                  Step-by-Step Analytical Pipeline
                </h4>
                <div className="space-y-2.5">
                  {project.keyContributions.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: SQL Query Analysis */}
          {activeTab === 'sql' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Sample Analytical SQL Query
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Aggregating hourly velocity, basket size, and order counts.
                  </p>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SQL</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-2xl bg-slate-950 p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto border border-white/10 shadow-inner">
                <pre>{project.sqlSnippet}</pre>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Query handles timestamp truncation, conditional sum filtering on completed payments, and calculates rounded averages to prevent database float rounding anomalies.
                </span>
              </div>
            </div>
          )}

          {/* Tab 3: Key Findings */}
          {activeTab === 'findings' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                  Reported Findings &amp; Insights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFindings.map((kf, i) => (
                    <div 
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5"
                    >
                      <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block mb-1">
                        {kf.metric}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {kf.finding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Actionable Business Recommendations
                </h4>
                <ul className="space-y-2">
                  {project.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            * 18% improvement is a reported academic project metric.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}

