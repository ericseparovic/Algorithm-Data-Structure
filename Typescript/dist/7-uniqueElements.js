"use strict";
const str = "abcdea";
function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
            console.log(j);
        }
    }
    return true;
}
console.log(isUnique(str));
