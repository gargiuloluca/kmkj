import { describe, expect, it } from "vitest";

import { getKyushoPoint, getLinkedTechniques, getTechnique, kyushoAtlas, parts, stressLevels, techniques } from "@/content";

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

  it("there are exactly 15 technique sheets", () => {
    expect(techniques).toHaveLength(15);
  });

  it("every technique sheet links to an existing Kyusho atlas point", () => {
    for (const t of techniques) expect(getKyushoPoint(t.kyusho.point), t.slug).toBeDefined();
  });

  it("every atlas point is used by at least one technique sheet", () => {
    for (const k of kyushoAtlas) expect(getLinkedTechniques(k.code).length, k.code).toBeGreaterThan(0);
  });

  it("the stress plan has 4 levels, each with a BPM target", () => {
    expect(stressLevels).toHaveLength(4);
    for (const l of stressLevels) expect(l.bpm).toMatch(/bpm/);
  });

  it("covers the three parts: Fondamenta, Esperti, Kyusho", () => {
    expect(parts.map((p) => p.path)).toEqual(["/fondamenta", "/esperti", "/kyusho"]);
  });
});
