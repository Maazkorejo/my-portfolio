import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Terminal, 
  BookOpen, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [copiedInstall, setCopiedInstall] = useState(false);

  useEffect(() => window.scrollTo(0, 0), [slug]);

  if (!post) {
    return (
      <div className="container-wide py-28 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-accent hover:underline font-mono text-sm inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Research Journal
        </Link>
      </div>
    );
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const copyInstallCmd = () => {
    navigator.clipboard.writeText("pip install ctx-bridge");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  // Helper to format inline markdown (bold, code, links)
  const renderInline = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Inline link: [text](url)
      const linkMatch = remaining.match(/^\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        parts.push(
          <a
            key={key++}
            href={linkMatch[2]}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1 font-medium"
          >
            {linkMatch[1]}
            <ExternalLink className="h-3 w-3 inline" />
          </a>
        );
        remaining = remaining.slice(linkMatch[0].length);
        continue;
      }

      // Inline code: `code`
      const codeMatch = remaining.match(/^`([^`]+)`/);
      if (codeMatch) {
        parts.push(
          <code
            key={key++}
            className="font-mono text-[13px] px-1.5 py-0.5 rounded bg-muted/80 text-foreground border border-border"
          >
            {codeMatch[1]}
          </code>
        );
        remaining = remaining.slice(codeMatch[0].length);
        continue;
      }

      // Bold: **text**
      const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
      if (boldMatch) {
        parts.push(
          <strong key={key++} className="font-semibold text-foreground">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.slice(boldMatch[0].length);
        continue;
      }

      // Italic: *text*
      const italicMatch = remaining.match(/^\*([^*]+)\*/);
      if (italicMatch) {
        parts.push(
          <em key={key++} className="italic text-foreground/90">
            {italicMatch[1]}
          </em>
        );
        remaining = remaining.slice(italicMatch[0].length);
        continue;
      }

      // Regular text up to next token
      const nextSpecial = remaining.search(/(`|\*\*|\*|\[)/);
      if (nextSpecial === -1) {
        parts.push(remaining);
        break;
      } else if (nextSpecial === 0) {
        // Just push first character if no match
        parts.push(remaining[0]);
        remaining = remaining.slice(1);
      } else {
        parts.push(remaining.slice(0, nextSpecial));
        remaining = remaining.slice(nextSpecial);
      }
    }

    return parts;
  };

  // Structured content parser
  const renderContentBlocks = (raw: string) => {
    const lines = raw.split("\n");
    const blocks: JSX.Element[] = [];
    let i = 0;
    let blockIndex = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Skip document title if present in markdown body (already rendered in header)
      if (line.startsWith("# ")) {
        i++;
        continue;
      }

      // Horizontal rule
      if (line.trim() === "---") {
        blocks.push(
          <hr key={blockIndex++} className="my-10 border-border/60" />
        );
        i++;
        continue;
      }

      // Code blocks (```lang ... ```)
      if (line.startsWith("```")) {
        const lang = line.slice(3).trim() || "code";
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const codeText = codeLines.join("\n");
        const codeId = `code-block-${blockIndex}`;
        const isDiagram = codeText.includes("┌──") || codeText.includes("│");

        blocks.push(
          <div key={blockIndex++} className="my-6 rounded-xl border border-border bg-[#0d1117] overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/50 border-b border-border/60">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2 font-medium">
                  {isDiagram ? "SYSTEM ARCHITECTURE PIPELINE FLOW" : lang.toUpperCase()}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(codeText, codeId)}
                className="h-7 px-2 font-mono text-[11px] text-muted-foreground hover:text-foreground gap-1.5"
              >
                {copiedCode === codeId ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
            <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-emerald-400/90 selection:bg-accent/30 selection:text-white">
              <pre className="whitespace-pre font-mono">{codeText}</pre>
            </div>
          </div>
        );
        continue;
      }

      // Markdown Tables
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          tableLines.push(lines[i].trim());
          i++;
        }

        if (tableLines.length >= 2) {
          const headerCells = tableLines[0]
            .split("|")
            .slice(1, -1)
            .map((c) => c.trim());
          
          // Row 1 is divider line | :--- | :--- | etc.
          const bodyLines = tableLines.slice(2);

          blocks.push(
            <div key={blockIndex++} className="my-8 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      {headerCells.map((h, hIdx) => (
                        <th
                          key={hIdx}
                          className="px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {bodyLines.map((rowStr, rIdx) => {
                      const cells = rowStr
                        .split("|")
                        .slice(1, -1)
                        .map((c) => c.trim());
                      return (
                        <tr
                          key={rIdx}
                          className="hover:bg-accent/5 transition-colors"
                        >
                          {cells.map((cell, cIdx) => {
                            const isDeltaCol = cIdx === 3;
                            const isMetricCol = cIdx === 0;
                            const isSingleShotCol = cIdx === 2;
                            return (
                              <td
                                key={cIdx}
                                className={`px-4 py-3 font-mono text-xs sm:text-sm ${
                                  isDeltaCol
                                    ? "font-semibold text-accent"
                                    : isSingleShotCol
                                    ? "font-semibold text-foreground"
                                    : isMetricCol
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {renderInline(cell)}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
          continue;
        }
      }

      // H2 Section Titles (e.g. ## 1. Abstract & Problem Statement)
      if (line.startsWith("## ")) {
        const titleText = line.replace(/^##\s+/, "");
        blocks.push(
          <div key={blockIndex++} className="pt-8 pb-3 mt-6 border-b border-border/50">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
              <span className="inline-block w-2 h-6 bg-accent rounded-full" />
              {titleText}
            </h2>
          </div>
        );
        i++;
        continue;
      }

      // H3 Subsection Titles (e.g. ### The Compilation Flow)
      if (line.startsWith("### ")) {
        const subTitleText = line.replace(/^###\s+/, "");
        blocks.push(
          <h3
            key={blockIndex++}
            className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-7 mb-3 tracking-tight"
          >
            {subTitleText}
          </h3>
        );
        i++;
        continue;
      }

      // Unordered list item
      if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
        const listItems: string[] = [];
        while (
          i < lines.length &&
          (lines[i].trim().startsWith("* ") || lines[i].trim().startsWith("- "))
        ) {
          listItems.push(lines[i].trim().replace(/^(\*|-)\s+/, ""));
          i++;
        }
        blocks.push(
          <ul key={blockIndex++} className="my-4 space-y-2.5 pl-2">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <div>{renderInline(item)}</div>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Ordered list item (e.g. 1. Token Inefficiency...)
      if (/^\d+\.\s+/.test(line.trim())) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
          listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
          i++;
        }
        blocks.push(
          <ol key={blockIndex++} className="my-4 space-y-2.5 pl-2">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                  {lIdx + 1}
                </span>
                <div>{renderInline(item)}</div>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Regular paragraph or empty line
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Collect consecutive paragraph lines
      const paraLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].startsWith("#") &&
        !lines[i].startsWith("```") &&
        !lines[i].trim().startsWith("|") &&
        !lines[i].trim().startsWith("* ") &&
        !lines[i].trim().startsWith("- ") &&
        !/^\d+\.\s+/.test(lines[i].trim()) &&
        lines[i].trim() !== "---"
      ) {
        paraLines.push(lines[i]);
        i++;
      }

      blocks.push(
        <p key={blockIndex++} className="text-muted-foreground text-sm sm:text-base leading-relaxed my-4">
          {renderInline(paraLines.join(" "))}
        </p>
      );
    }

    return blocks;
  };

  return (
    <article className="container-narrow py-16 md:py-24">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Research Journal
        </Link>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] font-semibold text-accent uppercase tracking-wider">
          {post.tag}
        </span>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground mb-4">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <time>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
          {post.version && (
            <>
              <span>·</span>
              <span className="text-accent font-semibold">{post.version}</span>
            </>
          )}
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed border-l-2 border-accent/60 pl-4 py-1">
          {post.excerpt}
        </p>
      </header>

      {/* Structured Lab Note Metadata Card */}
      {post.project && (
        <div className="my-8 rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-foreground">
              Research Journal & Artifact Manifest
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="text-muted-foreground block mb-0.5">Project</span>
              <span className="text-foreground font-semibold">{post.project}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-0.5">Principal Author</span>
              <span className="text-foreground font-semibold">{post.author || "Maaz Korejo"}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-0.5">Classification</span>
              <span className="text-foreground font-semibold">{post.classification}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-0.5">Release Version</span>
              <span className="text-accent font-semibold">{post.version}</span>
            </div>
          </div>

          {/* Action links */}
          <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center gap-3">
            {post.pypi && (
              <a
                href={post.pypi}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Terminal className="h-3.5 w-3.5" /> PyPI Package
              </a>
            )}
            {post.github && (
              <a
                href={post.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-md border border-border bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              >
                <Github className="h-3.5 w-3.5" /> GitHub Repository
              </a>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={copyInstallCmd}
              className="font-mono text-xs gap-1.5 h-8 border-dashed"
            >
              {copiedInstall ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied install cmd</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>pip install ctx-bridge</span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Key Benchmark Stat Callouts */}
      {post.stats && post.stats.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
          {post.stats.map((stat, sIdx) => (
            <div
              key={sIdx}
              className="rounded-lg border border-border bg-card/40 p-3.5 text-center transition-all hover:border-accent/40"
            >
              <div className="font-display text-lg sm:text-xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Parsed Research Paper Body */}
      <div className="article-body">
        {renderContentBlocks(post.content)}
      </div>

      {/* Citation & Project Footnote */}
      <div className="mt-16 pt-8 border-t border-border/80">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-accent" />
            Citation & Reference
          </h3>
          <p className="text-xs text-muted-foreground font-mono mb-4 leading-relaxed">
            Korejo, M. (2026). <em>Engineering Lab Note: Architecture, Economics, and Security of Cross-Session AI Context Handoffs</em>. CTX-Bridge Research Series, v0.1.1.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="font-mono text-xs text-accent hover:underline inline-flex items-center gap-1.5"
            >
              <Cpu className="h-3.5 w-3.5" /> View all projects
            </Link>
            <Link
              to="/blog"
              className="font-mono text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> More engineering lab notes
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
