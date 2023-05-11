"use strict";
const numbers = [4, 9, 3, 8, 1, 5, 6, 2, 7];
function bubblesSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            console.log(numbers[j], " es mayor a ", numbers[j + 1]);
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}
const result = bubblesSort(numbers);
