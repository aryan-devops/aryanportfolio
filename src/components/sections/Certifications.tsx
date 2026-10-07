import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const certs = [
    "Git Version Control",
    "Core PHP and Android",
    "Java",
    "Facial Recognition with Python",
    "HTML5 / CSS3 / JavaScript",
    "RESTful API Best Practices",
    "Interpretable Machine Learning",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      id="certifications"
      className="bento-card col-span-4 md:col-span-2 row-span-1"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl text-dim font-medium uppercase tracking-widest">Certifications</h3>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Award className="w-5 h-5 text-orange-400" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {certs.map((cert, i) => (
          <span 
            key={i} 
            className="text-sm px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/30 transition-colors cursor-default"
          >
            {cert}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
