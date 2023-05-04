"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(text) {
    let textWhitoutSpaces = text.replace(/\s/g, '');
    let textLowerCase = textWhitoutSpaces.toLowerCase();
    let arrayText = textLowerCase.split("");
    for (let i = 0; i < arrayText.length; i++) {
        if (arrayText[i] !== arrayText[arrayText.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
exports.default = isPalindrome;
