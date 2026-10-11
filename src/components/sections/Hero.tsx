import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Terminal, MapPin, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import HeroScene from '../3d/HeroScene';

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { personal } = portfolioData;

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bento-card col-span-4 row-span-2 relative overflow-hidden"
      id="hero"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Ultra-wide Editorial Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between py-2">
          <div>
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
              <div className="pill-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-[var(--text-secondary)]">
                  Available for Internships
                </span>
              </div>

              <div className="pill-badge text-[var(--text-muted)] text-[11px] sm:text-xs hidden sm:inline-flex">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>Raipur, Chhattisgarh, India</span>
              </div>
            </div>

            {/* Main Name Heading - strictly wide, flowing 1-2 lines */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[var(--text-primary)] leading-[1.08] mb-3 sm:mb-4 font-heading">
              {personal.name}
            </h1>

            {/* Professional Subheading */}
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-gradient-accent mb-4 sm:mb-5 font-heading">
              {personal.title}
            </h2>

            {/* Clear value statement */}
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
              Full-Stack Web Developer with production experience across Java, React, Node.js, Express.js, PHP, and MongoDB. Hands-on deploying and networking multi-container Docker services on AWS EC2, with published research in AI threat detection & medical imaging.
            </p>
          </div>

          {/* Action CTAs and Socials */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-void)] font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md"
              data-cursor="WORK"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-emerald-600 dark:text-emerald-300 font-bold text-xs sm:text-sm transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                data-cursor="RESUME"
                title="View Verified Curriculum Vitae"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                <span>Verified CV</span>
              </button>
            )}

            <a
              href="#api-inspector"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-xs sm:text-sm transition-all"
              data-cursor="API"
            >
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
              <span>Inspect API</span>
            </a>

            <div className="flex items-center gap-2 ml-auto pt-2 sm:pt-0">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/40 transition-all"
                title="GitHub"
                data-cursor="GITHUB"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/40 transition-all"
                title="LinkedIn"
                data-cursor="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/40 transition-all"
                title="Email Aryan"
                data-cursor="EMAIL"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Tech Constellation & Quick Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] bg-gradient-to-b from-blue-500/5 to-transparent rounded-2xl border border-[var(--border-subtle)] p-3 sm:p-4 relative">
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <HeroScene />
          </div>

          <div className="relative z-10 flex justify-between items-start pointer-events-none">
            <div className="px-2.5 py-1 rounded-md bg-[var(--bg-card)]/80 border border-[var(--border-subtle)] backdrop-blur-md">
              <span className="text-[10px] font-mono-code text-blue-500 font-bold tracking-wider uppercase">
                SYSTEM ONLINE
              </span>
            </div>
            <div className="px-2.5 py-1 rounded-md bg-[var(--bg-card)]/80 border border-[var(--border-subtle)] backdrop-blur-md flex items-center gap-1.5">
              <span className="text-[10px] font-mono-code text-[var(--text-secondary)]">
                MCA '27 @ AMITY (7.40 GPA)
              </span>
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-10 sm:pt-16 pointer-events-none">
            <div className="grid grid-cols-2 gap-2">
              {personal.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-2.5 sm:p-3 rounded-xl bg-[var(--bg-card)]/80 border border-[var(--border-subtle)] backdrop-blur-md shadow-sm"
                >
                  <div className="text-lg sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
