import { Link } from "@tanstack/react-router";

import { parts } from "@/content";
import { tones } from "./media";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link to="/" className="font-display text-lg tracking-wide">
          KM<span className="text-primary">/</span>KJ
        </Link>
        <nav className="flex gap-3 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:gap-5 sm:text-[11px]">
          {parts.map((p) => (
            <Link
              key={p.id}
              to={p.path}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${tones[p.id].bg}`} />
              {p.id === 1 ? "Fondamenta" : p.id === 2 ? "Esperti" : "Kyusho"}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="border border-primary/40 bg-surface p-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Avvertenza di sicurezza</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            Tutte le tecniche vanno praticate esclusivamente sotto la supervisione di istruttori qualificati, con
            protezioni adeguate e partner consenzienti. I punti di pressione sul collo possono causare lesioni gravi:
            in allenamento si studiano solo localizzazione e anatomia. Le tecniche si applicano unicamente in caso di
            reale legittima difesa.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row md:justify-between">
          <span>Krav Maga &amp; Kyusho Jutsu · Curriculum accademico</span>
          <span>Livello integrato · Principianti ed esperti</span>
        </div>
      </div>
    </footer>
  );
}
