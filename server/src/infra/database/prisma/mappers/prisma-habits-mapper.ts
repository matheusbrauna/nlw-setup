import { Habit } from '../../../../@application/entities/habit'
import { Habit as RawHabit } from '@prisma/client'

export class PrismaHabitMapper {
  static toPrisma(habit: Habit) {
    return {
      id: habit.id,
      title: habit.title,
      createdAt: habit.createdAt,
    }
  }

  static toDomain(raw: RawHabit): Habit {
    return new Habit(
      {
        title: raw.title,
        createdAt: raw.created_at,
      },
      raw.id
    )
  }
}
