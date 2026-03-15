import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            })
        }

        // Simple resize observer
        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                })
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const technologies = [
        // Frontend
        { name: "React", color: "#61DAFB", size: 115 },
        { name: "Next.js", color: "#888888", size: 110 },
        { name: "TypeScript", color: "#3178C6", size: 105 },
        { name: "JavaScript", color: "#F7DF1E", size: 110 },
        { name: "Tailwind", color: "#38BDF8", size: 100 },
        { name: "HTML5", color: "#E34F26", size: 95 },
        { name: "CSS3", color: "#1572B6", size: 90 },
        // Backend
        { name: "Node.js", color: "#339933", size: 110 },
        { name: "Express", color: "#888888", size: 100 },
        { name: "Python", color: "#3776AB", size: 100 },
        { name: "REST API", color: "#FF6B6B", size: 95 },
        { name: "Groq AI", color: "#F55036", size: 100 },
        // Database & Cloud
        { name: "Firebase", color: "#FFCA28", size: 105 },
        { name: "MongoDB", color: "#47A248", size: 105 },
        { name: "SQL", color: "#4479A1", size: 90 },
        // Tools
        { name: "Git", color: "#F05032", size: 90 },
        { name: "Socket.io", color: "#010101", size: 95 },
        { name: "Vercel", color: "#000000", size: 90 },
    ]

    return (
        <section id="tech-stack" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="mb-16 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                        <div className="p-3 clay-card text-purple-accent rounded-2xl">
                            <Cpu size={28} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">Interactive Tech Stack</h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 mb-4 mx-auto md:mx-0 max-w-lg">
                        Drag the bubbles around! Built with Framer Motion.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-accent to-electric-blue rounded-full mx-auto md:mx-0"></div>
                </motion.div>
            </div>

            <div
                ref={containerRef}
                className="clay-card hover:shadow-xl transition-shadow duration-500 w-full h-[500px] md:h-[700px] relative rounded-3xl overflow-hidden glass-panel"
            >
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none"></div>

                {dimensions.width > 0 && technologies.map((tech, i) => {
                    const isMobile = dimensions.width < 768
                    const size = isMobile ? tech.size * 0.6 : tech.size

                    // Generate deterministic random-looking initial positions within bounds
                    const initialX = Math.abs(Math.sin(i * 1.5)) * (dimensions.width - size - 40) + 20
                    const initialY = Math.abs(Math.cos(i * 2)) * (dimensions.height - size - 40) + 20

                    return (
                        <motion.div
                            key={tech.name}
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.2}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                            initial={{ x: dimensions.width / 2 - size / 2, y: dimensions.height / 2 - size / 2, opacity: 0, scale: 0 }}
                            whileInView={{ x: initialX, y: initialY, opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: i * 0.1,
                                opacity: { duration: 0.5 }
                            }}
                            whileHover={{ scale: 1.1, zIndex: 50 }}
                            whileDrag={{ scale: 1.2, zIndex: 100, cursor: 'grabbing' }}
                            className="absolute cursor-grab rounded-full flex items-center justify-center font-bold text-center p-2 shadow-xl border-2 border-white/20 interactive"
                            style={{
                                width: size,
                                height: size,
                                background: `linear-gradient(135deg, ${tech.color}40, ${tech.color}10)`,
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                                boxShadow: `0 8px 32px 0 ${tech.color}30, inset 0 0 10px ${tech.color}20`
                            }}
                        >
                            <span className="text-sm md:text-base text-slate-900 dark:text-white drop-shadow-sm font-extrabold z-10 pointer-events-none">
                                {tech.name}
                            </span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
