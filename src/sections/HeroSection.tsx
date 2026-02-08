import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.p
          className="font-mono text-sm text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {siteData.name}
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mt-2 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {siteData.title}
        </motion.p>

        <motion.p
          className="max-w-xl text-muted-foreground mt-8 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {siteData.intro}
        </motion.p>

        <motion.div
          className="flex gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowDown size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Contact Me
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
