import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ApiTerminal from './components/sections/ApiTerminal';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Publications from './components/sections/Publications';
import Certifications from './components/sections/Certifications';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import ResumeModal from './components/resume/ResumeModal';

function PortfolioApp() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <Layout onOpenResume={() => setResumeOpen(true)}>
      <div className="bento-container pb-20">
        <div className="bento-grid">
          {/* Chapter 1: Attention (Hero) */}
          <Hero onOpenResume={() => setResumeOpen(true)} />

          {/* Chapter 2: Engineering Mindset & Interactive API Terminal */}
          <About />
          <ApiTerminal />

          {/* Chapter 3: Featured Production Work (Annadata, Quizerr, Yesha) */}
          <Projects />

          {/* Chapter 4: Professional Experience & Academic Foundation */}
          <Experience onOpenResume={() => setResumeOpen(true)} />
          <Education />

          {/* Chapter 5: Scientific Publications & Professional Certifications */}
          <Publications />
          <Certifications />

          {/* Chapter 6: Deep Tech Stack Matrix */}
          <TechStack />

          {/* Chapter 7: Action (Contact & Collaboration) */}
          <Contact onOpenResume={() => setResumeOpen(true)} />
        </div>
      </div>

      {/* Verified Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
