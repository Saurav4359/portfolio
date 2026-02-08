import { siteData } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} {siteData.name}
        </p>
        <p className="text-[10px] text-muted-foreground/40 font-mono">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}
