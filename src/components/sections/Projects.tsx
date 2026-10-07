import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Annadata",
    desc: "Predictive agricultural AI platform. Location-aware crop assistance scaling to enterprise grids.",
    tags: ["React", "Node", "Mongo"],
    span: "col-span-1 md:col-span-8 row-span-2",
    img: "/projects/annadata.jpg"
  },
  {
    id: "02",
    title: "Quizerr",
    desc: "Automated proctoring infrastructure.",
    tags: ["React", "Supabase"],
    span: "col-span-1 md:col-span-4",
    img: "/projects/quizerr.jpg"
  },
  {
    id: "03",
    title: "Yesha Enterprise",
    desc: "High-volume commercial storefront architecture.",
    tags: ["Tailwind", "PostgreSQL"],
    span: "col-span-1 md:col-span-4",
    img: "/projects/yesha.jpg"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 md:py-48 px-4 md:px-8 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.32,0.72,0,1] }}
        className="mb-16 md:mb-24 flex justify-between items-end"
      >
        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter">Selected<br/>Index</h2>
        <span className="text-white/30 font-mono text-sm">( 2025 )</span>
      </motion.div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.32,0.72,0,1] }}
            className={`group ${p.span}`}
          >
            {/* The Outer Shell (Double-Bezel Architecture) */}
            <div className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10 h-full flex flex-col hover:border-white/20 transition-colors duration-700">
              {/* The Inner Core */}
              <div className="flex-grow rounded-[calc(2rem-0.375rem)] bg-[#0A0A0A] overflow-hidden relative flex flex-col p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                
                <div className="flex justify-between items-start mb-12 z-10">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-mono text-xs text-white/50 bg-white/5 backdrop-blur-md">
                    {p.id}
                  </div>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-auto z-10 relative">
                  <h3 className="text-3xl md:text-5xl font-['Clash_Display'] font-bold mb-4 uppercase tracking-tighter mix-blend-difference">{p.title}</h3>
                  <p className="text-white/50 text-sm md:text-base max-w-sm leading-relaxed mb-8 mix-blend-difference">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/50 bg-black/50 backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Background Image Hook */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
