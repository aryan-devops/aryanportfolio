import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_emjk0mp";
const EMAILJS_TEMPLATE_ID = "template_xwzkm6e";
const EMAILJS_PUBLIC_KEY = "08Ayd3JFK0XdS8PN6";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Left Side - Typography */}
        <div className="lg:col-span-6 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-7xl font-heading font-medium tracking-tighter text-white leading-[0.9] uppercase mb-8">
              Have a project
              <br />
              in mind?
            </h2>
            <p className="text-xl md:text-2xl text-white/50 max-w-sm mb-16">
              Let's build something useful.
            </p>

            <div className="flex flex-col gap-8 text-sm font-bold uppercase tracking-widest text-white/80">
              <a
                href="mailto:aryan000pandey@gmail.com"
                className="flex items-center gap-4 hover:text-[#f04823] transition-colors w-max"
              >
                aryan000pandey@gmail.com
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://linkedin.com/in/aryanpandey"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-[#f04823] transition-colors w-max"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/aryan-devops"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-[#f04823] transition-colors w-max"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:col-span-6">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4 border-b border-subtle pb-4 focus-within:border-white transition-colors">
              <label
                htmlFor="name"
                className="text-xs font-bold text-[#f04823] uppercase tracking-widest"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none outline-none text-xl text-white placeholder:text-white/20"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col gap-4 border-b border-subtle pb-4 focus-within:border-white transition-colors">
              <label
                htmlFor="email"
                className="text-xs font-bold text-[#f04823] uppercase tracking-widest"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none outline-none text-xl text-white placeholder:text-white/20"
                placeholder="name@company.com"
              />
            </div>

            <div className="flex flex-col gap-4 border-b border-subtle pb-4 focus-within:border-white transition-colors">
              <label
                htmlFor="message"
                className="text-xs font-bold text-[#f04823] uppercase tracking-widest"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none outline-none text-xl text-white placeholder:text-white/20 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex items-center gap-6 mt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest active:scale-[0.98] transition-all duration-300 disabled:opacity-50 hover:bg-white/90"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && (
                <span className="flex items-center gap-2 text-[#f04823] text-sm font-bold uppercase tracking-widest">
                  <CheckCircle size={16} /> Sent
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-2 text-red-500 text-sm font-bold uppercase tracking-widest">
                  <AlertCircle size={16} /> Error
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
