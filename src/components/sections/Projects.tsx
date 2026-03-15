import { motion } from 'framer-motion'
import { ExternalLink, Github, MonitorPlay } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: "Real-Time Multiplayer Drawing Game",
            tech: ["React", "Socket.io", "Node.js", "Express", "Tailwind", "Canvas"],
            features: [
                "Multiplayer rooms with shareable codes",
                "Live drawing and guessing",
                "Real-time chat",
                "Responsive canvas",
                "Session auto reconnect"
            ],
            description: "An interactive multiplayer drawing and guessing game built with WebSockets for real-time synchronization.",
            link: "https://scribble-game-beta.vercel.app",
            github: "https://github.com/aryan-devops/scribble-game"
        },
        {
            title: "Quizerr – Proctored Quiz Platform",
            tech: ["Next.js", "Firebase", "Vercel"],
            features: [
                "Secure exam interface",
                "Focus monitoring",
                "Auto-submit on violations",
                "Real-time results"
            ],
            description: "A secure examination platform that prevents cheating through browser focus monitoring and real-time proctoring.",
            link: "https://proctor-based-quiz.vercel.app",
            github: "https://github.com/aryan-devops/proctor-based-quiz"
        },
        {
            title: "ANNADATA – Smart Crop Advisor",
            tech: ["TypeScript", "Firebase", "Groq API", "Weather APIs"],
            features: [
                "GPS based location detection",
                "Real-time weather alerts",
                "AI-powered crop recommendations via Groq",
                "Season-based farming guidance",
                "Farming lifecycle tracking"
            ],
            description: "An intelligent agricultural advisor app using Groq AI and real-time weather data to provide location-based crop recommendations and optimize yields.",
            link: "https://annadataweb.vercel.app",
            github: "https://github.com/aryan-devops/annadata"
        },
        {
            title: "Guess The Number – Duel Mode",
            tech: ["Next.js", "Firebase", "Firestore", "TypeScript", "Tailwind"],
            features: [
                "Real-time multiplayer duels",
                "Anonymous Firebase auth",
                "Auto room matchmaking",
                "Live game state sync",
                "Responsive UI with animations"
            ],
            description: "A real-time multiplayer number guessing game where two players compete simultaneously to guess each other's numbers.",
            link: "https://guess-the-number2.vercel.app",
            github: "https://github.com/aryan-devops/guess-the-number"
        }
    ]

    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="mb-16 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                        <div className="p-3 clay-card text-purple-accent rounded-2xl">
                            <MonitorPlay size={28} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">Featured Projects</h2>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-accent to-electric-blue rounded-full mx-auto md:mx-0"></div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="clay-card overflow-hidden group flex flex-col h-full"
                    >
                        <div className="p-8 flex flex-col h-full relative z-10">
                            <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Key Features:</h4>
                                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                    {project.features.map(f => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/40 dark:bg-black/20 text-xs font-medium rounded-full text-slate-700 dark:text-slate-300 border border-white/20">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a href={project.link} className="clay-btn py-2 px-4 flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-purple-accent interactive">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href={project.github} className="clay-btn py-2 px-4 flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 interactive">
                                    <Github size={16} /> GitHub
                                </a>
                            </div>
                        </div>

                        {/* Hover Decorative background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
