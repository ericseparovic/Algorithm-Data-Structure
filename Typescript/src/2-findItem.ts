// Create a function that receives an array and an element and checks if the element is in the array

const numbers = [1,2,3,4,5]

//Solucion 1 - sequential search
function findElement1(numbers:number[], element:number) {

    let index = -1

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] == element) {
            index = i
            break
        } 
    }

    return index
    
}



// Solution 2 indeOF  `
function findElement2(numbers:number[], element:number) {
    return numbers.indexOf(element)
}

console.log(findElement2(numbers, 3))