import reverseString from "../reverseString.js";

test("handles special characters", () => {
  expect(reverseString('"§ß23ß09ß234#')).toBe('#432ß90ß32ß§"');
  expect(reverseString("ab0987()§)=")).toBe("=)§)(7890ba");
});

test("handles multilingual characters", () => {
  expect(reverseString("こんにちは")).toBe("はちにんこ");
  expect(reverseString("áéíóú")).toBe("úóíéá");
});

test("handles strings with spaces", () => {
  expect(reverseString("  hello world")).toBe("dlrow olleh  ");
  expect(reverseString(" thanks")).toBe("sknaht ");
});

test("handles empty strings", () => {
  expect(reverseString("")).toBe("");
});

test("reverses strings", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("goodbye")).toBe("eybdoog");
  expect(reverseString("nihao")).toBe("oahin");
});
