import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-container min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
          Available for new opportunities
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Full-Stack Developer building robust digital products.
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed">
          I'm Aryan Pandey, a software engineer specializing in scalable web applications, React, Node.js, and modern cloud architectures. Based in Raipur, India.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-primary">
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://github.com/aryan-devops" target="_blank" rel="noreferrer" className="btn-secondary">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/aryanpandey" target="_blank" rel="noreferrer" className="btn-secondary">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
