import { describe, expect, it } from 'vitest'
import { InMemoryHabitsRepository } from '../../../test/repositories/in-memory-habits-repository'
import { CreateHabitUseCase } from './create-habit-use-case'
import { GetPossibleDaysUseCase } from './get-possible-days-use-case'

describe('GetPossibleDaysUseCase', () => {
  it('Should be able to list all possible days', async () => {
    const habitsRepository = new InMemoryHabitsRepository()
    const createHabitUseCase = new CreateHabitUseCase(habitsRepository)
    const getPossibleDaysUseCase = new GetPossibleDaysUseCase(habitsRepository)

    const { habit } = await createHabitUseCase.execute({
      title: 'Fake habit title',
      weekDays: [0, 1, 2],
    })

    const { completedHabits, possibleHabits } =
      await getPossibleDaysUseCase.execute({
        date: new Date(),
      })

    expect(() => possibleHabits.filter((item) => item.title === habit.title))
    expect(() => completedHabits.filter((id) => id === habit.id))
  })
})
