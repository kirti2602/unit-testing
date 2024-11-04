import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first arg if it is greater", () => {
    // AAA
    // Arrange: Turn on the TV

    const a = 2;
    const b = 1;

    // Act: Press the power button
    const result = max(a, b);

    // Assert: Verify TV is off
    expect(result).toBe(2);

    // One liner sol
    // expect(max(2, 1)).toBe(2)
  });

  it("should retrun the second arg if it is greater", () => {
    expect(max(2, 4)).toBe(4);
  });

  it("should return first arg if both args are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if divisible by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if it is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return the number as string if divisible by neither 3 or 5", () => {
    expect(fizzBuzz(11)).toBe("11");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate of an array with an single element", () => {
    expect(calculateAverage([2])).toBe(2);
  });

  it("should calculate av of an array with an 2 elements", () => {
    expect(calculateAverage([2, 1])).toBe(1.5);
  });

  it("should calculate av of an array with an 3 elements", () => {
    expect(calculateAverage([2, 1, 3])).toBe(2);
  });
});
