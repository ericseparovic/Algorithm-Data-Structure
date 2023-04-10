// ********************
// ****EJERCICIO 10*****
// ********************
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// ********************
// ****SOLUTION 10*****
// ********************

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
