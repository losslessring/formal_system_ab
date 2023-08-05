import { map, split, equals, join } from 'ramda'

export const substitute = (input) => {
    const letters = split('', input)
    
    const changedLetters = map(letter => {
        if (equals(letter, "a")) {
            return "b"
        }
    })(letters)

    const resultString = join('',changedLetters)

    return resultString
}