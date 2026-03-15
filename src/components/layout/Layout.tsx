import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import CustomCursor from './CustomCursor'
import AnimatedBackground from './AnimatedBackground'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const [darkMode, setDarkMode] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        // Check local storage or system preference on mount
        const savedMode = localStorage.getItem('darkMode')
        if (savedMode) {
            setDarkMode(savedMode === 'true')
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(prefersDark)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkMode', 'true')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'false')
        }
    }, [darkMode])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <>
            <CustomCursor />
            <AnimatedBackground isDark={darkMode} />

            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="fixed top-0 w-full p-2 md:p-6 z-50">
                    <nav className="glass-panel mx-auto max-w-7xl rounded-2xl px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-lg transition-all duration-300">
                        <a href="#" className="text-xl md:text-2xl font-bold text-gradient font-heading tracking-tight">
                            Aryan<span className="text-slate-800 dark:text-white">.dev</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <ul className="flex gap-6 font-medium text-slate-600 dark:text-slate-300">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="hover:text-purple-accent dark:hover:text-electric-blue transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {/* Theme Toggle is hidden here since it's above */}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="clay-btn p-2.5 text-slate-600 dark:text-slate-300 hover:text-purple-accent dark:hover:text-electric-blue"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex md:hidden items-center gap-4">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="clay-btn p-2 text-slate-600 dark:text-slate-300"
                            >
                                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="clay-btn p-2 text-slate-600 dark:text-slate-300"
                            >
                                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="absolute top-[70px] left-2 right-2 glass-panel rounded-2xl p-6 flex flex-col gap-6 md:hidden origin-top animate-in fade-in slide-in-from-top-4 duration-300">
                            <ul className="flex flex-col gap-4 text-center text-lg font-medium text-slate-700 dark:text-slate-200">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block hover:text-purple-accent dark:hover:text-electric-blue"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </header>

                <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
                    {children}
                </main>

                <footer className="mt-auto py-8 glass-panel border-x-0 border-b-0 border-t border-white/20">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                            © 2026 Aryan Pandey. Built with React & creativity.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="clay-btn p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="clay-btn p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                                <Github size={20} />
                            </a>
                            <a href="mailto:aryan000pandey@gmail.com" className="clay-btn p-2 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
