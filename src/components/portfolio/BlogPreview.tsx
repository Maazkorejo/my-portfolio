import { Section } from "./Section";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

export function BlogPreview() {
  return (
    <Section
      id="writing"
      eyebrow="06 / Writing"
      title="Notes on what I'm building."
      description="Placeholder posts on AI agents, LLM engineering, and backend architecture — replace with your own."
    >
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid md:grid-cols-3 gap-4"
      >
        {posts.map((p) => (
          <motion.div key={p.slug} variants={fadeUpItem} whileHover={{ y: -4 }}>
            <Link
              to={`/blog/${p.slug}`}
              className="group rounded-lg border border-border bg-card p-6 hover:border-accent/60 transition-colors flex flex-col h-full"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-3">
                <span className="text-accent">{p.tag}</span>
                <span>·</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="font-semibold text-lg leading-snug mb-2 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                {p.excerpt}
              </p>
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <time>{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <motion.div whileHover={{ x: 3 }} className="inline-block">
          <Link to="/blog" className="font-mono text-sm text-accent hover:underline inline-flex items-center gap-1.5">
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
