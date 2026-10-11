import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { portfolioData, type Project } from '../../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <>
      {projects.map((project: Project, index: number) => {
        const spanClass = index === 0 
          ? "col-span-4 lg:col-span-2 row-span-2"
          : "col-span-4 lg:col-span-2 row-span-1";

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className={`bento-card ${spanClass} group flex flex-col justify-between overflow-hidden relative`}
            id={index === 0 ? "projects" : undefined}
          >
            {/* Project Preview Image with cinematic gradient overlay */}
            <div className="relative w-full h-44 sm:h-52 overflow-hidden rounded-xl mb-4 sm:mb-5 bg-[#090b10] border border-[var(--border-subtle)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Top Badges over image */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[10px] font-mono-code font-semibold px-2.5 py-1 rounded-full bg-black/75 border border-white/10 text-blue-300 backdrop-blur-md">
                  {project.category}
                </span>

                {project.metrics && (
                  <span className="text-[10px] font-mono-code font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 backdrop-blur-md flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-blue-300" />
                    {project.metrics}
                  </span>
                )}
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)] group-hover:text-blue-500 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 pt-3 border-t border-[var(--border-subtle)]">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90 transition-all shadow-xs"
                      data-cursor="VISIT"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
                      data-cursor="CODE"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
