import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Tech Stack
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            Technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mt-14"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.skills.map((skill) => (
            <motion.span
              key={skill}
              variants={item}
              className="px-5 py-2.5 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default border-glow"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
