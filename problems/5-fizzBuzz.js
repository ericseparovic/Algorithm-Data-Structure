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

