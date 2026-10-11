import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Copy, Check, Github, Linkedin, ArrowUpRight, MessageSquare, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailtoUrl = `mailto:${personal.email}?subject=Project inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nContact email: ' + formData.email)}`;
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="contact"
      className="bento-card col-span-4 border border-blue-500/20 shadow-2xl relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 relative z-10 py-1 sm:py-2">
        {/* Left Column: Direct contact info & call to action */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 pill-badge text-blue-500 border-blue-500/30 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Let's Build Something Together</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[var(--text-primary)] leading-tight mb-3 sm:mb-4">
              Have an opening or a project in mind?
            </h2>

            <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
              I'm actively interviewing for full-stack engineering roles and internships. Whether you need a high-performance web app, multi-container Docker deployment on AWS, or AI integration, I'm ready to contribute from day one.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {/* Copy Email Button Card */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)] font-medium">Direct Email</div>
                  <div className="text-xs sm:text-sm font-mono-code text-[var(--text-primary)] font-semibold truncate">
                    {personal.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--pill-border)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-1.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-void)] hover:opacity-90 transition-opacity"
                  title="Open mail app"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Phone pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <div>
                  <div className="text-[10px] text-[var(--text-muted)]">Location</div>
                  <div className="text-xs text-[var(--text-primary)] font-medium">{personal.location}</div>
                </div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--border-subtle)] flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <div className="text-[10px] text-[var(--text-muted)]">Phone / WhatsApp</div>
                  <div className="text-xs text-[var(--text-primary)] font-medium">{personal.phone}</div>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-bold text-emerald-600 dark:text-emerald-300 transition-all cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Curriculum Vitae (PDF)</span>
                </button>
              )}

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--pill-border)] border border-[var(--border-subtle)] text-xs font-semibold text-blue-500 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Quick Message Form */}
        <div className="lg:col-span-6 bg-[var(--pill-bg)] rounded-2xl border border-[var(--border-subtle)] p-4 sm:p-6 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-3 border-b border-[var(--border-subtle)]">
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <h3 className="text-sm sm:text-base font-bold font-heading text-[var(--text-primary)]">
                Send a Direct Message
              </h3>
            </div>

            {formSubmitted ? (
              <div className="py-8 sm:py-12 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">Message Prepared!</h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-xs">
                  Your mail client has been opened with your message. Thank you for reaching out to Aryan!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs text-blue-500 underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Technical Lead"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] focus:border-blue-500 focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] focus:border-blue-500 focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                    Project or Role Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Aryan about the role, project scope, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] focus:border-blue-500 focus:outline-none text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Aryan</span>
                </button>
              </form>
            )}
          </div>

          <div className="mt-3 sm:mt-4 pt-3 border-t border-[var(--border-subtle)] text-[10px] sm:text-[11px] text-[var(--text-muted)] text-center">
            Guaranteed response within 24 hours • Raipur (IST)
          </div>
        </div>
      </div>
    </motion.section>
  );
}
