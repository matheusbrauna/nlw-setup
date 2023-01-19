import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { routes } from './infra/http/routes/index'

const app = fastify()

app.register(fastifyCors)
app.register(routes)

app.listen({ port: 3333 }, () =>
  console.log(`🗲 Server is running at http://localhost:3333`)
)
