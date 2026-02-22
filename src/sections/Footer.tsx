import { siteData } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} {siteData.name}
        </p>
      </div>
    </footer>
  );
}
