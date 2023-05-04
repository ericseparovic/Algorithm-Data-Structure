"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5];
function sumOfElements(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}
exports.default = sumOfElements;
