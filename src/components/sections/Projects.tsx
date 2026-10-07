import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Annadata",
      description: "A comprehensive AI agricultural advisor providing predictive data and actionable location-aware crop assistance for farmers.",
      tags: ["React", "Node.js", "MongoDB", "AI APIs"],
      sourceLink: "#",
      liveLink: "#"
    },
    {
      id: "02",
      title: "Quizerr",
      description: "Online proctor-based quizzing platform integrating automated monitoring and seamless student assessment workflows.",
      tags: ["React", "Node.js", "Supabase"],
      sourceLink: "#",
      liveLink: "#"
    },
    {
      id: "03",
      title: "Yesha Enterprises",
      description: "Commercial platform and digital storefront built to scale for enterprise retail needs.",
      tags: ["React", "Tailwind", "PostgreSQL"],
      sourceLink: "#",
      liveLink: "#"
    },
    {
      id: "04",
      title: "Yesha Billing",
      description: "SQLite based local-first invoicing interface designed for fast point-of-sale operations.",
      tags: ["Electron", "SQLite", "React"],
      sourceLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="work" className="bg-[var(--bg-secondary)] border-y border-[var(--border)]">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-[var(--accent)]/30 flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] font-semibold text-sm">
                  {project.id}
                </div>
                <div className="flex gap-2">
                  <a href={project.sourceLink} className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)] rounded-md transition-colors" aria-label="Source Code">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.liveLink} className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)] rounded-md transition-colors" aria-label="Live Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
