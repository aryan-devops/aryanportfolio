import { motion } from 'framer-motion'

export default function TechStack() {
    const categories = [
        {
            title: "Frontend",
            techs: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]
        },
        {
            title: "Backend",
            techs: ["Node.js", "Express.js", "REST APIs"]
        },
        {
            title: "Database",
            techs: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"]
        },
        {
            title: "AI / ML",
            techs: ["Python", "TensorFlow", "Groq AI", "Model Experimentation"]
        },
        {
            title: "DevOps & Cloud",
            techs: ["Git", "GitHub", "Docker", "Vercel"]
        }
    ]

    return (
        <section id="tech-stack" className="py-32 relative border-t border-white/5">
            <div className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">Capabilities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-white mb-6">Technology Stack</h2>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: [0.32, 0.72, 0, 1] }}
                        className="outer-shell flex flex-col"
                    >
                        <div className="inner-core flex-1 flex flex-col gap-6">
                            <h3 className="text-xl font-heading font-medium text-white/80 pb-4 border-b border-white/5">
                                {category.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {category.techs.map(tech => (
                                    <li key={tech} className="text-white/60 font-light flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
