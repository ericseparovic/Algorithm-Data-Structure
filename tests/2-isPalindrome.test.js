const isPalindrome = require('../problems/2-isPalindrome');
const assert = require('assert');

// Define a test suite for the isPalindrome function
describe('esPalindromo', function () {
  // Define a test case for a simple palindrome
  it('should return true for "racecar"', function () {
    assert.strictEqual(isPalindrome('racecar'), true);
  });

  // Define a test case for a palindrome with spaces and mixed capitalization
  it('should return true for "A man a plan a canal Panama"', function () {
    assert.strictEqual(isPalindrome('A man a plan a canal Panama'), true);
  });

  // Define a test case for a non-palindrome
  it('should return false for "hello world"', function () {
    assert.strictEqual(isPalindrome('hello world'), false);
  });

  // Define a test case for an empty string
  it('should return true for an empty string', function () {
    assert.strictEqual(isPalindrome(''), true);
  });
});
