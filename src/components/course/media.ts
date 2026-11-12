import heroImg from "@/assets/hero-guard.jpg";
import beginnerImg from "@/assets/modulo-principianti.jpg";
import expertImg from "@/assets/modulo-esperti.jpg";
import groundImg from "@/assets/combattimento-terra.jpg";
import stressImg from "@/assets/stress-drill.jpg";
import kyushoImg from "@/assets/kyusho-punti.jpg";
import type { ImageKey, PartId } from "@/content";

export const media: Record<ImageKey, { src: string; width: number; height: number; alt: string }> = {
  hero: { src: heroImg, width: 1536, height: 1024, alt: "Istruttore in guardia difensiva di Krav Maga" },
  beginner: { src: beginnerImg, width: 1280, height: 960, alt: "Allenamento del colpo di palmo su scudo da impatto" },
  expert: { src: expertImg, width: 1280, height: 960, alt: "Deviazione e controllo del polso in una difesa da coltello" },
  ground: { src: groundImg, width: 1280, height: 960, alt: "Uscita dalla monta con la tecnica del ponte" },
  stress: { src: stressImg, width: 1280, height: 960, alt: "Allievo con occhiali oscurati durante un drill sotto stress" },
  kyusho: { src: kyushoImg, width: 1024, height: 1280, alt: "Mappa anatomica dei punti di pressione" },
};

export const tones: Record<PartId, { text: string; bg: string; border: string }> = {
  1: { text: "text-base", bg: "bg-base", border: "border-base" },
  2: { text: "text-pro", bg: "bg-pro", border: "border-pro" },
  3: { text: "text-kyusho", bg: "bg-kyusho", border: "border-kyusho" },
};
