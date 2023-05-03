"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _2_isPalindrome_1 = __importDefault(require("../2-isPalindrome"));
describe('isPalindrome', () => {
    test('returns true for palindrome', () => {
        expect((0, _2_isPalindrome_1.default)('racecar')).toBe(true);
    });
    test('returns false for non-palindrome', () => {
        expect((0, _2_isPalindrome_1.default)('hello')).toBe(false);
    });
    test('returns true for empty string', () => {
        expect((0, _2_isPalindrome_1.default)('')).toBe(true);
    });
});
