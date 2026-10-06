import { motion } from 'framer-motion'

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative border-t border-white/5">
            <div className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">Career</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-white mb-6">Experience</h2>
                </motion.div>
            </div>

            <div className="max-w-4xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    className="outer-shell"
                >
                    <div className="inner-core">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                            <div>
                                <h3 className="text-2xl font-heading font-medium text-white mb-2">Full Stack Developer</h3>
                                <div className="flex items-center gap-3">
                                    <h4 className="text-lg text-white/60">Exabyte Technologies</h4>
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    <span className="text-sm text-white/40 uppercase tracking-wider">Bilaspur, India</span>
                                </div>
                            </div>

                            <div className="inline-flex px-3 py-1 rounded-full border border-white/10 bg-white/5 w-max">
                                <span className="text-xs font-medium text-white/60">Dec 2021 – Dec 2022</span>
                            </div>
                        </div>

                        <div className="text-white/60 leading-relaxed font-light space-y-4">
                            <p>
                                Developed multiple dynamic websites for clients using modern frameworks and backend integrations. Contributed to building responsive user interfaces and robust APIs to ensure scalable and maintainable digital solutions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
