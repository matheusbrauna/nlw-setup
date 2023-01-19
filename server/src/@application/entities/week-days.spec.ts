import { describe, expect, it } from 'vitest'
import { WeekDays } from './week-days'

describe('WeekDays', () => {
  it('Should be able to create a habit week day', () => {
    const weekDay = new WeekDays([5, 1])

    expect(weekDay).toBeTruthy()
  })

  it('Should not be able to create a habit week day with a value lower then 0', () => {
    expect(() => new WeekDays([-1, -2])).toThrow()
  })

  it('Should not be able to create a habit week day with a value greater then 6', () => {
    expect(() => new WeekDays([7, 8])).toThrow()
  })
})
