import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative z-10">
            <div className="mb-16 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                        <div className="p-3 clay-card text-purple-accent rounded-2xl">
                            <Briefcase size={28} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">Experience</h2>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-accent to-electric-blue rounded-full mx-auto md:mx-0"></div>
                </motion.div>
            </div>

            <div className="max-w-4xl border-l-2 border-purple-accent/30 ml-4 md:ml-6 pl-8 md:pl-12 relative">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full bg-purple-accent border-4 border-[#f0f4f8] dark:border-[#0f172a] shadow-md z-10"></div>

                    <div className="clay-card p-8 md:p-10 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-accent to-electric-blue opacity-50"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Full Stack Developer</h3>
                                <h4 className="text-lg text-purple-accent font-medium">Exabyte Technologies</h4>
                            </div>

                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-white/40 dark:bg-black/20 px-4 py-2 rounded-full text-sm font-medium w-max">
                                <Calendar size={16} />
                                <span>Dec 2021 – Dec 2022</span>
                            </div>
                        </div>

                        <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm uppercase tracking-wider font-semibold">
                            Bilaspur, India
                        </p>

                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            Developed multiple dynamic websites for clients using different frameworks, backend integrations, and user-interactive features. Contributed to building responsive user interfaces and robust APIs to ensure scalable solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
