//  Challenge 3 - Sum of elements
// Create an array of integers and sum all the elements

let numbers: number[] = [1,2,3,4,5]

function sumOfElements(numbers: number[]): number {

    let total = 0;

    for(let i = 0; i < numbers.length;i++) {
        total = total + numbers[i]
    }

    return total;
}


export default sumOfElements