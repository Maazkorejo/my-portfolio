import { About } from "@/components/portfolio/About";
import { Link } from "react-router-dom";
import { FolderGit2, Sparkles, Mail, ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-8">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <span className="h-px w-6 bg-accent" />
            <span>01 / Background &amp; Engineering</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            About Muhammad Maaz.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            AI Developer and Backend Engineer focused on building robust LLM-integrated platforms,
            Intelligent Document Processing (IDP) SaaS, and reproducible offline evaluation architectures.
          </p>
        </div>
      </div>

      <About />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold text-foreground">Interested in exploring my technical work?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Check out my shipped flagship projects, open-source developer tooling on PyPI, and technical tech stack.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/skills">
                <Sparkles className="mr-2 h-4 w-4" /> Explore Stack
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/resume">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </Link>
            </Button>
            <Button asChild variant="ghost" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
