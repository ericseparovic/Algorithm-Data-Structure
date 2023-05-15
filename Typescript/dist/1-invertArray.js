"use strict";
const array = [1, 2, 3, 4, 5];
function invertArray1(array) {
    for (let i = 0; i < array.length; i++) {
        let left = i;
        let right = array.length - i - 1;
        console.log(right, left);
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
function invertArray2(array) {
    return array.reverse();
}
function invertArray3(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
const result = invertArray1(array);
console.log(result);
