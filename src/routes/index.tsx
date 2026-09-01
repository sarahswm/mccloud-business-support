import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Building2, Clock, Users } from "lucide-react";

import logo from "@/assets/mccloud-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TITLE = "Contact McCloud Business & Taxation Management | West Perth";
const DESCRIPTION =
  "Enquire with McCloud Business & Taxation Management, accountants and tax agents in West Perth WA. Call +61 8 9381 4041 or send an online enquiry.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const services = [
  "Individual tax returns",
  "Business & company tax",
  "BAS, GST & bookkeeping",
  "SMSF & superannuation",
  "Business advisory",
  "Other enquiry",
];

function ContactPage() {
  const [service, setService] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setService("");
      toast.success("Enquiry sent", {
        description: "Thanks — we'll be in touch within one business day.",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <img
            src={logo}
            alt="McCloud Business & Taxation Management logo"
            className="h-14 w-auto"
          />
          <a
            href="tel:+61893814041"
            className="text-sm font-medium tracking-wide text-primary hover:text-accent"
          >
            +61 8 9381 4041
          </a>
        </div>
      </header>

      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            West Perth, Western Australia
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Contact our accounting &amp; taxation team
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Send an enquiry and one of our advisors will respond within one
            business day. New clients are always welcome.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-2xl">Enquiry form</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fields marked with * are required.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Business name</Label>
                <Input id="company" name="company" autoComplete="organization" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">How can we help? *</Label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your enquiry *</Label>
              <Textarea id="message" name="message" required rows={6} />
            </div>

            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? "Sending…" : "Send enquiry"}
            </Button>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-serif text-2xl">Our details</h2>
            <ul className="mt-5 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>
                  13/4 Ventnor Avenue
                  <br />
                  West Perth WA 6005
                </span>
              </li>
              <li className="flex gap-3">
                <Building2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>PO Box 377, West Perth WA 6872</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                <a href="tel:+61893814041" className="hover:text-primary">
                  +61 8 9381 4041
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
                <a
                  href="mailto:sarah@swmccloud.com.au"
                  className="hover:text-primary"
                >
                  Sarah Bell — sarah@swmccloud.com.au
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>Monday – Friday, 8:30am – 5:00pm AWST</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img
              src={office}
              alt="Modern accounting office in West Perth"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-serif text-lg">Our office</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Professional, client-focused environment in the heart of West
                Perth.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-secondary p-6">
            <h3 className="font-serif text-lg">Principal</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Stephen McCloud leads the practice, providing taxation, compliance
              and business advisory services to individuals and businesses across
              Perth.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <img
              src={staff}
              alt="Friendly accounting and taxation team"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-serif text-lg">Our team</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Experienced advisors ready to help with your tax and business
                needs.
              </p>
            </div>
          </div>
        </aside>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} McCloud Business &amp; Taxation
          Management — West Perth, WA
        </div>
      </footer>
    </div>
  );
}
