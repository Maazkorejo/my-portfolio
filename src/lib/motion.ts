import { Variants, Transition } from "framer-motion";

// Custom expo-out easing — used everywhere instead of framer's default
// so every reveal shares the same "settle" feel.
export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

export const viewportOnce = { once: true, margin: "-80px" } as const;
export const viewportOnceTight = { once: true, margin: "-40px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeOut } },
};

/** Parent wrapper: cascades children that use fadeUpItem/scaleIn. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Reveal-by-line: pair with an overflow-hidden wrapper span. */
export const lineReveal: Variants = {
  hidden: { y: "100%" },
  show: { y: 0, transition: { duration: 0.7, ease: easeOut } },
};
