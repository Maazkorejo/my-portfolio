import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  Server,
  LayoutTemplate,
  Workflow,
  LucideIcon,
} from "lucide-react";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  BrainCircuit,
  Server,
  LayoutTemplate,
  Workflow,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Stack"
      title="Tools I reach for."
      description="Grouped by the layer of the system they live in."
    >
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon] ?? Sparkles;
          return (
            <motion.div
              key={group.label}
              variants={fadeUpItem}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-lg border border-border bg-card p-6 hover:border-accent/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-md bg-accent/10 p-2 text-accent"
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
                <h3 className="font-semibold text-sm">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2 py-1 rounded border border-border bg-background text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
