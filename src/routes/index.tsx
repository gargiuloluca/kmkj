import { Link, createFileRoute } from "@tanstack/react-router";
import { Crosshair, Play } from "lucide-react";

import heroImg from "@/assets/hero-guard.jpg";
import { MediaCard, Row } from "@/components/course/MediaCard";
import { media, partNames, tones } from "@/components/course/media";
import { AdrenalineProtocol, BeginnerFaq } from "@/components/course/Protocols";
import { Eyebrow, SectionTitle } from "@/components/course/ui";
import { getLinkedTechniques, getPart, kyushoAtlas, parts, phaseLabels, principles, techniques } from "@/content";
import { useAcademy } from "@/lib/academy-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krav Maga & Kyusho Jutsu — Streaming Academy" },
      {
        name: "description",
        content:
          "Accademia online di Krav Maga e Kyusho Jutsu: 15 schede tecniche in 4 fasi, protocolli di stress, Adrenalin Management e atlante dei punti di pressione.",
      },
      { property: "og:title", content: "Krav Maga & Kyusho Jutsu — Streaming Academy" },
      { property: "og:description", content: "Tre parti, 15 schede tecniche, atlante Kyusho e protocolli di sicurezza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { favorites } = useAcademy();
  const favList = techniques.filter((t) => favorites.includes(t.slug));

  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[80svh] items-end overflow-hidden md:min-h-[88vh]">
        <img
          src={heroImg}
          alt="Istruttore in guardia difensiva di Krav Maga"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] animate-push-in"
        />
        <div className="absolute inset-0 bg-hero-side" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-0 grain" />
        <div className="relative w-full px-5 pb-12 pt-24 md:px-10">
          <div className="flex items-center gap-2">
            <span className="rounded-sm bg-primary px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              Corso
            </span>
            <Eyebrow className="text-foreground">Professionale accademico · Livello integrato</Eyebrow>
          </div>
          <h1 className="mt-4 font-display text-[16vw] text-foreground md:text-[8rem]">
            Krav Maga
            <span className="block text-primary">&amp; Kyusho Jutsu</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/85">
            Difesa personale realistica, biomeccanica d'impatto e punti di pressione. Dalla prima guardia agli
            scenari sotto stress.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/fondamenta"
              className="flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-foreground/85"
            >
              <Play className="h-4 w-4 fill-background" /> Inizia il corso
            </Link>
            <Link
              to="/kyusho"
              className="flex items-center gap-2 rounded-sm bg-secondary/80 px-5 py-3 text-sm font-bold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <Crosshair className="h-4 w-4 text-kyusho" /> Atlante Kyusho
            </Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-4 gap-4 border-t border-border pt-5">
            {[
              [String(parts.length), "Parti"],
              [String(techniques.length), "Schede"],
              [String(kyushoAtlas.length), "Punti Kyusho"],
              [String(phaseLabels.length), "Fasi per scheda"],
            ].map(([v, k]) => (
              <div key={k}>
                <dd className="font-display text-3xl md:text-4xl">{v}</dd>
                <dt className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Rows */}
      {favList.length > 0 && (
        <Row title="La mia lista" eyebrow={<Eyebrow className="text-primary">Preferiti</Eyebrow>}>
          {favList.map((t) => (
            <MediaCard key={t.slug} t={t} className="w-64 shrink-0 snap-start md:w-72" />
          ))}
        </Row>
      )}

      {parts
        .filter((p) => p.id !== 3)
        .map((p) => (
          <Row
            key={p.id}
            title={p.title}
            eyebrow={<Eyebrow className={tones[p.id].text}>Parte {p.roman} · {p.en}</Eyebrow>}
            action={
              <Link to={p.path} className="shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground">
                Vedi tutto →
              </Link>
            }
          >
            {techniques
              .filter((t) => t.part === p.id)
              .map((t) => (
                <MediaCard key={t.slug} t={t} className="w-64 shrink-0 snap-start md:w-72" />
              ))}
          </Row>
        ))}

      <Row
        title="Atlante dei punti"
        eyebrow={<Eyebrow className="text-kyusho">Parte III · Kyusho Jutsu</Eyebrow>}
        action={
          <Link to="/kyusho" className="shrink-0 font-mono text-xs text-muted-foreground hover:text-foreground">
            Vedi tutto →
          </Link>
        }
      >
        {kyushoAtlas.map((k) => (
          <Link
            key={k.slug}
            to="/kyusho"
            hash={k.slug}
            className="group relative w-56 shrink-0 snap-start overflow-hidden rounded-md border border-border bg-card transition-all hover:-translate-y-1 hover:border-kyusho/60 hover:shadow-lift md:w-64"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={media.kyusho.src}
                alt={media.kyusho.alt}
                width={media.kyusho.width}
                height={media.kyusho.height}
                loading="lazy"
                className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                style={k.marker ? { transformOrigin: `${k.marker.x}% ${k.marker.y}%`, transform: "scale(2.2)" } : undefined}
              />
              <div className="absolute inset-0 bg-card-fade" />
              <span className="absolute left-2 top-2 rounded-sm bg-kyusho px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-background">
                {partNames[3]}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-mono text-2xl font-bold text-kyusho">{k.code}</p>
                <p className="mt-1 line-clamp-1 text-sm font-semibold">{k.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {getLinkedTechniques(k.code).length} tecniche collegate
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Row>

      <div className="px-5 md:px-10">
        {/* Method */}
        <section className="mt-10 border-t border-border pt-14">
          <SectionTitle eyebrow="Il metodo" title="Non una lista di tecniche. Un sistema." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.n} className="rounded-md border border-border bg-surface p-5">
                <span className="font-mono text-xs text-primary">{p.n}</span>
                <p className="mt-3 font-display text-2xl">{p.title}</p>
                <Eyebrow className="mt-0.5">{p.en}</Eyebrow>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4-phase standard */}
        <section className="mt-16">
          <SectionTitle eyebrow="Standard delle schede" title="Ogni tecnica, 4 fasi" />
          <ol className="mt-8 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {phaseLabels.map((p, i) => (
              <li key={p.n} className="bg-surface p-5">
                <span className="font-display text-5xl text-primary/50">{i + 1}</span>
                <p className="mt-2 font-display text-xl">{p.title}</p>
                <Eyebrow className="mt-1">{p.en}</Eyebrow>
              </li>
            ))}
          </ol>
        </section>

        <AdrenalineProtocol />

        {/* Full index */}
        <section className="mt-16">
          <SectionTitle eyebrow="Catalogo completo" title={`Indice delle ${techniques.length} tecniche`} />
          <ol className="mt-6 divide-y divide-border rounded-md border border-border bg-surface">
            {techniques.map((t, i) => (
              <li key={t.slug}>
                <Link to="/tecniche/$slug" params={{ slug: t.slug }} className="group flex items-center gap-4 px-4 py-3.5">
                  <span className="w-6 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`h-8 w-1 shrink-0 rounded-full ${tones[t.part].bg}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{t.title}</p>
                    <p className="truncate font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Parte {getPart(t.part).roman} · Cap. {t.chapter} · {t.level} · Kyusho {t.kyusho.point}
                    </p>
                  </div>
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <div className="mb-16 mt-16">
          <BeginnerFaq />
        </div>
      </div>
    </>
  );
}
