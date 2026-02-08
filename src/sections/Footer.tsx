import { siteData } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with React + TailwindCSS
        </p>
      </div>
    </footer>
  );
}
