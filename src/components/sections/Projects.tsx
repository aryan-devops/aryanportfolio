import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: "StaySphere",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            description: "A comprehensive hotel booking and management platform with real-time availability and dynamic pricing.",
            link: "#",
            github: "#",
            span: "col-span-1 md:col-span-8 row-span-2"
        },
        {
            title: "ANNADATA",
            tech: ["TypeScript", "Groq AI", "Weather APIs"],
            description: "Intelligent agricultural advisor using real-time weather and AI for location-based crop recommendations.",
            link: "https://annadataweb.vercel.app",
            github: "https://github.com/aryan-devops/annadata",
            span: "col-span-1 md:col-span-4"
        },
        {
            title: "VoxShield",
            tech: ["Python", "TensorFlow", "React"],
            description: "AI-driven voice authentication system preventing unauthorized access via voice cloning and deepfakes.",
            link: "#",
            github: "#",
            span: "col-span-1 md:col-span-4"
        },
        {
            title: "Quizerr",
            tech: ["Next.js", "Firebase", "Vercel"],
            description: "Proctored examination platform preventing cheating through browser focus monitoring.",
            link: "https://proctor-based-quiz.vercel.app",
            github: "https://github.com/aryan-devops/proctor-based-quiz",
            span: "col-span-1 md:col-span-12"
        }
    ]

    return (
        <section id="projects" className="py-32 relative">
            
            <div className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">Selected Work</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight text-white mb-6">Featured Projects</h2>
                </motion.div>
            </div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                        className={`${project.span} outer-shell group`}
                    >
                        <div className="inner-core h-full min-h-[300px] flex flex-col justify-between">
                            
                            {/* Decorative Grid Background in Core */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 z-0"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-heading font-medium mb-4 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-white/50 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 text-[11px] font-medium tracking-wide uppercase rounded-full text-white/70 border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-3">
                                    <a href={project.github} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300">
                                        <Github size={16} strokeWidth={1.5} />
                                    </a>
                                    <a href={project.link} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-all duration-300">
                                        <ArrowUpRight size={16} strokeWidth={2} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
