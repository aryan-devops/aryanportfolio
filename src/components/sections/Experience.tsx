import { motion } from 'framer-motion';
import { Briefcase, Building, CheckCircle2, Calendar, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface ExperienceProps {
  onOpenResume?: () => void;
}

export default function Experience({ onOpenResume }: ExperienceProps) {
  const { experience } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      id="experience"
      className="bento-card col-span-4 lg:col-span-2 row-span-1 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-purple-500 font-bold font-heading">
                Work Experience
              </span>
              <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                Industry Internship
              </h3>
            </div>
          </div>

          <span className="pill-badge text-[11px] py-1 px-2.5 text-purple-500">
            Production Track
          </span>
        </div>

        {experience.map((exp, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span>{exp.role}</span>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--pill-bg)] text-[var(--text-secondary)] font-normal border border-[var(--border-subtle)]">
                    {exp.type}
                  </span>
                </h4>
                <div className="flex items-center gap-2 text-xs text-blue-500 font-medium mt-0.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>{exp.company}</span>
                  <span className="text-[var(--text-muted)]">•</span>
                  <span className="text-[var(--text-muted)]">{exp.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-muted)]">
                <Calendar className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span>{exp.period}</span>
              </div>
            </div>

            <ul className="mt-2 space-y-2">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-1 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Version Control & Agile Workflow Verified</span>
        </span>

        {onOpenResume && (
          <button
            onClick={onOpenResume}
            className="text-purple-500 hover:opacity-80 flex items-center gap-1 font-semibold transition-opacity"
          >
            <FileText className="w-3 h-3" />
            <span>Open in CV</span>
          </button>
        )}
      </div>
    </motion.div>
  );
}
