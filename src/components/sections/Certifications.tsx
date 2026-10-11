import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      id="certifications"
      className="bento-card col-span-4 lg:col-span-2 row-span-1 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-cyan-500 font-bold font-heading">
                Credentials
              </span>
              <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                Certifications
              </h3>
            </div>
          </div>

          <span className="pill-badge text-[11px] py-1 px-2.5 text-cyan-500">
            7 Verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-subtle)] hover:border-cyan-500/30 transition-colors flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)] leading-tight">
                  {cert.name}
                </h4>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5 flex items-center gap-1.5 font-mono-code">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span className="text-cyan-600 dark:text-cyan-300">{cert.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Industry Accredited Continuous Learning</span>
        </span>
      </div>
    </motion.div>
  );
}
