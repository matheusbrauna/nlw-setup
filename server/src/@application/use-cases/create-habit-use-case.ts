import dayjs from 'dayjs'
import { Habit } from '../entities/habit'
import { HabitWeekDay } from '../entities/habit-week-day'
import { HabitsRepository } from '../repositories/habit.repositories'

interface CreateHabitRequest {
  title: string
  habitWeekDays: number[]
}

interface CreateHabitResponse {
  habit: Habit
}

export class CreateHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute(request: CreateHabitRequest): Promise<CreateHabitResponse> {
    const { title, habitWeekDays } = request
    const today = dayjs().startOf('day').toDate()
    const habit = new Habit({
      title,
      createdAt: today,
      habitWeekDays: new HabitWeekDay(habitWeekDays),
    })
    await this.habitsRepository.create(habit)

    return {
      habit,
    }
  }
}
