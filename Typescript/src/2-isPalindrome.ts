// Challenge 2 - isPalindrome 
// Write a Java program that takes a word from the user and checks if it is a palindrome. 
// A palindrome is a word that is spelled the same way forwards and backwards. For example, "racecar" is a palindrome. 

function isPalindrome(text: String){
    // Convert text in array
    let arrayText = text.split("")

    for(let i=0;i < arrayText.length; i++) {

        let left:Number = i;
        let right: Number = arrayText.length - 1 - i;

        if(arrayText[i] !== arrayText[arrayText.length - 1 - i]) {
            return false;
        }
        
        return true;

    } 
}

const result = isPalindrome("ana")

console.log(result)