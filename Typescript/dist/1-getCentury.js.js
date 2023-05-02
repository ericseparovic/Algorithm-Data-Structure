//  Challenge 1 - getCentury
//  Write a Java program that prompts the user for a year, calculates and
//  displays the corresponding century in the console.}
function getCentury(year) {
    var century = year / 100 + 1;
    if (year % 100 == 0) {
        return century - 1;
    }
    return Math.round(century);
}
