import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial" />
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[120px]"
        style={{ background: "hsl(var(--primary))" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-15 blur-[100px]"
        style={{ background: "hsl(var(--accent))" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs text-muted-foreground">Available for work</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-foreground">{siteData.name.split(" ")[0]}</span>{" "}
          <span className="text-gradient">{siteData.name.split(" ")[1]}</span>
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mt-3 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {siteData.title}
        </motion.p>

        <motion.p
          className="max-w-lg text-muted-foreground mt-8 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {siteData.intro}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
          >
            View Projects
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold text-sm hover:border-primary/40 transition-all duration-300"
          >
            Contact Me
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
