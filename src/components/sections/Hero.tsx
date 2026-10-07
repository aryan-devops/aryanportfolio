import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-container min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full tag-pastel-green text-xs font-semibold tracking-wide uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green-txt)]"></span>
          Available for Hire
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif-editorial font-medium tracking-tight mb-8">
          Software Engineer building resilient digital infrastructure.
        </h1>
        
        <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-xl leading-relaxed">
          I'm Aryan Pandey, specializing in React, Node.js, and modern architectural patterns. I build high-performance tools and applications with a focus on utilitarian design and systemic reliability.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-primary">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://github.com/aryan-devops" target="_blank" rel="noreferrer" className="btn-secondary">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
