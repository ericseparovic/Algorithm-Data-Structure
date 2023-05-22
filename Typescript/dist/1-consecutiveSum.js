"use strict";
function consecutiveSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}
console.log(consecutiveSum([1, 2, 3, 4, 5]));
