import { Section } from "./Section";
import { education } from "@/data/portfolio";
import { GraduationCap, Award, ShieldCheck, Terminal, Cpu } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / Background & Philosophy"
      title="Building real production AI, not toy demos."
      description="Engineering disciplined AI systems, IDP platforms, and developer tooling grounded in empirical metrics."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Biography & Mission */}
        <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <p>
            I am a 3rd-year BS Information Technology student at the University of Sindh, Jamshoro,
            focusing on the practical engineering challenges of deploying AI to production.
            Currently an <strong className="text-foreground">AI Developer Intern at Nebulark</strong> (building IDP SaaS)
            and a graduate <strong className="text-foreground">Research Implementation Fellow at INFERENCE Lab</strong> (Cohort 01, Grade A).
          </p>
          <p>
            I care deeply about the parts most AI tutorials skip: state machines for multi-agent workflows,
            cost-optimized hybrid OCR routing that slashes cloud API bills by 80–90%, offline deterministic LLM evaluations
            without expensive LLM-as-a-judge calls, strict PostgreSQL Row-Level Security tenant isolation, and comprehensive test suites (100% pytest coverage).
          </p>
          <p>
            Creator of <strong className="text-foreground">CTX-Bridge</strong>, an open-source context handoff CLI tool published on PyPI,
            and co-author of <strong className="text-foreground">llm-eval-kit</strong>, an offline evaluation library designed for reproducible AI assessment.
          </p>

          {/* 3 Principles Block */}
          <div className="mt-8 pt-6 border-t border-border space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
              Core Engineering Values:
            </h4>
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border">
              <div className="bg-card p-4 sm:p-5">
                <h5 className="font-mono text-xs sm:text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Engineering Discipline Over Hype
                </h5>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Real, deployed output — containerized microservices and automated CI/CD pipelines that do not break outside notebooks.
                </p>
              </div>
              <div className="bg-card p-4 sm:p-5">
                <h5 className="font-mono text-xs sm:text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Evidence Over Assumptions
                </h5>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Benchmarking 14 document parsers before writing code, and verifying system state with verifiable telemetry.
                </p>
              </div>
              <div className="bg-card p-4 sm:p-5">
                <h5 className="font-mono text-xs sm:text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Output Over Certificates
                </h5>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Shipped packages on PyPI, live interactive demos, and 12 verified Anthropic credentials backed by code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Academic Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  Education &amp; Degree
                </span>
              </div>
              <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Class of 2027
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-foreground">{education.degree}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-accent">{education.period}</p>
            </div>

            <div className="pt-5 border-t border-border">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-3">
                Relevant Coursework
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.coursework.map((c) => (
                  <div key={c} className="flex items-center gap-2 font-mono text-xs text-muted-foreground bg-background/60 rounded-md px-2.5 py-1.5 border border-border/70">
                    <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                    <span className="truncate">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
