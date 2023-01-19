import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { CreateHabitUseCase } from '../../../@application/use-cases/create-habit-use-case'

const createHabitBody = z.object({
  title: z.string(),
  weekDays: z.array(z.number().min(0).max(6)),
})

export class CreateHabitController {
  constructor(private createHabitUseCase: CreateHabitUseCase) {}

  async handle(req: FastifyRequest, res: FastifyReply): Promise<FastifyReply> {
    const { title, weekDays } = createHabitBody.parse(req.body)

    await this.createHabitUseCase.execute({
      title,
      habitWeekDays: weekDays,
    })

    return res.status(201).send()
  }
}
