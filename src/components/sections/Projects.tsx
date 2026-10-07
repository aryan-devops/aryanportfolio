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
    <section id="work" className="bg-[var(--bg-secondary)] border-y border-[var(--border)] relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">Selected Work<span className="text-[var(--accent)]">.</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-[var(--bg-primary)]/80 backdrop-blur-md border border-[var(--border)] rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:border-[var(--accent)]/50 flex flex-col h-full relative overflow-hidden">
              
              {/* Subtle top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="text-[var(--accent)] font-bold text-2xl tracking-tighter opacity-80">
                  {project.id}
                </div>
                <div className="flex gap-2">
                  <a href={project.sourceLink} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-full transition-colors" aria-label="Source Code">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.liveLink} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-full transition-colors" aria-label="Live Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-8 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 text-[var(--text-secondary)] text-xs font-semibold tracking-wider uppercase rounded-full">
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
