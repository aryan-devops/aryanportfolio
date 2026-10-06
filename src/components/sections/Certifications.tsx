import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Certifications() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const certs = [
    "Git Version Control",
    "Core PHP and Android",
    "Java",
    "Facial Recognition with Python",
    "HTML5 / CSS3 / JavaScript",
    "RESTful API Best Practices",
    "Interpretable Machine Learning Applications",
  ];

  return (
    <section
      ref={targetRef}
      id="certifications"
      className="py-48 bg-[#0f0f0f] border-t border-subtle overflow-hidden"
    >
      <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-32 px-6 md:px-12 max-w-7xl mx-auto">
        Qualifications
      </h2>

      <div className="flex flex-col gap-12 w-full">
        {certs.map((cert, i) => {
          // Alternate movement directions
          const direction = i % 2 === 0 ? 1 : -1;
          const x = useTransform(
            scrollYProgress,
            [0, 1],
            [`${direction * 20}%`, `${direction * -20}%`],
          );

          return (
            <motion.div key={i} style={{ x }} className="whitespace-nowrap">
              <h3 className="text-6xl md:text-9xl font-heading font-medium text-white/80 uppercase tracking-tighter hover:text-[#f04823] transition-colors duration-500 cursor-default px-6">
                {cert} <span className="text-white/10 mx-8">•</span> {cert}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
