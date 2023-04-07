const maxNumber = require("../problems/3-maxNumber");

describe("maxNumber", () => {
  test("should return the largest number in the array", () => {
    expect(maxNumber([1, 2, 3, 4])).toBe(4);
    expect(maxNumber([-1, -5, -3, -4])).toBe(-1);
    expect(maxNumber([100, 0, 50, -10, 75])).toBe(100);
  });

  test("should return null for an empty array", () => {
    expect(maxNumber([])).toBeNull();
  });

  test("should return the only number in an array with one element", () => {
    expect(maxNumber([5])).toBe(5);
  });
});
