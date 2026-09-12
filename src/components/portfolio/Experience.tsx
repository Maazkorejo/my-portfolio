import { Section } from "./Section";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";
import { Briefcase, Building2, Calendar } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 / Career & Fellowships"
      title="Where I've been & what I've built."
      description="Track record across Backend AI Engineering, Intelligent Document Processing (IDP) SaaS, open-source LLM evaluation engineering, and cloud backends."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-8"
      >
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            variants={fadeUpItem}
            className="group rounded-2xl border border-border bg-card p-6 sm:p-9 hover:border-foreground/30 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                      {e.role}
                    </h3>
                    {e.badge && (
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                        e.badge === "Current Role"
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : e.badge === "Completed Track"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-secondary text-muted-foreground border border-border"
                      }`}>
                        {e.badge === "Current Role" && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        )}
                        {e.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-0.5 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-accent" />
                    <span>{e.org}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground bg-background px-3 py-1.5 rounded-lg border border-border/80 self-start sm:self-auto">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                <span>{e.period}</span>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                Key Technical Contributions:
              </p>
              <ul className="space-y-2.5">
                {e.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
