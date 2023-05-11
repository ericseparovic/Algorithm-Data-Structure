import twoSum from "../8-searchIndexTarget";


describe("twoSum", () => {
    test("should return [1,2]", () => {
        
        const result = twoSum([9,2,5,4]) 
        const expected = [1,2]

        expect(expected).toStrictEqual(result)
        
    })
})