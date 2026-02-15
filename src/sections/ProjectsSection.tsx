import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-foreground mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {siteData.projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="group block rounded-lg border border-border bg-card p-5 hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Preview area */}
              <div className="w-full h-32 rounded-lg bg-secondary mb-4 flex items-center justify-center">
                <span className="text-muted-foreground/30 text-xs font-mono">{project.title}</span>
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-foreground text-sm">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 shrink-0">
                  <ExternalLink size={13} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  <Github size={13} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

