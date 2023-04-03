// ********************
// ****EJERCICIO 5*****
// ********************
// Create a Javascript function that takes a string parameter and return an object with
// the number of times each vowel appears in the string.
// ********************
// ****SOLUTION 5*****
// ********************
// This JavaScript function, countVowel, takes a string as input and returns an object
// that counts the occurrence of each vowel in the input string.
// First, the input string is converted to lowercase using the
// toLowerCase() method. Then, the string is split into an array of characters using
// the split() method.
// Next, an object vowel is created with keys for each vowel ("a", "e", "i", "o", "u")
// and values initialized to 0. A for loop is used to iterate over each character in the
// string array. Within the loop, a switch statement is used to check if the current character is a vowel. If so, the corresponding vowel count in the vowel object is incremented.
// Finally, the vowel object is returned, which contains the count of each vowel in the
// input string.
// Overall, this function provides a simple and efficient way to count the occurrence
// of each vowel in a given string. However, it assumes that the input string only contains lowercase letters and may not handle special characters or uppercase letters as expected.

function countVowel(inputString) {
  // Convert the string to lowercase
  const stringLowerCase = inputString.toLowerCase();

  // Convert string in a array
  const stringArray = stringLowerCase.split("");

  let vowel = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let i = 0; i < stringArray.length; i++) {
    switch (stringArray[i]) {
      case "a":
        vowel.a++;
        break;
      case "e":
        vowel.e++;
        break;
      case "i":
        vowel.i++;
        break;
      case "o":
        vowel.o++;
        break;
      case "u":
        vowel.u++;
        break;
    }
  }
  return vowel;
}

module.exports = countVowel;
