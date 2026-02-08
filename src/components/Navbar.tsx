import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight text-foreground">
          {siteData.name.split(" ")[0].toLowerCase()}
          <span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: siteData.social.github },
            { icon: Linkedin, href: siteData.social.linkedin },
            { icon: Twitter, href: siteData.social.twitter },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
