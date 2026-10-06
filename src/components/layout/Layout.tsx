import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Remove dark mode as Ethereal Glass is inherently dark
    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, [])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20">
            {/* The "Fluid Island" Nav */}
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className="pointer-events-auto bg-[#111]/80 backdrop-blur-2xl border border-white/5 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <a href="#" className="text-xl font-bold font-heading tracking-tight text-white hover:text-white/80 transition-colors">
                        Aryan<span className="text-white/40">.dev</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 ml-auto">
                        <ul className="flex gap-6 text-sm font-medium text-white/60">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center ml-auto">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-white/80 hover:text-white transition-colors relative w-10 h-10 flex items-center justify-center"
                        >
                            <span className={`absolute block w-5 h-[1.5px] bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                            <span className={`absolute block w-5 h-[1.5px] bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Expanded Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl flex flex-col justify-center px-8 pt-20 pb-8"
                    >
                        <ul className="flex flex-col gap-6 text-3xl font-heading font-medium tracking-tight">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block hover:text-white/60 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-1 pt-32 pb-24 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
                {children}
            </main>

            <footer className="py-12 border-t border-white/5 mt-auto">
                <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm font-medium">
                        © {new Date().getFullYear()} Aryan Pandey. Ethereal build.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                            <Linkedin size={18} strokeWidth={1.5} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                            <Github size={18} strokeWidth={1.5} />
                        </a>
                        <a href="mailto:aryan000pandey@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                            <Mail size={18} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
