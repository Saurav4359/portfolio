import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/components/XIcon";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {siteData.name}
        </motion.h1>

        <motion.div
          className="space-y-3 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl text-foreground/80">
            {siteData.title}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            {siteData.intro}
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: Github, href: siteData.social.github },
            { icon: Linkedin, href: siteData.social.linkedin },
            { icon: XIcon, href: siteData.social.twitter },
            { icon: Mail, href: `mailto:${siteData.social.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          className="px-4 py-3 rounded-lg bg-secondary/50 border border-border shadow-card-light"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            Open to opportunities. I love designing and building thoughtful applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

