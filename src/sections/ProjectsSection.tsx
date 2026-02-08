import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-sm text-primary mb-2">// projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Things I've Built
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              variants={item}
              className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-1"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
