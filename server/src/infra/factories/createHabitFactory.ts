import { CreateHabitUseCase } from '../../@application/use-cases/create-habit-use-case'
import { PrismaHabitsRepositories } from '../database/prisma/repositories/prisma-habits-repositories'
import { CreateHabitController } from '../http/controllers/create-habit-controller'

export const createHabitFactory = () => {
  const habitsRepository = new PrismaHabitsRepositories()
  const createHabitUseCase = new CreateHabitUseCase(habitsRepository)
  const createHabitController = new CreateHabitController(createHabitUseCase)

  return createHabitController
}
