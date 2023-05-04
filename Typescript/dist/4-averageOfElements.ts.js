"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5];
function averageOfElements(numbers) {
    let average = 0;
    let total = 0;
    if (numbers.length == 0) {
        return average;
    }
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    average = total / numbers.length;
    return average;
}
exports.default = averageOfElements;
