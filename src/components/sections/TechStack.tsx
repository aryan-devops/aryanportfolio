import { motion } from "framer-motion";

export default function TechStack() {
  const stack = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Database",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
    },
    {
      category: "AI / ML",
      technologies: ["Python", "TensorFlow", "Keras", "Hugging Face"],
    },
    {
      category: "DevOps",
      technologies: ["Git", "GitHub", "Docker", "Vercel", "AWS"],
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-subtle"
    >
      <div className="mb-24">
        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
          Technology
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 lg:gap-8">
        {stack.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xs font-bold text-[#f04823] uppercase tracking-widest pb-4 border-b border-subtle">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-3">
              {group.technologies.map((tech) => (
                <li key={tech} className="text-lg text-white/80 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
