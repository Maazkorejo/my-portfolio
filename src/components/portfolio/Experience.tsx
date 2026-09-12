import { Section } from "./Section";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";
import {
  Briefcase,
  Building2,
  Calendar,
  FileCheck,
  Eye,
  Download,
  ExternalLink,
  ShieldCheck,
  Award,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 / Career & Fellowships"
      title="Where I've been & what I've built."
      description="Track record across Backend AI Engineering, Intelligent Document Processing (IDP) SaaS, open-source LLM evaluation engineering, and cloud backends."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-8"
      >
        {experience.map((e) => (
          <motion.div
            key={e.role + e.org}
            variants={fadeUpItem}
            className="group rounded-2xl border border-border bg-card p-6 sm:p-9 hover:border-foreground/30 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                      {e.role}
                    </h3>
                    {e.badge && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                          e.badge === "Current Role"
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : e.badge === "Completed Track"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-secondary text-muted-foreground border border-border"
                        }`}
                      >
                        {e.badge === "Current Role" && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        )}
                        {e.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-0.5 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-accent" />
                    <span>{e.org}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground bg-background px-3 py-1.5 rounded-lg border border-border/80 self-start sm:self-auto">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                <span>{e.period}</span>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                Key Technical Contributions:
              </p>
              <ul className="space-y-2.5">
                {e.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attached Verification Documents & Certificates */}
            {"documents" in e && Array.isArray(e.documents) && e.documents.length > 0 && (
              <div className="border-t border-border/70 mt-6 pt-6">
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                      Verified Documents &amp; Credentials
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      ({e.documents.length} verified item{e.documents.length > 1 ? "s" : ""})
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
                    Click any document to inspect original
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {e.documents.map((doc, docIdx) => (
                    <Dialog key={docIdx}>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="group/doc text-left rounded-xl border border-border bg-background p-3.5 hover:border-foreground/40 hover:bg-card hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-accent/10 text-accent border border-accent/20">
                                <Award className="h-3 w-3" />
                                {doc.badge}
                              </span>
                              <span className="text-muted-foreground text-xs font-mono group-hover/doc:text-accent transition-colors flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" /> View
                              </span>
                            </div>
                            <h4 className="font-display font-semibold text-xs sm:text-sm text-foreground group-hover/doc:text-accent transition-colors line-clamp-2">
                              {doc.title}
                            </h4>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                            <span className="truncate pr-2">{doc.issuer}</span>
                            <span className="text-accent text-[11px] font-semibold group-hover/doc:underline whitespace-nowrap">
                              Inspect &rarr;
                            </span>
                          </div>
                        </button>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-4 sm:p-6">
                        <DialogHeader className="mb-4">
                          <div className="flex items-center justify-between gap-4 flex-wrap">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                                  {doc.issuer}
                                </span>
                                <span className="text-border">•</span>
                                <span className="font-mono text-xs text-muted-foreground">
                                  Verified Document Record
                                </span>
                              </div>
                              <DialogTitle className="font-display text-xl sm:text-2xl font-bold">
                                {doc.title}
                              </DialogTitle>
                            </div>

                            <div className="flex items-center gap-2">
                              {doc.pdfUrl && (
                                <Button
                                  asChild
                                  size="sm"
                                  variant="outline"
                                  className="font-mono text-xs gap-1.5 h-8"
                                >
                                  <a href={doc.pdfUrl} download>
                                    <Download className="h-3.5 w-3.5 text-accent" />
                                    <span>Download PDF</span>
                                  </a>
                                </Button>
                              )}
                              {doc.verifyUrl && (
                                <Button
                                  asChild
                                  size="sm"
                                  className="font-mono text-xs gap-1.5 h-8"
                                >
                                  <a
                                    href={doc.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>Public Verifier</span>
                                    <ExternalLink className="h-3.5 w-3.5" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>

                          <DialogDescription className="font-mono text-xs text-muted-foreground mt-1">
                            Official verified document record issued for Muhammad Maaz Korejo.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                          {doc.images.map((img: string, imgIdx: number) => (
                            <div
                              key={imgIdx}
                              className="rounded-xl overflow-hidden border border-border bg-muted/20"
                            >
                              <div className="bg-card/70 px-4 py-2 border-b border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                                <span>Page {imgIdx + 1} of {doc.images.length}</span>
                                <span className="text-accent">High-Resolution Document</span>
                              </div>
                              <img
                                src={img}
                                alt={`${doc.title} - Page ${imgIdx + 1}`}
                                className="w-full h-auto object-contain max-h-[75vh] mx-auto p-2"
                              />
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
