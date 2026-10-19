import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { Link } from "react-router-dom";
import { Mail, Briefcase, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-wide mb-8">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
            <span className="h-px w-6 bg-accent" />
            <span>06 / Curriculum Vitae</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
            Curriculum Vitae &amp; Resume.
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
            Official one-page technical curriculum vitae. Review verified experience at Nebulark, INFERENCE Lab, and FlyRank.ai, alongside Tree-Sitter AST security pipelines, offline evaluation engineering, and academic background.
          </p>
        </div>
      </div>

      <ResumeSection />

      <div className="container-wide mt-16 pt-12 border-t border-border">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Interested in hiring or discussing engineering roles?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am open to AI Engineer, Backend Systems Developer, and LLM Platform roles. Let's connect directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="font-mono text-xs uppercase tracking-wider font-semibold">
              <a href={resumeData.pdfUrl} download={resumeData.filename}>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Directly
              </Link>
            </Button>
            <Button asChild variant="ghost" className="font-mono text-xs uppercase tracking-wider font-semibold">
              <Link to="/experience">
                <Briefcase className="mr-2 h-4 w-4" /> Experience Timeline
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
