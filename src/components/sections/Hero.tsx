import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const yName = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yRole = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="intro" className="h-[150vh] relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Changing Background Layer */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-[#0f0f0f] z-0"
        ></motion.div>
        <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>

        {/* Typography Composition */}
        <motion.div
          style={{ scale }}
          className="relative z-10 flex flex-col items-center justify-center w-full px-4"
        >
          <motion.h1
            style={{ y: yName }}
            className="text-[12vw] md:text-[14vw] font-heading font-medium tracking-tighter text-white leading-[0.8] uppercase text-center mix-blend-difference"
          >
            Aryan
            <br />
            Pandey
          </motion.h1>
          <motion.h2
            style={{ y: yRole }}
            className="text-[4vw] md:text-[3vw] font-bold text-[#f04823] uppercase tracking-[0.3em] mt-8 text-center mix-blend-difference"
          >
            Full-Stack Developer
          </motion.h2>
        </motion.div>

        {/* Metadata */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-center gap-6 z-10 text-xs font-bold uppercase tracking-widest text-white/40"
        >
          <span>Raipur, India</span>
          <span>MCA @ Amity University</span>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
