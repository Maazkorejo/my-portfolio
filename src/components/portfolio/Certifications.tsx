import { useState } from "react";
import { Section } from "./Section";
import { certifications, certificateImages } from "@/data/portfolio";
import { Award, ChevronDown, ChevronUp, Sparkles, CheckCircle2, Eye, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUpItem, viewportOnce, viewportOnceTight } from "@/lib/motion";

// Top 3 most important & prestigious certifications to display by default
const featuredTitles = [
  "Introduction to Model Context Protocol (MCP)",
  "Google AI Essentials (5-Course Specialization)",
  "Inclusive Open Source Community Orientation (LFC102)",
];

export function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Top 3 featured certificates
  const featuredCerts = certificateImages.filter((c) =>
    featuredTitles.includes(c.title)
  );
  const top3 = featuredCerts.length === 3 ? featuredCerts : certificateImages.slice(0, 3);

  return (
    <Section
      id="certifications"
      eyebrow="05 / Accredited Credentials"
      title="Verified Certifications & Honors."
      description="33 original scanned credentials across AI agent protocols, LLM engineering, open-source governance, cybersecurity, and cloud platforms."
    >
      {/* Featured Top 3 Section (Always Visible) */}
      <div className="mb-10">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
              <Sparkles className="h-3 w-3" /> Featured Credentials
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              {isExpanded ? `Showing all ${certificateImages.length}` : `Displaying 3 spotlight credentials`}
            </span>
          </div>
        </div>

        {/* 3 Featured Spotlight Cards */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6"
        >
          {top3.map((cert, index) => (
            <Dialog key={cert.title}>
              <DialogTrigger asChild>
                <motion.div
                  variants={fadeUpItem}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card hover:border-foreground/30 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg">
                        <Eye className="h-3.5 w-3.5" /> View Certificate
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] text-accent font-semibold flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> {cert.issuer}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-border bg-background text-muted-foreground">
                          Featured #{index + 1}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-foreground group-hover:text-accent transition-colors leading-snug">
                        {cert.title}
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Verified Document</span>
                      <span className="text-accent group-hover:underline">Inspect &rarr;</span>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-4 sm:p-6">
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="text-border">•</span>
                    <span className="font-mono text-xs text-muted-foreground">Verified Accredited Credential</span>
                  </div>
                  <DialogTitle className="font-display text-xl sm:text-2xl font-bold">{cert.title}</DialogTitle>
                  <DialogDescription className="font-mono text-xs text-muted-foreground">
                    Official original certificate document issued to Muhammad Maaz Korejo.
                  </DialogDescription>
                </DialogHeader>
                <div className="rounded-xl overflow-hidden border border-border bg-muted/20">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain max-h-[70vh] mx-auto"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>

        {/* Dropdown Action Bar Button */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group font-mono text-xs uppercase tracking-wider font-semibold border-border hover:border-foreground/40 gap-2.5 px-6"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5" />
                <span>Collapse to Top 3 Credentials</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 text-accent transition-transform group-hover:translate-y-0.5" />
                <span>View All 33 Certifications &amp; Credential Groups</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Animated Dropdown Expansion Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden space-y-16 pt-8 border-t border-border"
          >
            {/* Categorized Groups */}
            <div className="space-y-12">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  Credential Groups &amp; Issuing Bodies
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((group) => (
                  <div
                    key={group.category}
                    className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-5"
                  >
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div className="flex items-center gap-2.5">
                        <Award className="h-4 w-4 text-accent" />
                        <h4 className="font-display font-bold text-base sm:text-lg">{group.category}</h4>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-border bg-background text-muted-foreground">
                        {group.items.length} certs
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                          <span className="text-foreground leading-snug flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{item.name}</span>
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground flex-shrink-0 bg-background px-2 py-0.5 rounded border border-border/80">
                            {item.issuer}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete 32 Certificates Visual Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    All 32 Verified Original Certificates
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click any certificate to open high-resolution verified view.
                  </p>
                </div>
              </div>

              <motion.div
                variants={staggerContainer(0.03)}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {certificateImages.map((cert) => (
                  <Dialog key={cert.title}>
                    <DialogTrigger asChild>
                      <motion.div
                        variants={fadeUpItem}
                        whileHover={{ y: -3, transition: { duration: 0.18 } }}
                        className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card hover:border-accent/60 transition-all flex flex-col justify-between"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-accent text-accent-foreground font-semibold">
                              Inspect
                            </span>
                          </div>
                        </div>

                        <div className="p-3">
                          <p className="font-mono text-[10px] text-accent truncate">{cert.issuer}</p>
                          <p className="font-display font-medium text-xs text-foreground line-clamp-2 mt-0.5 leading-snug group-hover:text-accent transition-colors">
                            {cert.title}
                          </p>
                        </div>
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-4 sm:p-6">
                      <DialogHeader className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                            {cert.issuer}
                          </span>
                          <span className="text-border">•</span>
                          <span className="font-mono text-xs text-muted-foreground">Original Document</span>
                        </div>
                        <DialogTitle className="font-display text-xl sm:text-2xl font-bold">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="rounded-xl overflow-hidden border border-border bg-muted/20">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-auto object-contain max-h-[70vh] mx-auto"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
