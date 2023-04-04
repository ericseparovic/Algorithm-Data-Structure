// Import the function to be tested
const sortNumbersSelection = require("../problems/7-sortNumbersSelection");

// Declare the tests
describe("sortNumbersSelection", () => {
  test("sort an array of numbers", () => {
    const nums = [3, 1, 4, 2, 5];
    const sortedNums = [1, 2, 3, 4, 5];
    expect(sortNumbersSelection(nums)).toEqual(sortedNums);
  });

  test("sort an empty array", () => {
    const nums = [];
    const sortedNums = [];
    expect(sortNumbersSelection(nums)).toEqual(sortedNums);
  });

  test("sort an array with a single element", () => {
    const nums = [42];
    const sortedNums = [42];
    expect(sortNumbersSelection(nums)).toEqual(sortedNums);
  });

  test("sort an already sorted array", () => {
    const nums = [1, 2, 3, 4, 5];
    const sortedNums = [1, 2, 3, 4, 5];
    expect(sortNumbersSelection(nums)).toEqual(sortedNums);
  });

  test("sort a descending array", () => {
    const nums = [5, 4, 3, 2, 1];
    const sortedNums = [1, 2, 3, 4, 5];
    expect(sortNumbersSelection(nums)).toEqual(sortedNums);
  });
});
