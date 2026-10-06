import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-32 relative border-t border-white/5">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                
                {/* Left Side - Typography (Editorial Split) */}
                <div className="w-full md:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                        className="sticky top-32"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">Engineering Approach</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-white mb-6 leading-tight">
                            Building with <br /> Intent & Precision
                        </h2>
                    </motion.div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-7/12 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                        className="text-lg md:text-xl text-white/60 leading-relaxed font-light space-y-6"
                    >
                        <p>
                            I'm a Full-Stack Developer focused on creating digital experiences that are robust under the hood and beautiful on the surface. 
                        </p>
                        <p>
                            I approach engineering as a craft. Whether I'm designing a real-time multiplayer backend or composing a fluid frontend interface, my goal is to deliver software that feels intentional, performs effortlessly, and solves actual problems.
                        </p>
                        <p>
                            Currently, I am deeply exploring AI integrations, modern data architectures, and high-performance React patterns. I thrive in environments that challenge my problem-solving abilities and require a comprehensive understanding of the entire stack.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
                        className="outer-shell mt-4"
                    >
                        <div className="inner-core grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-2">Focus</h4>
                                <p className="text-white">Full-Stack Development</p>
                            </div>
                            <div>
                                <h4 className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-2">Location</h4>
                                <p className="text-white">Raipur, India</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
            </div>
        </section>
    )
}
