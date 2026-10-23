import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { chineseMenu } from "@/lib/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pindi Restaurant, New Delhi" },
      { name: "description", content: "Explore soups and Indo-Chinese vegetarian and non-vegetarian starters at Pindi Restaurant, Pandara Road, New Delhi, with menu prices." },
      { property: "og:title", content: "Menu — Pindi Restaurant" },
      { property: "og:description", content: "Soups and appetizers at Pindi, Pandara Road, with prices." },
      { name: "keywords", content: "Pindi Restaurant menu, Indo-Chinese food Delhi, vegetarian starters, chicken soup, Pandara Road" },
    ],
  }),
  component: MenuPage,
});

type Filter = "all" | "veg" | "nonveg";

function MenuPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const sections = chineseMenu.filter((s) => filter === "all" || (filter === "veg" ? s.veg : !s.veg));
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-5 pb-24 pt-32">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-gold">Chinese</p>
        <h1 className="mt-3 text-center font-display text-6xl">Our Menu</h1>
        <div className="mt-10 flex justify-center gap-2">
          {(["all", "veg", "nonveg"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                filter === f ? "border-gold bg-gold text-gold-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "all" ? "All" : f === "veg" ? "Vegetarian" : "Non-veg"}
            </button>
          ))}
        </div>
        <div className="mt-14 space-y-16">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="flex items-center gap-3 font-display text-3xl">
                <span className={`inline-block h-3 w-3 rounded-sm border-2 ${s.veg ? "border-accent" : "border-primary"}`} />
                {s.title}
              </h2>
              <ul className="mt-6 divide-y divide-border">
                {s.items.map((it) => (
                  <li key={it.name} className="flex items-baseline justify-between gap-4 py-3">
                    <span>{it.name}</span>
                    <span className="font-display text-xl text-gold">₹{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-muted-foreground">Prices in INR. Taxes as applicable.</p>
      </section>
    </SiteLayout>
  );
}
