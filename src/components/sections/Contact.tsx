import { useState, useRef, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Linkedin, Github, Globe, CheckCircle, AlertCircle, Loader2, Instagram } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────
// 🔑  REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
//     Sign up at https://www.emailjs.com (free)
//     → Email Services → Add Gmail → copy Service ID
//     → Email Templates → create template → copy Template ID
//     → Account → API Keys → copy Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_emjk0mp'   // ✅ Service ID (reconnected with correct scopes)
const EMAILJS_TEMPLATE_ID = 'template_xwzkm6e'  // ✅ Template ID
const EMAILJS_PUBLIC_KEY = '08Ayd3JFK0XdS8PN6'  // ✅ Public Key

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<Status>('idle')
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) return

        setStatus('sending')
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                { publicKey: EMAILJS_PUBLIC_KEY }
            )
            setStatus('success')
            setForm({ name: '', email: '', message: '' })
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="mb-16 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
                        <div className="p-3 clay-card text-purple-accent rounded-2xl">
                            <Send size={28} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">Get In Touch</h2>
                    </div>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-accent to-electric-blue rounded-full mx-auto md:mx-0"></div>
                </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* ──── FORM ──── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1"
                >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="clay-card p-8 md:p-10 flex flex-col gap-6"
                    >
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2 tracking-wide">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"            // ← EmailJS reads this
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                                className="w-full bg-white/50 dark:bg-black/20 border-2 border-transparent focus:border-purple-accent/50 rounded-2xl px-6 py-4 outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2 tracking-wide">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"           // ← EmailJS reads this
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                                className="w-full bg-white/50 dark:bg-black/20 border-2 border-transparent focus:border-purple-accent/50 rounded-2xl px-6 py-4 outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-400"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-2 tracking-wide">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"         // ← EmailJS reads this
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Say hello…"
                                required
                                className="w-full bg-white/50 dark:bg-black/20 border-2 border-transparent focus:border-purple-accent/50 rounded-2xl px-6 py-4 outline-none transition-all text-slate-800 dark:text-white placeholder:text-slate-400 resize-none"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="clay-btn py-4 px-8 w-full font-bold text-white bg-gradient-to-r from-purple-accent to-blue-500 shadow-lg group flex justify-center items-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {/* Status messages */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 text-green-600 dark:text-green-400 font-semibold text-sm"
                            >
                                <CheckCircle size={20} />
                                Message sent! I'll get back to you soon.
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 text-red-500 font-semibold text-sm"
                            >
                                <AlertCircle size={20} />
                                Something went wrong. Please try again or email me directly.
                            </motion.div>
                        )}
                    </form>
                </motion.div>

                {/* ──── CONTACT INFO ──── */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 flex flex-col gap-8"
                >
                    <div className="clay-card p-8 md:p-10 flex-1 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Contact Information</h3>

                        <div className="flex flex-col gap-8">
                            <a href="mailto:aryan000pandey@gmail.com" className="flex items-center gap-6 group">
                                <div className="p-4 rounded-xl bg-purple-accent/10 text-purple-accent group-hover:bg-purple-accent group-hover:text-white transition-colors duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                    <p className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 break-all">aryan000pandey@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919977228924" className="flex items-center gap-6 group">
                                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                                    <p className="text-base font-medium text-slate-800 dark:text-slate-200">+91 9977228924</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-xl bg-green-500/10 text-green-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-base font-medium text-slate-800 dark:text-slate-200">Raipur, Chhattisgarh</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex gap-4">
                            <a href="https://www.linkedin.com/in/aryan-pandey-4581921a0/" target="_blank" rel="noreferrer" className="clay-btn p-4 text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] interactive">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/aryan-devops" target="_blank" rel="noreferrer" className="clay-btn p-4 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white interactive">
                                <Github size={24} />
                            </a>
                            <a href="https://www.instagram.com/aryan.devops" target="_blank" rel="noreferrer" className="clay-btn p-4 text-slate-600 dark:text-slate-300 hover:text-[#E1306C] dark:hover:text-[#E1306C] interactive">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="clay-btn p-4 text-slate-600 dark:text-slate-300 hover:text-electric-blue interactive">
                                <Globe size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
