import { describe, expect, it } from 'vitest'
import { Habit } from './habit'
import { HabitWeekDay } from './habit-week-day'

describe('Habit', () => {
  it('Should be able to create content', () => {
    const habit = new Habit({
      title: 'Fake habit title',
      habitWeekDays: new HabitWeekDay([1]),
    })

    expect(habit).toBeTruthy()
  })
})
