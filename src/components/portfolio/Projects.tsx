import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Section } from "./Section";
import { projects, repos } from "@/data/portfolio";
import {
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  BrainCircuit,
  Bot,
  Trophy,
  ShieldAlert,
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewportOnce, viewportOnceTight } from "@/lib/motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const projectIconMap: Record<string, any> = {
  "Kestrel AI": ShieldCheck,
  "CTX-Bridge": Terminal,
  "llm-eval-kit": Cpu,
  "Self-Reflective RAG Engine": BrainCircuit,
  "Alfred": Bot,
  "AI Pundit Rankings": Trophy,
  "Network Intrusion Detection System": ShieldAlert,
};

const projectTagMap: Record<string, string> = {
  "Kestrel AI": "Cybersecurity IDE · Desktop & Web",
  "CTX-Bridge": "PyPI Package · CLI",
  "llm-eval-kit": "INFERENCE Lab · Open Source",
  "Self-Reflective RAG Engine": "ICLR Architecture · Docker",
  "Alfred": "Agentic Assistant · Live Demo",
  "AI Pundit Rankings": "Full-Stack SaaS · Production",
  "Network Intrusion Detection System": "ML Pipeline · CICIDS-2017",
};

function ScreenshotGallery({ project }: { project: (typeof projects)[number] }) {
  const screenshots = "screenshots" in project && project.screenshots ? project.screenshots : [];
  const [activeIdx, setActiveIdx] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;
  const active = screenshots[activeIdx];

  return (
    <div className="space-y-4">
      <DialogHeader>
        <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
              {project.name}
            </span>
            <span className="text-border">•</span>
            <span className="font-mono text-xs text-muted-foreground">Product Architecture Gallery</span>
          </div>
          <span className="font-mono text-xs text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">
            {activeIdx + 1} of {screenshots.length}
          </span>
        </div>
        <DialogTitle className="font-display text-xl sm:text-2xl font-bold">
          {active.title}
        </DialogTitle>
        <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {active.description}
        </DialogDescription>
      </DialogHeader>

      {/* Main Image Display */}
      <div className="rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center min-h-[240px] sm:min-h-[380px] max-h-[60vh]">
        <img
          src={active.image}
          alt={active.title}
          className="w-full h-auto object-contain max-h-[58vh] mx-auto transition-all"
        />
      </div>

      {/* Thumbnail Switcher */}
      <div className="grid grid-cols-5 gap-2 pt-2">
        {screenshots.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`group/thumb relative rounded-lg overflow-hidden border transition-all text-left p-1 ${
              activeIdx === idx
                ? "border-accent ring-2 ring-accent/30 bg-accent/5"
                : "border-border hover:border-foreground/40 bg-card opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-12 sm:h-14 object-cover object-top rounded"
            />
            <p className="mt-1 font-mono text-[9px] sm:text-[10px] truncate text-foreground font-medium">
              {s.title}
            </p>
          </button>
        ))}
      </div>

      {/* Links & Quick Command Footer */}
      <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-accent" />
          <code className="bg-muted px-2 py-0.5 rounded text-foreground text-[10px] select-all">
            irm https://raw.githubusercontent.com/Maazkorejo/Kestrel/main/install.ps1 | iex
          </code>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-3 w-3" /> Live Web App
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-foreground transition-colors"
            >
              <Github className="h-3 w-3" /> GitHub Repo
            </a>
          )}
          {"releases" in project && project.releases && (
            <a
              href={project.releases as string}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-foreground transition-colors"
            >
              <Layers className="h-3 w-3" /> Releases Hub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function FlagshipKestrelCard({ p }: { p: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ShieldCheck;
  const tag = projectTagMap[p.name] ?? "Cybersecurity IDE · Desktop & Web";

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !cardRef.current) return;
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMove}
      variants={fadeUpItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-accent/40 bg-card p-6 sm:p-9 hover:border-foreground/40 hover:shadow-2xl transition-all lg:col-span-2 flex flex-col justify-between"
    >
      {/* Precision spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(650px circle at var(--x, 50%) var(--y, 50%), hsl(var(--accent) / 0.12), transparent 65%)",
        }}
      />

      <div className="relative">
        {/* Header with Icon, Tag, and Flagship Badge */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent border border-accent/30 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                  {p.name}
                </span>
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent font-semibold flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5" /> Flagship Release
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors mt-0.5">
                {p.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {tag}
            </span>
          </div>
        </div>

        <p className="font-mono text-xs sm:text-sm text-foreground/90 font-medium mb-6">
          <span className="text-accent font-bold">Hunt flaws. Ship armor.</span> — {p.tagline}
        </p>

        {/* 2-Column Split on Large Screens: Screenshot on Left, Deliverables on Right */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Screenshot Preview Trigger on Left */}
          <div className="lg:col-span-5 space-y-3">
            {"image" in p && p.image && (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group/img relative rounded-xl overflow-hidden border border-border bg-background cursor-pointer hover:border-accent/80 transition-all shadow-md">
                    <img
                      src={p.image as string}
                      alt="Kestrel IDE Workspace"
                      className="w-full h-48 sm:h-56 object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent flex items-end justify-between p-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-card/90 backdrop-blur-sm border border-border text-foreground font-semibold">
                        <Eye className="h-3.5 w-3.5 text-accent" /> 5 Product Screenshots
                      </span>
                      <span className="font-mono text-[10px] text-accent uppercase tracking-wider font-bold group-hover/img:underline flex items-center gap-1">
                        Inspect Gallery &rarr;
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-4 sm:p-6">
                  <ScreenshotGallery project={p} />
                </DialogContent>
              </Dialog>
            )}

            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
              <span>Monaco IDE · AST Audit · NVIDIA Nemotron</span>
              <span className="text-accent font-semibold">Click to inspect</span>
            </div>
          </div>

          {/* Deliverables Checklist on Right */}
          <div className="lg:col-span-7">
            <ul className="space-y-2.5">
              {p.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer: Tech Stack and Action Links */}
      <div className="relative pt-6 border-t border-border mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded border border-border bg-background text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-accent/40 bg-accent/10 hover:bg-accent/20 text-accent font-semibold transition-colors"
                >
                  <Eye className="h-3.5 w-3.5" /> 5 Screenshots
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-4 sm:p-6">
                <ScreenshotGallery project={p} />
              </DialogContent>
            </Dialog>

            {p.live && (
              <motion.a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live Web App
              </motion.a>
            )}
            {p.repo && (
              <motion.a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </motion.a>
            )}
            {"releases" in p && p.releases && (
              <motion.a
                href={p.releases as string}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-foreground transition-colors"
              >
                <Layers className="h-3.5 w-3.5" /> Releases (.exe)
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = projectIconMap[p.name] ?? Terminal;
  const tag = projectTagMap[p.name] ?? "Production System";

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !cardRef.current) return;
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMove}
      variants={fadeUpItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-9 hover:border-foreground/30 hover:shadow-xl transition-all flex flex-col justify-between"
    >
      {/* Precision spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(450px circle at var(--x, 50%) var(--y, 50%), hsl(var(--accent) / 0.08), transparent 65%)",
        }}
      />

      <div className="relative">
        {/* Header with Icon and Tag */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              {p.name}
            </span>
          </div>
          <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {tag}
          </span>
        </div>

        {/* Title and Tagline */}
        <div className="mb-4">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
            {p.name}
          </h3>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            {p.tagline}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <ul className="space-y-2.5 my-6 border-t border-border pt-5">
          {p.points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative pt-5 border-t border-border mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded border border-border bg-background text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
            {"journal" in p && p.journal && (
              <Link
                to={p.journal as string}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-accent/40 bg-accent/10 hover:bg-accent/20 text-accent font-semibold transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5" /> Research Note
              </Link>
            )}
            {p.live && (
              <motion.a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live
              </motion.a>
            )}
            {p.repo && (
              <motion.a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </motion.a>
            )}
            {"releases" in p && p.releases && (
              <motion.a
                href={p.releases as string}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary text-foreground transition-colors"
              >
                <Layers className="h-3.5 w-3.5" /> Releases
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Selected Work"
      title="Projects shipped to production."
      description="Live systems, pip packages, and deterministic evaluation architectures where the model is only one part of the story."
    >
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-7 lg:grid-cols-2"
      >
        {projects.map((p) =>
          p.name === "Kestrel AI" ? (
            <FlagshipKestrelCard key={p.name} p={p} />
          ) : (
            <ProjectCard key={p.name} p={p} />
          )
        )}
      </motion.div>

      {/* Public Repositories Section */}
      <div className="mt-20 pt-12 border-t border-border">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2">
              <span className="h-px w-6 bg-accent" />
              <span>Public Repositories</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Featured GitHub Repositories.
            </h3>
          </div>
          <motion.a
            href="https://github.com/Maazkorejo"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-md border border-border bg-card hover:bg-secondary transition-colors"
          >
            <Github className="h-3.5 w-3.5" /> @Maazkorejo on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnceTight}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {repos.map((r) => (
            <motion.a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              variants={fadeUpItem}
              whileHover={{ y: -3 }}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 hover:border-foreground/30 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <Github className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="font-mono text-xs sm:text-sm font-semibold truncate group-hover:text-accent transition-colors">
                      {r.name}
                    </span>
                  </div>
                  {r.homepage && (
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(r.homepage!, "_blank", "noreferrer");
                      }}
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-accent hover:underline flex-shrink-0"
                    >
                      <ExternalLink className="h-3 w-3" /> Live
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {r.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/70 text-[11px] font-mono">
                <span className="text-muted-foreground">
                  Language: <span className="text-foreground">{r.language}</span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
