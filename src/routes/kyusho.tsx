import { Link, createFileRoute } from "@tanstack/react-router";

import { media } from "@/components/course/media";
import { ChapterSection, PartHeader } from "@/components/course/PartPage";
import { Eyebrow } from "@/components/course/ui";
import { InstructorChecklist } from "@/components/course/Protocols";
import { getLinkedTechniques, getPart, kyushoAtlas } from "@/content";

export const Route = createFileRoute("/kyusho")({
  head: () => ({
    meta: [
      { title: "Parte III · Kyusho Jutsu applicato — Atlante dei punti" },
      { name: "description", content: "Fondamenti neuro-anatomici e atlante dei punti chiave GB-20, ST-9, LI-10, CV-23 / ST-12 con vettori d'impatto." },
      { property: "og:title", content: "Parte III · Kyusho Jutsu applicato" },
      { property: "og:description", content: "Anatomia d'impatto, vettori di forza e reazione neurologica." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KyushoPage,
});

function KyushoPage() {
  const part = getPart(3);
  const img = media.kyusho;
  return (
    <>
      <PartHeader part={part} />
      <ChapterSection part={part} n={1} />
      <ChapterSection part={part} n={2}>
        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:items-start">
          <figure className="overflow-hidden rounded-md border border-border bg-surface md:sticky md:top-20">
            <div className="relative">
              <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" className="h-auto w-full" />
              {kyushoAtlas
                .filter((p) => p.marker)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`#${p.slug}`}
                    aria-label={p.code}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5"
                    style={{ left: `${p.marker!.x}%`, top: `${p.marker!.y}%` }}
                  >
                    <span className="h-3 w-3 rounded-full border-2 border-foreground bg-kyusho animate-pulse-point" />
                    <span className="rounded-sm bg-background/85 px-1.5 py-0.5 font-mono text-[9px] font-bold text-foreground">
                      {p.code}
                    </span>
                  </a>
                ))}
            </div>
            <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
              Tocca un punto per aprire la sua scheda nell'atlante.
            </figcaption>
          </figure>

          <div className="space-y-4">
            {kyushoAtlas.map((p) => (
              <article key={p.slug} id={p.slug} className="scroll-mt-20 border-l-2 border-kyusho bg-surface p-5">
                <p className="font-mono text-2xl font-bold text-kyusho">{p.code}</p>
                <p className="mt-1 font-semibold">{p.name}</p>
                <dl className="mt-4 grid gap-3 text-sm">
                  {[
                    ["Localizzazione", p.location],
                    ["Anatomia", p.anatomy],
                    ["Vettore d'impatto", p.vector],
                    ["Reazione neurologica", p.reaction],
                    ["Applicazione nel Krav Maga", p.application],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{k}</dt>
                      <dd className="mt-0.5 leading-relaxed text-foreground/85">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 border border-kyusho/40 p-3 text-xs leading-relaxed text-foreground/80">
                  <span className="font-mono font-bold uppercase tracking-widest text-kyusho">Allenamento sicuro · </span>
                  {p.safeTraining}
                </div>
                <Eyebrow className="mt-5">Tecniche collegate</Eyebrow>
                <div className="mt-2 flex flex-wrap gap-2">
                  {getLinkedTechniques(p.code).map((t) => (
                    <Link
                      key={t.slug}
                      to="/tecniche/$slug"
                      params={{ slug: t.slug }}
                      className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-foreground/85 hover:border-foreground/50"
                    >
                      → {t.title}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <Eyebrow className="mt-8">Codici secondo la nomenclatura dei meridiani (GB, ST, LI, CV).</Eyebrow>
        <InstructorChecklist context="Punti di pressione" />
      </ChapterSection>
    </>
  );
}
