import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Things I've Built
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            A selection of projects that showcase my passion for building great software.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-5 mt-14"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteData.projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              variants={item}
              className="group relative block p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 border-glow hover:border-glow-hover overflow-hidden"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-secondary">
                    <Folder size={18} className="text-primary" />
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors mt-1"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/80 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
