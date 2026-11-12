import type { ReactNode } from "react";

import type { PartId, Topic } from "@/content";
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
    <div className={`border-l-2 ${tones[part].border} rounded-r-md bg-surface p-5`}>
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

export function SectionTitle({ eyebrow, title, className = "" }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <Eyebrow className="text-primary">{eyebrow}</Eyebrow>
      <h2 className="mt-2 font-display text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}
