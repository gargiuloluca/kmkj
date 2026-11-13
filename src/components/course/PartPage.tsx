import type { ReactNode } from "react";

import { getTechnique, type Part } from "@/content";
import { MediaCard } from "./MediaCard";
import { media, tones } from "./media";
import { Eyebrow, TopicCard } from "./ui";

export function PartHeader({ part }: { part: Part }) {
  const tone = tones[part.id];
  const img = media[part.image];
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="absolute inset-0 h-full w-full object-cover opacity-60 animate-push-in"
      />
      <div className="absolute inset-0 bg-hero-side" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="relative px-5 pb-12 pt-24 md:px-10 md:pt-32">
        <Eyebrow className={tone.text}>Parte {part.roman} · {part.en}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-6xl md:text-8xl">{part.title}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85">{part.focus}</p>
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto">
          {part.chapters.map((c) => (
            <a
              key={c.n}
              href={`#capitolo-${c.n}`}
              className="shrink-0 rounded-full border border-border bg-background/60 px-4 py-2 text-xs backdrop-blur transition-colors hover:border-foreground/50"
            >
              <span className={`font-mono font-bold ${tone.text}`}>Cap. {c.n}</span>
              <span className="ml-2 text-foreground/85">{c.title}</span>
            </a>
          ))}
        </div>
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
      <div className="px-5 py-14 md:px-10">
        <div className="flex items-baseline gap-4">
          <span className={`font-display text-6xl ${tone.text}`}>{String(chapter.n).padStart(2, "0")}</span>
          <div>
            <Eyebrow>Capitolo {chapter.n} · {chapter.en}</Eyebrow>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">{chapter.title}</h2>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85">{chapter.intro}</p>

        {sheets.length > 0 && (
          <>
            <Eyebrow className="mt-10 text-foreground">Schede tecniche · {sheets.length}</Eyebrow>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {sheets.map((t) => (
                <MediaCard key={t.slug} t={t} />
              ))}
            </div>
          </>
        )}

        {chapter.topics.length > 0 && (
          <>
            <Eyebrow className="mt-12 text-foreground">Approfondimenti teorici</Eyebrow>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {chapter.topics.map((t) => (
                <TopicCard key={t.title} topic={t} part={part.id} />
              ))}
            </div>
          </>
        )}

        {children}
      </div>
    </section>
  );
}

export function PartPage({ part, children }: { part: Part; children?: ReactNode }) {
  return (
    <>
      <PartHeader part={part} />
      {part.chapters.map((c) => (
        <ChapterSection key={c.n} part={part} n={c.n} />
      ))}
      {children}
    </>
  );
}
