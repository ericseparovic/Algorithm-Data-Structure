// Write a function called "sum_consecutive" that takes a list of integers as a parameter and returns the sum of consecutive elements in the list. For example, for the list [1, 2, 3, 4], the function should return 10 (1 + 2 + 3 + 4). Make sure to handle special cases such as empty lists or lists with a single element.

function consecutiveSum(arr:number[]):number {
    let total = 0;

    for(let i=0;i < arr.length;i++) {
        total = total + arr[i]

    }    

    return total
}

console.log(consecutiveSum([1,2,3,4,5]))



