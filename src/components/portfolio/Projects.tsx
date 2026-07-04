import { useRef } from "react";
import { Section } from "./Section";
import { projects, repos } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewportOnce, viewportOnceTight } from "@/lib/motion";

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

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
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8 hover:border-accent/60 transition-colors"
    >
      {/* Spotlight that follows the cursor — a nod to Alfred's live trace panel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), hsl(var(--accent) / 0.08), transparent 65%)",
        }}
      />

      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-display text-2xl md:text-3xl font-bold">{p.name}</h3>
              <span className="font-mono text-xs text-muted-foreground">— {p.tagline}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {p.live && (
              <motion.a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:opacity-90"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-foreground" />
                </span>
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
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md border border-border hover:bg-secondary"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </motion.a>
            )}
          </div>
        </div>

        <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
          {p.points.map((pt, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
          {p.stack.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-0.5 rounded border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Selected work"
      title="Projects shipped to production."
      description="Live systems where the model is only one part of the story."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-6"
      >
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </motion.div>

      <div className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
              More on GitHub
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              All public repositories.
            </h3>
          </div>
          <motion.a
            href="https://github.com/Maazkorejo"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md border border-border hover:bg-secondary"
          >
            <Github className="h-3.5 w-3.5" /> @Maazkorejo
          </motion.a>
        </div>
        <motion.div
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnceTight}
          className="grid md:grid-cols-2 gap-4"
        >
          {repos.map((r) => (
            <motion.a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              variants={fadeUpItem}
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-border bg-card p-5 hover:border-accent/60 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Github className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="font-mono text-sm font-semibold truncate">{r.name}</span>
                </div>
                {r.homepage && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(r.homepage!, "_blank", "noreferrer");
                    }}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-accent hover:underline flex-shrink-0"
                  >
                    <ExternalLink className="h-3 w-3" /> Live
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {r.description}
              </p>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-border text-muted-foreground">
                {r.language}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
