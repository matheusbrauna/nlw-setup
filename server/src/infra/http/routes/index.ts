import { FastifyInstance } from 'fastify'
import { CreateHabitUseCase } from '../../../@application/use-cases/create-habit-use-case'
import { GetPossibleDaysUseCase } from '../../../@application/use-cases/get-possible-days-use-case'
import { PrismaHabitsRepositories } from '../../database/prisma/repositories/prisma-habits-repositories'
import { CreateHabitController } from '../controllers/create-habit-controller'
import { GetPossibleDaysController } from '../controllers/get-possible-days-controller'

const habitsRepository = new PrismaHabitsRepositories()
const createHabitUseCase = new CreateHabitUseCase(habitsRepository)
const createHabitController = new CreateHabitController(createHabitUseCase)

const getPossibleDaysUseCase = new GetPossibleDaysUseCase(habitsRepository)
const getPossibleDaysController = new GetPossibleDaysController(
  getPossibleDaysUseCase
)

export async function routes(app: FastifyInstance) {
  app.post('/habits', async (req, res) =>
    createHabitController.handle(req, res)
  )

  app.get('/day', async (req, res) =>
    getPossibleDaysController.handle(req, res)
  )
}
