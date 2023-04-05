// ******************************
// **********OBJETIVE************
// ******************************
// Write a program that prints numbers from 1 to 100. But for multiples of three, 
// it prints "Fizz" instead of the number, and for multiples of five, it prints "Buzz." 
// For numbers that are multiples of three and five, print "FizzBuzz."
//
// ******************************
// **********SOLUTION************
// ******************************
// 1. The funciton start by initializing a for loop that iterates from 1 to 100 using the 
// variable i
// 2. Inside the loop, the function checks if the current value of i is divisible by both 3 
// and 5 using the module %. It if is , the function print FizzBuzz to the console.
// 3. If the vlaue of is not divisible by both 3 and 5, the function checks if it divisible
// only by 3. If it is, the function print Fizz to the console
// 4. If the value of i is not divisible by both 3 and 5 or by only 3, the function checks if 
// it divisible only by 5. If it is, the function prints Buzz to the console
// 5. Finally, the function print the current value of i, whether or not it is divisible by 3 or 5

function fizzBuzz(){
  for(let i = 1;i<=100;i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz") 
    }

    if(i % 3 === 0){
      console.log("Fizz")
    }


    if(i % 5 === 0){
      console.log("Buzz")
    }

    console.log(i)
  }

}

module.exports = fizzBuzz


