const countVowels = require("../problems/6-countVowels.js");

describe("countVowels", () => {
  test("counts vowels in a string", () => {
    const result = countVowels("Hello, world!");
    expect(result).toEqual({ a: 0, e: 1, i: 0, o: 2, u: 0 });
  });

  test("ignores non-vowel characters", () => {
    const result = countVowels("The quick brown fox jumps over the lazy dog.");
    expect(result).toEqual({ a: 1, e: 3, i: 1, o: 4, u: 2 });
  });

  test("is case-sensitive", () => {
    const result = countVowels("aeiouAEIOU");
    expect(result).toEqual({ a: 2, e: 2, i: 2, o: 2, u: 2 });
  });

  test("handles empty string", () => {
    const result = countVowels("");
    expect(result).toEqual({ a: 0, e: 0, i: 0, o: 0, u: 0 });
  });

  test("handles string with no vowels", () => {
    const result = countVowels("xyz");
    expect(result).toEqual({ a: 0, e: 0, i: 0, o: 0, u: 0 });
  });
});
