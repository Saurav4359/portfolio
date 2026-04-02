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
          {siteData.projects.map((project, i) => {
            const href = (project as any).link || (project as any).repo || "#";
            const isRepoOnly = !(project as any).link && !!(project as any).repo;

            return (
              <motion.a
                key={project.title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-lg border border-border/80 bg-card p-5 shadow-card-light transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.24),0_18px_40px_hsl(var(--accent)/0.12)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08 }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-transparent transition duration-300 group-hover:ring-accent/20"
                />
                {/* Preview area */}
                <div className={`w-full ${(project as any).previewHeight ?? 'h-32'} rounded-lg bg-secondary mb-4 flex items-center justify-center overflow-hidden`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-muted-foreground/30 text-xs font-mono">{project.title}</span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground text-sm">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {!isRepoOnly && (
                      <ExternalLink size={13} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    )}
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
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border shadow-input-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
