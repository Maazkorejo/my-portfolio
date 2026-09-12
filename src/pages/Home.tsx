import { Hero } from "@/components/portfolio/Hero";
import { BlogPreview } from "@/components/portfolio/BlogPreview";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Sparkles,
  FolderGit2,
  Briefcase,
  Award,
  Mail,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

const coreInitiatives = [
  {
    category: "Developer Tooling & Systems",
    statusTag: "Open-Source & PyPI",
    title: "Flagship Software & Projects",
    desc: "Production-grade developer tools, Self-RAG architectures, and agentic AI systems published on PyPI and GitHub.",
    href: "/projects",
    icon: FolderGit2,
    highlights: [
      "CTX-Bridge context handoff CLI (PyPI)",
      "llm-eval-kit offline evaluation library",
      "Self-RAG engine on Groq LLaMA 3.3 70B",
      "Alfred agentic assistant with 14 tools",
    ],
  },
  {
    category: "Full-Stack AI Stack",
    statusTag: "5 System Layers",
    title: "Master Tech Stack",
    desc: "Comprehensive capability directory covering LLM engineering, OCR/IDP pipelines, classical ML, cloud backends, and test suites.",
    href: "/skills",
    icon: Sparkles,
    highlights: [
      "Model Context Protocol & Claude Code",
      "MinerU, Docling & Mistral-OCR-4",
      "PostgreSQL RLS tenant isolation",
      "100% pytest test coverage discipline",
    ],
  },
  {
    category: "Industry & Research",
    statusTag: "Active Roles",
    title: "Work Experience & Fellowships",
    desc: "Backend AI Engineering Internship at FlyRank.ai, AI Developer Internship at Nebulark (IDP SaaS), and Research Implementation Fellowship at INFERENCE Lab.",
    href: "/experience",
    icon: Briefcase,
    highlights: [
      "FlyRank.ai: 292+ hrs, RAG & API contracts",
      "14-tool document parsing benchmark",
      "3-tier hybrid routing (80-90% cost cut)",
      "Deterministic offline evaluation modules",
    ],
  },
  {
    category: "Accredited Authority",
    statusTag: "32 Scanned Originals",
    title: "Verified Certifications",
    desc: "12 Anthropic credentials, Google AI Essentials 5-course specialization, Linux Foundation, IBM, and UniAthena Python certifications.",
    href: "/certifications",
    icon: Award,
    highlights: [
      "Anthropic Model Context Protocol (MCP)",
      "Google AI Essentials Specialization",
      "Linux Foundation Open Source (LFC102)",
      "Full modal preview & .zip download",
    ],
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <Hero />

      {/* Core Engineering Principles (INFERENCE Lab Style) */}
      <section className="border-b border-border bg-card/20 py-16 md:py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3.5">
                <span className="h-px w-6 bg-accent" />
                <span>Engineering Philosophy</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-tight">
                Engineering discipline over hype. Output over slide decks.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-pretty text-sm sm:text-base">
                Operating across the entire modern AI stack — from structured prompting and reflection token architectures
                to cost-optimized OCR routing, database tenant security, and reproducible PyPI tooling.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-xl sm:text-2xl font-medium leading-snug text-balance">
                Bridging the gap between conceptual AI and{" "}
                <span className="text-accent font-semibold">reproducible, production-ready systems</span>.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border">
                <div className="grid gap-1.5 bg-background p-5 sm:grid-cols-[1fr_1.4fr] sm:gap-6 hover:bg-card/50 transition-colors">
                  <h3 className="font-mono text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Disciplined Verification
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Verifying real system state and empirical data over assumptions before proposing changes.
                  </p>
                </div>

                <div className="grid gap-1.5 bg-background p-5 sm:grid-cols-[1fr_1.4fr] sm:gap-6 hover:bg-card/50 transition-colors">
                  <h3 className="font-mono text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Factual Grounding
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Deterministic offline evaluations with numeric-mismatch verification layers to catch hallucinations.
                  </p>
                </div>

                <div className="grid gap-1.5 bg-background p-5 sm:grid-cols-[1fr_1.4fr] sm:gap-6 hover:bg-card/50 transition-colors">
                  <h3 className="font-mono text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Production Artifacts
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Shipped packages on PyPI, containerized microservices, and 100% test-covered pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Initiatives Cards (INFERENCE Lab Signature 2x2 Grid) */}
      <section className="container-wide">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
              <span className="h-px w-6 bg-accent" />
              <span>Core Tracks</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Explore Portfolio Sections
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
            Detailed walkthroughs of software releases, master tech capabilities, industry fellowships, and verified credentials.
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-7 sm:grid-cols-2"
        >
          {coreInitiatives.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.href} variants={fadeUpItem}>
                <Link
                  to={item.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 sm:p-9 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl h-full"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {item.statusTag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent font-display">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>

                    {/* Checklist */}
                    <div className="mt-6 border-t border-border pt-6">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                        Key Deliverables &amp; Focus:
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex items-center gap-2 font-mono text-xs text-foreground/90">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            <span className="truncate">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent">
                      Enter Section
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background transition-transform group-hover:translate-x-1 group-hover:border-accent">
                      <ArrowRight className="h-4 w-4 text-foreground transition-colors group-hover:text-accent" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Featured Research & Systems Engineering Banner */}
      <section className="container-wide">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid mask-radial-center opacity-50 pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                <ShieldCheck className="h-3.5 w-3.5" /> High-Throughput Engineering
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-balance">
                From offline LLM evaluation to cost-optimized hybrid IDP routing.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
                Engineering real systems under resource constraints: benchmarked 14 OCR parsers, built a 3.3x speedup Ray actor pipeline,
                designed deterministic evaluation modules at INFERENCE Lab, and shipped developer tools to PyPI.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild className="font-mono text-xs uppercase tracking-wider font-semibold">
                  <Link to="/projects">
                    <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
                  <Link to="/experience">
                    <Briefcase className="mr-2 h-4 w-4" /> Experience Timeline
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
              <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 hover:border-foreground/30 transition-colors">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5" /> Nebulark IDP
                </p>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  3-Tier routing cutting cloud OCR costs by 80–90%.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 hover:border-foreground/30 transition-colors">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5" /> INFERENCE Lab
                </p>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  `llm-eval-kit` pip library for offline deterministic LLM evaluations.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 hover:border-foreground/30 transition-colors">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5" /> CTX-Bridge
                </p>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Open-source context handoff CLI tool published on PyPI.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 hover:border-foreground/30 transition-colors">
                <p className="text-accent font-semibold flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5" /> Verified Certs
                </p>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  32 original scanned credentials (12 Anthropic + Google + Linux).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogPreview />
    </div>
  );
}
