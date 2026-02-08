import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${siteData.social.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-sm text-primary mb-2">// contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Available for meaningful work. Let's build something great together.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 space-y-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <textarea
            placeholder="Your message..."
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Send Message
            <Send size={14} />
          </button>
        </motion.form>

        <motion.a
          href={`mailto:${siteData.social.email}`}
          className="inline-flex items-center gap-2 mt-8 text-sm text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Mail size={14} />
          {siteData.social.email}
        </motion.a>
      </div>
    </section>
  );
}
