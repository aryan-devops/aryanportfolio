import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--nav-bg)] backdrop-blur-xl mt-24 sm:mt-32 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 print:hidden transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-[var(--text-primary)] text-lg tracking-tight">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 font-medium">
              Portfolio
            </span>
          </div>
          <p className="text-[var(--text-secondary)] text-xs max-w-sm">
            Full-stack developer building robust web applications, AI platforms, and high-performance digital experiences.
          </p>
          <div className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5 mt-1">
            <span>Raipur, Chhattisgarh, India</span>
            <span>•</span>
            <span className="text-emerald-500 font-medium">Available Worldwide</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-[var(--text-secondary)] font-medium">
          <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">Projects</a>
          <a href="#api-inspector" className="hover:text-[var(--text-primary)] transition-colors">API Inspector</a>
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="text-emerald-500 hover:opacity-80 font-semibold transition-opacity flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          )}
          <a href="#stack" className="hover:text-[var(--text-primary)] transition-colors">Tech Stack</a>
          <a href="#publications" className="hover:text-[var(--text-primary)] transition-colors">Publications</a>
          <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/30 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/30 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-9 h-9 rounded-full bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/30 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[var(--text-primary)] text-[var(--bg-void)] flex items-center justify-center hover:opacity-90 transition-all shadow-md ml-1 cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[var(--border-subtle)] mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--text-muted)] gap-3 sm:gap-4 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} {portfolioData.personal.name}. Designed & Engineered with precision.
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span>React 19, TypeScript & Tailwind CSS • Time-Based Theme Engine</span>
        </div>
      </div>
    </footer>
  );
}
