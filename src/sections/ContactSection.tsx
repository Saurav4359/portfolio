import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${siteData.social.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg max-w-md mx-auto">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 space-y-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card/60 border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all backdrop-blur-sm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card/60 border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all backdrop-blur-sm"
            />
          </div>
          <textarea
            placeholder="Tell me about your project..."
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-card/60 border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all resize-none backdrop-blur-sm"
          />
          <button
            type="submit"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
          >
            Send Message
            <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.form>

        <motion.div
          className="mt-10 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={`mailto:${siteData.social.email}`}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={14} />
            {siteData.social.email}
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
