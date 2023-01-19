import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'
import { Habit } from './habit'
import { HabitWeekDay } from './habit-week-day'

describe('Habit', () => {
  it('Should be able to create habit', () => {
    const today = dayjs().startOf('day').toDate()
    const habit = new Habit({
      title: 'Fake habit title',
      createdAt: today,
      habitWeekDays: new HabitWeekDay([1, 2, 3]),
    })

    expect(habit).toBeTruthy()
  })
})
