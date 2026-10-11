import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      id="education"
      className="bento-card col-span-4 lg:col-span-2 row-span-1 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-500 font-bold font-heading">
                Academic Background
              </span>
              <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                Education & Degrees
              </h3>
            </div>
          </div>

          <span className="pill-badge text-[11px] py-1 px-2.5 text-amber-500">
            Postgraduate & Undergrad
          </span>
        </div>

        <div className="space-y-3.5">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-subtle)] hover:border-blue-500/30 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  {item.degree}
                </h4>
                <span className="text-[11px] font-mono-code text-amber-500 font-semibold">
                  {item.period}
                </span>
              </div>
              <div className="text-xs text-blue-500 font-medium mb-1">
                {item.institution} • {item.location} {item.grade && `(${item.grade})`}
              </div>
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                {item.notes}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
        <Award className="w-3.5 h-3.5 text-amber-500" />
        <span>Hackathon Competitor & Academic Distinction</span>
      </div>
    </motion.div>
  );
}
