import { describe, expect, it } from 'vitest'
import { InMemoryHabitsRepository } from '../../../test/repositories/in-memory-habits-repository'
import { CreateHabitUseCase } from './create-habit-use-case'

describe('CreateHabitUseCase', () => {
  it('Should be able to create a habit', async () => {
    const habitsRepository = new InMemoryHabitsRepository()
    const createHabitUseCase = new CreateHabitUseCase(habitsRepository)

    const { habit } = await createHabitUseCase.execute({
      title: 'Fake habit title',
      weekDays: [0, 1, 2],
    })

    expect(habitsRepository.habits).toHaveLength(1)
    expect(habitsRepository.habits[0]).toEqual(habit)
  })
})
