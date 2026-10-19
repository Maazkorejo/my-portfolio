import { useState } from "react";
import { Section } from "./Section";
import { resumeData, personal } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Maximize2,
  FileText,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Cpu,
  CheckCircle2,
  Eye,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion";

export function ResumeSection() {
  const [viewMode, setViewMode] = useState<"image" | "pdf">("image");
  const [modalZoom, setModalZoom] = useState<number>(1);

  return (
    <Section
      id="resume"
      eyebrow="06 / Curriculum Vitae"
      title="Verified Engineering Resume."
      description="Single-page technical resume detailing production AI architectures, Tree-Sitter AST vulnerability pipelines, offline evaluation engineering, and academic background."
    >
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-10"
      >
        {/* Executive Profile & Key Details Header */}
        <motion.div
          variants={fadeUpItem}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid mask-radial-center opacity-40 pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Executive Summary · {resumeData.lastUpdated}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {personal.name}
              </h3>
              <p className="font-mono text-sm sm:text-base text-accent font-semibold mt-1">
                {resumeData.headline}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            {/* Quick Action Download & View Buttons */}
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Button asChild size="lg" className="group font-mono text-xs uppercase tracking-wider font-semibold shadow-md">
                <a href={resumeData.pdfUrl} download={resumeData.filename}>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Download PDF
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider font-semibold">
                <a href={resumeData.pdfUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Open PDF in Tab
                </a>
              </Button>
            </div>
          </div>

          {/* Key Details Grid */}
          <div className="relative pt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeData.overviewHighlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border/80 bg-background/70 p-4 space-y-1 hover:border-foreground/30 transition-colors"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block font-semibold">
                  {item.label}
                </span>
                <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View Controls & Format Selector */}
        <motion.div variants={fadeUpItem} className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Display Mode:
            </span>
            <div className="inline-flex rounded-lg border border-border bg-card p-1">
              <button
                type="button"
                onClick={() => setViewMode("image")}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                  viewMode === "image"
                    ? "bg-accent text-accent-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Eye className="inline-block mr-1.5 h-3.5 w-3.5" /> High-Res Preview
              </button>
              <button
                type="button"
                onClick={() => setViewMode("pdf")}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                  viewMode === "pdf"
                    ? "bg-accent text-accent-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <FileText className="inline-block mr-1.5 h-3.5 w-3.5" /> Native PDF Reader
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Fullscreen Dialog Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="font-mono text-xs gap-1.5">
                  <Maximize2 className="h-3.5 w-3.5" /> Fullscreen Inspect
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[94vh] overflow-y-auto p-4 sm:p-6">
                <DialogHeader className="mb-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div>
                      <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                        Document Inspector
                      </span>
                      <DialogTitle className="font-display text-xl sm:text-2xl font-bold mt-1">
                        {personal.name} — Technical Resume
                      </DialogTitle>
                    </div>
                    {/* Zoom Controls inside modal */}
                    <div className="flex items-center gap-1.5 bg-secondary/80 p-1 rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setModalZoom((z) => Math.max(0.75, z - 0.25))}
                        title="Zoom Out"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <span className="font-mono text-xs px-2 min-w-[3.5rem] text-center">
                        {Math.round(modalZoom * 100)}%
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setModalZoom((z) => Math.min(2.0, z + 0.25))}
                        title="Zoom In"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setModalZoom(1)}
                        title="Reset Zoom"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <DialogDescription className="font-mono text-xs text-muted-foreground mt-1">
                    Official original document rendered from vector PDF at 216 DPI (US Letter).
                  </DialogDescription>
                </DialogHeader>

                <div className="rounded-xl overflow-auto border border-border bg-black/60 p-2 sm:p-4 flex justify-center">
                  <img
                    src={resumeData.previewImage}
                    alt="Maaz Korejo Full Resume"
                    style={{ transform: `scale(${modalZoom})`, transformOrigin: "top center" }}
                    className="w-full h-auto object-contain max-w-4xl transition-transform duration-150 shadow-2xl rounded"
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-4 flex-wrap">
                  <span className="font-mono text-xs text-muted-foreground">
                    Format: PDF · 1 Page · High DPI
                  </span>
                  <Button asChild size="sm" className="font-mono text-xs gap-1.5">
                    <a href={resumeData.pdfUrl} download={resumeData.filename}>
                      <Download className="h-3.5 w-3.5" /> Download PDF ({resumeData.filename})
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <a
              href={resumeData.pdfUrl}
              download={resumeData.filename}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline px-2 py-1"
            >
              <Download className="h-3.5 w-3.5" /> Download (.pdf)
            </a>
          </div>
        </motion.div>

        {/* FULL PAGE RESUME VIEWER */}
        <motion.div
          variants={fadeUpItem}
          className="relative rounded-2xl border border-border bg-card p-3 sm:p-6 lg:p-8 shadow-xl overflow-hidden"
        >
          {/* Document Top Bar */}
          <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-border font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2 min-w-0">
              <span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-foreground truncate">
                {resumeData.filename}
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="hidden sm:inline">1 Page (US Letter)</span>
            </div>
            <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex-shrink-0">
              Vector Verified
            </span>
          </div>

          {/* Viewer Container */}
          {viewMode === "image" ? (
            <div className="group relative rounded-xl overflow-hidden border border-border/80 bg-background/50 shadow-2xl max-w-4xl mx-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer relative">
                    <img
                      src={resumeData.previewImage}
                      alt="Muhammad Maaz Korejo Official Resume - AI Engineer & Backend Systems Developer"
                      className="w-full h-auto object-contain block mx-auto transition-transform duration-200 group-hover:scale-[1.005]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-mono text-xs font-semibold shadow-lg">
                        <Maximize2 className="h-4 w-4" /> Click to Inspect in Fullscreen Zoom
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[94vh] overflow-y-auto p-4 sm:p-6">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="font-display text-xl sm:text-2xl font-bold">
                      {personal.name} — Technical Resume
                    </DialogTitle>
                    <DialogDescription className="font-mono text-xs text-muted-foreground">
                      Full-page verified technical curriculum vitae.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="rounded-xl overflow-auto border border-border bg-black/60 p-2 sm:p-4 flex justify-center">
                    <img
                      src={resumeData.previewImage}
                      alt="Maaz Korejo Full Resume"
                      className="w-full h-auto object-contain max-w-4xl shadow-2xl rounded"
                    />
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-4 flex-wrap">
                    <span className="font-mono text-xs text-muted-foreground">
                      Format: PDF · 1 Page · High DPI
                    </span>
                    <Button asChild size="sm" className="font-mono text-xs gap-1.5">
                      <a href={resumeData.pdfUrl} download={resumeData.filename}>
                        <Download className="h-3.5 w-3.5" /> Download PDF
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ) : (
            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border bg-background shadow-2xl">
              <iframe
                src={`${resumeData.pdfUrl}#view=FitH`}
                title="Muhammad Maaz Korejo Official Resume"
                className="w-full h-[850px] md:h-[1050px] border-none"
              />
            </div>
          )}

          {/* Bottom helper info */}
          <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
            <span>
              Direct PDF: <a href={resumeData.pdfUrl} target="_blank" rel="noreferrer" className="text-accent underline">maaz-korejo-resume.pdf</a>
            </span>
            <div className="flex items-center gap-3">
              <a
                href={resumeData.pdfUrl}
                download={resumeData.filename}
                className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-accent transition-colors"
              >
                <Download className="h-3.5 w-3.5" /> Download File
              </a>
              <span className="text-border">•</span>
              <a
                href={resumeData.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-accent transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Fullscreen View
              </a>
            </div>
          </div>
        </motion.div>

        {/* Detailed Section Breakdown Tabs (For Screen-Readers & Fast Copy) */}
        <motion.div variants={fadeUpItem} className="pt-4">
          <div className="mb-4">
            <h4 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Detailed Resume Breakdown.
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Structured text extracted directly from the verified single-page resume document.
            </p>
          </div>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 h-auto p-1 bg-card border border-border rounded-xl">
              <TabsTrigger value="skills" className="font-mono text-xs py-2">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Skills
              </TabsTrigger>
              <TabsTrigger value="experience" className="font-mono text-xs py-2">
                <Briefcase className="mr-1.5 h-3.5 w-3.5" /> Experience
              </TabsTrigger>
              <TabsTrigger value="projects" className="font-mono text-xs py-2">
                <FolderGit2 className="mr-1.5 h-3.5 w-3.5" /> Projects
              </TabsTrigger>
              <TabsTrigger value="education" className="font-mono text-xs py-2">
                <GraduationCap className="mr-1.5 h-3.5 w-3.5" /> Education
              </TabsTrigger>
            </TabsList>

            {/* Technical Skills Tab */}
            <TabsContent value="skills" className="mt-4">
              <div className="rounded-xl border border-border bg-card p-5 sm:p-7 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {resumeData.technicalSkillsCategories.map((cat) => (
                    <div key={cat.name} className="rounded-lg border border-border/80 bg-background/60 p-4">
                      <h5 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2.5">
                        {cat.name}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-card text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="mt-4">
              <div className="rounded-xl border border-border bg-card p-5 sm:p-7 space-y-6">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-6 border-t border-border" : ""}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                      <div>
                        <h5 className="font-display text-base sm:text-lg font-bold text-foreground">
                          {exp.org}
                        </h5>
                        <p className="font-mono text-xs text-accent font-semibold">{exp.role}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-4">
              <div className="rounded-xl border border-border bg-card p-5 sm:p-7 space-y-6">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-6 border-t border-border" : ""}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h5 className="font-display text-base sm:text-lg font-bold text-foreground">
                        {proj.name}
                      </h5>
                      <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground self-start sm:self-auto">
                        {proj.badge}
                      </span>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Education & Certifications Tab */}
            <TabsContent value="education" className="mt-4">
              <div className="rounded-xl border border-border bg-card p-5 sm:p-7 space-y-6">
                <div>
                  <h5 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2">
                    Academic Degree
                  </h5>
                  <div className="rounded-lg border border-border/80 bg-background/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h6 className="font-display font-bold text-base text-foreground">
                        University of Sindh, Jamshoro
                      </h6>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Bachelor of Science in Information Technology (6th Semester)
                      </p>
                    </div>
                    <span className="font-mono text-xs text-accent">Feb 2024 – Dec 2027</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-3">
                    Top Verified Credentials &amp; Certifications
                  </h5>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-lg border border-border bg-background/60 p-3.5 space-y-1">
                      <span className="font-mono text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Anthropic
                      </span>
                      <p className="text-xs text-muted-foreground">
                        12 Verified Credentials (MCP, Claude Code CLI, Subagents, Agent Skills, API Architecture)
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-background/60 p-3.5 space-y-1">
                      <span className="font-mono text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Google
                      </span>
                      <p className="text-xs text-muted-foreground">
                        Google AI Essentials Specialization (5-Course Certificate on Coursera)
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-background/60 p-3.5 space-y-1">
                      <span className="font-mono text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> The Linux Foundation
                      </span>
                      <p className="text-xs text-muted-foreground">
                        Open Source Dev &amp; Linux Administration (LFC102)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </Section>
  );
}
