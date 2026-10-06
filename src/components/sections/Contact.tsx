import { useState, useRef, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_emjk0mp'
const EMAILJS_TEMPLATE_ID = 'template_xwzkm6e'
const EMAILJS_PUBLIC_KEY = '08Ayd3JFK0XdS8PN6'

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
        <section id="contact" className="py-32 relative border-t border-white/5">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                
                {/* Left Side - Typography (Editorial Split) */}
                <div className="w-full lg:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                        className="sticky top-32"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">Connect</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-white mb-6 leading-tight">
                            Let's build <br /> something great.
                        </h2>
                        
                        <div className="mt-12 flex flex-col gap-6">
                            <div>
                                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Email</p>
                                <a href="mailto:aryan000pandey@gmail.com" className="text-lg text-white/80 hover:text-white transition-colors">
                                    aryan000pandey@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Location</p>
                                <p className="text-lg text-white/80">Raipur, Chhattisgarh</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-7/12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                        className="outer-shell"
                    >
                        <div className="inner-core">
                            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl px-6 py-4 outline-none transition-all text-white placeholder:text-white/20"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl px-6 py-4 outline-none transition-all text-white placeholder:text-white/20"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl px-6 py-4 outline-none transition-all text-white placeholder:text-white/20 resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-6 py-4 rounded-xl font-medium active:scale-[0.98] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                                                <ArrowUpRight size={14} strokeWidth={2} />
                                            </div>
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-white/80 bg-white/10 px-4 py-3 rounded-lg text-sm">
                                        <CheckCircle size={16} /> Message sent successfully.
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg text-sm">
                                        <AlertCircle size={16} /> Something went wrong.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
