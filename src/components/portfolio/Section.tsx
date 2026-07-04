import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-20 md:py-28 scroll-mt-20 ${className}`}>
      <div className="container-wide">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <motion.p
              variants={fadeUpItem}
              className="font-mono text-xs uppercase tracking-widest text-accent mb-3"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h2 variants={fadeUpItem} className="font-display text-3xl md:text-4xl font-bold">
            {title}
          </motion.h2>
          {description && (
            <motion.p variants={fadeUpItem} className="mt-4 text-muted-foreground text-base md:text-lg">
              {description}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
