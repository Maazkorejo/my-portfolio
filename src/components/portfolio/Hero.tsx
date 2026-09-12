import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import { easeOut, lineReveal } from "@/lib/motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, hsl(var(--accent) / 0.1), transparent 65%)`;

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
      className="relative overflow-hidden border-b border-border pt-16 md:pt-24 pb-16 md:pb-20"
    >
      <div className="absolute inset-0 bg-grid mask-radial-top opacity-70 pointer-events-none" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl"
        >
          {/* Status Capsule Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 backdrop-blur-sm px-3.5 py-1 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              AI Developer &amp; Systems Engineer · {personal.location}
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04] text-balance">
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
                transition={{ delay: 0.2 }}
              >
                Backend Engineer.
              </motion.span>
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl text-muted-foreground font-semibold mt-2">
              Built for real production, not toy demos.
            </span>
          </h1>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
            className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-pretty"
          >
            Specializing in LLM-integrated platforms, Intelligent Document Processing (IDP) SaaS,
            reproducible offline evaluation architectures, and agentic workflows.
            Former Backend AI Intern at FlyRank.ai, Research Fellow at INFERENCE Lab (<span className="text-foreground font-mono text-xs">llm-eval-kit</span>), and AI Developer Intern at Nebulark.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
              <Button asChild size="lg" className="group font-mono text-xs uppercase tracking-wider font-semibold">
                <Link to="/projects">
                  Explore Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
              <Button asChild size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
                <Link to="/skills">View Tech Stack</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
              <Button asChild size="lg" variant="ghost" className="font-mono text-xs uppercase tracking-wider font-semibold">
                <Link to="/contact">Contact</Link>
              </Button>
            </motion.div>

            <div className="ml-auto hidden sm:flex items-center gap-1.5 border-l border-border pl-4">
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
                  className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* INFERENCE Lab Style Signature 4-Column Stat Banner */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-xl border border-border bg-border"
          >
            <div className="bg-background p-5 hover:bg-card/50 transition-colors">
              <dt className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground">12</dt>
              <dd className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                ANTHROPIC CREDENTIALS
              </dd>
            </div>
            <div className="bg-background p-5 hover:bg-card/50 transition-colors">
              <dt className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground">32+</dt>
              <dd className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                VERIFIED CERTIFICATES
              </dd>
            </div>
            <div className="bg-background p-5 hover:bg-card/50 transition-colors">
              <dt className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground">6</dt>
              <dd className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                SHIPPED REPOSITORIES
              </dd>
            </div>
            <div className="bg-background p-5 hover:bg-card/50 transition-colors">
              <dt className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground">100%</dt>
              <dd className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                PYTEST TEST COVERAGE
              </dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
