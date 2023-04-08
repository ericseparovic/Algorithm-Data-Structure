// This is function called maxNumber, which takes an array of numbers as its parameter.

// The first thing the funcion does is check if the array is empty by checking its lenght. If it's empty, the function return null

// If the array is not empty, the function initializes two variables num and i. num is set to the fisrt elment of the array andi is set to 0

// The funcion then enters a do-while loop. The loop checks if i is less than the length of the array. If it is, the loop executes the code inside the llop boody.

// Inside the loop body, the function checks if the current element of the array at index i is greater than num. If it is, num is updated to the new value.

// After that, the function increments i by 1 and continues the loop until i is no longer less than the length of the array.

// Once the loop is finished, the function returns the value of num, which should be the maximum number in the array.

// So, in summary, this function takes an array of numbers, finds the maximum number in the array, and returns it.

function maxNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let num = numbers[0];
  let i = 0;

  do {
    if (numbers[i] > num) {
      num = numbers[i];
    }

    i++;
  } while (i < numbers.length);

  return num;
}

module.exports = maxNumber;
