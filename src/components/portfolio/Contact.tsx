import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      id="contact"
      eyebrow="06 / Connect & Collaborate"
      title="Let's build something robust."
      description="Open for AI developer positions, backend engineering internships, technical collaborations, and research inquiries."
    >
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Direct Contact Channels
          </div>
          <span className="font-mono text-xs text-muted-foreground">Fast Response Guaranteed</span>
        </div>

        <div className="space-y-4 pt-2">
          {/* Email Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3.5 group min-w-0"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                  {personal.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={copyEmail}
                className="font-mono text-xs gap-1.5 h-8 px-3"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </Button>
              <Button
                asChild
                size="sm"
                className="font-mono text-xs gap-1.5 h-8 px-3"
              >
                <a href={`mailto:${personal.email}`}>
                  Send Email <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-border bg-background hover:border-foreground/30 transition-all">
            <a
              href={`tel:${personal.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3.5 group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {personal.phone}
                </p>
              </div>
            </a>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="font-mono text-xs gap-1.5 h-8 px-3 self-end sm:self-auto"
            >
              <a href={`tel:${personal.phone.replace(/\s/g, "")}`}>
                Call / Dial <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* Location Card */}
          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-border bg-background">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-muted-foreground flex-shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="text-sm font-semibold text-foreground">{personal.location}</p>
            </div>
          </div>
        </div>

        {/* Social Profiles */}
        <div className="pt-6 border-t border-border">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">
            Connect on GitHub &amp; LinkedIn:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-2.5 font-mono text-xs font-semibold text-foreground hover:border-foreground/40 hover:bg-secondary transition-all"
            >
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-2.5 font-mono text-xs font-semibold text-foreground hover:border-foreground/40 hover:bg-secondary transition-all"
            >
              <Github className="h-4 w-4 text-foreground" />
              <span>GitHub (@Maazkorejo)</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
