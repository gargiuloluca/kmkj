import { Link, createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";

import { MediaCard } from "@/components/course/MediaCard";
import { SectionTitle } from "@/components/course/ui";
import { techniques } from "@/content";
import { useAcademy } from "@/lib/academy-store";

export const Route = createFileRoute("/preferiti")({
  head: () => ({
    meta: [
      { title: "I miei preferiti — Krav Maga & Kyusho Academy" },
      { name: "description", content: "Le schede tecniche salvate per il ripasso rapido." },
      { property: "og:title", content: "I miei preferiti — Krav Maga & Kyusho Academy" },
      { property: "og:description", content: "Le schede tecniche salvate per il ripasso rapido." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Preferiti,
});

function Preferiti() {
  const { favorites } = useAcademy();
  const list = techniques.filter((t) => favorites.includes(t.slug));
  return (
    <div className="px-5 py-12 md:px-10 md:py-16">
      <SectionTitle eyebrow="La mia lista" title="Preferiti" />
      {list.length === 0 ? (
        <div className="mt-10 flex flex-col items-start gap-4 rounded-md border border-dashed border-border p-8">
          <Heart className="h-8 w-8 text-muted-foreground" />
          <p className="max-w-md text-sm leading-relaxed text-foreground/80">
            Non hai ancora salvato nessuna tecnica. Tocca il cuore su una scheda per aggiungerla qui.
          </p>
          <Link to="/" className="rounded-sm bg-foreground px-4 py-2.5 text-sm font-semibold text-background">
            Sfoglia il catalogo
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((t) => (
            <MediaCard key={t.slug} t={t} />
          ))}
        </div>
      )}
    </div>
  );
}
