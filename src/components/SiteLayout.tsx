import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import { info } from "@/lib/menu";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-display text-2xl font-semibold tracking-wide text-gold">
            Pindi
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={info.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" /> Reserve
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="uppercase tracking-[0.2em]">
                {l.label}
              </Link>
            ))}
            <a href={info.phoneHref} className="text-gold">Call {info.phone}</a>
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl text-gold">Pindi</p>
            <p className="mt-2 text-sm text-muted-foreground">Pandara Road's beloved North Indian kitchen.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="mb-2 uppercase tracking-[0.2em] text-foreground">Find us</p>
            <p>{info.address}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="mb-2 uppercase tracking-[0.2em] text-foreground">Hours & contact</p>
            <p>{info.hours}</p>
            <a href={info.phoneHref} className="text-gold">{info.phone}</a>
          </div>
        </div>
        <p className="pb-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Pindi Restaurant, New Delhi</p>
      </footer>
    </div>
  );
}
