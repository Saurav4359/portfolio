import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="px-4 py-3 rounded-lg bg-secondary border border-border mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-sm text-muted-foreground">
            I love working with these technologies to build beautiful and functional applications.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
        >
          {siteData.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-3.5 h-3.5 rounded bg-accent flex items-center justify-center text-[8px] font-bold text-muted-foreground">
                {skill[0]}
              </span>
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
