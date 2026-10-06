import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-subtle"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        {/* Left Side - Heading */}
        <div className="md:col-span-5 flex flex-col">
          <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8">
            About
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl md:text-5xl font-heading font-medium text-white tracking-tight leading-tight max-w-sm">
              Full-stack developer focused on building useful software across
              frontend, backend, and product experiences.
            </h3>
          </motion.div>
        </div>

        {/* Right Side - Metadata / Timeline */}
        <div className="md:col-span-7 flex flex-col gap-16 pt-2 md:pt-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2 pb-6 border-b border-subtle">
              <span className="text-xs font-bold text-[#f04823] uppercase tracking-widest">
                MCA
              </span>
              <span className="text-xl text-white">
                Amity University Raipur
              </span>
              <span className="text-sm text-white/40 mt-1">2025 – 2027</span>
            </div>
            <div className="flex flex-col gap-2 pb-6 border-b border-subtle">
              <span className="text-xs font-bold text-[#f04823] uppercase tracking-widest">
                BCA
              </span>
              <span className="text-xl text-white">Disha College</span>
              <span className="text-sm text-white/40 mt-1">2021 – 2024</span>
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                Focus
              </span>
              <ul className="flex flex-col gap-3 text-white/80">
                <li>Full-Stack Development</li>
                <li>Web Applications</li>
                <li>Backend Systems</li>
                <li>AI/ML Exploration</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
