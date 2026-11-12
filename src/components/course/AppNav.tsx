import { Link } from "@tanstack/react-router";
import { Crosshair, Heart, Home, Shield, Swords, User, type LucideIcon } from "lucide-react";

import { useAcademy } from "@/lib/academy-store";

type Item = {
  to: "/" | "/fondamenta" | "/esperti" | "/kyusho" | "/preferiti" | "/profilo";
  label: string;
  short: string;
  icon: LucideIcon;
  tone?: string;
};

const items: Item[] = [
  { to: "/", label: "Home", short: "Home", icon: Home },
  { to: "/fondamenta", label: "Fondamenta", short: "Base", icon: Shield, tone: "text-base" },
  { to: "/esperti", label: "Esperti", short: "Esperti", icon: Swords, tone: "text-pro" },
  { to: "/kyusho", label: "Kyusho Jutsu", short: "Kyusho", icon: Crosshair, tone: "text-kyusho" },
  { to: "/preferiti", label: "Preferiti", short: "Preferiti", icon: Heart },
  { to: "/profilo", label: "Profilo", short: "Profilo", icon: User },
];

export function AppSidebar() {
  const { favorites, profile } = useAcademy();
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-sidebar-border bg-sidebar md:flex">
      <Link to="/" className="px-6 pb-8 pt-7">
        <span className="font-display text-2xl tracking-wide">
          KM<span className="text-primary">/</span>KJ
        </span>
        <span className="mt-1 block font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Streaming Academy
        </span>
      </Link>
      <nav className="flex flex-1 flex-col gap-1 px-3">
        {items.map((it, i) => (
          <div key={it.to}>
            {i === 4 && <div className="mx-3 my-4 border-t border-sidebar-border" />}
            <Link
              to={it.to}
              activeOptions={{ exact: it.to === "/" }}
              className="group flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
              activeProps={{ className: "bg-sidebar-accent text-sidebar-foreground" }}
            >
              <it.icon className={`h-4 w-4 ${it.tone ?? ""}`} />
              <span className="flex-1">{it.label}</span>
              {it.to === "/preferiti" && favorites.length > 0 && (
                <span className="rounded-sm bg-primary px-1.5 font-mono text-[10px] font-bold text-primary-foreground">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>
        ))}
      </nav>
      <div className="border-t border-sidebar-border px-6 py-5">
        <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Allievo</p>
        <p className="mt-1 truncate text-sm font-semibold">{profile.name || "Ospite"}</p>
      </div>
    </aside>
  );
}

export function MobileTabBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-6 border-t border-sidebar-border bg-sidebar/95 backdrop-blur md:hidden">
      {items.map((it) => (
        <Link
          key={it.to}
          to={it.to}
          activeOptions={{ exact: it.to === "/" }}
          className="flex flex-col items-center gap-1 py-2.5 text-[9px] font-semibold text-muted-foreground"
          activeProps={{ className: "text-foreground" }}
        >
          <it.icon className={`h-5 w-5 ${it.tone ?? ""}`} />
          {it.short}
        </Link>
      ))}
    </nav>
  );
}

export function MobileTopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/85 px-5 py-3 backdrop-blur md:hidden">
      <Link to="/" className="font-display text-lg tracking-wide">
        KM<span className="text-primary">/</span>KJ
      </Link>
      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
        Streaming Academy
      </span>
    </header>
  );
}
