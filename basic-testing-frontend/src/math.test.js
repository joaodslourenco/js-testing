import { expect, it } from 'vitest'
import { add } from './math'

it('should summarize all numbers in an array', () => {
    // Arrange
    const numbers = [1, 2, 3]
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0)

    // Act
    const results = add(numbers)

    // Assert
    expect(results).toBe(expectedResult)
})

it('should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['invalids', 1]

    const result = add(inputs)

    expect(result).toBeNaN()
})

it('should yield a correct sum if and array of numeric string values is provided', () => {
    const numbers = ['1', '2']

    const result = add(numbers)
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0)

    expect(result).toBe(expectedResult)
})
