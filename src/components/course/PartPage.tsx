import type { ReactNode } from "react";

import { getTechnique, type Part } from "@/content";
import { media, tones } from "./media";
import { Eyebrow, TechniqueCard, TopicCard } from "./ui";
import { VisualClip } from "./VisualClip";

export function PartHeader({ part }: { part: Part }) {
  const tone = tones[part.id];
  const img = media[part.image];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-28 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-end">
        <div>
          <Eyebrow className={tone.text}>Parte {part.roman} · {part.en}</Eyebrow>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">{part.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85">{part.focus}</p>
          <ol className="mt-8 space-y-2 border-t border-border pt-6">
            {part.chapters.map((c) => (
              <li key={c.n}>
                <a href={`#capitolo-${c.n}`} className="group flex items-baseline gap-3 text-sm">
                  <span className={`font-mono text-xs ${tone.text}`}>Cap. {c.n}</span>
                  <span className="text-foreground/85 group-hover:text-foreground">{c.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
        {part.image !== "kyusho" && (
          <VisualClip src={img.src} alt={img.alt} width={img.width} height={img.height} caption={part.en} eager />
        )}
      </div>
    </section>
  );
}

export function ChapterSection({ part, n, children }: { part: Part; n: number; children?: ReactNode }) {
  const chapter = part.chapters.find((c) => c.n === n)!;
  const tone = tones[part.id];
  const sheets = chapter.techniques.map((s) => getTechnique(s)!);
  return (
    <section id={`capitolo-${chapter.n}`} className="scroll-mt-14 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-baseline gap-4">
          <span className={`font-display text-6xl ${tone.text}`}>{String(chapter.n).padStart(2, "0")}</span>
          <div>
            <Eyebrow>Capitolo {chapter.n} · {chapter.en}</Eyebrow>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">{chapter.title}</h2>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85">{chapter.intro}</p>

        {chapter.topics.length > 0 && (
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {chapter.topics.map((t) => (
              <TopicCard key={t.title} topic={t} part={part.id} />
            ))}
          </div>
        )}

        {children}

        {sheets.length > 0 && (
          <>
            <Eyebrow className="mt-12 text-foreground">Schede tecniche del capitolo</Eyebrow>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {sheets.map((t) => (
                <TechniqueCard key={t.slug} t={t} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export function PartPage({ part }: { part: Part }) {
  return (
    <>
      <PartHeader part={part} />
      {part.chapters.map((c) => (
        <ChapterSection key={c.n} part={part} n={c.n} />
      ))}
    </>
  );
}
