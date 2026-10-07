import type { ReactNode } from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-lg hover:opacity-80 transition-opacity">
            <Code className="w-5 h-5 text-[var(--accent)]" />
            Aryan Pandey
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
            <a href="#work" className="hover:text-[var(--accent)] transition-colors">Work</a>
            <a href="#experience" className="hover:text-[var(--accent)] transition-colors">Experience</a>
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
          </nav>
          
          <a href="#contact" className="btn-primary hidden md:inline-flex py-2 px-4">
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </div>
      </header>

      <main>{children}</main>

      {/* Minimal Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Aryan Pandey. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/aryan-devops" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/aryanpandey" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
