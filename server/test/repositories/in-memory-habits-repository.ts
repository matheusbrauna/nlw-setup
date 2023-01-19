import dayjs from 'dayjs'
import { Habit } from '../../src/@application/entities/habit'
import {
  GetHabitsResponse,
  HabitsRepository,
} from '../../src/@application/repositories/habit.repositories'

export class InMemoryHabitsRepository implements HabitsRepository {
  public habits: Habit[] = []

  async create(habit: Habit): Promise<void> {
    this.habits.push(habit)
  }

  async getHabits(date: Date): Promise<GetHabitsResponse> {
    const parsedDate = dayjs(date).startOf('day')
    const week_Day = parsedDate.get('day')
    const possibleHabits = this.habits.filter(
      (habit) =>
        habit.createdAt <= date && habit.habitWeekDays.value.includes(week_Day)
    )
    const completedHabits = this.habits
      .filter((habit) => habit.createdAt === parsedDate.toDate())
      .map((item) => item.id)

    return {
      possibleHabits,
      completedHabits,
    }
  }
}
