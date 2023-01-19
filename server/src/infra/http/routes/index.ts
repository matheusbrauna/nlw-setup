import { FastifyInstance } from 'fastify'
import { createHabitFactory } from '../../factories/createHabitFactory'
import { getPossibleDaysFactory } from '../../factories/getPossibleDaysFactory'

export async function routes(app: FastifyInstance) {
  app.post('/habits', async (req, res) => createHabitFactory().handle(req, res))
  app.get('/day', async (req, res) => getPossibleDaysFactory().handle(req, res))
}
