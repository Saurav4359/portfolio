import { useEffect, useRef, useState } from "react";

import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function ProjectPreview({ project }: { project: any }) {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const title = project.title;
  const videoSrc = (project as any).video;
  const videoStartAt = (project as any).videoStartAt ?? 0;
  const videoObjectClass = (project as any).videoObjectClass ?? "object-cover";

  useEffect(() => {
    const node = previewRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible || !videoSrc) return;

    setIsVideoReady(false);

    const seekToStart = () => {
      if (video.duration > videoStartAt) {
        video.currentTime = videoStartAt;
      }
    };

    if (video.readyState >= 1) {
      seekToStart();
      video.play().catch(() => {});
      return;
    }

    const onLoadedMetadata = () => {
      seekToStart();
      video.play().catch(() => {});
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    return () => video.removeEventListener("loadedmetadata", onLoadedMetadata);
  }, [isVisible, videoSrc, videoStartAt]);

  return (
    <div
      ref={previewRef}
      aria-label={`${title} preview`}
      className={`w-full ${(project as any).previewHeight ?? "h-32"} rounded-lg bg-secondary mb-4 flex items-center justify-center overflow-hidden`}
    >
      {(project as any).video && isVisible ? (
        <video
          ref={videoRef}
          src={(project as any).video}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={project.image}
          aria-label={`${title} demo video`}
          onLoadedMetadata={() => setIsVideoReady(true)}
          onCanPlay={() => setIsVideoReady(true)}
          onSeeked={() => setIsVideoReady(true)}
          onTimeUpdate={() => {
            const video = videoRef.current;
            if (!video || !video.duration || video.currentTime < video.duration - 0.15) {
              return;
            }

            video.currentTime = videoStartAt;
            video.play().catch(() => {});
          }}
          onEnded={() => {
            const video = videoRef.current;
            if (!video) return;
            video.currentTime = videoStartAt;
            video.play().catch(() => {});
          }}
          className={`w-full h-full ${videoObjectClass} transition-opacity duration-300 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-muted-foreground/30 text-xs font-mono">
          {project.title}
        </span>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-8 pb-16 px-6">
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
                aria-label={`${project.title} project link`}
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
                <ProjectPreview project={project} />

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
