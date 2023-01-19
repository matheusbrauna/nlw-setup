import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { GetPossibleDaysUseCase } from '../../../@application/use-cases/get-possible-days-use-case'

export class GetPossibleDaysController {
  constructor(private getPossibleDaysUseCase: GetPossibleDaysUseCase) {}

  async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
    const getPossibleDaysQuery = z.object({
      date: z.coerce.date(),
    })
    const { date } = getPossibleDaysQuery.parse(req.query)
    const { completedHabits, possibleHabits } =
      await this.getPossibleDaysUseCase.execute({
        date,
      })

    return res.status(200).send({
      completedHabits,
      possibleHabits,
    })
  }
}
