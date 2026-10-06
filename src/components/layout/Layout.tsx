import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [currentChapter, setCurrentChapter] = useState("01 INTRO");

  const chapters = [
    { id: "intro", name: "01 INTRO" },
    { id: "work", name: "02 WORK" },
    { id: "about", name: "03 ABOUT" },
    { id: "experience", name: "04 EXPERIENCE" },
    { id: "stack", name: "05 STACK" },
    { id: "education", name: "06 EDUCATION" },
    { id: "publications", name: "07 PUBLICATIONS" },
    { id: "contact", name: "08 CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Very simple chapter detection based on section scroll positions
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = chapters.length - 1; i >= 0; i--) {
        const element = document.getElementById(chapters[i].id);
        if (element && scrollPos >= element.offsetTop) {
          setCurrentChapter(chapters[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-[#f04823] selection:text-white font-body overflow-x-hidden">
      {/* Minimal chapter navigation */}
      <motion.div
        style={{ opacity: navOpacity }}
        className="fixed top-8 left-6 md:left-12 z-50 mix-blend-difference text-white flex flex-col gap-2 pointer-events-none"
      >
        <div className="text-xs font-bold uppercase tracking-[0.2em]">
          {currentChapter}
        </div>
      </motion.div>

      {/* Vertical Progress Indicator */}
      <motion.div
        style={{ opacity: navOpacity }}
        className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 h-[20vh] w-px bg-white/10 z-50 pointer-events-none"
      >
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="w-full h-full bg-[#f04823]"
        ></motion.div>
      </motion.div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
