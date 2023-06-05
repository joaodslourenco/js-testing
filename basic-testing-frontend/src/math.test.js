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
