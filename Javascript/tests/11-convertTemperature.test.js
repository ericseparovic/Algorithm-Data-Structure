const convertTemperature = require("../problems/convertTemperature");

describe("convertTemperature function", () => {
  test("should convert Celsius to Fahrenheit", () => {
    expect(convertTemperature(0, "c")).toBe("32");
    expect(convertTemperature(20, "c")).toBe("68");
    expect(convertTemperature(-40, "c")).toBe("-40");
  });

  test("should convert Fahrenheit to Celsius", () => {
    expect(convertTemperature(32, "f")).toBe("0");
    expect(convertTemperature(68, "f")).toBe("20");
    expect(convertTemperature(-40, "f")).toBe("-40");
  });

  test("should throw an error if the temperature is invalid", () => {
    expect(() => convertTemperature("abc", "c")).toThrow("Invalid temperature");
    expect(() => convertTemperature(null, "f")).toThrow("Invalid temperature");
  });

  test("should throw an error if the unit is invalid", () => {
    expect(() => convertTemperature(0, "k")).toThrow("Invalid unit");
    expect(() => convertTemperature(20, "invalid")).toThrow("Invalid unit");
  });

  test("should round to the specified number of decimal places", () => {
    expect(convertTemperature(12.3456, "c", 2)).toBe("54.22");
    expect(convertTemperature(55.55, "f", 1)).toBe("13.1");
  });
});
