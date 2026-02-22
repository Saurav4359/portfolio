import { Github, Linkedin, Mail } from "lucide-react";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { XIcon } from "@/components/XIcon";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border shadow-nav-light"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base font-semibold text-foreground tracking-tight hover:text-accent transition-colors">
          {siteData.name.split(" ")[0].toLowerCase()}
          <span className="text-muted-foreground">.</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {[
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-5 w-px bg-border hidden sm:block" />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {[
              { icon: Github, href: siteData.social.github, label: "GitHub" },
              { icon: Linkedin, href: siteData.social.linkedin, label: "LinkedIn" },
              { icon: XIcon, href: siteData.social.twitter, label: "X" },
              { icon: Mail, href: `mailto:${siteData.social.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

