import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = siteData.formspreeEndpoint;

    if (endpoint) {
      setIsSubmitting(true);
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        if (res.ok) {
          toast.success("Message sent! I'll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        } else {
          toast.error("Something went wrong. Try emailing me directly.");
        }
      } catch {
        toast.error("Something went wrong. Try emailing me directly.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      window.location.href = `mailto:${siteData.social.email}?subject=Contact from ${form.name}&body=${encodeURIComponent(`From: ${form.email}\n\n${form.message}`)}`;
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-foreground mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Get in touch
        </motion.h2>

        <motion.p
          className="text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
        >
          Open to internships and opportunities. Let's build something together.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent/50 transition-colors shadow-input-light"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent/50 transition-colors shadow-input-light"
            />
          </div>
          <textarea
            placeholder="Message..."
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none shadow-input-light"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed shadow-input-light"
          >
            {isSubmitting ? (
              <>
                Sending...
                <Loader2 size={13} className="animate-spin" />
              </>
            ) : (
              <>
                Send
                <Send size={13} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

