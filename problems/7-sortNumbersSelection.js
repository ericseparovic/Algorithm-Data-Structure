// ********************
// ****EJERCICIO 7*****
// ********************
// Write a function called numberSorthing() that takes a list of numbers and sorts them in asceding order using the selection sort algorithm.
// The function should accept a list of numbers and return the sorted listt.

// ********************
// ****SOLUTION 7*****
// ********************

// This function takes an array of numbers (nums) as an argument and uses a selection sorting algorithm to sort them in ascending order.

// First, the length of the input array is stored in the variable n. Then, the outer loop iterates over each element in the array, starting from the first element (i = 0) and continuing until the last element (i = n - 1).

// Inside the outer loop, the variable min_index is initialized to the current index (i). The inner loop then starts from the next element after the current index (j = i + 1) and iterates until the end of the array (j < n).

// During each iteration of the inner loop, the function checks if the element at index j is smaller than the element at the current minimum index (nums[min_index]). If it is, the value of min_index is updated to j.

// Once the inner loop completes, the function checks if the current minimum index is different from the current index (min_index !== i). If it is, the function swaps the elements at the current index and the minimum index using a temporary variable temp.

// Finally, the function returns the sorted array

function sortNumbersSelection(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let min_index = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min_index]) {
        min_index = j;
      }
    }

    if (min_index !== i) {
      let temp = nums[i];
      nums[i] = nums[min_index];
      nums[min_index] = temp;
    }
  }

  return nums;
}

module.exports = sortNumbersSelection;
