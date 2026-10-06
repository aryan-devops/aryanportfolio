import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TechStack() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const stack = [
    {
      category: "FRONTEND",
      technologies: [
        "React",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Web Design",
        "API Integration",
      ],
    },
    {
      category: "BACKEND",
      technologies: [
        "Node.js",
        "Express.js",
        "PHP",
        "REST APIs",
        "Java",
        "C++",
      ],
    },
    {
      category: "DATABASE",
      technologies: ["MySQL", "MongoDB", "Supabase"],
    },
    {
      category: "DEVOPS",
      technologies: ["Docker", "AWS", "CI/CD", "Vercel", "Netlify", "Git"],
    },
  ];

  return (
    <section
      ref={targetRef}
      id="stack"
      className="py-32 bg-[#0f0f0f] relative border-t border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-48">
        {stack.map((group, i) => {
          const y = useTransform(
            scrollYProgress,
            [i * 0.2, i * 0.2 + 0.3],
            [100, 0],
          );
          const opacity = useTransform(
            scrollYProgress,
            [i * 0.2, i * 0.2 + 0.1, i * 0.2 + 0.3, i * 0.2 + 0.4],
            [0, 1, 1, 0],
          );

          return (
            <motion.div
              key={group.category}
              style={{ y, opacity }}
              className="flex flex-col gap-12"
            >
              <h3 className="text-4xl md:text-8xl font-heading font-medium text-white/10 uppercase tracking-tighter">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-x-12 gap-y-6 max-w-4xl">
                {group.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-3xl md:text-5xl text-white font-medium uppercase tracking-tight"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
