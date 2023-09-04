import { substituteUsingRules } from './substituteUsingRules.js'



describe("Substitute letters", () => {
  
    it("Substitute using rules A->B, B->c", () => {

        const input = "A"
        const result = "c"

        const nonTerminals = ["A", "B"]
        const terminals = ['c']

        const rules = letter => {          

                if (letter === "A") {
                    return "B"
                } else if (letter === "B") {
                    return "c"
                }       
                else {
                    throw new Error(`Unrecognized symbol ${letter}`)
                }
            
        }

        const recursiveLetterSubstitute = terminals => rules => letter => {
            if (terminals.includes(letter)) {
                return letter
            } else {
                return recursiveLetterSubstitute(terminals)(rules)(rules(letter))
            }
        }

        expect(substituteUsingRules(terminals)(recursiveLetterSubstitute(terminals)(rules))(input)).toStrictEqual(result)
    })
})
