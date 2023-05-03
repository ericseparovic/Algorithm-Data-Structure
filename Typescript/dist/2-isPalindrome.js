"use strict";
function isPalindrome(text) {
    let arrayText = text.split("");
    for (let i = 0; i < arrayText.length; i++) {
        let left = i;
        let right = arrayText.length - 1 - i;
        if (arrayText[i] !== arrayText[arrayText.length - 1 - i]) {
            return false;
        }
        return true;
    }
}
const result = isPalindrome("ana");
console.log(result);
