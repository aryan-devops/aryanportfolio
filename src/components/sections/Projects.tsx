import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function Projects() {
  const targetRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Mobile devices or users who prefer reduced motion shouldn't get the extreme horizontal scroll
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const disableHorizontal = prefersReducedMotion || isMobile;

  const projects = [
    {
      num: "01",
      title: "ANNADATA",
      type: "AI AGRICULTURAL ADVISOR",
      image: "/projects/annadata.jpg",
      desc: "Helping farmers with intelligent crop-related information and location-aware agricultural assistance.",
      tech: ["React", "Node.js", "MongoDB", "Location API"],
    },
    {
      num: "02",
      title: "QUIZERR",
      type: "Online Proctor-Based Quizzing System",
      image: "/projects/quizerr.jpg",
      desc: "Automated proctoring platform featuring focus detection, head tracking, and violation monitoring with over 100+ student users.",
      tech: ["JavaScript", "Node.js", "Supabase", "WebRTC"],
    },
    {
      num: "03",
      title: "YESHA ENTERPRISES",
      type: "BUSINESS PLATFORM",
      image: "/projects/yesha.jpg",
      desc: "Professional web presence developed for a commercial biofloc fish farming company. Engineered for high SEO performance.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      num: "04",
      title: "YESHA BILLING",
      type: "SOFTWARE",
      image: "/projects/yesha.jpg", // Reusing image if no specific billing image exists
      desc: "Practical business billing and invoicing software developed for active day-to-day operations and workflow speed.",
      tech: ["Electron", "React", "SQLite"],
    },
    {
      num: "05",
      title: "E-COMMERCE",
      type: "PLATFORM",
      image: "/projects/annadata.jpg", // Placeholder until they upload the real one
      desc: "Full-featured e-commerce platform with product listing, category filtering, authentication, and cart management.",
      tech: ["PHP", "MySQL", "JavaScript"],
    },
  ];

  if (disableHorizontal) {
    return (
      <section id="work" className="py-32 px-6 bg-[#0f0f0f]">
        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-24">
          Selected Work
        </h2>
        <div className="flex flex-col gap-32">
          {projects.map((proj) => (
            <div key={proj.num} className="flex flex-col gap-8">
              <span className="text-6xl font-heading font-medium text-white/10">
                {proj.num}
              </span>
              <div className="w-full aspect-video bg-[#141414] border border-subtle overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <h3 className="text-4xl font-heading font-medium text-white uppercase">
                {proj.title}
              </h3>
              <p className="text-[#f04823] text-sm font-bold tracking-widest uppercase">
                {proj.type}
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                {proj.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={targetRef}
      id="work"
      className="h-[500vh] bg-[#0f0f0f] relative"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-32 px-[10vw] items-center h-full"
        >
          {/* Intro Slide */}
          <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col gap-8">
            <h2 className="text-[8vw] md:text-[6vw] font-heading font-medium leading-none text-white tracking-tight uppercase">
              Selected
              <br />
              Work
            </h2>
            <p className="text-xl md:text-2xl text-white/40">05 PROJECTS</p>
          </div>

          {/* Projects */}
          {projects.map((proj) => (
            <div
              key={proj.num}
              className="w-[85vw] md:w-[70vw] flex-shrink-0 flex flex-col md:flex-row gap-12 md:gap-24 items-center"
            >
              <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/9] bg-[#141414] border border-subtle overflow-hidden relative group">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-6 left-6 text-[150px] font-heading font-medium leading-none text-white/20 select-none pointer-events-none mix-blend-overlay">
                  {proj.num}
                </span>
              </div>

              <div className="w-full md:w-2/5 flex flex-col gap-6">
                <h3 className="text-4xl md:text-6xl font-heading font-medium text-white uppercase leading-none tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-sm md:text-base font-bold text-[#f04823] tracking-widest uppercase">
                  {proj.type}
                </p>
                <p className="text-lg md:text-2xl text-white/60 leading-relaxed max-w-lg mt-4">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/40 mt-8">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
