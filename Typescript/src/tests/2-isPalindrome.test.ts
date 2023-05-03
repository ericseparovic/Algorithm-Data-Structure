import isPalindrome from "../2-isPalindrome"

describe('isPalindrome', () => {
  test('returns true for palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('returns true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('Check if a sentence is a palindrome', () => {
    const sentence1 = 'A man a plan a canal Panama';
    const sentence2 = 'This sentence is not a palindrome';

    expect(isPalindrome(sentence1)).toBe(true);
    expect(isPalindrome(sentence2)).toBe(false);
  });
});
