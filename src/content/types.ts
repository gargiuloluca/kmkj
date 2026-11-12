export type PartId = 1 | 2 | 3;
export type ImageKey =
  | "hero"
  | "beginner"
  | "expert"
  | "ground"
  | "stress"
  | "kyusho"
  | "hammerfist"
  | "knee"
  | "wrist"
  | "frontChoke"
  | "rearChoke"
  | "breakfall"
  | "gun"
  | "standUp";

export type Phase = { steps: string[]; cue: string };

export type TechniqueSheet = {
  slug: string;
  part: PartId;
  chapter: number;
  title: string;
  en: string;
  level: "Base" | "Intermedio" | "Avanzato";
  summary: string;
  biomechanics: { weight: string; lever: string; timing: string };
  /** Fase 1 Postura/Ingresso, Fase 2 Azione/Reazione, Fase 3 Contrattacco/Neutralizzazione, Fase 4 Uscita/Scanning */
  phases: [Phase, Phase, Phase, Phase];
  errors: string[];
  /** Direct anatomical link to an atlas point (code must match an atlas entry). */
  kyusho: { point: string; note: string };
  drill: string[];
  clip: { seconds: number; shots: { t: string; desc: string }[]; overlays: string[] };
  image: ImageKey;
};

export type Topic = { title: string; en?: string; text: string; points?: string[] };

export type Chapter = {
  n: number;
  title: string;
  en: string;
  intro: string;
  topics: Topic[];
  techniques: string[];
};

export type Part = {
  id: PartId;
  roman: string;
  path: "/fondamenta" | "/esperti" | "/kyusho";
  title: string;
  en: string;
  focus: string;
  image: ImageKey;
  chapters: Chapter[];
};

export type KyushoPoint = {
  code: string;
  slug: string;
  name: string;
  location: string;
  anatomy: string;
  vector: string;
  reaction: string;
  application: string;
  safeTraining: string;
  marker?: { x: number; y: number };
};
