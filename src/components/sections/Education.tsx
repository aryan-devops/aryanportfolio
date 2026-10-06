import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "MCA - Master of Computer Applications",
      institution: "Amity University Raipur",
      period: "2025 – 2027",
      achievement: null,
    },
    {
      degree: "BCA - Bachelor of Computer Applications",
      institution: "Disha College",
      period: "2021 – 2024",
      achievement: "Awarded Mr. Fresher",
    },
  ];

  return (
    <section id="education" className="py-32 relative border-t border-white/5">
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
              Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-white mb-6">
            Education
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="outer-shell"
          >
            <div className="inner-core h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-medium text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-white/60 font-light mb-8">
                  {edu.institution}
                </h4>
              </div>

              <div className="flex flex-col gap-4">
                <div className="inline-flex px-3 py-1 rounded-full border border-white/10 bg-white/5 w-max">
                  <span className="text-xs font-medium text-white/60">
                    {edu.period}
                  </span>
                </div>

                {edu.achievement && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-1">
                      Achievement
                    </p>
                    <p className="text-sm font-medium text-white/80">
                      {edu.achievement}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
