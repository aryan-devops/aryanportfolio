import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
    const education = [
        {
            degree: "MCA - Master of Computer Applications",
            institution: "Amity University Raipur",
            period: "2025 – 2027",
            achievement: null
        },
        {
            degree: "BCA - Bachelor of Computer Applications",
            institution: "Disha College",
            period: "2021 – 2024",
            achievement: "Awarded Mr. Fresher"
        }
    ]

    return (
        <section id="education" className="py-24 relative z-10">
            <div className="mb-16 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                        <div className="p-3 clay-card text-purple-accent rounded-2xl">
                            <GraduationCap size={28} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">Education</h2>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-accent to-electric-blue rounded-full mx-auto md:mx-0"></div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                {education.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="clay-card p-8 flex flex-col justify-center border-t-4 border-electric-blue"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                            {edu.degree}
                        </h3>
                        <h4 className="text-lg text-purple-accent dark:text-[#b388ff] font-medium mb-4">
                            {edu.institution}
                        </h4>

                        <div className="inline-block bg-slate-200/50 dark:bg-slate-800 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 w-max mb-6">
                            {edu.period}
                        </div>

                        {edu.achievement && (
                            <div className="flex items-center gap-3 mt-auto p-4 bg-white/40 dark:bg-black/20 rounded-xl border border-white/20">
                                <div className="text-yellow-500">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Achievement</p>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{edu.achievement}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
