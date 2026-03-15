import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'

type Cert = {
    name: string
    issuer: string
    date: string
    credentialId?: string
    credentialUrl?: string
    skills?: string[]
    accentColor: string
}

export default function Certifications() {
    const certs: Cert[] = [
        {
            name: "RESTful API Best Practices",
            issuer: "Infosys",
            date: "Oct 2025",
            skills: ["REST APIs", "API Development"],
            accentColor: "#ff6600"
        },
        {
            name: "Interpretable Machine Learning Applications: Part 1",
            issuer: "Coursera",
            date: "Oct 2025",
            credentialId: "7BZ32ZSC9TGE",
            accentColor: "#0056d2"
        },
        {
            name: "IBM Data Topology",
            issuer: "IBM",
            date: "Oct 2025",
            credentialId: "0T2DUIG0AQ72",
            skills: ["Data Architecture", "AI", "Cloud Computing"],
            accentColor: "#1f70c1"
        },
        {
            name: "Fundamentals of Digital Marketing",
            issuer: "Google Digital Garage",
            date: "Mar 2023",
            credentialId: "A28CHFJ2Z",
            skills: ["SEO", "Digital Marketing", "Google Analytics", "SEM"],
            accentColor: "#34a853"
        },
        {
            name: "Equity Research",
            issuer: "Jobaaj.com",
            date: "Feb 2023",
            accentColor: "#6c5ce7"
        },
        {
            name: "Web Designing Using XHTML CSS & Photoshop",
            issuer: "International Accreditation Forum Inc",
            date: "Mar 2019",
            credentialId: "C082018002",
            accentColor: "#e17055"
        },
        {
            name: "Android with Core PHP",
            issuer: "Rays IT Design World",
            date: "Apr 2021",
            credentialId: "RAYS21ACPO0874",
            accentColor: "#00b894"
        },
        {
            name: "Facial Recognition Application",
            issuer: "HCL GUVI",
            date: "Apr 2021",
            credentialId: "u6A6912B518L6QV228",
            accentColor: "#fd79a8"
        }
    ]

    return (
        <section id="certifications" className="py-24 relative z-10">
            <div className="mb-16 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                        <div className="p-3 clay-card text-purple-accent rounded-2xl">
                            <Award size={28} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">Certifications</h2>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-accent to-electric-blue rounded-full mx-auto md:mx-0"></div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {certs.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="clay-card flex flex-col overflow-hidden group"
                    >
                        {/* Top accent bar */}
                        <div
                            className="h-1.5 w-full"
                            style={{ backgroundColor: cert.accentColor }}
                        />

                        <div className="p-6 flex flex-col gap-4 flex-1">
                            {/* Icon + issuer */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: cert.accentColor + '20', color: cert.accentColor }}
                                >
                                    <Award size={20} />
                                </div>
                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{cert.issuer}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-bold text-slate-800 dark:text-white leading-snug">
                                {cert.name}
                            </h3>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                <Calendar size={13} />
                                <span>{cert.date}</span>
                            </div>

                            {/* Credential ID (if available) */}
                            {cert.credentialId && (
                                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono break-all">
                                    ID: {cert.credentialId}
                                </p>
                            )}

                            {/* Skills */}
                            {cert.skills && cert.skills.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {cert.skills.slice(0, 3).map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                                            style={{ backgroundColor: cert.accentColor + '15', color: cert.accentColor }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Show credential button */}
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                                    style={{ color: cert.accentColor }}
                                >
                                    <ExternalLink size={13} />
                                    Show credential
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
