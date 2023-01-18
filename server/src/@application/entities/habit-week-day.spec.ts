import { describe, expect, it } from 'vitest'
import { HabitWeekDay } from './habit-week-day'

describe('HabitWeekDay', () => {
  it('Should be able to create a habit week day', () => {
    const habitWeekDay = new HabitWeekDay([5, 1])

    expect(habitWeekDay).toBeTruthy()
  })

  it('Should not be able to create a habit week day with a value lower then 0', () => {
    expect(() => new HabitWeekDay([-1, -2])).toThrow()
  })

  it('Should not be able to create a habit week day with a value greater then 6', () => {
    expect(() => new HabitWeekDay([7, 8])).toThrow()
  })
})
