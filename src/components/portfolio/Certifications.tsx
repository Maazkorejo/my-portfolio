import { Section } from "./Section";
import { certifications, certificateImages } from "@/data/portfolio";
import { Award, Download } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { staggerContainer, fadeUpItem, viewportOnce, viewportOnceTight } from "@/lib/motion";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 / Credentials"
      title="Certifications & achievements."
      description="8 Anthropic-verified credentials plus programs from IBM, McKinsey, HEC/NAVTTC, HP LIFE, Forage, Simplilearn, UniAthena and PITP–MUET."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid md:grid-cols-3 gap-4 mb-12"
      >
        {certifications.map((c) => (
          <motion.div
            key={c.group}
            variants={fadeUpItem}
            whileHover={{ y: -3 }}
            className="rounded-lg border border-border bg-card p-6 hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-sm">{c.group}</h3>
            </div>
            <ul className="space-y-2">
              {c.items.map((i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div>
        <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
              Verified certificates
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              {certificateImages.length} original credentials.
            </h3>
          </div>
          <motion.a
            href="/downloads/maaz-korejo-certificates.zip"
            download="maaz-korejo-certificates.zip"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-md bg-accent text-accent-foreground hover:opacity-90"
          >
            <Download className="h-3.5 w-3.5" /> Download all (.zip)
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer(0.03)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnceTight}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {certificateImages.map((cert) => (
            <Dialog key={cert.title}>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  variants={fadeUpItem}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group text-left rounded-lg border border-border bg-card overflow-hidden hover:border-accent/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={cert.src}
                      alt={`${cert.title} — ${cert.issuer}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold leading-snug line-clamp-2">
                      {cert.title}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1 truncate">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{cert.title}</DialogTitle>
                  <DialogDescription>{cert.issuer}</DialogDescription>
                </DialogHeader>
                <img
                  src={cert.src}
                  alt={`${cert.title} — ${cert.issuer}`}
                  className="w-full h-auto rounded-md border border-border"
                />
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
