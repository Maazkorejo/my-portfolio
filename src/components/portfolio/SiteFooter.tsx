import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { personal } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container-wide py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link to="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            maaz<span className="text-muted-foreground">.dev</span>
          </Link>
          <span className="hidden sm:inline text-border">|</span>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/skills" className="hover:text-accent transition-colors">Skills</Link>
          <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link to="/experience" className="hover:text-accent transition-colors">Experience</Link>
          <Link to="/certifications" className="hover:text-accent transition-colors">Certifications</Link>
          <Link to="/resume" className="hover:text-accent transition-colors">Resume</Link>
          <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
