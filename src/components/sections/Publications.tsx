export default function Publications() {
  const publications = [
    {
      num: "01",
      title: "AI-DRIVEN CYBERSECURITY SOLUTIONS FOR REAL-TIME THREAT DETECTION",
      journal: "IRJMETS",
      date: null,
    },
    {
      num: "02",
      title: "MACHINE LEARNING & DEEP LEARNING FOR MEDICAL IMAGE ANALYSIS",
      journal: "IJSREM",
      date: "APRIL 2026",
    },
  ];

  return (
    <section
      id="publications"
      className="py-48 px-8 bg-[#0a0a0a] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter mb-32">
          Publications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {publications.map((pub) => (
            <div key={pub.num} className="flex gap-8 group">
              <span className="text-3xl font-heading font-bold text-[#bdf205]">
                {pub.num}
              </span>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl md:text-4xl font-heading font-bold tracking-tight uppercase leading-snug group-hover:text-[#bdf205] transition-colors">
                  {pub.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-body font-bold uppercase tracking-widest text-white/40">
                  <span className="text-white/80">{pub.journal}</span>
                  {pub.date && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <span>{pub.date}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
