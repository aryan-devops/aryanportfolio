import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  const yContent = useTransform(scrollYProgress, [0.3, 0.6, 1], [100, 0, -100]);
  const opacityContent = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="min-h-[150vh] relative bg-[#0a0a0a] flex flex-col items-center justify-center py-32 px-6"
    >
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="w-full max-w-7xl mx-auto flex flex-col items-center text-center mb-48"
      >
        <h2 className="text-[6vw] md:text-[5vw] font-heading font-medium tracking-tighter text-white leading-[0.9] uppercase">
          Not just a developer.
          <br />
          <span className="text-[#f04823]">A Builder.</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16"
      >
        <div className="md:col-span-5">
          <h3 className="text-3xl md:text-5xl font-heading font-medium text-white tracking-tight leading-tight">
            Full-Stack Developer
          </h3>
          <p className="text-xl text-white/50 mt-6 leading-relaxed max-w-md">
            Hands-on experience building and deploying web applications from the
            database to the interface.
          </p>
        </div>

        <div className="md:col-span-7 flex flex-wrap gap-4 items-start content-start text-sm font-bold uppercase tracking-widest text-white/80">
          <span className="px-6 py-3 border border-white/10 rounded-full bg-white/5">
            JavaScript
          </span>
          <span className="px-6 py-3 border border-white/10 rounded-full bg-white/5">
            React
          </span>
          <span className="px-6 py-3 border border-white/10 rounded-full bg-white/5">
            Node.js
          </span>
          <span className="px-6 py-3 border border-white/10 rounded-full bg-white/5">
            Express.js
          </span>
          <span className="px-6 py-3 border border-white/10 rounded-full bg-white/5">
            PHP
          </span>
          <span className="px-6 py-3 border border-white/10 rounded-full bg-white/5">
            MySQL
          </span>
          <span className="px-6 py-3 border border-white/10 rounded-full bg-white/5">
            MongoDB
          </span>
        </div>
      </motion.div>
    </section>
  );
}
