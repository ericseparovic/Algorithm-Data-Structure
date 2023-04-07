// ********************
// ****EJERCICIO 10*****
// ********************
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// ********************
// ****SOLUTION 10*****
// ********************
function adjacentElementsProduct(array) {
  let max = 0;
  let n = array.length;
  let product;
  let a;
  let b;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      product = array[i] * array[j];
      if (product > max) {
        max = 0;
        let a = array[i];
        let b = array[j];
      }
      console.log(array[j], array[i]);
    }
  }

  return max, a, b;
}

const result = adjacentElementsProduct([1, 2, 3]);
console.log(result);
