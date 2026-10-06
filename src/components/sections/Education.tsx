export default function Education() {
  return (
    <section
      id="education"
      className="py-48 px-8 bg-[#0a0a0a] flex flex-col items-center border-t border-white/10"
    >
      <h2 className="text-sm font-body font-bold text-white/40 uppercase tracking-[0.3em] mb-32 text-center">
        Education
      </h2>

      <div className="flex flex-col items-center gap-16 text-center max-w-3xl">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-white leading-none">
            MCA
          </h3>
          <span className="text-xl md:text-2xl font-body font-medium tracking-tight text-white/80">
            Amity University, Raipur
          </span>
          <span className="text-[#bdf205] font-body font-bold tracking-widest uppercase text-sm mt-2">
            2025 — 2027
          </span>
        </div>

        {/* Down Arrow / Line */}
        <div className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent my-4"></div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-white/40 leading-none">
            BCA
          </h3>
          <span className="text-xl md:text-2xl font-body font-medium tracking-tight text-white/40">
            Disha College, Kota
          </span>
          <span className="text-white/20 font-body font-bold tracking-widest uppercase text-sm mt-2">
            2021 — 2024
          </span>
        </div>
      </div>
    </section>
  );
}
