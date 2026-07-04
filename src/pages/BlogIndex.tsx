import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { ArrowRight } from "lucide-react";

export default function BlogIndex() {
  return (
    <div className="container-wide py-20 md:py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Writing</p>
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Blog</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Notes on AI agents, LLM engineering, and backend architecture. Placeholder posts — swap
        the content in <code className="font-mono text-xs">src/data/posts.ts</code>.
      </p>

      <div className="space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group block rounded-lg border border-border bg-card p-6 hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-2">
              <span className="text-accent">{p.tag}</span>
              <span>·</span>
              <time>{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
              <span>·</span>
              <span>{p.readTime}</span>
            </div>
            <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
              {p.title}
            </h2>
            <p className="text-muted-foreground mb-3">{p.excerpt}</p>
            <span className="font-mono text-xs text-accent inline-flex items-center gap-1.5">
              Read post <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
