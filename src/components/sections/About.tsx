import { motion } from 'framer-motion';
import { User, Code2, ShieldAlert, Cpu } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bento-card col-span-4 lg:col-span-2 row-span-1 flex flex-col justify-between"
      id="about"
    >
      <div>
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
              <User className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-wider text-blue-500 font-bold font-heading">
              Engineering Mindset
            </span>
          </div>
          <span className="pill-badge text-[10px] py-0.5 px-2">
            About Aryan
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)] leading-tight mb-2 sm:mb-3">
          Bridging Full-Stack Systems <br />
          <span className="text-gradient-accent">& Applied Artificial Intelligence</span>
        </h3>

        <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mb-4">
          I'm an MCA candidate at Amity University and a production-tested developer who interned at Exbyte Technology. I focus on creating high-throughput web applications with Node.js and React, integrating real-time anti-cheat proctoring algorithms, and fine-tuning AI services with Groq and modern LLM toolchains.
        </p>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
        <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--text-secondary)] flex items-center gap-1.5">
          <Code2 className="w-3 h-3 text-blue-500" />
          Full-Stack Web
        </span>
        <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--text-secondary)] flex items-center gap-1.5">
          <Cpu className="w-3 h-3 text-purple-500" />
          Applied AI / Groq
        </span>
        <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--text-secondary)] flex items-center gap-1.5">
          <ShieldAlert className="w-3 h-3 text-emerald-500" />
          Cybersecurity & Auth
        </span>
      </div>
    </motion.div>
  );
}
