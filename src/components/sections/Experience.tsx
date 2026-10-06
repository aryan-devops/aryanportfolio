import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      role: "WEB DEVELOPER INTERN",
      company: "EXBYTE TECHNOLOGY",
      period: "MARCH 2025 — MAY 2025",
      location: "BILASPUR",
      points: [
        "Developing scalable web solutions and optimizing backend performance.",
        "Collaborating with teams to deliver responsive enterprise applications.",
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="experience"
      className="min-h-screen py-32 px-6 md:px-12 flex flex-col justify-center relative border-t border-subtle"
    >
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full">
        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-24">
          Experience
        </h2>

        <div className="flex flex-col gap-32">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-xl text-[#f04823] font-bold tracking-widest uppercase">
                  {exp.period}
                </span>
                <h3 className="text-5xl md:text-7xl font-heading font-medium text-white uppercase tracking-tight leading-none">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white/60 mt-4">
                  <span>{exp.role}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f04823]"></span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-8 border-l-2 border-white/10 pl-8 ml-2">
                {exp.points.map((point, j) => (
                  <motion.p
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: j * 0.2 }}
                    className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl"
                  >
                    {point}
                  </motion.p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
