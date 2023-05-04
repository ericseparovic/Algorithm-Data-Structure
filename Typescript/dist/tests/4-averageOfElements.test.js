"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _4_averageOfElements_ts_1 = __importDefault(require("../4-averageOfElements.ts"));
describe('averageOfElements', () => {
    it('should return the correct average of elements', () => {
        const numbers = [1, 2, 3, 4, 5];
        const expectedAverage = 3;
        const result = (0, _4_averageOfElements_ts_1.default)(numbers);
        expect(result).toBe(expectedAverage);
    });
    it('should return 0 if the array is empty', () => {
        const numbers = [];
        const expectedAverage = 0;
        const result = (0, _4_averageOfElements_ts_1.default)(numbers);
        expect(result).toBe(expectedAverage);
    });
});
