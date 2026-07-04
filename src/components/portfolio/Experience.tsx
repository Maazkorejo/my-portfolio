import { Section } from "./Section";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 / Experience"
      title="Where I've been."
    >
      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-1/2" />
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-10"
        >
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              variants={fadeUpItem}
              className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.35, delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2 flex items-center justify-center"
              >
                <span className="relative flex h-2 w-2">
                  {i === 0 && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
              </motion.div>

              <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                <p className="font-mono text-xs text-accent mb-1">{e.period}</p>
                <h3 className="font-semibold text-lg">{e.role}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
              </div>

              <div className={i % 2 === 0 ? "md:col-start-2 md:pl-8" : "md:col-start-1 md:row-start-1 md:text-right md:pr-8"}>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {e.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
