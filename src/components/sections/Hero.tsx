import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full mt-12 md:mt-24">
        {/* Left - Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col leading-[0.85] tracking-tighter"
        >
          <h1 className="text-[12vw] md:text-[8vw] font-heading font-medium text-white uppercase m-0 p-0">
            Aryan
            <br />
            Pandey
          </h1>
        </motion.div>

        {/* Right - Role & Sub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:items-end text-left md:text-right pt-2 md:pt-4"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-medium text-white/90 uppercase tracking-tight mb-6 leading-tight">
            Full-Stack
            <br />
            Developer
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-xs text-balance">
            Building digital products that solve real problems.
          </p>
        </motion.div>
      </div>

      {/* Bottom Metadata Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full border-t border-subtle pt-8 mt-24 text-sm font-medium text-white/40 uppercase tracking-widest"
      >
        <div className="flex flex-col gap-2">
          <span className="text-white/20 text-[10px]">Location</span>
          <span className="text-white/80">Raipur, IN</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white/20 text-[10px]">Education</span>
          <span className="text-white/80">MCA Candidate</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white/20 text-[10px]">Status</span>
          <span className="flex items-center gap-2 text-white/80">
            <span className="w-1.5 h-1.5 bg-[#f04823] rounded-full animate-pulse"></span>
            Available
          </span>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <span className="text-white/20 text-[10px]">Scroll</span>
          <ArrowDown size={16} className="text-white/80 animate-bounce mt-1" />
        </div>
      </motion.div>
    </section>
  );
}
