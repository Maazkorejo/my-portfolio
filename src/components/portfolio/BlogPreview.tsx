import { Section } from "./Section";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

export function BlogPreview() {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const otherPosts = posts.filter((p) => p.slug !== featuredPost.slug).slice(0, 2);

  return (
    <Section
      id="writing"
      eyebrow="06 / Research & Writing"
      title="Engineering Lab Notes & Research."
      description="Empirical benchmarks, architectural breakdowns, and systems engineering lab notes on LLM tooling, agentic orchestration, and developer infrastructure."
    >
      {/* Featured Lab Note on Home Page */}
      {featuredPost && (
        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-6"
        >
          <div className="relative group rounded-2xl border border-accent/40 bg-card p-6 sm:p-8 hover:border-accent transition-all duration-300 shadow-lg overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent">
                  Featured Engineering Lab Note
                </span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {featuredPost.readTime}
              </span>
            </div>

            <Link to={`/blog/${featuredPost.slug}`}>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-2 group-hover:text-accent transition-colors leading-snug">
                {featuredPost.title}
              </h3>
            </Link>

            <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            {featuredPost.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {featuredPost.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="rounded-lg border border-border bg-background/60 p-2 text-center">
                    <div className="font-display text-sm sm:text-base font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-border/60">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="font-mono text-xs text-accent font-semibold inline-flex items-center gap-1.5 group-hover:underline"
              >
                Read research paper <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="font-mono text-xs text-muted-foreground">
                {featuredPost.version || "v0.1.1"} · PyPI & GitHub
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid of Other Technical Notes */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid md:grid-cols-2 gap-4"
      >
        {otherPosts.map((p) => (
          <motion.div key={p.slug} variants={fadeUpItem} whileHover={{ y: -4 }}>
            <Link
              to={`/blog/${p.slug}`}
              className="group rounded-lg border border-border bg-card p-5 hover:border-accent/60 transition-colors flex flex-col h-full"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-2">
                <span className="text-accent">{p.tag}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-semibold text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
                {p.excerpt}
              </p>
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground pt-2 border-t border-border/40">
                <time>{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-accent" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <motion.div whileHover={{ x: 3 }} className="inline-block">
          <Link to="/blog" className="font-mono text-sm text-accent hover:underline inline-flex items-center gap-1.5">
            View all engineering lab notes & articles <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
