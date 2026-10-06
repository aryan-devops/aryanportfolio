export default function TechStack() {
  const stack = [
    {
      category: "FRONTEND",
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
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
    {
      category: "AI-ASSISTED DEVELOPMENT",
      technologies: ["Antigravity", "Claude Code", "Codex", "Emergent AI"],
    },
  ];

  return (
    <section id="stack" className="py-48 px-8 bg-[#bdf205] text-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {stack.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-black/10 pt-8"
          >
            <div className="col-span-1 md:col-span-4">
              <h4 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tighter">
                {group.category}
              </h4>
            </div>
            <div className="col-span-1 md:col-span-8 flex flex-wrap gap-x-8 gap-y-4 font-body text-lg md:text-2xl font-medium tracking-tight">
              {group.technologies.map((tech) => (
                <span
                  key={tech}
                  className="hover:text-black/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
