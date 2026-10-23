import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Flame, Sun, UtensilsCrossed } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { info } from "@/lib/menu";
import hero from "@/assets/hero.jpg";
import food from "@/assets/food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pindi Restaurant — North Indian Dining on Pandara Road, Delhi" },
      { name: "description", content: "Classic North Indian and Indo-Chinese food at Pindi, Pandara Road, New Delhi. Rooftop seating, fireplace, open till 1 am." },
      { property: "og:title", content: "Pindi Restaurant — Pandara Road, Delhi" },
      { property: "og:description", content: "Classic North Indian dining. Rooftop seating, fireplace, open till 1 am." },
      { name: "twitter:title", content: "Pindi Restaurant | North Indian Dining in New Delhi" },
      { name: "twitter:description", content: "Discover tandoor favourites and late-night dining on Pandara Road, New Delhi." },
      { name: "keywords", content: "Pindi Restaurant, North Indian restaurant Delhi, Pandara Road restaurants, Indian food New Delhi, tandoori" },
    ],
  }),
  component: Index,
});

const icons = [UtensilsCrossed, Sun, Flame] as const;

function Index() {
  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: info.name,
        servesCuisine: ["North Indian", "Indo-Chinese"],
        telephone: "+919818739131",
        address: {
          "@type": "PostalAddress",
          streetAddress: "16, Pandara Road, Pandara Flats, Market",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110003",
          addressCountry: "IN",
        },
        hasMap: info.mapsUrl,
      }) }} />
      <section className="relative flex min-h-screen items-end">
        <img src={hero} alt="Pindi Restaurant dining room" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 md:pb-28">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-foreground/80">North Indian & Indo-Chinese · Pandara Road</p>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold">
            <Star className="h-4 w-4 fill-current" /> {info.rating} · {info.reviews} reviews
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">Pindi Restaurant</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Rich gravies, smoky tandoor and late-night comfort on Pandara Road, New Delhi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={info.phoneHref} className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">
              Reserve a table
            </a>
            <Link to="/menu" className="rounded-md border border-gold px-6 py-3 font-medium text-gold hover:bg-gold hover:text-gold-foreground">
              View menu
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {info.features.map((f, i) => {
          const Icon = icons[i]!;
          return (
            <div key={f} className="rounded-lg border border-border bg-card p-8">
              <Icon className="h-7 w-7 text-gold" />
              <p className="mt-4 font-display text-2xl">{f}</p>
            </div>
          );
        })}
      </section>

      <section className="section-pad mx-auto grid max-w-6xl items-center gap-12 px-5 pt-0 md:grid-cols-2">
        <img src={food} alt="North Indian dishes" loading="lazy" width={1200} height={912} className="rounded-lg" />
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Our kitchen</p>
          <h2 className="mt-3 font-display text-5xl">A Delhi favourite</h2>
          <p className="mt-5 text-muted-foreground">
            From hearty North Indian classics to fiery Indo-Chinese starters, Pindi has been feeding
            Pandara Road's late-night crowd for years. Settle in by the fireplace or head up to the rooftop.
          </p>
          <Link to="/menu" className="mt-8 inline-block text-gold underline underline-offset-4">Explore the menu →</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
