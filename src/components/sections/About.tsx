export default function About() {
  return (
    <section
      id="about"
      className="py-48 px-8 bg-[#0a0a0a] flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-[10vw] md:text-[8vw] font-heading font-bold leading-[0.8] tracking-tighter uppercase text-white mb-24">
        I DON'T JUST
        <br />
        <span className="text-white/20">WRITE CODE.</span>
        <br />
        I BUILD
        <br />
        <span className="text-[#bdf205]">THINGS.</span>
      </h2>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-heading font-bold uppercase tracking-tight">
            Full-Stack
            <br />
            Developer
          </h3>
          <p className="text-white/60 font-body leading-relaxed mt-4">
            Building web applications across:
          </p>
          <ul className="flex flex-col gap-2 font-body text-sm font-bold tracking-widest text-[#bdf205] uppercase mt-2">
            <li>Frontend</li>
            <li>Backend</li>
            <li>Databases</li>
            <li>Cloud</li>
            <li>AI</li>
          </ul>
        </div>

        <div className="flex items-end">
          <p className="text-xl md:text-2xl font-body font-medium leading-relaxed text-white/80">
            I focus on creating seamless digital experiences, from architecting
            reliable backend systems to designing intuitive frontend interfaces.
            I believe in writing clean code and continuously learning new
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
