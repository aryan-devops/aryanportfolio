import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      id="education"
      className="bento-card col-span-4 md:col-span-2 row-span-1"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl text-dim font-medium uppercase tracking-widest">Education</h3>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-yellow-400" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative pl-6 border-l-2 border-white/10">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1" />
          <h4 className="text-xl font-bold text-white">MCA</h4>
          <p className="text-gray-400 text-sm">Amity University, Raipur</p>
          <span className="text-dim text-xs mt-1 block">2025 — 2027</span>
        </div>

        <div className="relative pl-6 border-l-2 border-white/10">
          <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-1" />
          <h4 className="text-xl font-bold text-white/60">BCA</h4>
          <p className="text-gray-500 text-sm">Disha College, Kota</p>
          <span className="text-white/20 text-xs mt-1 block">2021 — 2024</span>
        </div>
      </div>
    </motion.div>
  );
}
