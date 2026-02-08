import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="mt-14 space-y-6">
          {siteData.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm border-glow hover:border-glow-hover transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="p-2.5 rounded-lg bg-secondary shrink-0">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-[11px] text-muted-foreground tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary/80 font-medium text-sm mb-3">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex items-start gap-2.5">
                        <span className="text-primary/50 mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
