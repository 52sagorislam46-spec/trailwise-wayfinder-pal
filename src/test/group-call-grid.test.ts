import { describe, expect, it } from "vitest";
import { gridRows } from "../components/fly/groupCalls";

describe("group call grid", () => {
  it("2 people split top/bottom", () => expect(gridRows(2)).toEqual([1, 1]));
  it("3 people: one on top, two below", () => expect(gridRows(3)).toEqual([1, 2]));
  it("4 people: 2x2", () => expect(gridRows(4)).toEqual([2, 2]));
  it("5 people: 2 over 3", () => expect(gridRows(5)).toEqual([2, 3]));
  it("every person gets a tile", () => {
    for (let n = 1; n <= 40; n++) expect(gridRows(n).reduce((a, b) => a + b, 0)).toBe(n);
  });
});
