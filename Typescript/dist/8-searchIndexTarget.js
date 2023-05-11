"use strict";
const arrNumbers = [9, 2, 5, 6];
const target = 7;
function twoSumImproved(arrNumbers, target) {
    const nums = {};
    for (let i = 0; i < arrNumbers.length; i++) {
        const currentNum = arrNumbers[i];
        const complement = target - currentNum;
        console.log(complement, nums);
        if (complement in nums) {
            return [nums[complement], i];
        }
        nums[currentNum] = i;
    }
    return [];
}
console.log(twoSumImproved(arrNumbers, target));
