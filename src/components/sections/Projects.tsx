import { motion } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Annadata",
    desc: "Predictive agricultural AI platform. Location-aware crop assistance scaling to enterprise grids.",
    tags: ["React", "Node", "Mongo"],
    span: "col-span-4 md:col-span-2 row-span-2",
  },
  {
    id: "02",
    title: "Quizerr",
    desc: "Automated proctoring infrastructure.",
    tags: ["React", "Supabase"],
    span: "col-span-4 md:col-span-2 row-span-1",
  },
  {
    id: "03",
    title: "Yesha Enterprise",
    desc: "High-volume commercial storefront architecture.",
    tags: ["Tailwind", "PostgreSQL"],
    span: "col-span-4 md:col-span-2 row-span-1",
  }
];

export default function Projects() {
  return (
    <>
      {projects.map((p, i) => (
        <motion.div 
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
          className={`bento-card ${p.span} group flex flex-col justify-between`}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white text-white hover:text-black">
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 text-gradient">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.desc}</p>
            
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="pill text-xs px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
