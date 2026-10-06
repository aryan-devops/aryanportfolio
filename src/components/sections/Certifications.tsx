import { motion } from "framer-motion";


export default function Certifications() {
  const certs = [
    { name: "RESTful API Best Practices", issuer: "Infosys", date: "Oct 2025" },
    {
      name: "Interpretable Machine Learning Applications: Part 1",
      issuer: "Coursera",
      date: "Oct 2025",
    },
    { name: "IBM Data Topology", issuer: "IBM", date: "Oct 2025" },
    {
      name: "Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      date: "Mar 2023",
    },
    { name: "Equity Research", issuer: "Jobaaj.com", date: "Feb 2023" },
    {
      name: "Web Designing Using XHTML CSS & Photoshop",
      issuer: "International Accreditation Forum Inc",
      date: "Mar 2019",
    },
    {
      name: "Android with Core PHP",
      issuer: "Rays IT Design World",
      date: "Apr 2021",
    },
    {
      name: "Facial Recognition Application",
      issuer: "HCL GUVI",
      date: "Apr 2021",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-subtle"
    >
      <div className="mb-24">
        <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
          Qualifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center justify-between py-6 border-b border-white/5 group cursor-default"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#f04823] uppercase tracking-widest">
                {cert.issuer}
              </span>
              <h3 className="text-lg font-medium text-white group-hover:text-white/80 transition-colors">
                {cert.name}
              </h3>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
