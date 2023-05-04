"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _3_sumOfElements_1 = __importDefault(require("../3-sumOfElements"));
describe("sumOfElements", () => {
    test("should return 0", () => {
        const numbers = [];
        const result = (0, _3_sumOfElements_1.default)(numbers);
        expect(result).toBe(0);
    });
});
