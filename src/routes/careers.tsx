import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [
    { title: "Careers | Hire a Wifey Hervey Bay" },
    { name: "description", content: "Join the friendly Hire a Wifey home-help team in Hervey Bay." },
    { property: "og:title", content: "Careers | Hire a Wifey" },
    { property: "og:description", content: "Bring your care, energy and eye for detail to our Hervey Bay team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: CareersPage,
});

function CareersPage() {
  return <main className="grid min-h-screen place-items-center bg-charcoal px-5 py-16 text-primary-foreground">
    <section className="w-full max-w-xl text-center">
      <HeartHandshake className="mx-auto h-12 w-12 text-blush" />
      <h1 className="mt-5 text-3xl font-extrabold">Become a Wifey</h1>
      <p className="mt-4 leading-7 text-primary-foreground/70">If you’re reliable, caring and take pride in a beautifully looked-after home, we’d love to hear from you.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="hero" className="h-12 rounded-full px-7"><Link to="/" hash="contact">Contact the team</Link></Button>
        <Button asChild variant="heroOutline" className="h-12 rounded-full px-7"><Link to="/"><ArrowLeft /> Back home</Link></Button>
      </div>
    </section>
  </main>;
}