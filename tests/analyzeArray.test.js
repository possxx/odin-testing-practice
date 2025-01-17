import analyzeArray from "../analyzeArray.js";

test("handles arrays with duplicate values", () => {
  expect(analyzeArray([2, 2, 2, 2]).max).toBe(2);
  expect(analyzeArray([2, 2, 2, 2]).min).toBe(2);
  expect(analyzeArray([2, 2, 2, 2]).arithmeticMean).toBe(2);
});

test("handles single-element array", () => {
  expect(analyzeArray([5]).length).toBe(1);
  expect(analyzeArray([5]).max).toBe(5);
  expect(analyzeArray([5]).min).toBe(5);
  expect(analyzeArray([5]).arithmeticMean).toBe(5);
});

test("handles finding array length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  expect(analyzeArray([-2, -8, -9, 12, 1, 8, -2]).length).toBe(7);
});

test("handles finding max value", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([-2, -8, -9, 12, 1, 8, -2]).max).toBe(12);
});

test("handles finding min value", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([-2, -8, -9, 12, 1, 8, -2]).min).toBe(-9);
});

test("handles computation of arithmetic mean", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).arithmeticMean).toBe(4);
  expect(analyzeArray([-2, -8, -9, 12, 1, 8, -2]).arithmeticMean).toBe(0);
});
