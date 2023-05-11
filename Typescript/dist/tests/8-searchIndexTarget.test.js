"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _8_searchIndexTarget_1 = __importDefault(require("../8-searchIndexTarget"));
describe("twoSum", () => {
    test("should return [1,2]", () => {
        const result = (0, _8_searchIndexTarget_1.default)([9, 2, 5, 4]);
        const expected = [1, 2];
        expect(expected).toStrictEqual(result);
    });
});
