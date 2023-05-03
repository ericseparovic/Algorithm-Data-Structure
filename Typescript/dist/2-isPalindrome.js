"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(text) {
    let arrayText = text.split("");
    for (let i = 0; i < arrayText.length; i++) {
        if (arrayText[i] !== arrayText[arrayText.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
exports.default = isPalindrome;
