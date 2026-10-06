import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll();

  // Thin line indicating scroll progress
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-[#0a0a0a] text-[#f4f4f0] selection:bg-[#bdf205] selection:text-black">
      {/* Edge Navigation */}
      <header className="fixed top-8 left-8 right-8 z-50 mix-blend-difference flex justify-between items-start pointer-events-none">
        <div className="font-heading font-medium tracking-tight text-xl leading-none">
          ARYAN
          <br />
          PANDEY
        </div>

        <nav className="flex flex-col items-end gap-2 text-xs font-bold tracking-[0.2em] pointer-events-auto">
          <a href="#work" className="hover:text-[#bdf205] transition-colors">
            WORK
          </a>
          <a href="#about" className="hover:text-[#bdf205] transition-colors">
            ABOUT
          </a>
          <a
            href="#experience"
            className="hover:text-[#bdf205] transition-colors"
          >
            EXPERIENCE
          </a>
          <a href="#contact" className="hover:text-[#bdf205] transition-colors">
            CONTACT
          </a>
        </nav>
      </header>

      {/* Subtle Vertical Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 h-[30vh] w-[1px] bg-white/10 z-50 hidden md:block">
        <motion.div style={{ height }} className="w-full bg-[#bdf205]" />
      </div>

      <main>{children}</main>
    </div>
  );
}
