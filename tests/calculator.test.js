import calculator from "../calculator.js";

test("handles addition of 2 integer numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
