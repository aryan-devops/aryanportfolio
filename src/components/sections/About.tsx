import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

export default function About() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "HTML5", "CSS3"],
            delay: 0
        },
        {
            title: "Backend & AI",
            skills: ["Node.js", "Express", "Python", "REST API", "Groq AI", "Socket.io"],
            delay: 0.2
        },
        {
            title: "Database & Tools",
            skills: ["Firebase", "MongoDB", "SQL", "Git", "Vercel"],
            delay: 0.4
        }
    ]

    return (
        <section id="about" className="py-24 relative z-10">
            <div className="mb-16 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                        <div className="p-3 clay-card text-purple-accent rounded-2xl">
                            <Terminal size={28} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">About Me</h2>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-accent to-electric-blue rounded-full mx-auto md:mx-0"></div>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <div className="clay-card p-8 md:p-12 h-full flex items-center">
                        <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                            <strong className="text-2xl block mb-4 text-slate-900 dark:text-white">Hey, I'm Aryan 👋</strong>
                            I'm a Full-Stack Developer who genuinely loves building things for the web — from real-time multiplayer games to AI-powered tools that actually solve problems.
                            <br /><br />
                            I care a lot about the details — clean code, smooth UX, and making sure what I build actually <em>feels</em> good to use. Whether it's a snappy frontend or a solid backend, I try to bring the same energy to every layer of the stack.
                            <br /><br />
                            I'm always picking up something new — right now I'm exploring AI integrations and modern data architectures. If it's an interesting problem, I'm in.
                        </p>
                    </div>
                </motion.div>

                <div className="flex-1 flex flex-col gap-8">
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: category.delay }}
                            className="clay-card p-8"
                        >
                            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-3">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="clay-btn px-4 py-2 font-medium text-purple-accent dark:text-electric-blue text-sm interactive"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
