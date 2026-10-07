import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      num: "01",
      title: "AI-DRIVEN CYBERSECURITY SOLUTIONS FOR REAL-TIME THREAT DETECTION",
      journal: "IRJMETS",
      date: null,
    },
    {
      num: "02",
      title: "MACHINE LEARNING & DEEP LEARNING FOR MEDICAL IMAGE ANALYSIS",
      journal: "IJSREM",
      date: "APRIL 2026",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="publications"
      className="bento-card col-span-4 md:col-span-2 row-span-1"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl text-dim font-medium uppercase tracking-widest">Publications</h3>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-red-400" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {publications.map((pub) => (
          <div key={pub.num} className="flex gap-4 group">
            <span className="text-lg font-bold text-dim group-hover:text-white transition-colors">
              {pub.num}
            </span>
            <div className="flex flex-col">
              <h4 className="text-sm font-bold leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                {pub.title}
              </h4>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-dim mt-2">
                <span className="text-gray-400">{pub.journal}</span>
                {pub.date && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{pub.date}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
