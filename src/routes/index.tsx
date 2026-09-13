import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Accessibility,
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroAsset from "@/assets/hero_Wifey_laundry.png.asset.json";
import bedAsset from "@/assets/Wifey_BedMaking2.png.asset.json";
import cleaningAsset from "@/assets/Wifey_cleaning.png.asset.json";
import dishesAsset from "@/assets/Wifey_Dishes2.png.asset.json";
import organisingAsset from "@/assets/Wifey_Home_Organization2.png.asset.json";
import ironingAsset from "@/assets/Wifey_Ironining2.png.asset.json";
import logoAsset from "@/assets/Hire_A_Wifey_Logo_client_one_png-01-removebg-preview.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hire a Wifey | Home Help in Hervey Bay" },
      { name: "description", content: "Book trusted cleaning, laundry, bed-making, organising and meal prep across Hervey Bay." },
      { property: "og:title", content: "Hire a Wifey | Hervey Bay Home Help" },
      { property: "og:description", content: "Reclaim your free time with friendly, reliable home help in Hervey Bay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Cleaning", caption: "A fresh, beautifully cared-for home.", image: cleaningAsset.url },
  { title: "Laundry", caption: "Washed, folded and off your list.", image: heroAsset.url },
  { title: "Ironing", caption: "Crisp clothes without the chore.", image: ironingAsset.url },
  { title: "Bed-making", caption: "Hotel-fresh comfort at home.", image: bedAsset.url },
  { title: "Organising", caption: "Calm, practical spaces that work.", image: organisingAsset.url },
  { title: "Meal Prep", caption: "A helping hand around the kitchen.", image: dishesAsset.url },
];

const faqs = [
  ["What areas do you service?", "We help households across Hervey Bay and nearby surrounds."],
  ["Can I book regular home help?", "Yes. Choose ongoing weekly or fortnightly support, or arrange a one-off visit."],
  ["Do you support NDIS and DVA clients?", "Yes. Our friendly team proudly supports both NDIS and DVA clients."],
  ["Can I choose the services I need?", "Absolutely. We tailor each visit around the home tasks that would help you most."],
];

