import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { media, tones } from "@/components/course/media";
import { Eyebrow } from "@/components/course/ui";
import { VisualClip } from "@/components/course/VisualClip";
import { getKyushoPoint, getNeighbours, getPart, getTechnique, phaseLabels } from "@/content";

export const Route = createFileRoute("/tecniche/$slug")({
  loader: ({ params }) => {
    const technique = getTechnique(params.slug);
    if (!technique) throw notFound();
    return { technique };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.technique;
    const title = t ? `${t.title} — Scheda tecnica Krav Maga` : "Scheda tecnica non trovata";
    const description = t?.summary ?? "La scheda tecnica richiesta non esiste.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(t ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-5 pb-20 pt-32">
      <h1 className="font-display text-5xl">Scheda non trovata</h1>
      <Link to="/" className="mt-6 inline-block font-mono text-sm text-primary">
        ← Torna al curriculum
      </Link>
    </div>
  ),
  component: TechniquePage,
});

function TechniquePage() {
  const { technique: t } = Route.useLoaderData();
  const part = getPart(t.part);
  const chapter = part.chapters.find((c) => c.n === t.chapter)!;
  const tone = tones[t.part];
  const img = media[t.image];
  const kyusho = t.kyusho ? getKyushoPoint(t.kyusho.point) : undefined;
  const { prev, next } = getNeighbours(t.slug);

  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-24 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-end">
          <div>
            <Link to={part.path} hash={`capitolo-${chapter.n}`} className={`font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${tone.text}`}>
              ← Parte {part.roman} · Cap. {chapter.n} · {chapter.title}
            </Link>
            <h1 className="mt-5 font-display text-5xl md:text-7xl">{t.title}</h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.en}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className={`rounded-sm px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-background ${tone.bg}`}>
                {t.level}
              </span>
              {t.kyusho && (
                <span className="rounded-sm border border-kyusho px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-kyusho">
                  Kyusho · {t.kyusho.point}
                </span>
              )}
            </div>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85">{t.summary}</p>
          </div>
          <VisualClip src={img.src} alt={img.alt} width={img.width} height={img.height} caption={`${t.clip.seconds} s · ${t.en}`} eager />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5">
        {/* Biomechanics */}
        <section className="border-b border-border py-12">
          <Eyebrow className="text-foreground">Analisi biomeccanica</Eyebrow>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ["Distribuzione del peso", "Weight", t.biomechanics.weight],
              ["Leve", "Leverage", t.biomechanics.lever],
              ["Timing", "Timing", t.biomechanics.timing],
            ].map(([k, en, v]) => (
              <div key={k} className="border border-border bg-surface p-5">
                <p className="font-display text-2xl">{k}</p>
                <Eyebrow className="mt-0.5">{en}</Eyebrow>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Phases */}
        <section className="border-b border-border py-12">
          <Eyebrow className="text-foreground">Esecuzione in 4 fasi</Eyebrow>
          <ol className="mt-6">
            {phaseLabels.map((label, i) => ({ label, ph: t.phases[i]! })).map(({ label, ph }, i) => (
              <li key={label.n} className="relative grid gap-4 pb-10 pl-10 last:pb-0 md:grid-cols-[16rem_minmax(0,1fr)] md:pl-12">
                <span className={`absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold text-background ${tone.bg}`}>
                  {i + 1}
                </span>
                {i < 3 && <span className="absolute bottom-0 left-[13px] top-8 w-px bg-border" />}
                <div>
                  <Eyebrow className={tone.text}>{label.n}</Eyebrow>
                  <p className="mt-1 font-display text-2xl">{label.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label.en}</p>
                </div>
                <div>
                  <ul className="space-y-2">
                    {ph.steps.map((s) => (
                      <li key={s} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span className={`mt-2 h-1 w-3 shrink-0 ${tone.bg}`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 inline-block border border-border px-3 py-1.5 font-mono text-xs text-foreground">
                    Cue · “{ph.cue}”
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Errors + Kyusho */}
        <section className="grid gap-3 border-b border-border py-12 md:grid-cols-2">
          <div className="border border-border bg-surface p-5">
            <Eyebrow className="text-destructive">Errori comuni</Eyebrow>
            <ul className="mt-4 space-y-3">
              {t.errors.map((e) => (
                <li key={e} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="font-mono text-destructive">✕</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          {t.kyusho && kyusho ? (
            <Link to="/kyusho" hash={kyusho.slug} className="block border border-kyusho/50 bg-surface p-5 transition-colors hover:border-kyusho">
              <Eyebrow className="text-kyusho">Integrazione Kyusho</Eyebrow>
              <p className="mt-3 font-mono text-2xl font-bold text-kyusho">{kyusho.code}</p>
              <p className="text-sm font-semibold">{kyusho.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{t.kyusho.note}</p>
              <p className="mt-3 text-xs text-muted-foreground">Vettore: {kyusho.vector}</p>
              <p className="mt-4 font-mono text-xs text-foreground">Apri nell'atlante →</p>
            </Link>
          ) : (
            <div className="border border-border bg-surface p-5">
              <Eyebrow>Integrazione Kyusho</Eyebrow>
              <p className="mt-3 text-sm text-muted-foreground">
                Tecnica a dominante biomeccanica: nessun punto di pressione specifico in questa fase del programma.
              </p>
            </div>
          )}
        </section>

        {/* Drill + clip spec */}
        <section className="grid gap-3 border-b border-border py-12 md:grid-cols-2">
          <div className="border border-border bg-surface p-5">
            <Eyebrow className="text-foreground">Progressione dei drill</Eyebrow>
            <ol className="mt-4 space-y-3">
              {t.drill.map((d, i) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className={`font-mono text-xs font-bold ${tone.text}`}>L{i + 1}</span>
                  {d}
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <Eyebrow className="text-foreground">Specifiche clip video</Eyebrow>
              <span className="flex items-center gap-1.5 font-mono text-xs text-foreground">
                <span className="h-2 w-2 rounded-full bg-primary animate-rec" />
                {t.clip.seconds} s
              </span>
            </div>
            <ol className="mt-4 space-y-2">
              {t.clip.shots.map((s) => (
                <li key={s.t} className="grid grid-cols-[4rem_minmax(0,1fr)] gap-3 text-sm">
                  <span className="font-mono text-xs text-muted-foreground">{s.t}</span>
                  <span className="text-foreground/85">{s.desc}</span>
                </li>
              ))}
            </ol>
            <Eyebrow className="mt-5">Grafiche sovrapposte</Eyebrow>
            <ul className="mt-2 flex flex-wrap gap-2">
              {t.clip.overlays.map((o) => (
                <li key={o} className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-foreground/80">
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Prev / next */}
        <nav className="grid gap-3 py-12 md:grid-cols-2">
          {prev ? (
            <Link to="/tecniche/$slug" params={{ slug: prev.slug }} className="border border-border p-5 hover:border-foreground/40">
              <Eyebrow>← Scheda precedente</Eyebrow>
              <p className="mt-2 font-display text-xl">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to="/tecniche/$slug" params={{ slug: next.slug }} className="border border-border p-5 text-right hover:border-foreground/40">
              <Eyebrow>Scheda successiva →</Eyebrow>
              <p className="mt-2 font-display text-xl">{next.title}</p>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
