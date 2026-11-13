import { createFileRoute } from "@tanstack/react-router";

import { ChapterSection, PartHeader } from "@/components/course/PartPage";
import { AdrenalineProtocol, InstructorChecklist, StressLevels } from "@/components/course/Protocols";
import { getPart } from "@/content";

export const Route = createFileRoute("/esperti")({
  head: () => ({
    meta: [
      { title: "Parte II · Esperti & Tactical Combat — Krav Maga" },
      { name: "description", content: "Combattimento a terra, difesa da armi, controllo del sanguinamento, stress a 4 livelli e Adrenalin Management." },
      { property: "og:title", content: "Parte II · Esperti & Tactical Combat" },
      { property: "og:description", content: "Ground survival, difesa a 360° da coltello, protocolli di stress e check-list di sicurezza." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EspertiPage,
});

function EspertiPage() {
  const part = getPart(2);
  return (
    <>
      <PartHeader part={part} />
      <ChapterSection part={part} n={1} />
      <ChapterSection part={part} n={2} />
      <ChapterSection part={part} n={3}>
        <StressLevels />
        <AdrenalineProtocol />
        <InstructorChecklist context="Sparring a contatto pieno" />
      </ChapterSection>
    </>
  );
}
