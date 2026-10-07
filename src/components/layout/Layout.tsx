import type { ReactNode } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans">
      
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-[var(--bg-canvas)]/80 backdrop-blur-sm border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-serif-editorial font-medium tracking-tight text-xl hover:opacity-70 transition-opacity">
            Aryan Pandey.
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#work" className="hover:text-[var(--text-primary)] transition-colors">Work</a>
            <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">Experience</a>
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/aryan-devops" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/aryanpandey" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      {/* Minimal Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[var(--text-secondary)] font-mono-code">
            © {new Date().getFullYear()} Aryan Pandey
          </p>
          <a href="mailto:contact@example.com" className="btn-secondary">
            <Mail className="w-4 h-4" />
            contact@example.com
          </a>
        </div>
      </footer>

    </div>
  );
}
