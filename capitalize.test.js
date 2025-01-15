import capitalize from "./capitalize.js";

test("handles strings with spaces", () => {
  expect(capitalize(" sup")).toBe(" sup");
  expect(capitalize(" yo")).toBe(" yo");
});

test("leaves capitalized strings unchanged", () => {
  expect(capitalize("Hello World")).toBe("Hello World");
  expect(capitalize("Hey")).toBe("Hey");
});

test("handles empty strings", () => {
  expect(capitalize("")).toBe("");
});

test("handles strings with numbers & special characters", () => {
  expect(capitalize("12345")).toBe("12345");
  expect(capitalize("?question")).toBe("?question");
});

test("handles single letters appropriately", () => {
  expect(capitalize("a")).toBe("A");
  expect(capitalize("b")).toBe("B");
});

test("capitalizes the first letter", () => {
  expect(capitalize("randomstring")).toBe("Randomstring");
  expect(capitalize("anotherstring")).toBe("Anotherstring");
  expect(capitalize("onemore")).toBe("Onemore");
});

test("capitalize exists", () => {
  expect(capitalize).not.toBeUndefined();
});
