import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { ArrowRight, BookOpen, Terminal, Sparkles, Calendar, Clock, ExternalLink, Building2, ShieldCheck } from "lucide-react";

export default function BlogIndex() {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const otherPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="container-wide py-20 md:py-28">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3 flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5" /> Writing & Research Journal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Engineering Lab Notes
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Empirical benchmarks, systems architecture breakdowns, and applied technical notes on LLM tooling, offline evaluation engines, and developer infrastructure.
        </p>
      </div>

      {/* Featured Lab Note Card */}
      {featuredPost && (
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-accent">
                Featured Engineering Lab Note
              </span>
            </div>
            {featuredPost.publisher && (
              <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5 bg-muted/40 px-2.5 py-0.5 rounded-full border border-border">
                <Building2 className="h-3 w-3 text-accent" />
                <span>{featuredPost.publisher}</span>
              </span>
            )}
          </div>

          <div className="relative group rounded-2xl border border-accent/40 bg-card p-6 sm:p-8 hover:border-accent transition-all duration-300 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground mb-4">
              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-accent font-semibold">
                {featuredPost.tag}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <time>{new Date(featuredPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {featuredPost.readTime}
              </span>
              {featuredPost.version && (
                <>
                  <span>·</span>
                  <span className="text-foreground font-mono font-medium">{featuredPost.version}</span>
                </>
              )}
            </div>

            <Link to={`/blog/${featuredPost.slug}`}>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
                {featuredPost.title}
              </h2>
            </Link>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              {featuredPost.excerpt}
            </p>

            {/* Metrics Chips if available */}
            {featuredPost.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6 max-w-2xl">
                {featuredPost.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="rounded-lg border border-border bg-background/50 p-2.5 text-center">
                    <div className="font-display text-base sm:text-lg font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/80">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="font-mono text-xs sm:text-sm text-accent font-semibold inline-flex items-center gap-2 group-hover:underline"
              >
                Read full lab note <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex flex-wrap items-center gap-2">
                {featuredPost.officialUrl && (
                  <a
                    href={featuredPost.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Building2 className="h-3 w-3" /> Official Publication <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                )}
                {featuredPost.pypi && (
                  <a
                    href={featuredPost.pypi}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  >
                    <Terminal className="h-3 w-3" /> PyPI
                  </a>
                )}
                {featuredPost.github && (
                  <a
                    href={featuredPost.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  >
                    GitHub <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Additional Technical Notes &amp; Lab Reports
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {otherPosts.map((p) => (
              <div
                key={p.slug}
                className="group rounded-xl border border-border bg-card p-6 hover:border-accent/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 font-mono text-xs text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-semibold">{p.tag}</span>
                      <span>·</span>
                      <time>{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                    </div>
                    <span>{p.readTime}</span>
                  </div>
                  <Link to={`/blog/${p.slug}`}>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors leading-snug">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-2 flex-wrap">
                  <Link to={`/blog/${p.slug}`} className="font-mono text-xs text-accent inline-flex items-center gap-1.5 font-medium hover:underline">
                    Read post <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {p.officialUrl && (
                      <a
                        href={p.officialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
                      >
                        <Building2 className="h-2.5 w-2.5" /> Official
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[11px] text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                      >
                        Code <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
