import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  Server,
  LayoutTemplate,
  Workflow,
  FileText,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  BrainCircuit,
  Server,
  LayoutTemplate,
  Workflow,
  FileText,
  ShieldCheck,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Master Tech Stack"
      title="Capabilities & Technical Directory."
      description="6 structured capability layers spanning LLM engineering, cybersecurity & SAST, document OCR pipelines, classical ML, cloud backends & DevSecOps, and desktop IDE architectures."
    >
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillGroups.map((group, idx) => {
          const Icon = iconMap[group.icon] ?? Sparkles;
          return (
            <motion.div
              key={group.label}
              variants={fadeUpItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-foreground/30 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                        Layer 0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-foreground">
                        {group.label}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-background/80 text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>{group.items.length} Technologies</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
