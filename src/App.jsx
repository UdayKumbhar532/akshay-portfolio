import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-[#070b14] dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-500/20 selection:text-brand-400">
        
        {/* Sticky Header Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Section 1: Hero */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* Section 2: About Me */}
          <About />

          {/* Section 3: Skills & Expertise */}
          <Skills />

          {/* Section 4: Featured Projects */}
          <Projects />

          {/* Section 5: Professional Journey */}
          <Experience />

          {/* Section 6: Certifications & Achievements */}
          <Certifications />

          {/* Section 7: Education */}
          <Education />

          {/* Section 8: Single Dedicated Contact Section */}
          <Contact />
        </main>

        {/* Section 9: Footer */}
        <Footer />

        {/* Global Interactive Resume Modal */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />

      </div>
    </ThemeProvider>
  );
}

