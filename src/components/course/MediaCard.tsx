import { Link } from "@tanstack/react-router";
import { Check, Heart, Play } from "lucide-react";
import type { ReactNode } from "react";

import type { TechniqueSheet } from "@/content";
import { academy, useAcademy } from "@/lib/academy-store";
import { media, partNames, tones } from "./media";

export function FavoriteButton({ slug, className = "" }: { slug: string; className?: string }) {
  const { favorites } = useAcademy();
  const on = favorites.includes(slug);
  return (
    <button
      type="button"
      aria-label={on ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
      aria-pressed={on}
      onClick={() => academy.toggleFavorite(slug)}
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-foreground/30 bg-background/70 backdrop-blur transition-colors hover:border-foreground ${className}`}
    >
      <Heart className={`h-4 w-4 ${on ? "fill-primary text-primary" : "text-foreground"}`} />
    </button>
  );
}

/** Streaming-style preview card for a technique sheet. */
export function MediaCard({ t, className = "" }: { t: TechniqueSheet; className?: string }) {
  const img = media[t.image];
  const tone = tones[t.part];
  const { completed } = useAcademy();
  const done = completed.includes(t.slug);
  return (
    <div className={`group relative ${className}`}>
      <Link
        to="/tecniche/$slug"
        params={{ slug: t.slug }}
        className="block overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lift"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-card-fade" />
          <span className={`absolute left-2 top-2 rounded-sm px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-background ${tone.bg}`}>
            {partNames[t.part]}
          </span>
          <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-sm bg-background/80 px-1.5 py-0.5 font-mono text-[10px] text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-rec" />
            GIF · {t.clip.seconds}s
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/90">
              <Play className="ml-0.5 h-5 w-5 fill-background text-background" />
            </span>
          </span>
          {done && (
            <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-sm bg-base px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-background">
              <Check className="h-3 w-3" /> Fatto
            </span>
          )}
        </div>
        <div className="p-3">
          <p className="line-clamp-1 text-sm font-semibold text-foreground">{t.title}</p>
          <p className="mt-0.5 line-clamp-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {t.en} · {t.level}
          </p>
        </div>
      </Link>
      <FavoriteButton slug={t.slug} className="absolute right-2 top-2" />
    </div>
  );
}

export function Row({ title, eyebrow, action, children }: { title: string; eyebrow?: ReactNode; action?: ReactNode; children: ReactNode }) {
  return (
    <section className="py-6">
      <div className="flex items-end justify-between gap-4 px-5 md:px-10">
        <div>
          {eyebrow}
          <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
        </div>
        {action}
      </div>
      <div className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-4 md:scroll-px-10 md:px-10">
        {children}
      </div>
    </section>
  );
}
