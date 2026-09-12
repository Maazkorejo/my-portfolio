import { Experience } from "@/components/portfolio/Experience";
import { Link } from "react-router-dom";
import { Award, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-8">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <span className="h-px w-6 bg-accent" />
            <span>04 / Career &amp; Fellowships</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            Where I've Been &amp; What I've Built.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            Professional track record spanning Backend AI Engineering, Intelligent Document Processing (IDP) SaaS,
            open-source LLM evaluation engineering fellowships, and cloud backends.
          </p>
        </div>
      </div>

      <Experience />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold text-foreground">Review my verified credentials</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore 32 accredited certifications from Anthropic, Google, Linux Foundation, IBM, and more.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/certifications">
                <Award className="mr-2 h-4 w-4" /> View Certifications
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
