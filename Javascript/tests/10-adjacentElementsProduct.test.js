const adjacentElementsProduct = require("../problems/10-adjacentElementsProduct");
describe("adjacentElementsProduct", () => {
  it("returns the largest product of adjacent elements in the array", () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
    expect(adjacentElementsProduct([1, 2, 3, 4, 5])).toBe(20);
    expect(adjacentElementsProduct([-1, -2, -3, -4, -5])).toBe(20);
    expect(adjacentElementsProduct([0, 0, 0, 0, 0])).toBe(0);
    expect(adjacentElementsProduct([2])).toBeUndefined();
  });
});
