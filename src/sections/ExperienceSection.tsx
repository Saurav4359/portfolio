import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-sm text-primary mb-2">// experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="mt-16 space-y-0 relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          {siteData.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-10 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background z-10" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary font-medium text-sm mb-3">{exp.role}</p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-border mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
