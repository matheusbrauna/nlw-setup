import { describe, expect, it } from 'vitest'
import { InMemoryHabitsRepository } from '../../../test/repositories/in-memory-habits-repository'

describe('GetPossibleHabitsUseCase', () => {
  it('Should be able to create a habit', async () => {
    const habitsRepository = new InMemoryHabitsRepository()
    const getPossibleHabitsUseCase = new GetPossibleHabitsUseCase(
      habitsRepository
    )

    const { possibleHabits, habitsCompleted } =
      await getPossibleHabitsUseCase.execute({
        date: '2023-01-02T14:00:00.000z',
      })

    expect(habitsRepository.habits).toHaveLength(1)
    expect(habitsRepository.habits[0]).toEqual(habit)
  })
})
