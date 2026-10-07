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
    <section id="work" className="bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]">
      <div className="section-container max-w-4xl">
        <h2 className="text-3xl font-serif-editorial font-medium mb-12 tracking-tight">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card-minimal flex flex-col h-full group">
              
              <div className="flex justify-between items-start mb-6">
                <div className="font-mono-code text-[var(--text-secondary)] text-sm">
                  {project.id}
                </div>
                <div className="flex gap-2">
                  <a href={project.sourceLink} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="Source Code">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.liveLink} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-8 flex-grow text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[10px] font-mono-code uppercase rounded-full">
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
