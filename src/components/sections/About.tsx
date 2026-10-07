import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bento-card col-span-4 md:col-span-2 row-span-1 flex flex-col justify-center"
      id="about"
    >
      <h3 className="text-xl text-dim font-medium uppercase tracking-widest mb-4">About Me</h3>
      <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-gradient">
        I don't just write code. <br />
        <span className="text-white">I build things.</span>
      </h2>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        I focus on creating seamless digital experiences, from architecting reliable backend systems to designing intuitive frontend interfaces. I believe in writing clean code and continuously learning new technologies.
      </p>
    </motion.div>
  );
}
