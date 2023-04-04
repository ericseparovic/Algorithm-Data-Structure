// ********************
// ****EJERCICIO 8*****
// ********************
// Write a function that takes a list of integers as input, where the integers are in the range 1 to n, and n+1 numbers are present in the list. The function should return the integer that is missing from the list.
// ********************
// ****SOLUTION 8*****
// ********************
// This function assumes that the numbers in the input array are in the range 1 to n, and that there is exactly one number missing from the array. It iterates over the array using a for loop, and checks if each element is equal to its corresponding index plus 1. If an element is found that is not equal to its corresponding index plus 1, that means that the missing number is the index plus 1, so the function returns that val
function findMissingNumber(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return null;
}

module.exports = findMissingNumber;
