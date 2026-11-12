import { createFileRoute } from "@tanstack/react-router";

import { PartPage } from "@/components/course/PartPage";
import { getPart } from "@/content";

export const Route = createFileRoute("/fondamenta")({
  head: () => ({
    meta: [
      { title: "Parte I · Fondamenta — Krav Maga & Kyusho Jutsu" },
      { name: "description", content: "Postura, biomeccanica, colpi primari e rilasci: il percorso principianti del curriculum Krav Maga." },
      { property: "og:title", content: "Parte I · Fondamenta — Krav Maga" },
      { property: "og:description", content: "Baricentro, Dead Zone, catena cinetica e protocolli anti-strangolamento." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PartPage part={getPart(1)} />,
});
