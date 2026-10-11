import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Cloud, Code, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function TechStack() {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code className="w-4 h-4 text-blue-500" />;
      case 1: return <Cpu className="w-4 h-4 text-cyan-500" />;
      case 2: return <Terminal className="w-4 h-4 text-emerald-500" />;
      case 3: return <Database className="w-4 h-4 text-purple-500" />;
      case 4: return <Cloud className="w-4 h-4 text-amber-500" />;
      case 5: return <Sparkles className="w-4 h-4 text-rose-500" />;
      default: return <Cpu className="w-4 h-4 text-blue-500" />;
    }
  };

  const filteredCategories = selectedCategory
    ? skillCategories.filter((c) => c.title === selectedCategory)
    : skillCategories;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
      id="stack"
      className="bento-card col-span-4 row-span-1"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 pb-4 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-blue-500 font-bold font-heading">
              Engineering Arsenal
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
              Tech Stack & Tooling
            </h3>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`text-xs px-2.5 sm:px-3 py-1 rounded-full font-medium transition-all ${
              selectedCategory === null
                ? 'bg-[var(--text-primary)] text-[var(--bg-void)] font-bold'
                : 'bg-[var(--pill-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            All Tech
          </button>
          {skillCategories.map((c) => (
            <button
              key={c.title}
              onClick={() => setSelectedCategory(selectedCategory === c.title ? null : c.title)}
              className={`text-xs px-2.5 sm:px-3 py-1 rounded-full font-medium transition-all ${
                selectedCategory === c.title
                  ? 'bg-blue-600/30 text-blue-500 border border-blue-500/50 font-bold'
                  : 'bg-[var(--pill-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredCategories.map((group, idx) => (
          <div
            key={group.title}
            className="p-3.5 sm:p-4 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-subtle)] hover:border-blue-500/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                {getCategoryIcon(idx)}
                <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider font-heading">
                  {group.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
