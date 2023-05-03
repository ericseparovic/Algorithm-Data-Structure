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
});
