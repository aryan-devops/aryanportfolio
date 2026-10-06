import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={targetRef}
      id="work"
      className="bg-[#0a0a0a] relative pb-48 pt-24"
    >
      {/* The Huge Transition Title */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="min-h-screen flex items-center justify-center pointer-events-none sticky top-0 z-0"
      >
        <h2 className="text-[15vw] font-heading font-bold text-white/5 tracking-tighter leading-[0.8] text-center">
          SELECTED
          <br />
          WORK
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col gap-[30vh] mt-[50vh]">
        {/* 01 ANNADATA */}
        <div className="flex flex-col gap-12 group">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-8">
            <div className="flex flex-col">
              <span className="text-6xl md:text-8xl font-heading font-bold text-[#bdf205] leading-none">
                01
              </span>
              <h3 className="text-4xl md:text-7xl font-heading font-bold mt-4 tracking-tighter uppercase">
                Annadata
              </h3>
            </div>
            <span className="text-xl md:text-3xl font-body font-medium text-white/40 uppercase tracking-tight max-w-sm text-right">
              AI Agricultural Advisor
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="col-span-1 md:col-span-8 overflow-hidden bg-white/5 aspect-[4/3] w-full">
              <img
                src="/projects/annadata.jpg"
                alt="Annadata"
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
            <div className="col-span-1 md:col-span-4 flex flex-col gap-8 text-sm font-medium tracking-wide">
              <div>
                <span className="text-[#bdf205] uppercase tracking-[0.2em] text-xs block mb-2">
                  Problem
                </span>
                <p className="text-white/70">
                  Farmers lack intelligent, location-aware crop assistance in
                  real-time.
                </p>
              </div>
              <div>
                <span className="text-[#bdf205] uppercase tracking-[0.2em] text-xs block mb-2">
                  Solution
                </span>
                <p className="text-white/70">
                  A comprehensive AI advisor providing predictive data and
                  actionable insights.
                </p>
              </div>
              <div>
                <span className="text-[#bdf205] uppercase tracking-[0.2em] text-xs block mb-2">
                  Technology
                </span>
                <p className="text-white/70">
                  React, Node.js, MongoDB, Location APIs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 02 QUIZERR */}
        <div className="flex flex-col gap-12 group">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-8">
            <div className="flex flex-col">
              <span className="text-6xl md:text-8xl font-heading font-bold text-[#bdf205] leading-none">
                02
              </span>
              <h3 className="text-4xl md:text-7xl font-heading font-bold mt-4 tracking-tighter uppercase">
                Quizerr
              </h3>
            </div>
            <span className="text-xl md:text-3xl font-body font-medium text-white/40 uppercase tracking-tight max-w-sm text-right">
              Online Proctor-Based Quizzing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="col-span-1 md:col-span-4 order-2 md:order-1 flex flex-col gap-8 text-xl font-heading tracking-tight text-white/80">
              <span className="border-l-2 border-[#bdf205] pl-4">
                JavaScript
              </span>
              <span className="border-l-2 border-[#bdf205] pl-4">Node.js</span>
              <span className="border-l-2 border-[#bdf205] pl-4">Supabase</span>
              <span className="border-l-2 border-[#bdf205] pl-4">
                Automated Proctoring
              </span>
              <span className="border-l-2 border-[#bdf205] pl-4 text-white">
                100+ Student Users
              </span>
            </div>
            <div className="col-span-1 md:col-span-8 order-1 md:order-2 overflow-hidden bg-white/5 aspect-video w-full">
              <img
                src="/projects/quizerr.jpg"
                alt="Quizerr"
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* 03 YESHA ENTERPRISES */}
        <div className="flex flex-col gap-12 group">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-8">
            <div className="flex flex-col">
              <span className="text-6xl md:text-8xl font-heading font-bold text-white/20 leading-none">
                03
              </span>
              <h3 className="text-4xl md:text-7xl font-heading font-bold mt-4 tracking-tighter uppercase">
                Yesha Enterprises
              </h3>
            </div>
            <span className="text-xl md:text-3xl font-body font-medium text-white/40 uppercase tracking-tight max-w-sm text-right">
              Commercial Platform
            </span>
          </div>
          <div className="w-full overflow-hidden bg-white/5 aspect-[16/9]">
            <img
              src="/projects/yesha.jpg"
              alt="Yesha"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-1000"
            />
          </div>
        </div>

        {/* 04 YESHA BILLING & 05 E-COMMERCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h4 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter uppercase">
              04 Yesha Billing
            </h4>
            <div className="w-full bg-white/5 aspect-[4/3] border border-white/10 flex items-center justify-center p-8">
              <div className="w-full h-full border border-[#bdf205]/20 flex flex-col text-[#bdf205] font-mono text-xs p-4 overflow-hidden relative">
                <div className="border-b border-[#bdf205]/20 pb-2 mb-4">
                  SYSTEM.INIT()
                </div>
                <div>&gt; Loading interface...</div>
                <div>&gt; Establishing SQLite connection... OK</div>
                <div>&gt; Rendering invoice dashboard...</div>
                <div className="mt-auto animate-pulse">_</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter uppercase">
              05 E-Commerce
            </h4>
            <div className="w-full bg-white/5 aspect-[4/3] border border-white/10 overflow-hidden">
              <img
                src="/projects/annadata.jpg"
                alt="E-Commerce"
                className="w-full h-full object-cover grayscale opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
