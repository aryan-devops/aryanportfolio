import { ArrowRight, Github, Linkedin } from "lucide-react";
import HeroScene from "../3d/HeroScene";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border)]">
      {/* 3D Background */}
      <HeroScene />
      
      {/* Content */}
      <div className="section-container relative z-10 w-full pt-20">
        <div className="max-w-3xl backdrop-blur-sm bg-[var(--bg-primary)]/30 p-8 rounded-2xl border border-[var(--border)]/50">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-6 border border-[var(--accent)]/20">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
            AI Developer & Python Engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Building Intelligent Digital Experiences.
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed">
            Hi, I'm Aryan Pandey. I specialize in scalable web applications, machine learning integration, and modern architectures.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/aryan-devops" target="_blank" rel="noreferrer" className="btn-secondary backdrop-blur-md bg-white/5">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/aryanpandey" target="_blank" rel="noreferrer" className="btn-secondary backdrop-blur-md bg-white/5">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
