import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { info } from "@/lib/menu";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Reserve — Pindi Restaurant, Pandara Road" },
      { name: "description", content: "Find Pindi Restaurant at 16 Pandara Road, New Delhi. Open till 1 am. Call 098187 39131 to reserve." },
      { property: "og:title", content: "Visit Pindi Restaurant" },
      { property: "og:description", content: "16 Pandara Road, New Delhi · Open till 1 am · Call to reserve." },
      { name: "keywords", content: "Pindi Restaurant address, Pindi Pandara Road, restaurant reservations New Delhi, directions" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows = [
    { Icon: MapPin, label: "Address", value: info.address, href: info.mapsUrl },
    { Icon: Phone, label: "Reservations", value: info.phone, href: info.phoneHref },
    { Icon: Clock, label: "Hours", value: info.hours },
  ];
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-32 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Visit us</p>
          <h1 className="mt-3 font-display text-6xl">Come hungry</h1>
          <div className="mt-10 space-y-8">
            {rows.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block text-lg hover:text-gold">{value}</a>
                  ) : (
                    <p className="mt-1 text-lg">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={info.phoneHref} className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90">Call to reserve</a>
            <a href={info.reserveUrl} target="_blank" rel="noreferrer" className="rounded-md border border-gold px-6 py-3 font-medium text-gold hover:bg-gold hover:text-gold-foreground">Book on Dineout</a>
            <a href={info.mapsUrl} target="_blank" rel="noreferrer" className="rounded-md border border-border px-6 py-3 font-medium hover:border-foreground">Directions</a>
          </div>
        </div>
        <iframe title="Map to Pindi Restaurant" src={info.mapEmbed} className="h-[480px] w-full rounded-lg border border-border" loading="lazy" />
      </section>
    </SiteLayout>
  );
}
