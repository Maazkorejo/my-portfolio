import { Section } from "./Section";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Building real production AI, not toy demos.">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a 3rd-year BS Information Technology student at the University of Sindh, Jamshoro,
            focused on shipping systems — not slideware. My work spans agentic AI assistants,
            production ML pipelines, and full-stack platforms deployed to real users.
          </p>
          <p>
            I care about the parts most tutorials skip: state design for LLM agents, retrieval
            that survives contact with users, backends that don't fall over, and pipelines you can
            actually reproduce.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-4">
            <GraduationCap className="h-4 w-4" /> Education
          </div>
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="text-sm text-muted-foreground">{education.school}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{education.period}</p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Coursework
            </p>
            <ul className="space-y-1 text-sm">
              {education.coursework.map((c) => (
                <li key={c} className="text-muted-foreground">• {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
