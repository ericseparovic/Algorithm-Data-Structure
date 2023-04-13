// *****************************************
// ******Problem 11 Convert Temperature*****
// *****************************************
// Write a function convertTemperature that takes in two arguments: a temperature value and a string representing the units of that temperature ("C" for Celsius or "F" for Fahrenheit). The function should convert the temperature to the opposite unit and return the converted value.

// The temperature value will be a number.
// The units string will always be either "C" or "F".
// You should round the converted temperature value to one decimal place.
// You should use the following conversion formulas:
// Celsius to Fahrenheit: (Celsius * 1.8) + 32
// Fahrenheit to Celsius: (Fahrenheit - 32) / 1.8

// *****************************************
// ************Solution 11******************
// *****************************************
// This code defines a function called convertTemperature that converts temperature from Celsius to Fahrenheit or from Fahrenheit to Celsius depending on the value of the second parameter.

// The function has three main cases:

// If the first argument (temp) is undefined, the function returns the string "Temp is undefined".
// If the second argument (unit) is undefined, the function returns the string "Unit is undefined".
// If the value of unit is "c" (Celsius), the function converts the temperature from Celsius to Fahrenheit and returns the result rounded to the nearest integer using the toFixed method.

function convertTemperature(temp, unit, precision = 0) {
  if (temp === undefined || unit === undefined) {
    return "Temp or Unit is undefined";
  }

  if (unit.toLowerCase() !== "c" && unit.toLowerCase() !== "f") {
    throw new Error("Invalid unit");
  }

  const tempNum = parseFloat(temp);

  if (isNaN(tempNum)) {
    throw new Error("Invalid temperature");
  }

  let result;

  if (unit.toLowerCase() === "c") {
    result = tempNum * 1.8 + 32;
  } else {
    result = (tempNum - 32) / 1.8;
  }

  return result.toFixed(precision);
}

module.exports = convertTemperature;
