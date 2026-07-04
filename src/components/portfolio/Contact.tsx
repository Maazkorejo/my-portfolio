import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personal } from "@/data/portfolio";
import { Mail, Phone, Github, Linkedin, MapPin, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Placeholder: wire to backend / email service later.
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thanks — I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setSubmitting(false);
    setSent(true);
    setTimeout(() => setSent(false), 1800);
  };

  return (
    <Section
      id="contact"
      eyebrow="07 / Contact"
      title="Let's build something."
      description="Open to internships, contract work, and interesting collaborations."
    >
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          <a href={`mailto:${personal.email}`} className="flex items-start gap-3 group">
            <div className="rounded-md bg-accent/10 p-2 text-accent"><Mail className="h-4 w-4" /></div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="text-sm group-hover:text-accent transition-colors">{personal.email}</p>
            </div>
          </a>
          <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 group">
            <div className="rounded-md bg-accent/10 p-2 text-accent"><Phone className="h-4 w-4" /></div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
              <p className="text-sm group-hover:text-accent transition-colors">{personal.phone}</p>
            </div>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-start gap-3 group">
            <div className="rounded-md bg-accent/10 p-2 text-accent"><Linkedin className="h-4 w-4" /></div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="text-sm group-hover:text-accent transition-colors">muhammad-maaz-korejo</p>
            </div>
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-start gap-3 group">
            <div className="rounded-md bg-accent/10 p-2 text-accent"><Github className="h-4 w-4" /></div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="text-sm group-hover:text-accent transition-colors">Maazkorejo</p>
            </div>
          </a>
          <div className="flex items-start gap-3">
            <div className="rounded-md bg-accent/10 p-2 text-accent"><MapPin className="h-4 w-4" /></div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="text-sm">{personal.location}</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 rounded-lg border border-border bg-card p-6 space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="mt-1.5"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="mt-1.5"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="mt-1.5"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit" disabled={submitting || sent} className="w-full sm:w-auto relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2"
                >
                  <Check className="h-4 w-4" /> Sent
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {submitting ? "Sending..." : "Send message"}
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </form>
      </div>
    </Section>
  );
}
