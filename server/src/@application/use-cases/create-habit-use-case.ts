import dayjs from 'dayjs'
import { Habit } from '../entities/habit'
import { WeekDays } from '../entities/week-days'
import { HabitsRepository } from '../repositories/habit.repositories'

interface CreateHabitRequest {
  title: string
  weekDays: number[]
}

interface CreateHabitResponse {
  habit: Habit
}

export class CreateHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute(request: CreateHabitRequest): Promise<CreateHabitResponse> {
    const { title, weekDays } = request
    const today = dayjs().startOf('day').toDate()
    const habit = new Habit({
      title,
      createdAt: today,
      weekDays: new WeekDays(weekDays),
    })
    await this.habitsRepository.create(habit)

    return {
      habit,
    }
  }
}
