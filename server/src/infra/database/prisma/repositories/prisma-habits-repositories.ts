import dayjs from 'dayjs'
import {
  CreateHabitDTO,
  GetHabitsResponse,
  HabitsRepository,
} from '../../../../@application/repositories/habit.repositories'
import { prisma } from '../index'
import { PrismaHabitMapper } from '../mappers/prisma-habits-mapper'

export class PrismaHabitsRepositories implements HabitsRepository {
  async create({ title, weekDays }: CreateHabitDTO): Promise<void> {
    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => ({
            week_day: weekDay,
          })),
        },
      },
    })
  }

  async getHabits(date: Date): Promise<GetHabitsResponse> {
    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')
    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    })
    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        dayHabits: true,
      },
    })
    const completedHabits = day?.dayHabits.map((dayHabit) => dayHabit.habit_id)

    return {
      possibleHabits: possibleHabits.map(PrismaHabitMapper.toDomain),
      completedHabits,
    }
  }
}
