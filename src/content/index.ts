import { parts } from "./curriculum";
import { kyushoAtlas } from "./kyusho-atlas";
import { part1Techniques } from "./techniques-part1";
import { part2Techniques } from "./techniques-part2";
import type { PartId } from "./types";

export * from "./types";
export { parts, kyushoAtlas };
export { phaseLabels } from "./phases";
export * from "./protocols";

export const techniques = [...part1Techniques, ...part2Techniques];

export const getTechnique = (slug: string) => techniques.find((t) => t.slug === slug);
export const getPart = (id: PartId) => parts.find((p) => p.id === id)!;
export const getKyushoPoint = (code: string) => kyushoAtlas.find((k) => k.code === code);

/** Previous/next technique in curriculum order. */
export function getNeighbours(slug: string) {
  const i = techniques.findIndex((t) => t.slug === slug);
  return { prev: techniques[i - 1], next: techniques[i + 1] };
}

/** Technique sheets linked to a given atlas point. */
export const getLinkedTechniques = (code: string) => techniques.filter((t) => t.kyusho.point === code);
