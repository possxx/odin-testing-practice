import calculator from "../calculator.js";

test("handles boundary values", () => {
  expect(calculator.add(Number.MAX_SAFE_INTEGER, 1)).toBe(
    Number.MAX_SAFE_INTEGER + 1
  );
  expect(calculator.add(Number.MIN_SAFE_INTEGER, -1)).toBe(
    Number.MIN_SAFE_INTEGER - 1
  );
  expect(calculator.subtract(Number.MAX_SAFE_INTEGER, -1)).toBe(
    Number.MAX_SAFE_INTEGER + 1
  );
  expect(calculator.subtract(Number.MIN_SAFE_INTEGER, 1)).toBe(
    Number.MIN_SAFE_INTEGER - 1
  );
  expect(
    calculator.divide(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
  ).toBe(Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER);
});

test("handles multiplication by 0", () => {
  expect(calculator.multiply(12, 0)).toBe(0);
});

test("handles multiplication of integer numbers", () => {
  expect(calculator.multiply(3, 5)).toBe(15);
  expect(calculator.multiply(8, 2)).toBe(16);
});

test("handles division by 0", () => {
  expect(() => calculator.divide(5, 0)).toThrow();
});

test("handles division of very large numbers", () => {
  expect(calculator.divide(1e10, 2e10)).toBe(0.5);
  expect(calculator.divide(2e10, 1e10)).toBe(2);
});

test("handles division of floating point numbers", () => {
  expect(calculator.divide(1.293, 1.00001)).toBeCloseTo(
    1.2929870701292987070129298707013
  );
  expect(calculator.divide(5.4, 2.3)).toBeCloseTo(
    2.3478260869565217391304347826087
  );
});

test("handles division of integer numbers", () => {
  expect(calculator.divide(9, 9)).toBe(1);
  expect(calculator.divide(2, 4)).toBe(0.5);
});

test("handles subtraction of very large numbers", () => {
  expect(calculator.subtract(1e10, 1e10)).toBe(0);
  expect(calculator.subtract(1e10, -1e10)).toBe(2e10);
});

test("handles subtraction of floating point numbers", () => {
  expect(calculator.subtract(1.0000001, 0.0000001)).toBeCloseTo(1);
  expect(calculator.subtract(1.23895, -5.20123)).toBeCloseTo(6.44018);
});

test("handles subtraction of integer numbers", () => {
  expect(calculator.subtract(8, -5)).toBe(13);
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test("handles addition of very large numbers", () => {
  expect(calculator.add(1e10, 1e10)).toBe(2e10);
  expect(calculator.add(-1e10, 1e10)).toBe(0);
});

test("handles addition of floating point numbers", () => {
  expect(calculator.add(2.3, -5.82)).toBeCloseTo(-3.52);
  expect(calculator.add(12.1589, 5.326)).toBeCloseTo(17.4849);
});

test("handles addition of negative integer numbers", () => {
  expect(calculator.add(-2, -8)).toBe(-10);
  expect(calculator.add(-12, -15)).toBe(-27);
});

test("handles addition of positive integer numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(5, 8)).toBe(13);
  expect(calculator.add(12, 19)).toBe(31);
});
