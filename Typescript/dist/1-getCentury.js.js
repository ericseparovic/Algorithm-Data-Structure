"use strict";
function getCentury(year) {
    let century = year / 100 + 1;
    if (year % 100 == 0) {
        return century - 1;
    }
    return Math.round(century);
}
