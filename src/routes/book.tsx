import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOriginal from "@/assets/img/Hire_A_Wifey_Logo_transparent.png";

export const Route = createFileRoute("/book")({
  head: () => ({ meta: [
    { title: "Book Home Help | Hire a Wifey" },
    { name: "description", content: "Start your Hire a Wifey home-help booking in Hervey Bay." },
    { property: "og:title", content: "Book Home Help | Hire a Wifey" },
    { property: "og:description", content: "Start your friendly home-help booking in Hervey Bay." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: BookPage,
});

function BookPage() {
  return <main className="grid min-h-screen place-items-center bg-blush-soft px-5 py-16">
    <section className="w-full max-w-xl rounded-lg border border-border bg-card p-8 text-center shadow-lg sm:p-12">
      <Link to="/" className="inline-block mb-4 transition-opacity hover:opacity-85">
        <img src={logoOriginal} alt="Hire a Wifey" className="mx-auto h-16 w-auto object-contain" />
      </Link>
      <h1 className="mt-2 text-3xl font-extrabold text-charcoal">Book a Wifey</h1>
      <p className="mt-4 leading-7 text-muted-foreground">Tell us what help you need through the enquiry form and our Hervey Bay team will be in touch.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="hero" className="h-12 rounded-full px-7"><Link to="/" hash="contact">Start an enquiry</Link></Button>
        <Button asChild variant="outline" className="h-12 rounded-full px-7"><Link to="/"><ArrowLeft /> Back home</Link></Button>
      </div>
    </section>
  </main>;
}