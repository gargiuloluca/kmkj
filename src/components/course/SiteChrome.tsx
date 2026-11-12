import { Link } from "@tanstack/react-router";

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
          <Link to="/esperti" hash="checklist" className="hover:text-foreground">Check-list di sicurezza istruttore →</Link>
        </div>
      </div>
    </footer>
  );
}
