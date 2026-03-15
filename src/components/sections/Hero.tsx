import { motion, type Variants } from 'framer-motion'
import { MapPin, Download } from 'lucide-react'

// Simple SVG Icons
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
)
const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
)

export default function Hero() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    }

    // Floating animation
    const floatAnim = (delay: number): any => ({
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        }
    })

    return (
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center py-20 relative">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center"
            >
                <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10 w-full relative">

                    <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 clay-card w-max mx-auto md:mx-0">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-accent"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide">Available for new opportunities</span>
                    </motion.div>

                    <motion.h1 variants={item} className="text-5xl md:text-8xl font-black font-heading tracking-tight leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Aryan Pandey</span>
                    </motion.h1>

                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-center md:items-start text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-2">
                            <CodeIcon />
                            <span>Full Stack Developer</span>
                        </div>
                        <div className="hidden sm:block text-slate-300 dark:text-slate-600">•</div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <MapPin size={20} />
                            <span>Raipur, Chhattisgarh, India</span>
                        </div>
                    </motion.div>

                    <motion.p variants={item} className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
                        Building scalable web applications and interactive digital experiences with modern technologies.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
                        <a href="#projects" className="clay-btn px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-white bg-gradient-to-r from-purple-accent to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
                            View Projects
                        </a>
                        <a href="#contact" className="clay-btn px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-slate-800 dark:text-white">
                            Contact Me
                        </a>
                        <a href="/resume.pdf" target="_blank" className="clay-btn px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold flex items-center gap-2 group">
                            <span>Resume</span>
                            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Right side floating elements */}
                <motion.div variants={item} className="flex-1 w-full h-[400px] relative hidden lg:block">
                    <motion.div
                        animate={floatAnim(0)}
                        className="absolute top-10 right-20 w-48 h-48 clay-card flex flex-col items-center justify-center gap-4 rotate-6 z-20"
                    >
                        <div className="p-4 rounded-full bg-[#61DAFB]/20 text-[#61DAFB]">
                            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
                        </div>
                        <span className="font-bold text-lg">React</span>
                    </motion.div>

                    <motion.div
                        animate={floatAnim(1.5)}
                        className="absolute top-48 left-10 w-40 h-40 clay-card flex flex-col items-center justify-center gap-3 -rotate-12 z-10 glass-panel"
                        style={{ backdropFilter: 'blur(10px)' }}
                    >
                        <div className="p-3 rounded-full bg-[#339933]/20 text-[#339933]">
                            <DatabaseIcon />
                        </div>
                        <span className="font-bold">Node.js</span>
                    </motion.div>

                    <motion.div
                        animate={floatAnim(0.8)}
                        className="absolute bottom-10 right-10 w-36 h-36 clay-card flex flex-col items-center justify-center gap-3 rotate-12 z-30"
                    >
                        <div className="p-3 rounded-full bg-[#FFCA28]/20 text-[#FFCA28]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M11.96 2.6L1.51 16.59l8.65-2.61l1.8-11.38zM22.5 16.59L12.04 2.6l-1.8 11.38l8.65 2.61c.42.13.88-.13 1.01-.55c.07-.22.06-.45-.04-.65l2.64 1.2z" /></svg>
                        </div>
                        <span className="font-bold">Firebase</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
