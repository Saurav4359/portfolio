import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export function GitHubStreakSection() {
  // Extract GitHub username from URL
  const githubUrl = siteData.social.github;
  const username = githubUrl.split('/').pop() || 'github';

  return (
    <section id="github" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          GitHub Activity
        </motion.h2>

        <motion.p
          className="text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
        >
          My coding statistics and contributions
        </motion.p>

        {/* GitHub Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
        >
          <div className="rounded-lg border border-border bg-card p-4 overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=39D353&icon_color=39D353&text_color=FFFFFF&count_private=true`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="rounded-lg border border-border bg-card p-4 overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=39D353&text_color=FFFFFF`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* View Profile Button */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
          >
            <Github size={16} />
            View Full Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

