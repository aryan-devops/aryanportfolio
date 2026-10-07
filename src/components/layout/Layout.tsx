import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30 selection:text-white">

      {/* Floating Island Nav */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 mix-blend-difference pointer-events-none w-full max-w-7xl px-4 md:px-8">
        <div className="flex justify-between items-center pointer-events-auto">
          <div className="text-xl font-bold uppercase tracking-widest cursor-pointer group">
            <span className="opacity-50 group-hover:opacity-100 transition-opacity duration-500 text-white">A</span><span className="text-white">.P</span>
          </div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden group hover:scale-[0.98] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <div className="w-5 h-[1px] bg-white absolute transition-all duration-500" style={{ transform: menuOpen ? 'rotate(45deg)' : 'translateY(-3px)' }} />
            <div className="w-5 h-[1px] bg-white absolute transition-all duration-500" style={{ transform: menuOpen ? 'rotate(-45deg)' : 'translateY(3px)' }} />
          </button>
        </div>
      </header>

      {/* Fullscreen Menu Modal */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.32,0.72,0,1] }}
            className="fixed inset-0 z-40 bg-[#050505]/90 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 text-5xl md:text-7xl font-bold uppercase">
              {['Work', 'Experience', 'About', 'Contact'].map((item, i) => (
                <div key={item} className="overflow-hidden">
                  <motion.a 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.32,0.72,0,1] }}
                    className="block text-gray-500 hover:text-white transition-all duration-500 cursor-pointer"
                  >
                    {item}
                  </motion.a>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">{children}</main>

      <footer className="py-12 px-4 md:px-8 border-t border-white/5 text-center text-sm text-gray-600 uppercase tracking-widest font-medium">
        © {new Date().getFullYear()} Aryan Pandey. All Rights Reserved.
      </footer>
    </div>
  );
}
