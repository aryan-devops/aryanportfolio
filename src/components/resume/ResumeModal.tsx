import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, ShieldCheck, FileText, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const { resume } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resume.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[94vh] flex flex-col bg-[var(--bg-void)] border border-[var(--border-subtle)] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-w-none print:max-h-none print:rounded-none print:bg-white"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] shrink-0 print:hidden">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-xs sm:text-sm font-bold font-heading text-[var(--text-primary)] truncate">
                      Verified Curriculum Vitae
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono-code px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold shrink-0">
                      Authentic
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)] truncate hidden xs:block">
                    Aryan Pandey • Full-Stack Web Developer & AI Systems Engineer
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="hidden md:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
                  title="Copy contact email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied Email</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 sm:px-3.5 py-1.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90 transition-all shadow-sm"
                  title="Print or Save PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Body - Printable Resume Canvas */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-5 md:p-8 bg-neutral-900/60 print:bg-white print:p-0 print:overflow-visible">
              <div
                id="printable-cv-document"
                className="max-w-[800px] mx-auto bg-white text-[#111827] rounded-lg shadow-xl p-5 sm:p-10 md:p-12 font-sans leading-relaxed text-xs print:shadow-none print:rounded-none print:p-0 print:text-black print:max-w-none"
                style={{ fontFamily: '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif' }}
              >
                {/* 1. Header */}
                <div className="text-center mb-3 sm:mb-4">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-1 uppercase font-heading">
                    {resume.name}
                  </h1>
                  <div className="text-[10px] sm:text-xs text-gray-700 font-medium flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                    <span>{resume.location}</span>
                    <span>|</span>
                    <a href={`tel:${resume.phone}`} className="hover:underline">{resume.phone}</a>
                    <span>|</span>
                    <a href={`mailto:${resume.email}`} className="text-blue-700 hover:underline">{resume.email}</a>
                    <span>|</span>
                    <a href={resume.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                      {resume.linkedinDisplay}
                    </a>
                  </div>
                </div>

                <div className="border-b-2 border-black mb-3"></div>

                {/* 2. SUMMARY */}
                <div className="mb-3.5">
                  <h2 className="text-[11px] sm:text-[12px] font-bold text-black uppercase tracking-wider mb-1">
                    SUMMARY
                  </h2>
                  <p className="text-[11px] sm:text-xs text-gray-800 text-justify leading-normal">
                    {resume.summary}
                  </p>
                </div>

                {/* 3. CORE SKILLS */}
                <div className="mb-3.5">
                  <h2 className="text-[11px] sm:text-[12px] font-bold text-black uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
                    CORE SKILLS
                  </h2>
                  <div className="space-y-1 text-[11px] sm:text-xs">
                    <div>
                      <span className="font-semibold text-black">Languages and Backend: </span>
                      <span className="text-gray-800">{resume.coreSkills.languagesAndBackend}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-black">Frontend and Mobile: </span>
                      <span className="text-gray-800">{resume.coreSkills.frontendAndMobile}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-black">Cloud and DevOps Tools: </span>
                      <span className="text-gray-800">{resume.coreSkills.cloudAndDevops}</span>
                    </div>
                  </div>
                </div>

                {/* 4. WORK EXPERIENCE */}
                <div className="mb-3.5">
                  <h2 className="text-[11px] sm:text-[12px] font-bold text-black uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
                    WORK EXPERIENCE
                  </h2>
                  {resume.experience.map((exp, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex flex-wrap items-baseline justify-between font-bold text-[11px] sm:text-xs text-black">
                        <span>{exp.role}, {exp.company}, {exp.location}</span>
                        <span className="font-semibold text-gray-700">{exp.period}</span>
                      </div>
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] sm:text-xs text-gray-800">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-snug">{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 5. PROJECTS */}
                <div className="mb-3.5">
                  <h2 className="text-[11px] sm:text-[12px] font-bold text-black uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
                    PROJECTS
                  </h2>
                  <div className="space-y-2">
                    {resume.projects.map((proj, i) => (
                      <div key={i}>
                        <div className="flex flex-wrap items-baseline justify-between text-[11px] sm:text-xs">
                          <span className="font-bold text-black">{proj.title}</span>
                          <span className="font-semibold text-gray-700 italic">{proj.stack}</span>
                        </div>
                        <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-[11px] sm:text-xs text-gray-800">
                          {proj.points.map((pt, pIdx) => (
                            <li key={pIdx} className="leading-snug">{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. PUBLICATIONS */}
                <div className="mb-3.5">
                  <h2 className="text-[11px] sm:text-[12px] font-bold text-black uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
                    PUBLICATIONS
                  </h2>
                  <div className="space-y-1.5 text-[11px] sm:text-xs text-gray-800">
                    {resume.publications.map((pub, i) => (
                      <div key={i}>
                        <span className="font-bold text-black">{pub.title}. </span>
                        <span>{pub.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. EDUCATION */}
                <div className="mb-3.5">
                  <h2 className="text-[11px] sm:text-[12px] font-bold text-black uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
                    EDUCATION
                  </h2>
                  <div className="space-y-2 text-[11px] sm:text-xs">
                    {resume.education.map((edu, i) => (
                      <div key={i}>
                        <div className="flex flex-wrap items-baseline justify-between text-black font-bold">
                          <span>{edu.degree}, {edu.school} | {edu.grade}</span>
                          <span className="font-semibold text-gray-700">{edu.period}</span>
                        </div>
                        <p className="pl-3 mt-0.5 text-gray-800 text-[11px] leading-snug">
                          - {edu.points}
                        </p>
                      </div>
                    ))}
                    <div className="flex items-center gap-6 sm:gap-8 font-bold text-black pt-0.5">
                      {resume.schooling.map((sch, i) => (
                        <span key={i}>{sch.title} | {sch.grade}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 8. CERTIFICATIONS */}
                <div>
                  <h2 className="text-[11px] sm:text-[12px] font-bold text-black uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
                    CERTIFICATIONS
                  </h2>
                  <p className="text-[11px] sm:text-xs text-gray-800 leading-relaxed">
                    {resume.certifications.join(', ')}.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Modal Actions Bar */}
            <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] shrink-0 print:hidden">
              <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden sm:inline">Format: ATS-Optimized Single Page Curriculum Vitae</span>
                <span className="sm:hidden">ATS 1-Page Format</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex md:hidden items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-[var(--pill-bg)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Email'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 sm:px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="text-xs px-3 py-1.5 rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
