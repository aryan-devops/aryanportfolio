import { motion } from "framer-motion";
import { Send, MapPin, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      id="contact"
      className="bento-card col-span-4 md:col-span-2 row-span-1 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl text-dim font-medium uppercase tracking-widest text-white/80">Let's Talk</h3>
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <Send className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
          Have an idea? <br />
          <span className="text-blue-400">Let's build it together.</span>
        </h2>
        
        <div className="flex items-center gap-2 text-dim mt-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">Raipur, India (Remote)</span>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="mailto:pandeyaryan995@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-black border border-white/20 rounded-full transition-all text-sm font-semibold"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/aryanpandey"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-white border border-white/20 rounded-full transition-all text-sm font-semibold"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/aryan-devops"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-black text-white border border-white/20 rounded-full transition-all text-sm font-semibold"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
