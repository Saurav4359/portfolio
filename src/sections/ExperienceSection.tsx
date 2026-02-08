import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-foreground mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Experience
        </motion.h2>

        <div className="space-y-0">
          {siteData.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="border-dashed-subtle py-5 first:pt-0 last:border-b-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-xs text-muted-foreground">{exp.role}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                  <p className="text-[10px] text-muted-foreground/60">Remote</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
