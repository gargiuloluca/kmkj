import { createFileRoute } from "@tanstack/react-router";

import { PartHeader, ChapterSection } from "@/components/course/PartPage";
import { Eyebrow } from "@/components/course/ui";
import { getPart } from "@/content";

export const Route = createFileRoute("/esperti")({
  head: () => ({
    meta: [
      { title: "Parte II · Esperti & Tactical Combat — Krav Maga" },
      { name: "description", content: "Combattimento a terra, difesa da armi bianche e da fuoco, drill di inoculazione dello stress." },
      { property: "og:title", content: "Parte II · Esperti & Tactical Combat" },
      { property: "og:description", content: "Ground survival, difesa a 360° da coltello e scenari sotto stress." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EspertiPage,
});

const stressLevels = [
  { lvl: "L1", name: "Fatica", hr: "130–150 bpm", vars: "Pre-affaticamento 60 s, scenario noto" },
  { lvl: "L2", name: "Incertezza", hr: "150–165 bpm", vars: "Scenario casuale tra 3, comando a sorpresa" },
  { lvl: "L3", name: "Privazione sensoriale", hr: "160–175 bpm", vars: "Occhiali oscurati, rumore, luci" },
  { lvl: "L4", name: "Caos", hr: "> 170 bpm", vars: "Più aggressori, armi da allenamento, scelta della via di fuga" },
];

function EspertiPage() {
  const part = getPart(2);
  return (
    <>
      <PartHeader part={part} />
      <ChapterSection part={part} n={1} />
      <ChapterSection part={part} n={2} />
      <ChapterSection part={part} n={3}>
        <Eyebrow className="mt-12 text-foreground">Protocollo di desensibilizzazione · 4 livelli</Eyebrow>
        <div className="mt-4 overflow-hidden border border-border">
          {stressLevels.map((s, i) => (
            <div
              key={s.lvl}
              className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 gap-y-1 border-b border-border bg-surface p-4 last:border-b-0 md:grid-cols-[4rem_12rem_9rem_minmax(0,1fr)] md:items-center"
            >
              <span className="row-span-3 font-display text-3xl text-pro md:row-span-1" style={{ opacity: 0.55 + i * 0.15 }}>
                {s.lvl}
              </span>
              <span className="font-semibold">{s.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{s.hr}</span>
              <span className="text-sm text-foreground/80">{s.vars}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Si passa al livello successivo solo quando l'allievo mantiene tecnica corretta e decisione entro 2 s al livello attuale.
        </p>
      </ChapterSection>
    </>
  );
}
