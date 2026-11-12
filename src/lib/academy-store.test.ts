import { beforeEach, describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";

import { academy, useAcademy } from "./academy-store";

describe("academy store", () => {
  beforeEach(() => act(() => academy.reset()));

  it("toggling a favourite adds it, toggling again removes it", () => {
    const { result } = renderHook(() => useAcademy());
    act(() => academy.toggleFavorite("palm-strike"));
    expect(result.current.favorites).toEqual(["palm-strike"]);
    act(() => academy.toggleFavorite("palm-strike"));
    expect(result.current.favorites).toEqual([]);
  });

  it("completed sheets are saved to the device", () => {
    act(() => academy.toggleCompleted("hammerfist"));
    expect(JSON.parse(localStorage.getItem("kmkj-academy-v1")!).completed).toEqual(["hammerfist"]);
  });
});
