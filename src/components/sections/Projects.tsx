import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pinning horizontal scroll effect mechanism for projects
  const horizontalX = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
  // Transition into section
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section ref={containerRef} id="work" className="relative h-[500vh] bg-[#0c0c0c]">
      <motion.div 
        style={{ opacity: sectionOpacity }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center"
      >
        <motion.div 
          style={{ x: horizontalX }}
          className="flex h-full w-[500vw] items-center"
        >
          {/* TITLE SLIDE */}
          <div className="w-[100vw] h-full flex flex-col justify-center px-[8vw] shrink-0">
            <h2 className="text-[12vw] font-heading font-bold text-white/5 tracking-tighter leading-[0.8] mb-8">
              SELECTED<br/>WORK
            </h2>
            <div className="text-[#bdf205] tracking-[0.2em] text-sm font-bold w-full max-w-[300px]">
              SCROLL TO EXPLORE →
            </div>
          </div>

          {/* PROJECT 1: ANNADATA (Left Content / Right Visual) */}
          <div className="w-[100vw] h-full flex items-center justify-center shrink-0 px-[5vw]">
            <div className="grid grid-editorial w-full items-center">
              <div className="col-span-12 md:col-span-5 flex flex-col z-10" data-cursor="DRAG">
                <span className="text-8xl font-heading font-bold text-[#bdf205] leading-none mb-4">01</span>
                <h3 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase mb-8">Annadata</h3>
                <p className="text-lg text-white/70 max-w-md font-body">
                  A comprehensive AI agricultural advisor providing predictive data and actionable location-aware crop assistance.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest opacity-60">
                  <span>React</span><span>Node.js</span><span>MongoDB</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 mt-12 md:mt-0 relative aspect-[4/3] overflow-hidden rounded-sm group" data-cursor="EXPLORE">
                <img src="/projects/annadata.jpg" alt="Annadata" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
              </div>
            </div>
          </div>

          {/* PROJECT 2: QUIZERR (Right Content / Left Visual / Asymmetric) */}
          <div className="w-[100vw] h-full flex items-center justify-center shrink-0 px-[5vw]">
            <div className="grid grid-editorial w-full items-center">
              <div className="col-span-12 md:col-span-6 md:order-2 flex flex-col pl-[5vw] z-10" data-cursor="DRAG">
                <span className="text-8xl font-heading font-bold text-[#bdf205] leading-none mb-4 text-right">02</span>
                <h3 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase mb-8 text-right">Quizerr</h3>
                <p className="text-lg text-white/70 max-w-md font-body self-end text-right">
                  Online proctor-based quizzing platform integrating automated monitoring and seamless student assessment workflows.
                </p>
                <div className="mt-8 flex flex-wrap justify-end gap-4 text-xs font-mono uppercase tracking-widest opacity-60">
                  <span>Supabase</span><span>React</span><span>Automation</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:order-1 mt-12 md:mt-0 relative aspect-[3/4] overflow-hidden rounded-sm group" data-cursor="EXPLORE">
                <img src="/projects/quizerr.jpg" alt="Quizerr" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-60 group-hover:opacity-100 mix-blend-luminosity" />
              </div>
            </div>
          </div>

          {/* PROJECT 3: YESHA ENTERPRISES (Full Screen Impact) */}
          <div className="w-[100vw] h-full flex flex-col justify-end pb-[15vh] px-[5vw] shrink-0 relative group" data-cursor="EXPLORE">
            <div className="absolute inset-0 z-0 overflow-hidden">
               <img src="/projects/yesha.jpg" alt="Yesha" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-40 mix-blend-overlay" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8">
              <div>
                 <span className="text-8xl font-heading font-bold text-white/20 leading-none block mb-2">03</span>
                 <h3 className="text-5xl md:text-[8vw] font-heading font-bold tracking-tighter uppercase leading-[0.85]">Yesha<br/>Enterprises</h3>
              </div>
              <p className="text-xl max-w-sm text-right text-[#bdf205] font-body uppercase tracking-widest hidden md:block">
                Commercial Platform
              </p>
            </div>
          </div>

          {/* PROJECT 4 & 5: SPLIT INTERFACE */}
          <div className="w-[100vw] h-full flex items-center justify-center shrink-0 px-[5vw]">
            <div className="grid grid-editorial w-full h-[70vh] gap-8">
              
              <div className="col-span-12 md:col-span-5 flex flex-col justify-between border-t border-[#bdf205]/30 pt-8 group" data-cursor="DRAG">
                <div>
                  <span className="text-4xl font-heading font-bold text-[#bdf205] leading-none block mb-4">04</span>
                  <h3 className="text-4xl font-heading font-bold tracking-tighter uppercase mb-4">Yesha Billing</h3>
                  <p className="text-sm text-white/60 font-body">SQLite based local-first invoicing interface.</p>
                </div>
                <div className="w-full aspect-[4/3] bg-[#070707] border border-[#bdf205]/20 flex flex-col text-[#bdf205] font-mono text-xs p-6 overflow-hidden">
                  <div className="opacity-50 mb-2">SYSTEM.INIT()</div>
                  <div>&gt; Loading interface...</div>
                  <div>&gt; Rendering invoice dashboard...</div>
                  <div className="mt-auto animate-pulse">_</div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 flex flex-col justify-between border-t border-white/20 pt-8 group" data-cursor="EXPLORE">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-4xl font-heading font-bold text-white/20 leading-none block mb-4">05</span>
                    <h3 className="text-4xl font-heading font-bold tracking-tighter uppercase mb-4">E-Commerce</h3>
                    <p className="text-sm text-white/60 font-body">Full-scale digital storefront.</p>
                  </div>
                </div>
                <div className="w-full aspect-video bg-[#070707] overflow-hidden">
                  <img src="/projects/annadata.jpg" alt="E-Commerce" className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-80 transition-opacity duration-700" />
                </div>
              </div>

            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
