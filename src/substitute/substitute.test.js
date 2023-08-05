import { substitute } from './substitute.js'



describe("Substitute letters", () => {
  
    it("Substitute b instead of a", () => {

        const input = "a"
        const result = "b"

        expect(substitute(input)).toStrictEqual(result)
    })

    it("Substitute bb instead of aa", () => {

        const input = "aa"
        const result = "bb"

        expect(substitute(input)).toStrictEqual(result)
    })
})
