// Challenge 2 - isPalindrome 
// Write a Java program that takes a word from the user and checks if it is a palindrome. 
// A palindrome is a word that is spelled the same way forwards and backwards. For example, "racecar" is a palindrome. 

function isPalindrome(text: String): boolean {
    // Remove spaces
    let textWhitoutSpaces = text.replace(/\s/g, '');


    // Convert lower case
    let textLowerCase = textWhitoutSpaces.toLowerCase()

    // Convert text in array
    let arrayText = textLowerCase.split("")

    console.log(arrayText)

    for(let i=0;i < arrayText.length; i++) {

        if(arrayText[i] !== arrayText[arrayText.length - 1 - i]) {
            return false;
        }
    
    } 

    return true;
}

export default isPalindrome;
