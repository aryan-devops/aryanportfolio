import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function TechStack() {
  const stack = [
    {
      category: "FRONTEND",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "API Integration"],
    },
    {
      category: "BACKEND",
      technologies: ["Node.js", "Express.js", "PHP", "REST APIs", "Java", "C++"],
    },
    {
      category: "DATABASE",
      technologies: ["MySQL", "MongoDB", "Supabase"],
    },
    {
      category: "DEVOPS",
      technologies: ["Docker", "AWS", "CI/CD", "Vercel", "Git"],
    },
    {
      category: "AI",
      technologies: ["Antigravity", "Claude Code", "Codex"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      id="stack"
      className="bento-card col-span-4 row-span-1"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl text-dim font-medium uppercase tracking-widest">Tech Stack</h3>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Cpu className="w-5 h-5 text-green-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stack.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-gray-400 text-sm bg-white/5 border border-white/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
