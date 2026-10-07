import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Phases of Scroll
  // Phase 1: Typography Scales & Moves
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);
  const yHero = useTransform(scrollYProgress, [0, 0.4], ["0%", "20%"]);
  const yTextTop = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const yTextBottom = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  
  // Phase 2: Metadata fades
  const metadataOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const metadataY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  // Phase 3 & 4: Background transforms from dark to slightly lighter
  const bgColor = useTransform(scrollYProgress, [0.3, 0.6], ["#070707", "#0c0c0c"]);
  
  // Phase 5: Hero text fades completely as it enters project
  const opacityHero = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

  return (
    <motion.section
      ref={targetRef}
      id="intro"
      style={{ backgroundColor: bgColor }}
      className="h-[250vh] relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-32 pb-16 px-8 md:px-16 pointer-events-none">
        
        <motion.div
          style={{ scale, y: yHero, opacity: opacityHero }}
          className="flex flex-col justify-center h-full w-full relative origin-center"
        >
          <div className="grid grid-cols-12 gap-4 w-full h-full content-center">
            
            {/* Top Typography Group */}
            <motion.div style={{ y: yTextTop }} className="col-span-12 md:col-span-10 flex flex-col z-10">
              <h1 className="leading-[0.8] tracking-tighter">
                ARYAN <br/>
                <span className="text-outline-accent ml-[10vw]">PANDEY</span>
              </h1>
            </motion.div>

            {/* Bottom Typography Group */}
            <motion.div style={{ y: yTextBottom }} className="col-span-12 md:col-span-12 flex justify-end z-10 mt-8">
              <h1 className="leading-[0.8] tracking-tighter text-right">
                FULL-STACK <br/>
                DEVELOPER
              </h1>
            </motion.div>

            {/* Floating Metadata */}
            <motion.div 
              style={{ opacity: metadataOpacity, y: metadataY }}
              className="absolute left-0 bottom-[10vh] max-w-[200px] text-xs font-body tracking-[0.2em] font-medium leading-relaxed uppercase opacity-70"
            >
              Raipur, India <br/>
              MCA @ Amity <br/>
              Building Digital <br/>
              Experiences
            </motion.div>

            <motion.div 
              style={{ opacity: metadataOpacity, y: metadataY }}
              className="absolute right-0 top-0 text-right pointer-events-auto"
            >
              <div className="flex flex-col gap-2 text-xs font-bold tracking-[0.2em] text-[#bdf205]">
                <a href="https://github.com/aryan-devops" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-cursor="OPEN">GITHUB</a>
                <a href="https://linkedin.com/in/aryanpandey" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-cursor="OPEN">LINKEDIN</a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
