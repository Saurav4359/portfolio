import { siteData } from "@/data/siteData";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="section-divider mb-10" />
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteData.name}
        </p>
        <div className="flex items-center gap-5">
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
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="font-mono text-[11px] text-muted-foreground/60 tracking-wider">
          Built with React + TailwindCSS
        </p>
      </div>
    </footer>
  );
}
