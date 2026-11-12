import heroImg from "@/assets/hero-guard.jpg";
import beginnerImg from "@/assets/modulo-principianti.jpg";
import expertImg from "@/assets/modulo-esperti.jpg";
import groundImg from "@/assets/combattimento-terra.jpg";
import stressImg from "@/assets/stress-drill.jpg";
import kyushoImg from "@/assets/kyusho-punti.jpg";
import hammerfistImg from "@/assets/thumb-hammerfist.jpg";
import kneeImg from "@/assets/thumb-ginocchiata.jpg";
import wristImg from "@/assets/thumb-rilascio-polso.jpg";
import frontChokeImg from "@/assets/thumb-strangolamento-frontale.jpg";
import rearChokeImg from "@/assets/thumb-strangolamento-posteriore.jpg";
import breakfallImg from "@/assets/thumb-breakfall.jpg";
import gunImg from "@/assets/thumb-arma-fuoco.jpg";
import standUpImg from "@/assets/thumb-stand-up.jpg";
import type { ImageKey, PartId } from "@/content";

export const media: Record<ImageKey, { src: string; width: number; height: number; alt: string }> = {
  hero: { src: heroImg, width: 1536, height: 1024, alt: "Istruttore in guardia difensiva di Krav Maga" },
  beginner: { src: beginnerImg, width: 1280, height: 960, alt: "Allenamento del colpo di palmo su scudo da impatto" },
  expert: { src: expertImg, width: 1280, height: 960, alt: "Deviazione e controllo del polso in una difesa da coltello" },
  ground: { src: groundImg, width: 1280, height: 960, alt: "Uscita dalla monta con la tecnica del ponte" },
  stress: { src: stressImg, width: 1280, height: 960, alt: "Allievo con occhiali oscurati durante un drill sotto stress" },
  kyusho: { src: kyushoImg, width: 1024, height: 1280, alt: "Mappa anatomica dei punti di pressione" },
  hammerfist: { src: hammerfistImg, width: 1280, height: 720, alt: "Colpo a martello discendente su sacco a terra" },
  knee: { src: kneeImg, width: 1280, height: 720, alt: "Ginocchiata frontale su scudo da impatto" },
  wrist: { src: wristImg, width: 1280, height: 720, alt: "Rotazione del polso per liberarsi da una presa" },
  frontChoke: { src: frontChokeImg, width: 1280, height: 720, alt: "Drill di difesa da strangolamento frontale" },
  rearChoke: { src: rearChokeImg, width: 1280, height: 720, alt: "Difesa da strangolamento posteriore con mani sull'avambraccio" },
  breakfall: { src: breakfallImg, width: 1280, height: 720, alt: "Caduta protettiva all'indietro sul tatami" },
  gun: { src: gunImg, width: 1280, height: 720, alt: "Deviazione di una pistola da allenamento" },
  standUp: { src: standUpImg, width: 1280, height: 720, alt: "Rialzata tattica da terra con guardia alta" },
};

export const partNames: Record<PartId, string> = { 1: "Fondamenta", 2: "Esperti", 3: "Kyusho" };

export const tones: Record<PartId, { text: string; bg: string; border: string }> = {
  1: { text: "text-base", bg: "bg-base", border: "border-base" },
  2: { text: "text-pro", bg: "bg-pro", border: "border-pro" },
  3: { text: "text-kyusho", bg: "bg-kyusho", border: "border-kyusho" },
};
