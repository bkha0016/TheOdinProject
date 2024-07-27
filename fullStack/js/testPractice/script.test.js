const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./script.js");

test("Capitalize hello, world! to be Hello, world!", () => {
  expect(capitalize("hello, world!")).toMatch(/Hello, world!/);
});

test("Reverse hello, world! to be !dlrow ,olleh", () => {
  expect(reverseString("Hello, World!")).toMatch(/!dlroW ,olleH/);
});

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = calculator();
  });

  test("adds two numbers", () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test("substract two numbers", () => {
    expect(calc.substract(2, 1)).toBe(1);
  });

  test("multiply two numbers", () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  test("divide two numbers", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });
});

describe("Caesar Cipher", () => {
  test("shifts characters by the given factor", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("wraps from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserves punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("handles negative shift", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
  });

  test("handles large shift values", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd"); // shift factor of 27 is equivalent to 1
  });

  test("handles zero shift", () => {
    expect(caesarCipher("abc", 0)).toBe("abc");
  });
});

describe("analyzeArray", () => {
  test("calculates average, min, max, and length", () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("works with negative numbers", () => {
    const result = analyzeArray([-1, -2, -3, -4, -5]);
    expect(result).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 5,
    });
  });

  test("works with a single number", () => {
    const result = analyzeArray([42]);
    expect(result).toEqual({
      average: 42,
      min: 42,
      max: 42,
      length: 1,
    });
  });

  test("throws an error for empty array", () => {
    expect(() => analyzeArray([])).toThrow(
      "Input must be a non-empty array of numbers"
    );
  });

  test("throws an error for non-array input", () => {
    expect(() => analyzeArray("not an array")).toThrow(
      "Input must be a non-empty array of numbers"
    );
  });
});
