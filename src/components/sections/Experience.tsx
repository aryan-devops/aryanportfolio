import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "Tech Mahindra",
      period: "June 2024 – Present",
      location: "Pune, MH",
      points: [
        "Developing scalable web solutions using React and Node.js.",
        "Optimizing database queries and backend performance.",
        "Collaborating with cross-functional teams to deliver enterprise applications.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-subtle"
    >
      <div className="mb-24">
        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
          Experience
        </h2>
      </div>

      <div className="flex flex-col gap-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4 flex flex-col gap-2">
              <h3 className="text-2xl font-heading font-medium text-white">
                {exp.role}
              </h3>
              <span className="text-lg text-[#f04823]">{exp.company}</span>
            </div>

            <div className="md:col-span-8 flex flex-col gap-6 pt-1">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                <span>{exp.period}</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>{exp.location}</span>
              </div>

              <ul className="flex flex-col gap-4 text-base text-white/70 leading-relaxed list-none">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#f04823] before:rounded-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
