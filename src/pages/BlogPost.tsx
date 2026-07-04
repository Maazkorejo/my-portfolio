import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/posts";
import { useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => window.scrollTo(0, 0), [slug]);

  if (!post) {
    return (
      <div className="container-wide py-28 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-accent hover:underline font-mono text-sm">← Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="container-narrow py-20 md:py-28">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All posts
      </Link>

      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-4">
        <span className="text-accent">{post.tag}</span>
        <span>·</span>
        <time>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
        {post.title}
      </h1>

      <div className="prose-content space-y-5 text-muted-foreground leading-relaxed">
        {post.content.split("\n\n").map((block, i) => {
          if (block.startsWith("# ")) {
            return null; // title already rendered
          }
          if (block.startsWith("## ")) {
            return (
              <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-8">
                {block.replace(/^##\s+/, "")}
              </h2>
            );
          }
          return <p key={i}>{block}</p>;
        })}
      </div>
    </article>
  );
}
