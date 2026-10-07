import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { content } from './data/content';
import { Globe, Link as LinkIcon, Mail, ArrowUpRight, Code2, Database, LayoutTemplate, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [theme, setTheme] = useState('dark');
  const mainRef = useRef(null);
  
  useEffect(() => {
    // Initial theme setup
    document.documentElement.setAttribute('data-theme', theme);
    
    // GSAP Setup
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-text span', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2
      });

      gsap.from('.hero-sub', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });

      // Scrubbing Text Reveal
      const scrubText = gsap.utils.toArray('.scrub-text');
      scrubText.forEach(text => {
        gsap.fromTo(text, 
          { opacity: 0.1 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: text,
              start: 'top 80%',
              end: 'top 40%',
              scrub: true,
            }
          }
        );
      });

      // Project Horizontal Accordions
      const projects = gsap.utils.toArray('.project-row');
      projects.forEach((proj, i) => {
        gsap.from(proj, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: proj,
            start: 'top 85%',
          }
        });
      });
      
      // Bento Grid Entrance
      gsap.from('.bento-cell', {
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%',
        }
      });

    }, mainRef);

    return () => ctx.revert();
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <main ref={mainRef} className="overflow-x-hidden w-full max-w-full bg-bg text-ink min-h-screen selection:bg-accent selection:text-white transition-colors duration-500">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 p-6 mix-blend-difference text-white">
        <div className="flex justify-between items-center max-w-[95vw] mx-auto">
          <span className="font-display font-bold text-xl tracking-tight">AP.</span>
          <button onClick={toggleTheme} className="font-mono text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      {/* HERO: Cinematic Center */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-24 px-6">
        <div className="w-full max-w-[95vw] mx-auto text-center flex flex-col items-center">
          
          <h1 className="font-display font-black text-[clamp(3.5rem,12vw,14rem)] leading-[0.85] tracking-tight uppercase overflow-hidden flex flex-wrap justify-center gap-x-4 md:gap-x-8">
            <span className="hero-text block">Building</span>
            <span className="hero-text block relative">
              <span className="inline-block w-20 h-10 md:w-48 md:h-24 rounded-full align-middle bg-cover bg-center mx-2 md:mx-6 filter grayscale mix-blend-luminosity brightness-75 overflow-hidden" 
                    style={{backgroundImage: 'url(https://picsum.photos/seed/code/800/400)'}}>
              </span>
              Digital
            </span>
            <span className="hero-text block">Ecosystems.</span>
          </h1>

          <div className="hero-sub mt-12 md:mt-24 flex flex-col items-center gap-8 max-w-2xl">
            <p className="text-xl md:text-3xl text-muted font-sans font-light leading-relaxed">
              {content.summary}
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-4 bg-ink text-bg font-sans font-medium rounded-full hover:scale-105 transition-transform duration-300">
                View Work
              </a>
              <a href={`mailto:${content.email}`} className="px-8 py-4 bg-transparent border border-line text-ink font-sans font-medium rounded-full hover:bg-surface transition-colors duration-300">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE: Scrubbing Text Reveal & Pinned Section */}
      <section className="py-32 md:py-48 px-6 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">Experience.</h2>
              <p className="font-mono text-sm uppercase text-muted tracking-widest">Real-world impact</p>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col gap-32">
            {content.experience.map((exp, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="border-b border-line pb-6">
                  <h3 className="font-display text-3xl md:text-5xl">{exp.role}</h3>
                  <div className="flex justify-between mt-4 font-mono text-sm uppercase tracking-widest text-muted">
                    <span>{exp.company}</span>
                    <span>{exp.date}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {exp.points.map((pt, j) => (
                    <p key={j} className="scrub-text text-xl md:text-3xl font-sans font-light leading-tight">
                      {pt}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS: Horizontal Accordions */}
      <section id="projects" className="py-32 md:py-48 px-6">
        <div className="max-w-[95vw] mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-24 text-center">Selected Works.</h2>
          
          <div className="flex flex-col border-t border-line">
            {content.projects.map((proj, i) => (
              <div key={i} className="project-row group border-b border-line py-12 md:py-16 hover:bg-surface transition-colors duration-500 cursor-pointer px-4 relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase text-muted tracking-widest">0{i + 1}</span>
                    <h3 className="font-display text-3xl md:text-6xl group-hover:translate-x-4 transition-transform duration-500">{proj.title}</h3>
                  </div>
                  <div className="flex items-center gap-6 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:-translate-x-4 group-hover:translate-x-0">
                    <div className="hidden lg:flex flex-col text-right mr-8">
                      <span className="font-mono text-xs uppercase text-muted tracking-widest mb-1">Core</span>
                      <span className="font-sans text-sm">{proj.core}</span>
                    </div>
                    {proj.repoUrl !== "TODO" && (
                      <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full border border-line hover:bg-ink hover:text-bg transition-colors duration-300">
                        <Globe size={20} />
                      </a>
                    )}
                    {proj.liveUrl !== "TODO" && (
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-accent text-white hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Background image reveal on hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 scale-95 group-hover:scale-100 transition-all duration-700 ease-out bg-cover bg-center"
                     style={{backgroundImage: `url(https://picsum.photos/seed/${proj.title.replace(/\s/g, '')}/1920/1080)`}}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-12 overflow-hidden bg-ink text-bg flex items-center">
        <div className="flex whitespace-nowrap opacity-80" 
             style={{ animation: 'marquee 25s linear infinite' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display text-4xl md:text-7xl uppercase font-bold tracking-tight">
              <span>React</span> <Code2 size={48} className="opacity-50" />
              <span>Node.js</span> <Server size={48} className="opacity-50" />
              <span>MongoDB</span> <Database size={48} className="opacity-50" />
              <span>Vite</span> <LayoutTemplate size={48} className="opacity-50" />
              <span>AWS</span> <Cloud size={48} className="opacity-50" />
            </div>
          ))}
        </div>
      </section>

      {/* GAPLESS BENTO GRID: Research, Education, Stats */}
      <section className="py-32 md:py-48 px-6 bg-surface">
        <div className="max-w-7xl mx-auto bento-grid grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 grid-flow-dense">
          
          {/* Research Cell - Large */}
          <div className="bento-cell col-span-1 md:col-span-2 row-span-2 bg-bg p-8 md:p-12 rounded-2xl flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase text-muted tracking-widest mb-8 block">Research & Publications</span>
              <div className="flex flex-col gap-8 mt-12">
                {content.publications.map((pub, i) => (
                  <div key={i} className="border-l-2 border-accent pl-6">
                    <h4 className="font-display text-xl md:text-2xl mb-2 leading-tight">{pub.title}</h4>
                    <span className="font-mono text-sm text-muted uppercase">{pub.venue} {pub.date ? `— ${pub.date}` : ''}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Subtle mesh/radial gradient background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-[100px] group-hover:scale-150 group-hover:opacity-10 transition-all duration-1000"></div>
          </div>

          {/* Education Cell */}
          <div className="bento-cell col-span-1 row-span-1 bg-ink text-bg p-8 rounded-2xl flex flex-col justify-between group overflow-hidden relative">
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">Education</span>
            <div>
              <h4 className="font-display text-3xl mb-2">{content.education[0].degree}</h4>
              <p className="font-sans text-sm opacity-80">{content.education[0].school}</p>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700"></div>
          </div>

          {/* Location Cell */}
          <div className="bento-cell col-span-1 row-span-1 bg-bg p-8 rounded-2xl flex flex-col justify-center items-center text-center border border-line">
            <span className="font-mono text-xs uppercase text-muted tracking-widest mb-4">Location</span>
            <h4 className="font-display text-2xl">{content.location}</h4>
            <div className="mt-4 w-12 h-12 rounded-full border border-line flex items-center justify-center">
              <div className="w-2 h-2 bg-ok rounded-full animate-pulse"></div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 border-t border-line">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
          <h2 className="font-display font-black text-6xl md:text-[10rem] tracking-tight uppercase leading-[0.8]">
            Let's Talk.
          </h2>
          <p className="text-xl text-muted font-sans max-w-xl">
            Currently open for internship opportunities. Let's build something remarkable together.
          </p>
          
          <div className="flex gap-6 mt-8">
            <a href={`mailto:${content.email}`} className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors">
              <Mail size={18} /> Email
            </a>
            {content.linkedin && (
              <a href={content.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors">
                <LinkIcon size={18} /> LinkedIn
              </a>
            )}
            {content.github && (
              <a href={content.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors">
                <Globe size={18} /> Github
              </a>
            )}
          </div>
          
          <div className="mt-24 font-mono text-xs text-muted uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Aryan Pandey. Designed with precision.
          </div>
        </div>
      </footer>
      
      {/* Inline styles for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </main>
  );
}
