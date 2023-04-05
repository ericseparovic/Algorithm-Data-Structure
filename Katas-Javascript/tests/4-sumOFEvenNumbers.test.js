const sumOfEvenNumbers = require("../problems/4-sumOfEvenNumbers");

describe("sumOfEvenNumbers", () => {
  const result1 = sumOfEvenNumbers([1, 2, 3, 4, 5, 6]);
  const result2 = sumOfEvenNumbers([1, 3, 5, 19]);
  const result3 = sumOfEvenNumbers([2, 4, 6, 8]);
  const result4 = sumOfEvenNumbers([]);

  test("Should return sum even numbers", () => {
    expect(result1).toBe(12);
    expect(result2).toBe(0);
    expect(result3).toBe(20);
    expect(result4).toBe(0);
  });
});
