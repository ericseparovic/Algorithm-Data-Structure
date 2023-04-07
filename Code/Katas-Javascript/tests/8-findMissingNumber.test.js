const findMissingNumber = require("../problems/8-findMissingNumber");

describe("findMissingNumber", () => {
  test("Return missing number 2", () => {
    const nums = [1, 3, 4];
    const result = findMissingNumber(nums);
    expect(result).toEqual(2);
  });

  test("Return missing number 2", () => {
    const nums = [1, 2, 3, 4];
    const result = findMissingNumber(nums);
    expect(result).toEqual(null);
  });
});
