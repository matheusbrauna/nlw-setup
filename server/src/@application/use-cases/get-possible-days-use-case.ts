import { Habit } from '../entities/habit'
import { HabitsRepository } from '../repositories/habit.repositories'

interface CreateHabitRequest {
  date: Date
}

export interface GetHabitsResponse {
  possibleHabits: Habit[]
  completedHabits: string[]
}

export class GetPossibleDaysUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute({ date }: CreateHabitRequest): Promise<GetHabitsResponse> {
    const { completedHabits, possibleHabits } =
      await this.habitsRepository.getHabits(date)

    return {
      completedHabits,
      possibleHabits,
    }
  }
}
