import { Link, createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-guard.jpg";
import { tones } from "@/components/course/media";
import { Eyebrow, PartLink } from "@/components/course/ui";
import { getPart, parts, phaseLabels, techniques } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krav Maga & Kyusho Jutsu — Curriculum Accademico" },
      {
        name: "description",
        content:
          "Curriculum modulare di Krav Maga e Kyusho Jutsu: biomeccanica, protocolli di stress, schede tecniche in 4 fasi e atlante dei punti di pressione.",
      },
      { property: "og:title", content: "Krav Maga & Kyusho Jutsu — Curriculum Accademico" },
      {
        property: "og:description",
        content: "Tre parti, otto capitoli, schede tecniche in 4 fasi e atlante Kyusho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { n: "01", title: "Biomeccanica", text: "Distribuzione del peso, leve e timing analizzati per ogni tecnica." },
  { n: "02", title: "Stress inoculation", text: "Protocolli a livelli per simulare la realtà dell'aggressione." },
  { n: "03", title: "Schede in 4 fasi", text: "Ingresso, azione, neutralizzazione, uscita: lo stesso standard ovunque." },
  { n: "04", title: "Kyusho integrato", text: "Anatomia d'impatto, vettori di forza e reazione neurologica." },
];

function Index() {
  const chapterCount = parts.reduce((n, p) => n + p.chapters.length, 0);
  return (
    <>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
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
          <Eyebrow className="text-primary">Curriculum accademico modulare</Eyebrow>
          <h1 className="mt-4 font-display text-[17vw] text-foreground md:text-[9rem]">
            Krav Maga
            <span className="block text-primary">&amp; Kyusho</span>
            <span className="block">Jutsu</span>
          </h1>
          <div className="mt-8 grid max-w-3xl grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              [String(parts.length), "Parti"],
              [String(chapterCount), "Capitoli"],
              [String(techniques.length), "Schede tecniche"],
            ].map(([v, k]) => (
              <div key={k}>
                <p className="font-display text-4xl">{v}</p>
                <Eyebrow className="mt-1">{k}</Eyebrow>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow className="text-foreground">Il metodo</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-6xl">Non una lista di tecniche. Un sistema.</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.n} className="bg-surface p-5">
                <span className="font-mono text-xs text-primary">{p.n}</span>
                <p className="mt-3 font-display text-2xl">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow className="text-foreground">Struttura del corso</Eyebrow>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {parts.map((p) => (
              <PartLink key={p.id} part={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow className="text-foreground">Standard delle schede tecniche</Eyebrow>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Ogni tecnica, 4 fasi</h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-4">
            {phaseLabels.map((p, i) => (
              <li key={p.n} className="relative border border-border bg-card p-5">
                <span className="font-display text-5xl text-primary/40">{i + 1}</span>
                <p className="mt-2 font-display text-xl">{p.title}</p>
                <Eyebrow className="mt-1">{p.en}</Eyebrow>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow className="text-foreground">Indice delle schede</Eyebrow>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {techniques.map((t) => (
              <li key={t.slug}>
                <Link
                  to="/tecniche/$slug"
                  params={{ slug: t.slug }}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className={`h-8 w-1 shrink-0 ${tones[t.part].bg}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{t.title}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Parte {getPart(t.part).roman} · Cap. {t.chapter} · {t.level}
                    </p>
                  </div>
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
