import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
