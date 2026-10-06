import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-32">
        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
          Selected Work
        </h2>
        <div className="w-full h-px bg-white/10"></div>
      </div>

      <div className="flex flex-col gap-40">
        {/* 01: ANNADATA - Full width / Large Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 group cursor-pointer"
        >
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#141414] overflow-hidden border border-subtle relative">
            <img
              src="/projects/annadata.jpg"
              alt="Annadata Interface"
              className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <span className="text-[120px] font-heading font-medium leading-none text-white/20 select-none">
                01
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex flex-col gap-4">
              <h3 className="text-3xl md:text-5xl font-heading font-medium uppercase text-white tracking-tight">
                Annadata
              </h3>
              <p className="text-sm font-bold text-[#f04823] uppercase tracking-widest">
                AgriTech Web Application
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col justify-between items-start gap-8">
              <p className="text-lg text-white/60 text-balance leading-relaxed">
                Helping farmers with intelligent crop-related information and
                location-aware agricultural assistance. Designed to bridge the
                gap between deep agricultural data and practical field
                operations.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Location API</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 02: QUIZERR - Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 group cursor-pointer items-center"
        >
          <div className="md:col-span-7 w-full aspect-[4/3] bg-[#141414] overflow-hidden border border-subtle relative order-2 md:order-1">
            <img
              src="/projects/quizerr.jpg"
              alt="Quizerr Dashboard"
              className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
            />
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 order-1 md:order-2">
            <span className="text-6xl font-heading font-medium leading-none text-white/10 select-none">
              02
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-medium uppercase text-white tracking-tight">
              Quizerr
            </h3>
            <p className="text-sm font-bold text-[#f04823] uppercase tracking-widest">
              Proctoring Platform
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Online assessment platform featuring focus detection, head
              tracking, and violation monitoring. Built to enforce integrity in
              remote testing environments using real-time analytics.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/40 mt-4">
              <span>React</span>
              <span>Express</span>
              <span>WebRTC</span>
              <span>Face-API.js</span>
            </div>
          </div>
        </motion.div>

        {/* 03: YESHA ENTERPRISES - Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 group cursor-pointer items-center"
        >
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="text-6xl font-heading font-medium leading-none text-white/10 select-none">
              03
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-medium uppercase text-white tracking-tight">
              Yesha Enterprises
            </h3>
            <p className="text-sm font-bold text-[#f04823] uppercase tracking-widest">
              Business Website
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              Professional web presence developed for a commercial biofloc fish
              farming company. Engineered for high SEO performance, responsive
              product presentation, and clear business lead conversion.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/40 mt-4">
              <span>Next.js</span>
              <span>Tailwind CSS</span>
              <span>Framer Motion</span>
            </div>
          </div>
          <div className="md:col-span-7 w-full aspect-[4/3] bg-[#141414] overflow-hidden border border-subtle relative">
            <img
              src="/projects/yesha.jpg"
              alt="Yesha Enterprises Website"
              className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
            />
          </div>
        </motion.div>

        {/* 04: YESHA BILLING SOFTWARE - Compact Technical Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full border border-subtle bg-[#141414] p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-30"></div>

          <div className="flex flex-col gap-6 relative z-10 max-w-2xl">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-heading font-medium leading-none text-[#f04823] select-none">
                04
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-medium uppercase text-white tracking-tight">
                Yesha Billing Software
              </h3>
            </div>
            <p className="text-base text-white/60 leading-relaxed max-w-xl">
              Practical business billing and invoicing software developed for
              active day-to-day operations. Focused strictly on data management,
              workflow speed, and operational reliability rather than flashy UI.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-white/40">
              <span>Electron</span>
              <span>React</span>
              <span>SQLite</span>
            </div>
          </div>

          <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 shrink-0">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
