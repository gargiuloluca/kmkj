import { createFileRoute } from "@tanstack/react-router";

import { MediaCard } from "@/components/course/MediaCard";
import { tones } from "@/components/course/media";
import { Eyebrow, SectionTitle } from "@/components/course/ui";
import { Input } from "@/components/ui/input";
import { parts, techniques } from "@/content";
import { academy, useAcademy } from "@/lib/academy-store";

export const Route = createFileRoute("/profilo")({
  head: () => ({
    meta: [
      { title: "Profilo allievo — Krav Maga & Kyusho Academy" },
      { name: "description", content: "Il tuo livello, i progressi per ogni parte del corso e le schede completate." },
      { property: "og:title", content: "Profilo allievo — Krav Maga & Kyusho Academy" },
      { property: "og:description", content: "Progressi del corso e schede completate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Profilo,
});

const levels = [
  { id: "principiante", label: "Principiante", hint: "Parto dalle Fondamenta" },
  { id: "esperto", label: "Esperto", hint: "Ho già automatizzato le basi" },
] as const;

function Profilo() {
  const { profile, completed, favorites } = useAcademy();
  const done = techniques.filter((t) => completed.includes(t.slug));
  const pct = Math.round((done.length / techniques.length) * 100);

  return (
    <div className="px-5 py-12 md:px-10 md:py-16">
      <SectionTitle eyebrow="Profilo allievo" title={profile.name || "Ospite"} />

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div className="rounded-md border border-border bg-surface p-5">
          <label htmlFor="nome" className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Nome
          </label>
          <Input
            id="nome"
            value={profile.name}
            onChange={(e) => academy.setProfile({ name: e.target.value })}
            placeholder="Il tuo nome"
            className="mt-2 bg-background"
          />
          <Eyebrow className="mt-6">Livello</Eyebrow>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {levels.map((l) => (
              <button
                key={l.id}
                type="button"
                aria-pressed={profile.level === l.id}
                onClick={() => academy.setProfile({ level: l.id })}
                className={`rounded-md border p-3 text-left transition-colors ${profile.level === l.id ? "border-primary bg-primary/10" : "border-border hover:border-foreground/40"}`}
              >
                <p className="text-sm font-semibold">{l.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{l.hint}</p>
              </button>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Profilo, preferiti e progressi sono salvati su questo dispositivo.
          </p>
        </div>

        <div className="rounded-md border border-border bg-surface p-5">
          <div className="flex items-baseline justify-between">
            <Eyebrow className="text-foreground">Progressi del corso</Eyebrow>
            <span className="font-display text-4xl">{pct}%</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {done.length} di {techniques.length} schede completate · {favorites.length} nei preferiti
          </p>
          <div className="mt-6 space-y-5">
            {parts.map((p) => {
              const total = techniques.filter((t) => t.part === p.id).length;
              const n = done.filter((t) => t.part === p.id).length;
              return (
                <div key={p.id}>
                  <div className="flex justify-between text-sm">
                    <span>
                      <span className={`font-mono text-xs font-bold ${tones[p.id].text}`}>{p.roman}</span> {p.title}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {total === 0 ? "Atlante" : `${n}/${total}`}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className={`h-full ${tones[p.id].bg}`} style={{ width: total ? `${(n / total) * 100}%` : "0%" }} />
                  </div>
                </div>
              );
            })}
          </div>
          {(completed.length > 0 || favorites.length > 0) && (
            <button
              type="button"
              onClick={() => academy.reset()}
              className="mt-6 font-mono text-xs text-muted-foreground hover:text-destructive"
            >
              Azzera profilo e progressi
            </button>
          )}
        </div>
      </div>

      {done.length > 0 && (
        <>
          <Eyebrow className="mt-12 text-foreground">Schede completate</Eyebrow>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {done.map((t) => (
              <MediaCard key={t.slug} t={t} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
