export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a0a0a] flex flex-col justify-between pt-48 pb-12 px-8 border-t border-white/10 relative overflow-hidden"
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h2 className="text-[12vw] md:text-[10vw] font-heading font-bold uppercase tracking-tighter leading-[0.85] text-white">
          LET'S
          <br />
          <span className="text-[#bdf205]">BUILD</span>
          <br />
          SOMETHING
          <br />
          USEFUL.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mt-24 border-t border-white/10 pt-12 items-end">
        <div className="flex flex-col gap-2">
          <span className="text-xl md:text-3xl font-heading font-bold uppercase tracking-tighter text-white">
            ARYAN PANDEY
          </span>
          <a
            href="mailto:pandeyaryan995@gmail.com"
            className="text-white/60 font-body hover:text-[#bdf205] transition-colors mt-2"
          >
            pandeyaryan995@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4 font-body font-bold text-xs uppercase tracking-[0.2em] text-white/40">
          <a
            href="https://linkedin.com/in/aryanpandey"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/aryan-devops"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
        </div>

        <div className="flex flex-col md:items-end">
          <span className="text-[10px] font-body font-bold text-white/20 uppercase tracking-[0.3em]">
            RAIPUR / INDIA
          </span>
        </div>
      </div>
    </section>
  );
}
