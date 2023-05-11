const arrNumbers: number[] = [9,2,5,6]
const target:  number = 7


// function twoSum(arrNumbers:number[]) {
//     for (let i = 0; i < arrNumbers.length; i++) {
//         for (let j = i + 1; j < arrNumbers.length; j++) {
//             let sum = arrNumbers[i] + arrNumbers[j]
//             if(sum === 7) {
//                 return [i, j]
//             }           
//         }
        
//     }

//     return []
// }

// export default twoSum

// function twoSumImproved(arrNumbers: number[], target: number) {
//   const nums = {};

//   for (let i = 0; i < arrNumbers.length; i++) {
//     const currentNum = arrNumbers[i];
//     const complement = target - currentNum;
// j
//     console.log(complement, nums)
//     if (complement in nums) {
//       return [nums[complement], i];
//     }

//     nums[currentNum] = i;
//   }


//   return [];
// }

// console.log(twoSumImproved(arrNumbers, target))