function HomePage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="overflow-x-hidden pb-16 md:pb-0">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/20">
        <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="#top" aria-label="Hire a Wifey home" className="min-w-0">
            <img src={logoAsset.url} alt="Hire a Wifey" className="h-14 w-auto max-w-[9rem] object-contain brightness-0 invert" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-semibold text-primary-foreground md:flex">
            <a href="#top" className="transition-colors hover:text-blush">Home</a>
            <a href="#services" className="transition-colors hover:text-blush">Services</a>
            <a href="#support" className="transition-colors hover:text-blush">NDIS & Veterans</a>
            <a href="#reviews" className="transition-colors hover:text-blush">Reviews</a>
            <a href="#contact" className="transition-colors hover:text-blush">Contact</a>
          </nav>
          <Button asChild variant="hero" className="h-11 rounded-full px-5 md:hidden">
            <Link to="/book">Book now</Link>
          </Button>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[680px] items-end overflow-hidden bg-charcoal md:min-h-[740px] md:items-center">
        <img src={heroAsset.url} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-30 blur-sm" />
        <img src={heroAsset.url} alt="Hire a Wifey team member folding laundry in a Hervey Bay home" className="absolute inset-0 h-full w-full object-contain object-top md:object-right" />
        <div className="hero-overlay absolute inset-0" />
        <div className="section-shell relative z-10 pb-16 pt-32 md:pb-0">
          <div className="max-w-2xl text-primary-foreground">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blush">
              <Sparkles className="h-4 w-4" /> Hervey Bay home help
            </p>
            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">We Take Care of Home</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-primary-foreground/85 sm:text-lg">Reclaim your free time — we handle cleaning, laundry & more.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" className="h-13 rounded-full px-7 text-base font-bold">
                <Link to="/book">Book a Wifey <ArrowRight /></Link>
              </Button>
              <Button asChild variant="heroOutline" className="h-13 rounded-full px-7 text-base font-bold">
                <a href="#contact">Ask a Question</a>
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-primary-foreground/80">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blush" /> Reliable local team</span>
              <span className="flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-blush" /> Care tailored to you</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-background py-20 md:py-28">
        <div className="section-shell">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">How we help</p>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal sm:text-4xl">Our Services</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Practical help for a home that feels lighter, calmer and cared for.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {services.map((service) => (
              <article key={service.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <div className="aspect-[2/3] overflow-hidden bg-muted">
                  <img src={service.image} alt={`Hire a Wifey ${service.title.toLowerCase()} service`} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-charcoal sm:text-lg">{service.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">{service.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="bg-charcoal py-18 text-primary-foreground md:py-20">
        <div className="section-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blush">Inclusive support</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">NDIS & Veterans</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-primary-foreground/75">We proudly support NDIS and DVA clients with respectful, dependable help at home.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <Accessibility className="h-9 w-9 text-blush" />
              <p className="mt-4 font-display text-lg font-bold">NDIS support</p>
            </div>
            <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <BadgeCheck className="h-9 w-9 text-blush" />
              <p className="mt-4 font-display text-lg font-bold">DVA clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blush-soft py-16 md:py-20">
        <div className="section-shell grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <MapPin className="h-12 w-12" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Right around the corner</p>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal sm:text-4xl">Hervey Bay Service Area</h2>
            <p className="mt-3 text-lg text-muted-foreground">Serving all of Hervey Bay and surrounds.</p>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-background py-20 md:py-28">
        <div className="section-shell">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Kind words</p>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal sm:text-4xl">Reviews</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            {["I came home to everything beautifully done. Friendly, thoughtful and such a relief.", "Reliable, warm and wonderfully thorough. I finally have my weekends back."].map((quote, index) => (
              <figure key={quote} className="rounded-lg border border-border bg-card p-7 shadow-sm">
                <Quote className="h-7 w-7 text-primary" />
                <div className="mt-5 flex gap-1" aria-label="Five stars">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <blockquote className="mt-4 text-base leading-7 text-charcoal">“{quote}”</blockquote>
                <figcaption className="mt-5 text-sm font-bold text-muted-foreground">{index === 0 ? "— Local Hervey Bay client" : "— Regular home-help client"}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-24">
        <div className="section-shell grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Good to know</p>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(([question, answer], index) => (
              <AccordionItem value={`faq-${index}`} key={question}>
                <AccordionTrigger className="py-5 font-display text-base font-bold text-charcoal hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="max-w-xl leading-6 text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/75">Join the team</p>
            <h2 className="mt-2 text-3xl font-extrabold">Love making homes happier?</h2>
            <p className="mt-2 text-primary-foreground/80">Bring your care, energy and eye for detail.</p>
          </div>
          <Button asChild variant="heroOutline" className="h-12 self-start rounded-full px-7 font-bold">
            <Link to="/careers">Become a Wifey <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <section id="contact" className="bg-background py-20 md:py-28">
        <div className="section-shell">
          <div className="grid overflow-hidden rounded-lg border border-border bg-card shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-9 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Let’s chat</p>
              <h2 className="mt-3 text-3xl font-extrabold text-charcoal">Ask a Question</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Tell us what would make home life easier.</p>
              <form onSubmit={submit} className="mt-7 grid gap-4">
                <label className="grid gap-2 text-sm font-bold text-charcoal">Name<Input required name="name" className="h-11" /></label>
                <label className="grid gap-2 text-sm font-bold text-charcoal">Email<Input required name="email" type="email" className="h-11" /></label>
                <label className="grid gap-2 text-sm font-bold text-charcoal">Message<Textarea required name="message" className="min-h-28" /></label>
                <Button variant="hero" className="mt-1 h-12 justify-self-start rounded-full px-7 font-bold">Send enquiry <ArrowRight /></Button>
                {sent && <p role="status" className="text-sm font-semibold text-trust">Thanks — your enquiry is ready for the team.</p>}
              </form>
            </div>
            <div className="min-h-72 bg-muted lg:min-h-full">
              <iframe title="Map of Hervey Bay service area" src="https://www.google.com/maps?q=Hervey%20Bay%2C%20Queensland%2C%20Australia&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-72 w-full border-0" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal pb-10 pt-14 text-primary-foreground">
        <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">
          <div className="max-w-sm">
            <img src={logoAsset.url} alt="Hire a Wifey" className="h-16 w-auto max-w-[10rem] object-contain brightness-0 invert" />
            <p className="mt-4 text-sm leading-6 text-primary-foreground/70">Friendly, reliable home help for households across Hervey Bay and nearby surrounds.</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold"><MapPin className="h-4 w-4 shrink-0 text-blush" /> Hervey Bay, Queensland</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-blush">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-3 text-sm text-primary-foreground/75">
              <a href="#top" className="hover:text-blush">Home</a>
              <a href="#services" className="hover:text-blush">Services</a>
              <a href="#reviews" className="hover:text-blush">Reviews</a>
              <a href="#contact" className="hover:text-blush">Contact</a>
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-blush">Our support</h2>
            <div className="mt-4 grid gap-3 text-sm text-primary-foreground/75">
              <a href="#support" className="hover:text-blush">NDIS support</a>
              <a href="#support" className="hover:text-blush">DVA clients</a>
              <span>Weekly & fortnightly help</span>
              <span>One-off visits</span>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-blush">Get started</h2>
            <div className="mt-4 grid gap-3 text-sm text-primary-foreground/75">
              <Link to="/book" className="font-bold text-primary-foreground hover:text-blush">Book a Wifey</Link>
              <Link to="/careers" className="hover:text-blush">Become a Wifey</Link>
              <a href="#contact" className="hover:text-blush">Ask a question</a>
            </div>
          </div>
        </div>
        <div className="section-shell mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">
          <p>© 2026 Hire a Wifey. We take care of home.  All rights reserved. Developed by Zannatul.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-strong bg-primary p-2 md:hidden">
        <Button asChild variant="hero" className="h-12 w-full rounded-md text-base font-bold shadow-none">
          <Link to="/book">Book Now <ArrowRight /></Link>
        </Button>
      </div>
    </main>
  );
}
