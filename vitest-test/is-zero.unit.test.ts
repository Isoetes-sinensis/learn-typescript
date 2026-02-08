import { test, expect } from "vitest";
import { isZero } from "./is-zero";

test("Return true when getting a zero", () => {
    expect(isZero(0)).toBe(true);
});

test("Return false when getting a one", () => {
    expect(isZero(1)).toBe(false);
});