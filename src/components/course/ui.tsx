import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { phaseLabels, type Part, type PartId, type TechniqueSheet, type Topic } from "@/content";
import { tones } from "./media";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[10px] font-bold uppercase tracking-[0.25em] ${className || "text-muted-foreground"}`}>
      {children}
    </p>
  );
}

export function TopicCard({ topic, part }: { topic: Topic; part: PartId }) {
  return (
    <div className={`border-l-2 ${tones[part].border} bg-surface p-5`}>
      <p className="font-semibold text-foreground">{topic.title}</p>
      {topic.en && <Eyebrow className="mt-0.5 text-muted-foreground">{topic.en}</Eyebrow>}
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{topic.text}</p>
      {topic.points && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {topic.points.map((p) => (
            <li key={p} className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-foreground/80">
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TechniqueCard({ t }: { t: TechniqueSheet }) {
  const tone = tones[t.part];
  return (
    <Link
      to="/tecniche/$slug"
      params={{ slug: t.slug }}
      className="group flex flex-col justify-between gap-6 border border-border bg-card p-5 transition-colors hover:border-foreground/40"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <Eyebrow className={tone.text}>Scheda tecnica · {t.level}</Eyebrow>
          <span className="font-mono text-[10px] text-muted-foreground">{t.clip.seconds}s clip</span>
        </div>
        <p className="mt-3 font-display text-2xl text-foreground">{t.title}</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t.en}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {phaseLabels.map((p) => (
            <span key={p.n} className={`h-1 w-6 ${tone.bg} opacity-70 group-hover:opacity-100`} />
          ))}
        </div>
        <span className="font-mono text-xs text-foreground transition-transform group-hover:translate-x-1">
          Apri →
        </span>
      </div>
    </Link>
  );
}

export function PartLink({ part }: { part: Part }) {
  const tone = tones[part.id];
  return (
    <Link
      to={part.path}
      className="group relative flex min-h-48 flex-col justify-between overflow-hidden border border-border bg-card p-6 transition-colors hover:border-foreground/40"
    >
      <span className={`absolute inset-y-0 left-0 w-1 ${tone.bg}`} />
      <div className="flex items-start justify-between">
        <span className={`font-display text-7xl ${tone.text}`}>{part.roman}</span>
        <Eyebrow>{part.chapters.length} capitoli</Eyebrow>
      </div>
      <div>
        <p className="font-display text-3xl">{part.title}</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{part.en}</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">{part.focus}</p>
      </div>
    </Link>
  );
}
