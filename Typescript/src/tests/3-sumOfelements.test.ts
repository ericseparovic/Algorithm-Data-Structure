import sumOfElements from "../3-sumOfElements";

describe("sumOfElements", () => {
    test("should return 0", () => {
        const numbers:number[] = []
        const result = sumOfElements(numbers)

        expect(result).toBe(0)
    }) 

    test("should return 10", () => {
        const numbers:number[] = [1,2,4,3]
        const result = sumOfElements(numbers)
        expect(result).toBe(10)
    }) 

})