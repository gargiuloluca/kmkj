import { describe, expect, it } from "vitest";

import { getKyushoPoint, getTechnique, kyushoAtlas, parts, techniques } from "@/content";

describe("curriculum", () => {
  it("every technique sheet has exactly the 4 phases, each with steps", () => {
    for (const t of techniques) {
      expect(t.phases, t.slug).toHaveLength(4);
      for (const ph of t.phases) expect(ph.steps.length, t.slug).toBeGreaterThan(0);
    }
  });

  it("every chapter references existing technique sheets in the right part and chapter", () => {
    for (const p of parts)
      for (const c of p.chapters)
        for (const slug of c.techniques) {
          const t = getTechnique(slug);
          expect(t, slug).toBeDefined();
          expect([t!.part, t!.chapter], slug).toEqual([p.id, c.n]);
        }
  });

  it("every Kyusho reference points to an atlas entry", () => {
    for (const t of techniques) if (t.kyusho) expect(getKyushoPoint(t.kyusho.point), t.slug).toBeDefined();
    for (const k of kyushoAtlas) for (const slug of k.related) expect(getTechnique(slug), slug).toBeDefined();
  });

  it("covers the three parts: Fondamenta, Esperti, Kyusho", () => {
    expect(parts.map((p) => p.path)).toEqual(["/fondamenta", "/esperti", "/kyusho"]);
  });
});
