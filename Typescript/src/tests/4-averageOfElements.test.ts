import averageOfElements from "../4-averageOfElements.ts";

describe('averageOfElements', () => {
  it('should return the correct average of elements', () => {
    const numbers: number[] = [1, 2, 3, 4, 5];
    const expectedAverage: number = 3;

    const result = averageOfElements(numbers);

    expect(result).toBe(expectedAverage);
  });

  it('should return 0 if the array is empty', () => {
    const numbers: number[] = [];
    const expectedAverage: number = 0;

    const result = averageOfElements(numbers);

    expect(result).toBe(expectedAverage);
  });
});
