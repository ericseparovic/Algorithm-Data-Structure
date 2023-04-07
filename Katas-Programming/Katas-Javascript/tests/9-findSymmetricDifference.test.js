const findSymmetricDifference = require("../problems/9-findSymmetricDifference");

describe("findSymmetricDifference", () => {
  test("should return symmetric difference of two arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const expected = [1, 4];
    const result = findSymmetricDifference(arr1, arr2);
    expect(result).toEqual(expected);
  });

  test("should handle empty arrays", () => {
    const arr1 = [];
    const arr2 = [];
    const expected = [];
    const result = findSymmetricDifference(arr1, arr2);
    expect(result).toEqual(expected);
  });

  test("should handle arrays with same elements", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const expected = [];
    const result = findSymmetricDifference(arr1, arr2);
    expect(result).toEqual(expected);
  });

  test("should handle arrays with no common elements", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    const result = findSymmetricDifference(arr1, arr2);
    expect(result).toEqual(expected);
  });

  test("should handle arrays with duplicate elements", () => {
    const arr1 = [1, 2, 2, 3, 4];
    const arr2 = [2, 3, 3, 4, 5];
    const expected = [1, 5];
    const result = findSymmetricDifference(arr1, arr2);
    expect(result).toEqual(expected);
  });
});
