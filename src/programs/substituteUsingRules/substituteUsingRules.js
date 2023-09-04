import { map, split, equals, join } from 'ramda'

export const substituteUsingRules = (terminals) => (rules) => (input) => {
    const letters = split('', input)
    
    
    const changedLetters = map(rules)(letters)

    const resultString = join('',changedLetters)

    return resultString
}