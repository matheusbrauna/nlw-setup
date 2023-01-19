import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'
import { Habit } from './habit'
import { WeekDays } from './week-days'

describe('Habit', () => {
  it('Should be able to create habit', () => {
    const today = dayjs().startOf('day').toDate()
    const habit = new Habit({
      title: 'Fake habit title',
      createdAt: today,
      weekDays: new WeekDays([1, 2, 3]),
    })

    expect(habit).toBeTruthy()
  })
})
