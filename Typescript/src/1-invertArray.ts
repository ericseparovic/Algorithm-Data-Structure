// Create a function that given an array returns it inverted

// Solution 1
const array = [1, 2, 3, 4, 5]

function invertArray1(array:number[]) {
   for (let i = 0; i < array.length; i++) {
             
        let left = i
        let right = array.length - i - 1;
        console.log(right, left)

        let temp = array[left]
        array[left]= array[right]
        array[right] = temp


    }

    return array;     
}


// Solucion 2
function invertArray2(array:number[]) {
    return array.reverse()
}


// Solution 3
function invertArray3(array:number[]) {
    let newArray = []
    for (let i = array.length - 1; i >=0; i--) {

        newArray.push(array[i])
        
    }

    return newArray;
}

const result = invertArray1(array)
console.log(result)



