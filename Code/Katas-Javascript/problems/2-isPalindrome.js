// This functtion takes a string as an argument and returns "true" if the string is a palindrome and "false" otherwise
function isPalindrome(inputString) {
  // This first thing the funcion does is remove any whitespace characters from the input string and convert all remaining character to lowercase using the
  //  "remplace()" and "toLowerCase()" methods, respectively.
  const string = inputString.replace(/\s/g, "").toLowerCase();

  // Creates a new string by splitting the input string into an array of individual character using the "split()" method, reversing the order of the
  // characters using the "reverse()" method, and the joining the characters back together into a new string using the "join()"  method.
  // This creates a reversed version of the input string.
  const reverseString = string.split("").reverse().join("");

  // compares the original string to the reversed string using the strict euiality operator ====
  return string === reverseString;
}

module.exports = isPalindrome;
