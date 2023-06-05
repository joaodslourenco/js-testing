import { expect, it } from 'vitest'
import { add } from './math'

it('should summarize all numbers in an array', () => {
    const results = add([1, 2, 3])
    expect(results).toBe(6)
})
