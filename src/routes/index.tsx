import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-guard.jpg";
import beginnerImg from "@/assets/modulo-principianti.jpg";
import expertImg from "@/assets/modulo-esperti.jpg";
import kyushoImg from "@/assets/kyusho-punti.jpg";
import { LessonBlock } from "@/components/course/LessonBlock";
import { VisualClip } from "@/components/course/VisualClip";
import {
  beginnerLessons,
  expertLessons,
  kyushoPoints,
  kyushoPrinciples,
} from "@/components/course/course-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krav Maga & Kyusho Jutsu — Corso Professionale Accademico" },
      {
        name: "description",
        content:
          "Formazione tecnico-tattica di Krav Maga e Kyusho Jutsu: percorso principianti, percorso esperti e studio dei punti di pressione.",
      },
      { property: "og:title", content: "Krav Maga & Kyusho Jutsu — Corso Professionale" },
      {
        property: "og:description",
        content: "Difesa personale realistica, combattimento a terra, difesa da armi e punti di pressione.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#principianti", label: "Principianti" },
  { href: "#esperti", label: "Esperti" },
  { href: "#kyusho", label: "Kyusho" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-lg tracking-wide">
            KM<span className="text-primary">/</span>KJ
          </a>
          <nav className="flex gap-4 font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Istruttore in guardia difensiva di Krav Maga"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-hero-side" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-0 grain" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-28">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            Corso professionale accademico
          </p>
          <h1 className="mt-4 font-display text-[18vw] text-foreground md:text-[9rem]">
            Krav Maga
            <span className="block text-primary">&amp; Kyusho</span>
            <span className="block">Jutsu</span>
          </h1>
          <div className="mt-8 grid max-w-3xl gap-5 border-t border-border pt-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Livello
              </p>
              <p className="mt-1 font-semibold">Integrato — Principianti ed Esperti</p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Obiettivo
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/85">
                Formazione tecnico-tattica, studio dei punti di pressione (Kyusho) e gestione
                realistica della difesa personale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course map */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {[
            { href: "#principianti", tag: "Modulo 1", title: "Fundamentals", tone: "bg-base", count: "3 unità" },
            { href: "#esperti", tag: "Modulo 2", title: "Advanced & Tactical", tone: "bg-pro", count: "2 unità" },
            { href: "#kyusho", tag: "Sezione speciale", title: "Kyusho Jutsu", tone: "bg-kyusho", count: "3 punti chiave" },
          ].map((m) => (
            <a
              key={m.href}
              href={m.href}
              className="group flex items-center gap-4 border-b border-border px-5 py-5 transition-colors hover:bg-accent md:border-b-0 md:border-r"
            >
              <span className={`h-10 w-1.5 ${m.tone}`} />
              <div className="flex-1">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {m.tag} · {m.count}
                </p>
                <p className="font-display text-2xl">{m.title}</p>
              </div>
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Module 1 */}
      <section id="principianti" className="scroll-mt-14">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <ModuleHeader
            tag="Modulo 1 · Percorso principianti"
            title="Fundamentals"
            toneText="text-base"
            focus="Posizionamento di base, riflessi condizionati naturali, liberazione da prese comuni e attivazione dei punti vitali primari."
          />
          <VisualClip
            src={beginnerImg}
            alt="Allenamento del colpo di palmo su scudo da impatto"
            caption="Sequenza colpo di palmo + ginocchiata frontale"
            width={1280}
            height={960}
            className="mt-10 md:max-w-xl"
          />
          <div className="mt-6">
            {beginnerLessons.map((l) => (
              <LessonBlock key={l.n} lesson={l} tone="base" />
            ))}
          </div>
        </div>
      </section>

      {/* Module 2 */}
      <section id="esperti" className="scroll-mt-14 border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <ModuleHeader
            tag="Modulo 2 · Percorso esperti"
            title="Advanced & Tactical"
            toneText="text-pro"
            focus="Gestione dello stress, combattimento a terra, difesa da armi bianche e da fuoco, combinazioni avanzate e applicazione clinica del Kyusho Jutsu."
          />
          <VisualClip
            src={expertImg}
            alt="Deviazione e controllo del polso in una difesa da coltello"
            caption="Deviazione a 360° e controllo del braccio armato di coltello"
            width={1280}
            height={960}
            className="mt-10 md:max-w-xl"
          />
          <div className="mt-6">
            {expertLessons.map((l) => (
              <LessonBlock key={l.n} lesson={l} tone="pro" />
            ))}
          </div>
        </div>
      </section>

      {/* Kyusho */}
      <section id="kyusho" className="scroll-mt-14 border-t border-border">
        <div className="text-kyusho/30">
          <div className="h-3 tape" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <ModuleHeader
            tag="Sezione speciale · Applicato al Krav Maga"
            title="Kyusho Jutsu"
            toneText="text-kyusho"
            focus="Il Kyusho Jutsu non si basa sulla forza bruta, ma sulla stimolazione anatomico-neurologica dei punti di pressione per causare stordimento, perdita di equilibrio o rilascio muscolare immediato."
          />

          <h3 className="mt-14 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
            01 · Nozioni principali
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {kyushoPrinciples.map((p) => (
              <div key={p.name} className="border border-border bg-surface p-5">
                <p className="font-display text-2xl">{p.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
            02 · Le tecniche migliori integrate
          </h3>
          <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:items-start">
            <figure className="relative overflow-hidden rounded-sm border border-border bg-surface">
              <div className="relative">
                <img
                  src={kyushoImg}
                  alt="Mappa anatomica dei punti di pressione su nuca, collo e avambraccio"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-auto w-full"
                />
                {kyushoPoints.map((p) => (
                  <span
                    key={p.code}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <span className="h-3 w-3 rounded-full border-2 border-foreground bg-kyusho animate-pulse-point" />
                  </span>
                ))}
              </div>
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">
                  Supporto visivo ·{" "}
                </span>
                Applicazione di uno strike sul punto GB-20 per sbilanciare l'avversario
              </figcaption>
            </figure>

            <ol className="space-y-3">
              {kyushoPoints.map((p) => (
                <li key={p.code} className="border-l-2 border-kyusho bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-xl font-bold text-kyusho">{p.code}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.name}
                    </p>
                  </div>
                  <p className="mt-1 font-semibold">{p.area}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="mt-16 border border-kyusho/40 bg-surface p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-kyusho">
              Avvertenza di sicurezza
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Le tecniche sui punti di pressione, in particolare su collo e carotide, possono causare
              lesioni gravi. Vanno praticate esclusivamente sotto la supervisione di istruttori
              qualificati, con controllo e protezioni adeguate, e applicate solo in caso di reale
              legittima difesa.
            </p>
          </aside>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row md:justify-between">
          <span>Krav Maga &amp; Kyusho Jutsu · Corso professionale accademico</span>
          <span>Livello integrato</span>
        </div>
      </footer>
    </main>
  );
}

function ModuleHeader({
  tag,
  title,
  focus,
  toneText,
}: {
  tag: string;
  title: string;
  focus: string;
  toneText: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.25em] ${toneText}`}>{tag}</p>
      <h2 className="mt-3 font-display text-6xl md:text-8xl">{title}</h2>
      <p className="mt-6 text-base leading-relaxed text-foreground/85">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Focus —{" "}
        </span>
        {focus}
      </p>
    </div>
  );
}
