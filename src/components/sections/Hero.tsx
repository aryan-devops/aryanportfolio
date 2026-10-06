import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={targetRef}
      id="intro"
      className="h-[150vh] relative bg-[#0a0a0a]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center p-8 md:p-16">
        <motion.div
          style={{ scale, y: yHero, opacity: opacityHero }}
          className="flex flex-col justify-center h-full w-full relative origin-top"
        >
          <div className="flex flex-col text-[14vw] md:text-[11vw] font-heading font-bold leading-[0.8] tracking-tighter">
            <div className="flex items-center gap-8">
              <span>ARYAN</span>
              <span className="text-xs md:text-sm font-body tracking-[0.2em] font-medium opacity-50 hidden md:block max-w-[200px] mt-4 leading-relaxed">
                RAIPUR / INDIA
                <br />
                MCA @ AMITY
                <br />
                FULL-STACK DEVELOPMENT
              </span>
            </div>
            <span className="pl-[10vw]">PANDEY</span>
            <span className="text-outline">FULL-</span>
            <span className="pl-[5vw] text-[#bdf205]">STACK</span>
            <span className="pl-[20vw]">DEVELOPER</span>
          </div>

          <div className="absolute bottom-8 right-8 text-right max-w-xs md:max-w-md hidden md:block">
            <h3 className="text-lg md:text-2xl font-body font-medium leading-tight">
              BUILDING DIGITAL PRODUCTS THAT ACTUALLY WORK.
            </h3>
            <div className="flex justify-end gap-6 mt-6 text-xs font-bold tracking-[0.2em] text-[#bdf205]">
              <a
                href="https://github.com/aryan-devops"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/aryanpandey"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
