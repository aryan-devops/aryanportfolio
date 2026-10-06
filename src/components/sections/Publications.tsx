import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Publications() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const publications = [
    {
      num: "01",
      title: "AI-DRIVEN CYBERSECURITY SOLUTIONS FOR REAL-TIME THREAT DETECTION",
      journal: "IRJMETS",
    },
    {
      num: "02",
      title: "MACHINE LEARNING & DEEP LEARNING FOR MEDICAL IMAGE ANALYSIS",
      journal: "IJSREM",
      date: "APRIL 2026",
    },
  ];

  return (
    <section
      ref={targetRef}
      id="publications"
      className="py-48 bg-[#0a0a0a] border-t border-subtle overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-32">
          Publications
        </h2>

        <div className="flex flex-col gap-48">
          {publications.map((pub, i) => {
            const y = useTransform(
              scrollYProgress,
              [i * 0.3, i * 0.3 + 0.4],
              [150, -50],
            );

            return (
              <motion.div
                key={pub.num}
                style={{ y }}
                className="flex flex-col md:flex-row gap-12 md:gap-24 relative"
              >
                <span className="text-8xl md:text-[12rem] font-heading font-medium text-[#141414] leading-none absolute -top-12 md:-top-24 -left-12 -z-10 select-none">
                  {pub.num}
                </span>
                <div className="flex flex-col gap-8 z-10 w-full">
                  <h3 className="text-4xl md:text-7xl font-heading font-medium text-white uppercase tracking-tighter leading-[0.9] max-w-5xl">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-[#f04823]">
                    <span>{pub.journal}</span>
                    {pub.date && (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                        <span className="text-white/40">{pub.date}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
