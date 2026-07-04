import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import { Counter } from "./Counter";
import { easeOut, lineReveal } from "@/lib/motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, hsl(var(--accent) / 0.12), transparent 65%)`;

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden pt-20 md:pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-grid mask-fade opacity-60 pointer-events-none" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={lineReveal}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.1 }}
              >
                AI Developer &amp;
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-gradient pb-1"
                variants={lineReveal}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.22 }}
              >
                Backend Engineer
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: easeOut }}
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <div className="ml-2 flex items-center gap-1">
              {[
                { href: personal.github, label: "GitHub", Icon: Github },
                { href: personal.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: `mailto:${personal.email}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  aria-label={label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.15 }}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> {personal.location}
            </span>
            <span>
              <Counter to={8} /> Anthropic-verified credentials
            </span>
            <span>
              <Counter to={3} /> deployed projects
            </span>
            <span>
              <Counter to={2} /> govt-backed internships
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
