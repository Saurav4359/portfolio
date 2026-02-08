import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {siteData.name}
        </motion.h1>

        <motion.div
          className="mt-4 space-y-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-muted-foreground text-base leading-relaxed">
            {siteData.title}
          </p>
          <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
            {siteData.intro}
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 mt-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: Github, href: siteData.social.github },
            { icon: Linkedin, href: siteData.social.linkedin },
            { icon: Twitter, href: siteData.social.twitter },
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
          className="mt-10 px-4 py-3 rounded-lg bg-secondary border border-border"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            I love designing and building thoughtful, production-grade applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
