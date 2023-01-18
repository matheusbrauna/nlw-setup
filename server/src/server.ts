import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(fastifyCors)

app.get('/habits', async (req, res) => {
  const habits = await prisma.habits.findMany()

  return res.status(200).send(habits)
})

app.listen({ port: 3333 }, () =>
  console.log(`🗲 Server is running at http://localhost:3333`)
)
