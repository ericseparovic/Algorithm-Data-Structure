// ********************
// ****EJERCICIO 10*****
// ********************
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// ********************
// ****SOLUTION 10*****
// ********************
// this is a javascript function named adjacentelementsproduct that takes an array nums as an argument and returns the maximum product of any two adjacent elements in the array.

// the function starts by checking if the length of the array is 1, and if so, it returns undefined. otherwise, it initializes a variable named max to the product of the first two elements in the array, and then loops through the array from the second element to the second-to-last element.

// inside the loop, it calculates the product of the current element and the next element using nums[i] * nums[i + 1], and if this product is greater than the current maximum max, it updates max to this new product.

// finally, it returns max, which should be the maximum product of any two adjacent elements in the array.

// this function looks like it would work correctly for any array of numbers, as long as the array has at least two elements.

function adjacentElementsProduct(nums) {
  if (nums.length === 1) {
    return undefined;
  }

  let max = nums[0] * nums[1];
  for (let i = 1; i < nums.length - 1; i++) {
    let product = nums[i] * nums[i + 1];
    if (product > max) {
      max = product;
    }
  }
  return max;
}

module.exports = adjacentElementsProduct;
