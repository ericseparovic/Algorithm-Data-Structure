const numbers: number[] = [1,2,3,4,5]

function averageOfElements(numbers:number[]): number {
    let average = 0;
    let total = 0;

    if(numbers.length == 0) {
        return average;
    }

    for(let i= 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }

    average = total / numbers.length;
    return average;
}

export default averageOfElements