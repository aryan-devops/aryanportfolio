import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-white selection:text-black font-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-white/5 py-4" : "bg-transparent border-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-heading font-medium tracking-tight uppercase z-50"
          >
            Aryan Pandey
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/60">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-4 text-white/60">
              <a
                href="https://github.com/aryan-devops"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/aryanpandey"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center px-6"
          >
            <ul className="flex flex-col gap-8 text-4xl font-heading font-medium uppercase tracking-tight text-white/40">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 10, color: "#fff" }}
                >
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-6 mt-16 text-white/60">
              <a
                href="https://github.com/aryan-devops"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aryanpandey"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:aryan000pandey@gmail.com"
                className="hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-subtle py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Aryan Pandey.</p>
          <p>Designed for Scale.</p>
        </div>
      </footer>
    </div>
  );
}
