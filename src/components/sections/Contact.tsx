import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="min-h-screen bg-[#0a0a0a] flex flex-col justify-end relative pt-48 pb-12 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-[12vw] md:text-[10vw] font-heading font-medium tracking-tighter text-white leading-[0.85] uppercase text-center mb-24 px-4">
          Let's
          <br />
          <span className="text-[#f04823]">Build</span>
          <br />
          Something
          <br />
          Useful.
        </h2>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-subtle pt-12 pb-24">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
              Connect
            </span>
            <a
              href="mailto:pandeyaryan995@gmail.com"
              className="text-xl md:text-2xl text-white hover:text-[#f04823] transition-colors mt-2"
            >
              pandeyaryan995@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
              Social
            </span>
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://linkedin.com/in/aryanpandey"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xl text-white hover:text-[#f04823] transition-colors"
              >
                LinkedIn <ArrowUpRight size={18} />
              </a>
              <a
                href="https://github.com/aryan-devops"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xl text-white hover:text-[#f04823] transition-colors"
              >
                GitHub <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
              Identity
            </span>
            <span className="text-xl md:text-2xl text-white uppercase mt-2 font-heading font-medium">
              Aryan Pandey
            </span>
            <span className="text-sm font-bold text-[#f04823] uppercase tracking-widest">
              Full-Stack Developer
            </span>
          </div>
        </div>

        <div className="text-center text-xs font-bold text-white/20 uppercase tracking-widest pb-4">
          © {new Date().getFullYear()} Designed for Scale.
        </div>
      </motion.div>
    </section>
  );
}
