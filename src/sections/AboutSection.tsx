import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">About</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
            className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm border-glow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-secondary">
                <User size={16} className="text-primary" />
              </div>
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">Background</span>
            </div>
            <p className="text-muted-foreground text-base leading-[1.8]">
              {siteData.about.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm border-glow"
          >
            <p className="font-mono text-xs text-primary mb-5 tracking-widest uppercase">Values</p>
            <ul className="space-y-4">
              {siteData.about.values.map((v, i) => (
                <li
                  key={v}
                  className="text-sm text-foreground flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-primary mt-0.5">0{i + 1}</span>
                  <span className="text-muted-foreground leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
