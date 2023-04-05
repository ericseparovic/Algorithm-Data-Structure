// EXERCISE 3:

// Addition of even numbers

// DESCRIPTION:

// Write a JavaScript function that takes an array of numbers and returns the sum of the even numbers in the array. If the array is empty, the function must return 0.

// SOLUTION:

// This function that receives an array of numbers as a parameter and return the sum of the even numbers in the array
// If the input array is not empty, the function initilizes a variable called sum with a value of 0
// Next de function iterates throught each element in the input array using a for loop.
// For each element, the function checks if it is an even number by using the modululs operator % to ckeck if it has a remainder of 0 when divided by 2.
// If the number is even, the funcion adds it to the sum variable
// After all the elmentes in the array have been iterated over, the function returns the final value of sum, which represent the sum of all even numbers in the input array.

function sumOfEvenNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

module.exports = sumOfEvenNumbers;

// OTHER SOLUTION
function sumOfEvenNumbers2(numbers) {
  return numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

// This solotuions uses the reduce method to iterate throught the array and accumulate the sum of even numbers. The reduce method takes a callback function that takes two arguments:
// an accumulator sum and the current element of the array num

// The callback function checks if the current nnumber is even by using the modulus operator, and if it is, adds it to the accumultaror. Otherwise, it returns the accumulator.

// The second argument to reduce is the initial value of the accumulator, which is set  to 0
