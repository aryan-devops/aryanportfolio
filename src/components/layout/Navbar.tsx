import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ArrowUpRight, FileText, Sun, Moon, Clock } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenResume?: () => void;
  isHidden?: boolean;
}

export default function Navbar({ onOpenResume, isHidden }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, theme, isDaytime, timeString, toggleTheme, setMode } = useTheme();

  useEffect(() => {
    if (isHidden) {
      setMenuOpen(false);
    }
  }, [isHidden]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'API Sandbox', href: '#api-inspector' },
    { name: 'Stack', href: '#stack' },
    { name: 'Research', href: '#publications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-6 lg:px-8 print:hidden ${
          isHidden
            ? 'opacity-0 -translate-y-full pointer-events-none invisible'
            : 'opacity-100 translate-y-0 visible'
        } ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-5'
        }`}
        aria-hidden={isHidden}
      >
        <div
          className={`max-w-6xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2.5 flex items-center justify-between border ${
            scrolled
              ? 'bg-[var(--nav-bg)] border-[var(--nav-border)] shadow-xl backdrop-blur-2xl'
              : 'bg-[var(--nav-bg)] border-[var(--nav-border)] shadow-md backdrop-blur-xl'
          }`}
        >
          {/* Left: Brand Monogram & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0"
            data-cursor="HOME"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 p-[1px] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[var(--bg-void)] rounded-[11px] flex items-center justify-center">
                <span className="font-heading font-black text-white text-xs sm:text-sm tracking-tighter">
                  AP
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-sm tracking-tight text-[var(--text-primary)]">
                  {portfolioData.personal.name}
                </span>
                <span className="relative flex h-1.5 w-1.5" title="Available for roles">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
              </div>
              <span className="text-[10px] text-[var(--text-muted)] font-medium leading-none hidden xs:inline-block">
                Full-Stack & AI
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 rounded-full text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--pill-border)] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button (Time-Based / Manual) */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] border border-[var(--pill-border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title={`Current Mode: ${mode === 'auto' ? 'Auto (Time-based ' + (isDaytime ? 'Day/Light' : 'Night/Dark') + ')' : mode.toUpperCase()}. Click to switch.`}
              data-cursor="THEME"
            >
              {theme === 'light' ? (
                <Sun className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-blue-400" />
              )}
              <span className="text-[11px] font-mono-code hidden md:inline-block">
                {timeString}
              </span>
              <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 hidden xl:inline-block">
                {mode === 'auto' ? (isDaytime ? 'Day' : 'Night') : mode}
              </span>
            </button>

            {/* Resume / CV Modal Trigger */}
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-emerald-600 dark:text-emerald-300 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
                data-cursor="RESUME"
                title="View Verified Curriculum Vitae"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-500" />
                <span className="hidden xs:inline">Resume</span>
                <span className="xs:hidden">CV</span>
              </button>
            )}

            {/* Desktop Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-8 h-8 rounded-xl bg-[var(--pill-bg)] border border-[var(--pill-border)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--pill-border)] transition-colors"
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && !isHidden && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-20 z-40 bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--border-subtle)] rounded-2xl p-5 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {/* Time & Theme Selector in Mobile Menu */}
              <div className="p-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--pill-border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono-code text-[var(--text-secondary)]">
                    {timeString} IST ({isDaytime ? 'Daytime' : 'Night'})
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setMode('auto')}
                    className={`text-[10px] px-2 py-1 rounded font-mono-code transition-colors ${
                      mode === 'auto'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Auto
                  </button>
                  <button
                    onClick={() => setMode('light')}
                    className={`text-[10px] px-2 py-1 rounded transition-colors ${
                      mode === 'light'
                        ? 'bg-amber-500 text-white font-bold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setMode('dark')}
                    className={`text-[10px] px-2 py-1 rounded transition-colors ${
                      mode === 'dark'
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Dark
                  </button>
                </div>
              </div>

              {/* View Verified CV in Mobile */}
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 font-bold text-sm shadow-sm"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>View Verified Curriculum Vitae</span>
                </button>
              )}

              {/* Navigation Links */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] text-xs font-semibold text-[var(--text-primary)] hover:border-blue-500/40 border border-transparent transition-all text-center"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] flex items-center justify-center text-[var(--text-primary)]"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] flex items-center justify-center text-[var(--text-primary)]"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-void)] font-bold text-xs"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
