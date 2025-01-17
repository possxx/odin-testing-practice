import caesarCipher from "../caesarCipher.js";

test("handles very long strings", () => {
  const longString = "a".repeat(1000);
  const expectedString = "b".repeat(1000);
  expect(caesarCipher(longString, 1)).toBe(expectedString);
});

test("handles full alphabet rotation", () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
  expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
});

test("handles zero shift factor", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
  expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
});

test("handles empty strings", () => {
  expect(caesarCipher("", 5)).toBe("");
});

test("handles negative shift factors", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
  expect(caesarCipher("HeLLo", -23)).toBe("KhOOr");
  expect(caesarCipher("Shift by 10", -42)).toBe("Crspd li 10");
});

test("handles very large shift factors", () => {
  expect(caesarCipher("Shift by 10", 36)).toBe("Crspd li 10");
  expect(caesarCipher("Hello, World!", 55)).toBe("Khoor, Zruog!");
});

test("handles special characters", () => {
  expect(caesarCipher("Shift by 10", 10)).toBe("Crspd li 10");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("abcXYZ", 4)).toBe("efgBCD");
});

test("handles shifting strings", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("hello", 4)).toBe("lipps");
});
