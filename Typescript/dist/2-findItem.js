"use strict";
const numbers = [1, 2, 3, 4, 5];
function findElement1(numbers, element) {
    let index = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == element) {
            index = i;
            break;
        }
    }
    return index;
}
function findElement2(numbers, element) {
    return numbers.indexOf(element);
}
console.log(findElement2(numbers, 3));
