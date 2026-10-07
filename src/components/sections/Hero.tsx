import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-end pb-12 md:pb-24 px-4 md:px-8 max-w-[1400px] mx-auto relative pt-40">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 w-full z-10">
        
        {/* Massive Typography Block */}
        <div className="flex flex-col gap-2">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.32,0.72,0,1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel w-max mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
              Vanguard Software Engineer
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.1, duration: 1, ease: [0.32,0.72,0,1] }}
              className="text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter"
            >
              ARYAN
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.2, duration: 1, ease: [0.32,0.72,0,1] }}
              className="text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter text-stroke"
            >
              PANDEY
            </motion.h1>
          </div>
        </div>

        {/* Right Info & CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xs flex flex-col gap-8"
        >
          <p className="text-white/50 text-sm md:text-base leading-relaxed">
            Architecting $150k+ digital experiences. Specializing in high-performance React infrastructure, Node.js, and cinematic UI orchestration.
          </p>

          <a href="#work" className="group inline-flex items-center justify-between w-max gap-6 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#EAEAEA] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <span>Explore Index</span>
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-500" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
