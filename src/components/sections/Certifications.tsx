import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

type Cert = {
    name: string
    issuer: string
    date: string
    credentialUrl?: string
}

export default function Certifications() {
    const certs: Cert[] = [
        { name: "RESTful API Best Practices", issuer: "Infosys", date: "Oct 2025" },
        { name: "Interpretable Machine Learning Applications: Part 1", issuer: "Coursera", date: "Oct 2025" },
        { name: "IBM Data Topology", issuer: "IBM", date: "Oct 2025" },
        { name: "Fundamentals of Digital Marketing", issuer: "Google Digital Garage", date: "Mar 2023" },
        { name: "Equity Research", issuer: "Jobaaj.com", date: "Feb 2023" },
        { name: "Web Designing Using XHTML CSS & Photoshop", issuer: "International Accreditation Forum Inc", date: "Mar 2019" },
        { name: "Android with Core PHP", issuer: "Rays IT Design World", date: "Apr 2021" },
        { name: "Facial Recognition Application", issuer: "HCL GUVI", date: "Apr 2021" }
    ]

    return (
        <section id="certifications" className="py-32 relative border-t border-white/5">
            <div className="mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">Qualifications</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-white mb-6">Certifications</h2>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certs.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                        className="outer-shell group"
                    >
                        <div className="inner-core h-full flex flex-col justify-between p-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                                        <Award size={14} />
                                    </div>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{cert.issuer}</span>
                                </div>
                                <h3 className="text-sm font-medium text-white leading-snug mb-2">
                                    {cert.name}
                                </h3>
                            </div>
                            
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                                <span className="text-[11px] text-white/40 font-medium">{cert.date}</span>
                                {cert.credentialUrl && (
                                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
