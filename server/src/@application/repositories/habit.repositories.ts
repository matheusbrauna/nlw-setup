import { Habit } from '../entities/habit'

export interface GetHabitsResponse {
  possibleHabits: Habit[]
  completedHabits: string[]
}

export interface HabitsRepository {
  create(habit: Habit): Promise<void>
  getHabits(date: Date): Promise<GetHabitsResponse>
}
