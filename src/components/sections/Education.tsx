import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Education() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const edu = [
    {
      deg: "MCA",
      uni: "AMITY UNIVERSITY",
      loc: "RAIPUR",
      date: "AUG 2025 — JUN 2027",
    },
    {
      deg: "BCA",
      uni: "DISHA COLLEGE",
      loc: "KOTA",
      date: "OCT 2021 — MAR 2024",
    },
  ];

  return (
    <section
      ref={targetRef}
      id="education"
      className="py-48 px-6 md:px-12 max-w-7xl mx-auto relative border-t border-subtle"
    >
      <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-24">
        Education
      </h2>

      <div className="relative pl-8 md:pl-24">
        {/* Scroll-driven line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 overflow-hidden">
          <motion.div
            style={{ height: yLine }}
            className="w-full bg-[#f04823]"
          ></motion.div>
        </div>

        <div className="flex flex-col gap-32">
          {edu.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4 relative"
            >
              <span className="text-xl text-[#f04823] font-bold tracking-widest uppercase">
                {e.date}
              </span>
              <h3 className="text-6xl md:text-8xl font-heading font-medium text-white uppercase tracking-tight leading-none">
                {e.deg}
              </h3>
              <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white/60 mt-4">
                <span>{e.uni}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f04823]"></span>
                <span>{e.loc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
