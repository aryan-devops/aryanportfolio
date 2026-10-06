import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-start py-32 relative">
            
            {/* Subtle Ethereal Glow */}
            <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-5xl z-10 flex flex-col gap-10">
                
                {/* Eyebrow Tag */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 w-max"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80">Full-Stack Developer</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    className="text-6xl md:text-[6rem] lg:text-[8rem] font-heading font-medium tracking-tight leading-[0.9] text-white"
                >
                    Aryan Pandey
                </motion.h1>

                {/* Subheading / Value Prop */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                    className="text-lg md:text-2xl text-white/50 max-w-2xl font-light tracking-wide text-balance leading-relaxed"
                >
                    Building scalable web experiences, real-time products, and intelligent applications.
                </motion.p>

                {/* CTA - Button-in-Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    className="flex flex-wrap gap-4 mt-8"
                >
                    <a href="#projects" className="group relative inline-flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full font-medium active:scale-[0.98] transition-all duration-500">
                        <span>View Work</span>
                        <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                            <ArrowUpRight size={16} strokeWidth={2} />
                        </div>
                    </a>
                    
                    <a href="#contact" className="group relative inline-flex items-center gap-4 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-full font-medium active:scale-[0.98] transition-all duration-500 hover:bg-white/10">
                        <span>Contact Me</span>
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
