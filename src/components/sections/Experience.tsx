import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="experience"
      className="bento-card col-span-4 md:col-span-2 row-span-1 flex flex-col justify-between"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl text-dim font-medium uppercase tracking-widest">Experience</h3>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-purple-400" />
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-2xl font-bold text-gradient">Exbyte Technology</h4>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="text-blue-400 font-medium text-sm">Web Developer Intern</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="text-dim text-sm">Mar — May 2025</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4 py-1">
          Developing scalable web solutions and optimizing backend performance. Collaborating with teams to deliver responsive enterprise applications.
        </p>
      </div>
    </motion.div>
  );
}
