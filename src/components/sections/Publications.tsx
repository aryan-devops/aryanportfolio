import { motion } from 'framer-motion';
import { BookOpen, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Publications() {
  const { publications } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      id="publications"
      className="bento-card col-span-4 lg:col-span-2 row-span-1 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-rose-500 font-bold font-heading">
                Scientific Research
              </span>
              <h3 className="text-xl font-bold font-heading text-[var(--text-primary)]">
                Published Papers
              </h3>
            </div>
          </div>

          <span className="pill-badge text-[11px] py-1 px-2.5 text-rose-500">
            2 Peer-Reviewed
          </span>
        </div>

        <div className="space-y-3.5">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="p-3 sm:p-3.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-subtle)] hover:border-rose-500/30 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-500 border border-rose-500/30">
                  {pub.journal}
                </span>
                {pub.date && (
                  <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                    {pub.date}
                  </span>
                )}
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-snug mb-1.5 group-hover:text-blue-500 transition-colors">
                {pub.title}
              </h4>

              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                {pub.description}
              </p>

              <div className="mt-2 text-[11px] text-[var(--text-muted)] flex items-center gap-1 font-medium">
                <span className="text-rose-500">•</span>
                <span>Focus: {pub.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
        <span>Applied AI / Machine Learning & Security Domain</span>
        <FileText className="w-3.5 h-3.5 text-rose-500" />
      </div>
    </motion.div>
  );
}
