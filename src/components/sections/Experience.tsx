import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yResp1 = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  const opacityResp1 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const yResp2 = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  const opacityResp2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section
      ref={targetRef}
      id="experience"
      className="py-48 px-8 max-w-7xl mx-auto border-t border-white/10"
    >
      <div className="flex flex-col gap-8">
        <span className="text-8xl md:text-[12rem] font-heading font-bold text-white/5 leading-none -ml-4">
          2025
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-[-4rem] md:mt-[-6rem] relative z-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-white">
              Exbyte Technology
            </h3>
            <span className="text-[#bdf205] font-body font-bold tracking-[0.2em] uppercase text-sm mt-2">
              Web Developer Intern
            </span>
            <span className="text-white/40 font-body font-medium tracking-widest uppercase text-xs mt-1">
              Bilaspur • Mar — May 2025
            </span>
          </div>

          <div className="flex flex-col gap-12 font-body text-xl md:text-2xl font-medium leading-relaxed text-white/80">
            <motion.div
              style={{ y: yResp1, opacity: opacityResp1 }}
              className="pl-6 border-l-2 border-white/20"
            >
              Developing scalable web solutions and optimizing backend
              performance.
            </motion.div>
            <motion.div
              style={{ y: yResp2, opacity: opacityResp2 }}
              className="pl-6 border-l-2 border-[#bdf205]"
            >
              Collaborating with teams to deliver responsive enterprise
              applications.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
