import { GetPossibleDaysUseCase } from '../../@application/use-cases/get-possible-days-use-case'
import { PrismaHabitsRepositories } from '../../infra/database/prisma/repositories/prisma-habits-repositories'
import { GetPossibleDaysController } from '../../infra/http/controllers/get-possible-days-controller'

export const getPossibleDaysFactory = () => {
  const habitsRepository = new PrismaHabitsRepositories()
  const getPossibleDaysUseCase = new GetPossibleDaysUseCase(habitsRepository)
  const getPossibleDaysController = new GetPossibleDaysController(
    getPossibleDaysUseCase
  )

  return getPossibleDaysController
}
