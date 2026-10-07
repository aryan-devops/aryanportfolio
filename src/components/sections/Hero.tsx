import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bento-card col-span-4 md:col-span-2 row-span-2 flex flex-col justify-between"
    >
      <div>
        <div className="inline-flex items-center gap-2 pill mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Available for work</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-gradient">
          Aryan Pandey
        </h1>
        <h2 className="text-xl md:text-2xl text-dim mb-6">
          Vanguard Software Engineer <br/>
          <span className="text-gradient-accent text-sm md:text-base block mt-2">Architecting $150k+ digital experiences</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
          Specializing in high-performance React infrastructure, Node.js, and cinematic UI orchestration. Building the future of the web, one pixel at a time.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a href="#projects" className="group inline-flex items-center justify-between gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-blue-50 transition-colors">
          <span>Explore Work</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <div className="flex items-center gap-3">
          <a href="https://github.com/aryanpandey" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
            <Github className="w-4 h-4 text-white" />
          </a>
          <a href="https://linkedin.com/in/aryanpandey" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
            <Linkedin className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
