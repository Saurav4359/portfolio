import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-sm text-primary mb-2">// skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Tech Stack
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.skills.map((skill) => (
            <motion.span
              key={skill}
              variants={item}
              className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
              whileHover={{ y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
